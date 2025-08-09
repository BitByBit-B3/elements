# Storybook Development

This guide provides comprehensive information about using Storybook for component development and documentation in the Elements UI library.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Creating Stories](#creating-stories)
- [Story Structure](#story-structure)
- [Development Workflow](#development-workflow)
- [Addons](#addons)
- [Testing](#testing)
- [Deployment](#deployment)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

Storybook is an open-source tool for developing UI components in isolation. It's used in the Elements UI library for:

- **Component Development**: Build components in isolation
- **Documentation**: Generate component documentation
- **Testing**: Test component functionality and accessibility
- **Collaboration**: Share component examples with the team

### Key Features

- **Interactive Development**: Develop components with live editing
- **Automatic Documentation**: Generate API documentation from code
- **Testing Tools**: Built-in testing and accessibility checking
- **Addons**: Extensible with various plugins and tools
- **Deployment**: Easy deployment of documentation sites

## Installation

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher
- Storybook 7.0.0 or higher

### Setup

```bash
# Install Storybook in the docs package
cd packages/docs
pnpm add -DD @storybook/react @storybook/react-vite @storybook/addon-essentials @storybook/addon-a11y

# Initialize Storybook (if not already done)
npx storybook@latest init
```

### Verification

```bash
# Start Storybook development server
cd packages/docs
pnpm storybook

# This should start Storybook at http://localhost:6006
```

## Configuration

### Storybook Configuration File

```typescript
// packages/docs/.storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-viewport",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Add Tailwind CSS support
    config.css = config.css || {};
    if (typeof config.css === "object") {
      config.css.postcss = config.css.postcss || {};
      if (typeof config.css.postcss === "object") {
        config.css.postcss.plugins = config.css.postcss.plugins || [];
        config.css.postcss.plugins.push(require("tailwindcss"));
        config.css.postcss.plugins.push(require("autoprefixer"));
      }
    }

    // Add path alias for workspace packages
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@bitbybit-b3/elements-core": "../../packages/core/src",
      "@bitbybit-b3/elements-react": "../../packages/react/src",
    };

    return config;
  },
};

export default config;
```

### Preview Configuration

```typescript
// packages/docs/.storybook/preview.tsx
import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
          "axe-core",
          // 'adherence-wcag',
          // 'html-has-lang',
          // 'html-lang-valid',
          // 'landmark-one-main',
          // 'page-has-heading-one',
          // 'tabindex-no-positive',
        ],
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#0f172a",
        },
      ],
    },
    viewport: {
      viewports: {
        responsive: {
          name: "Responsive",
          styles: {
            width: "100%",
            height: "100%",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
      },
    },
    options: {
      storySort: {
        order: [
          "Getting Started",
          "Components",
          "Forms",
          "Feedback",
          "Navigation",
          "Layout",
        ],
      },
    },
  },
  globalTypes: {
    darkMode: {
      description: "Dark mode",
      defaultValue: false,
      toolbar: {
        icon: "moon",
        title: "Dark Mode",
        showName: true,
        dynamicTitle: true,
      },
    },
    locale: {
      description: "Locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        title: "Locale",
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "es", right: "🇪🇸", title: "Spanish" },
          { value: "fr", right: "🇫🇷", title: "French" },
        ],
        dynamicTitle: true,
      },
    },
  },
  args: {
    darkMode: false,
    locale: "en",
  },
  decorators: [
    (Story, context) => {
      const { darkMode, locale } = context.globals;
      return (
        <div className={`${darkMode ? "dark" : ""}`}>
          <div className="min-h-screen bg-background text-foreground">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
```

### TypeScript Configuration

```json
// packages/docs/.storybook/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@bitbybit-b3/elements-core": ["../../packages/core/src"],
      "@bitbybit-b3/elements-react": ["../../packages/react/src"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".storybook/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Creating Stories

### Basic Story Structure

```typescript
// packages/react/src/components/button/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button>Enabled</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: "Default Button",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button>Default Button</Button>
      <Button className="hover:bg-blue-800">Hover Me</Button>
      <Button className="focus:ring-4 focus:ring-blue-300">Focus Me</Button>
      <Button disabled>Disabled Button</Button>
      <Button loading>Loading Button</Button>
    </div>
  ),
};
```

### Advanced Story Features

#### Template Stories

```typescript
// packages/react/src/components/input/input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template for consistent layout
const InputTemplate = (args: any) => (
  <div className="space-y-4">
    <Input {...args} />
    {args.error && (
      <p className="text-sm text-red-600">This field is required</p>
    )}
  </div>
);

export const Default: Story = {
  args: {
    placeholder: "Enter your text...",
  },
  render: (args) => <InputTemplate {...args} />,
};

export const Types: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input placeholder="Default state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Error state" error />
      <Input placeholder="Focused state" autoFocus />
    </div>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium">
        Email Address
      </label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};
```

#### Interactive Stories

```typescript
// packages/react/src/components/modal/modal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button/button";
import { Modal } from "./modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: "Modal Title",
    children: (
      <div className="space-y-4">
        <p>This is the modal content. You can put any content here.</p>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Interactive Modal"
        >
          <div className="space-y-4">
            <p>This modal is controlled by React state.</p>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};
```

## Story Structure

### Organizing Stories

```
packages/react/src/components/
├── button/
│   ├── button.tsx
│   ├── button.stories.tsx
│   └── button.test.tsx
├── input/
│   ├── input.tsx
│   ├── input.stories.tsx
│   └── input.test.tsx
└── card/
    ├── card.tsx
    ├── card.stories.tsx
    └── card.test.tsx
```

### Story Naming Conventions

```typescript
// Use consistent naming for stories
export const Default: Story = {
  /* ... */
};
export const Primary: Story = {
  /* ... */
};
export const Secondary: Story = {
  /* ... */
};
export const Large: Story = {
  /* ... */
};
export const Small: Story = {
  /* ... */
};
export const Disabled: Story = {
  /* ... */
};
export const Loading: Story = {
  /* ... */
};
export const WithIcon: Story = {
  /* ... */
};
export const Interactive: Story = {
  /* ... */
};
export const Playground: Story = {
  /* ... */
};
```

### Story Groups

```typescript
// Organize stories into groups
export default {
  title: "Components/Button",
  component: Button,
  subcomponents: {
    Group: ButtonGroup,
  },
};

export const Default: Story = {
  /* ... */
};
export const Variants: Story = {
  /* ... */
};
export const Sizes: Story = {
  /* ... */
};
export const States: Story = {
  /* ... */
};
export const Group: Story = {
  render: (args) => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};
```

## Development Workflow

### Starting Storybook

```bash
# Start Storybook development server
cd packages/docs
pnpm storybook

# Storybook will be available at http://localhost:6006
```

### Adding New Components

1. **Create Component**: Add the component to `packages/react/src/components/`
2. **Create Stories**: Add a `.stories.tsx` file alongside the component
3. **Import Component**: Add the component to `packages/react/src/index.ts`
4. **Verify**: Check that the component appears in Storybook

### Updating Components

1. **Edit Component**: Make changes to the component file
2. **Update Stories**: Update stories as needed
3. **Test**: Test changes in Storybook
4. **Document**: Update documentation if needed

### Working with Addons

```typescript
// Enable additional addons in .storybook/main.ts
const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-toolbars",
    "@storybook/addon-knobs",
    "@storybook/addon-storysource",
  ],
};
```

## Addons

### Essential Addons

#### Controls Addon

```typescript
// Configure controls in .storybook/preview.tsx
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
```

#### Actions Addon

```typescript
// Configure actions in .storybook/preview.tsx
const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
  },
};
```

#### Accessibility Addon

```typescript
// Configure accessibility in .storybook/preview.tsx
const preview: Preview = {
  parameters: {
    a11y: {
      config: {},
      options: {
        checkers: ["axe-core"],
      },
    },
  },
};
```

### Advanced Addons

#### Storybook Docs

```typescript
// Configure docs in .storybook/main.ts
const config: StorybookConfig = {
  docs: {
    autodocs: "tag",
  },
};
```

#### Viewport Addon

```typescript
// Configure viewport in .storybook/preview.tsx
const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        responsive: {
          name: "Responsive",
          styles: {
            width: "100%",
            height: "100%",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
      },
    },
  },
};
```

## Testing

### Component Testing

```typescript
// packages/react/src/components/button/button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
```

### Accessibility Testing

```typescript
// packages/react/src/components/button/button.a11y.test.tsx
import { render, axe } from "@testing-library/react";
import { Button } from "./button";

