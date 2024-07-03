import { dirname } from 'node:path'; // 需要类型 @types/node
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import pluginReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import configPrettier from 'eslint-config-prettier';

// TODO: __dirname 不能有 file:// 。需要好好研究一下。
const __dirname = dirname(import.meta.url).replace('file://', '');

const commonRules = {
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': { descriptionFormat: '^: ts\\(\\d+\\) because .+$' },
      'ts-ignore': { descriptionFormat: '^: ts\\(\\d+\\) because .+$' },
      'ts-nocheck': { descriptionFormat: '^: ts\\(\\d+\\) because .+$' },
      'ts-check': true,
      minimumDescriptionLength: 10,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};

export default tseslint.config(
  {
    /** browser */
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['src/**/__tests__/**/*.ts', 'src/**/__tests__/**/*.tsx'],
    settings: {
      // only for eslint-plugin-react
      react: {
        version: 'detect',
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      pluginReactRecommended,
      pluginReactJsxRuntime,
      configPrettier,
    ],
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...pluginReactHooks.configs.recommended.rules,
      ...commonRules,
    },
  },
  {
    /**
     * node environment
     * Can be applied to js files and ts files.
     * In order to ensure that the file can be configured appropriately, you need to set both eslint configuration and ts configuration.
     */
    files: [
      'rollup.config.ts',
      'vite.config.ts',
      'eslint.config.mjs',
      'commitlint.config.ts',
      'src/**/__tests__/**/*.ts',
      'src/**/__tests__/**/*.tsx',
    ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      configPrettier,
    ],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...commonRules,
    },
  },
);
