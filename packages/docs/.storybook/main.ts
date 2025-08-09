import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Add Tailwind CSS support
    config.css = config.css || {};
    if (typeof config.css === 'object') {
      config.css.postcss = config.css.postcss || {};
      if (typeof config.css.postcss === 'object') {
        config.css.postcss.plugins = config.css.postcss.plugins || [];
        config.css.postcss.plugins.push(require('tailwindcss'));
        config.css.postcss.plugins.push(require('autoprefixer'));
      }
    }

    // Add path alias for workspace packages
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@bitbybit-b3/elements-core': '../../packages/core/src',
      '@bitbybit-b3/elements-react': '../../packages/react/src',
    };

    return config;
  },
};

export default config;