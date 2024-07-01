import type { Plugin, RollupOptions } from 'rollup';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
// @ts-ignore: ts(7016) because not found @types/rollup-plugin-exclude-dependencies-from-bundle
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';

/** harmony data import */
const handleScssImport: () => Plugin = () => {
  return {
    name: 'handle-scss-import',
    resolveId(source) {
      if (source.endsWith('/style.scss')) {
        return { id: source, external: true, moduleSideEffects: true };
      }
      return null;
    },
    load(id) {
      if (id.endsWith('/style.scss')) {
        return 'export default "this is sass file";';
      }
      return null;
    },
  };
};

const config: RollupOptions = {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'es',
    compact: true,
    preserveModules: true,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      compilerOptions: {},
      include: ['src/**/*'],
      exclude: ['src/**/__tests__/*', 'src/**/__stories__/*'],
      tsconfig: './tsconfig.json',
    }),
    handleScssImport(),

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    excludeDependenciesFromBundle(),

    /** copy src-*.scss file to dist */
    copy({
      targets: [{ src: 'src/**/*.scss', dest: 'dist' }],
      flatten: false, // 保持复制文件的目录结构。
      hook: 'writeBundle',
    }),
  ],
  strictDeprecations: true,
};

export default config;
