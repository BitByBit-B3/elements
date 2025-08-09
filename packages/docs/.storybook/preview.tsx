import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {},
      options: {
        checkers: [
          // 'adherence-wcag',
          'axe-core',
          // 'html-has-lang',
          // 'html-lang-valid',
          // 'landmark-one-main',
          // 'page-has-heading-one',
          // 'tabindex-no-positive',
        ],
      },
    },
  },
  globalTypes: {
    darkMode: {
      description: 'Dark mode',
      defaultValue: false,
      toolbar: {
        // The icon for the item
        icon: 'moon',
        // Include a tooltip
        title: 'Dark Mode',
        // `true` to show a label that matches the item `title`
        showName: true,
        // Change background color of the toolbar item
        dynamicTitle: true,
      },
    },
  },
  args: {
    darkMode: false,
  },
  decorators: [
    (Story, context) => {
      const { darkMode } = context.globals;
      return (
        <div className={`${darkMode ? 'dark' : ''}`}>
          <div className="min-h-screen bg-background text-foreground">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;