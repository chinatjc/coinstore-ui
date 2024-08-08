import type { Plugin, RollupOptions } from 'rollup';

import fsPromise from 'node:fs/promises';
import path from 'node:path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import yaml from 'js-yaml';
import { glob } from 'glob';
import { rimraf } from 'rimraf';

const readYamlFile = async <T = unknown>(path: string) => yaml.load(await fsPromise.readFile(path, 'utf-8')) as T;

const getPackageNameMap = async () => {
  const pnpmWorkspaceData = await readYamlFile<{ packages: string[] }>('./pnpm-workspace.yaml');
  const pathList = await glob(pnpmWorkspaceData.packages);
  const resultList = await Promise.allSettled(pathList.map((path) => fsPromise.stat(path)));
  return resultList.reduce((packageNameMap, result, index) => {
    let packageName: string | undefined;
    if (
      result.status === 'fulfilled' &&
      result.value.isDirectory() &&
      (packageName = pathList[index].split('/').at(-1))
    ) {
      packageNameMap.set(packageName, { name: packageName, path: pathList[index] });
    }
    return packageNameMap;
  }, new Map<string, { name: string; path: string }>());
};

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.');
}

const packageNameMap = await getPackageNameMap();

/** harmony data import */
const handleScssImport: () => Plugin = () => {
  return {
    name: 'handle-scss-import',
    resolveId(source) {
      if (source.endsWith('.scss')) {
        return { id: source, external: true, moduleSideEffects: true };
      }
      return null;
    },
    load(id) {
      if (id.endsWith('.scss')) {
        return 'export default "this is sass file";';
      }
      return null;
    },
  };
};

const excludeDependenciesFromBundle: (options: { packageJsonDir: string }) => Plugin = ({ packageJsonDir }) => {
  return {
    name: 'exclude-dependencies-from-bundle',
    options: async (options) => {
      const { external = [] } = options;

      if (!Array.isArray(external)) {
        throw new Error('[exclude-dependencies-from-bundle] rollupConfig.external must be array! ');
      }

      const { default: packageJson } = (await import(path.join(packageJsonDir || process.cwd(), './package.json'), {
        assert: {
          type: 'json',
        },
      })) as {
        default: {
          peerDependencies?: Record<string, string>;
          dependencies?: Record<string, string>;
        };
      };

      const dependencies = [
        ...new Set([
          ...Object.keys(packageJson.peerDependencies ?? {}),
          ...Object.keys(packageJson.dependencies ?? {}),
        ]),
      ]
        .filter((dependency) => dependency)
        .map((dependency) => new RegExp(`^${dependency}(\\/.+)*$`));

      return {
        ...options,
        external: [...external, ...dependencies],
      };
    },
  };
};

const createConfig = async (packagePath: string): Promise<RollupOptions> => {
  const resolveToAbsolutePath = (p = '') => {
    const __dirname = path.dirname(import.meta.url).replace('file://', '');
    return path.resolve(`${__dirname}/${packagePath}`, p);
  };
  const distPath = resolveToAbsolutePath('dist');

  await rimraf(distPath);

  return {
    input: resolveToAbsolutePath('src/index.tsx'),
    output: {
      dir: distPath,
      format: 'es',
      compact: true,
      preserveModules: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        compilerOptions: {
          outDir: distPath,
        },
        include: [resolveToAbsolutePath('src/**/*')],
        exclude: [resolveToAbsolutePath('src/**/__tests__/*'), resolveToAbsolutePath('src/**/__stories__/*')],
        tsconfig: './tsconfig.json',
      }),
      handleScssImport(),

      excludeDependenciesFromBundle({ packageJsonDir: resolveToAbsolutePath() }),

      /** copy src-*.scss file to dist */
      copy({
        targets: [
          {
            src: `${resolveToAbsolutePath('src')}/**/*.scss`,
            dest: distPath,
            rename: (_name, _extension, fullPath) => fullPath.replace(resolveToAbsolutePath('src'), ''),
          },
        ],
        flatten: true,
        hook: 'writeBundle',
      }),
    ],
    strictDeprecations: true,
  };
};

const configs = await Promise.all([...packageNameMap.values()].map(({ path }) => createConfig(path)));

export default configs;
