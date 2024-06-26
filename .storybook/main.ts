import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-onboarding', '@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    // defaultName: 'Documentation111', // 自动生成文档 在 sidebar 的名称。
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