describe("Button Accessibility", () => {
  it("should be accessible", async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have proper ARIA attributes when disabled", () => {
    const { container } = render(<Button disabled>Click me</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });
});
```

### Visual Testing

```typescript
// packages/react/src/components/button/button.visual.test.tsx
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Button Visual Testing", () => {
  it("renders with correct styles", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders with variant styles", () => {
    const { container } = render(<Button variant="primary">Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});
```

## Deployment

### Building Storybook

```bash
# Build Storybook for production
cd packages/docs
pnpm build-storybook

# This creates a static site in storybook-static/
```

### Deploying to GitHub Pages

```bash
# Add to package.json
{
  "scripts": {
    "deploy-storybook": "storybook-to-ghpages"
  }
}

# Install deployment tool
pnpm add -D storybook-to-ghpages

# Deploy
pnpm deploy-storybook
```

### Deploying to Netlify

```yaml
# netlify.toml
[build]
  command = "cd packages/docs && pnpm build-storybook"
  publish = "packages/docs/storybook-static"

[build.environment]
  NODE_VERSION = "18"
```

### Deploying to Vercel

```json
// vercel.json
{
  "builds": [
    {
      "src": "packages/docs/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "storybook-static"
      }
    }
  ],
  "scripts": {
    "build-storybook": "cd packages/docs && pnpm build-storybook"
  }
}
```

## Best Practices

### Story Organization

1. **Group Related Stories**: Organize stories by component and feature
2. **Use Consistent Naming**: Follow naming conventions for stories
3. **Include Examples**: Provide multiple examples of component usage
4. **Document Props**: Document all component props and their types

### Story Writing

1. **Be Descriptive**: Use clear, descriptive story names
2. **Show Variants**: Display all component variants
3. **Include Edge Cases**: Show disabled, loading, and error states
4. **Provide Context**: Include labels and context when needed

### Performance

1. **Optimize Stories**: Keep stories lightweight and focused
2. **Use Lazy Loading**: Load stories asynchronously when needed
3. **Minimize Dependencies**: Avoid unnecessary imports in stories
4. **Cache Builds**: Use build caching for faster deployments

### Accessibility

1. **Test Accessibility**: Use the accessibility addon regularly
2. **Follow Guidelines**: Ensure all stories meet accessibility standards
3. **Provide Alternatives**: Include ARIA labels and descriptions
4. **Test with Tools**: Use screen readers and accessibility tools

## Troubleshooting

### Common Issues

#### Stories Not Showing

```bash
# Check story configuration
# Verify .storybook/main.ts stories path
# Ensure stories are properly exported

