import type { RollupOptions } from 'rollup';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript';
// @ts-ignore: ts(7016) because not found @types/rollup-plugin-exclude-dependencies-from-bundle
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';

const config: RollupOptions = {
  input: 'src/index.tsx',
  output: [
    {
      // file: 'dist/index.es.js',
      dir: 'dist',
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    // json(),
    typescript({
      compilerOptions: {},
      include: ['src/**/*'],
      exclude: [
        'src/**/__tests__/*',
        'src/**/__stories__/*',
      ],
      tsconfig: './tsconfig.json',
    }),
    // sass({ output: 'dist/index.css' })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    excludeDependenciesFromBundle(),
  ],
};

export default config;
