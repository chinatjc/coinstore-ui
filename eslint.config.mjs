import { dirname } from 'node:path'; // 需要类型 @types/node
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// @ts-ignore
import pluginReactRecommended from 'eslint-plugin-react/configs/recommended.js';
// @ts-ignore
import pluginReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
// @ts-ignore
import pluginReactHooks from 'eslint-plugin-react-hooks';
import configPrettier from 'eslint-config-prettier'

// TODO: __dirname 不能有 file:// 。需要好好研究一下。
const __dirname = dirname(import.meta.url).replace('file://', '');

export default tseslint.config(
  {
    /** browser */
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      pluginReactRecommended,
      pluginReactJsxRuntime,
      configPrettier
    ],
    plugins: {
      'react-hooks': pluginReactHooks
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules
    }
  },
  {
    /**
     * node environment
     * Can be applied to js files and ts files.
     * In order to ensure that the file can be configured appropriately, you need to set both eslint configuration and ts configuration.
     */
    files: [["vite.config.ts", "eslint.config.mjs", "test"]],
    ignores: ['src'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      configPrettier
    ],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.node.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
);