# Clear Storybook cache
rm -rf .storybook-out
rm -rf node_modules/.cache/storybook
```

#### TypeScript Errors

```bash
# Check TypeScript configuration
# Verify .storybook/tsconfig.json
# Ensure path aliases are correct

# Clear TypeScript cache
rm -rf node_modules/.cache/typescript
```

#### Build Failures

```bash
# Check build configuration
# Verify dependencies are installed
# Check for conflicting versions

# Rebuild Storybook
rm -rf storybook-static
pnpm build-storybook
```

#### Performance Issues

```bash
# Optimize Storybook configuration
# Reduce the number of stories loaded
# Use lazy loading for heavy components

# Check for memory issues
# Increase Node.js memory limit
# Use --max-old-space-size flag
```

### Debugging

#### Enable Debug Mode

```bash
# Start Storybook with debug mode
STORYBOOK_DEBUG=true pnpm storybook
```

#### Check Configuration

```bash
# Validate Storybook configuration
npx storybook check
```

#### Inspect Stories

```typescript
// Add debug logging to stories
export const Debug: Story = {
  render: (args) => {
    console.log("Story args:", args);
    return <Button {...args}>Debug</Button>;
  },
};
```

### Environment Issues

#### Node.js Version

```bash
# Check Node.js version
node --version

# Use correct Node.js version
nvm use 18
```

#### pnpm Version

```bash
# Check pnpm version
pnpm --version

# Update pnpm
npm install -g pnpm
```

#### Dependencies

```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Update dependencies
pnpm update
```

## Conclusion

Storybook is an essential tool for component development in the Elements UI library. It provides:

- **Isolated Development**: Build components in isolation
- **Live Documentation**: Generate documentation automatically
- **Testing Tools**: Built-in testing and accessibility checking
- **Collaboration**: Share component examples with the team
- **Performance**: Optimized for fast development and deployment

By following the guidelines in this document, you can effectively use Storybook to develop, document, and test components in the Elements UI library.

---

**Next Steps**:

- [Build Process](./build.md) - Build configuration and optimization
- [Development Setup](./setup.md) - Local development environment setup
- [Architecture Overview](../architecture/overview.md) - High-level architecture documentation
- [Component Guidelines](../contributing/component-guidelines.md) - Component development guidelines
