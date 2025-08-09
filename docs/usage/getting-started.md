# Getting Started

Welcome to the Elements UI library! This guide will help you get started with using our Tailwind-only React component library in your projects.

## Prerequisites

Before you begin, make sure you have:

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Version 8.0.0 or higher (recommended)
- **React**: Version 18.0.0 or higher

## Installation

### Install the Library

```bash
# Install the core package for design tokens
npm install @bitbybit-b3/elements-core

# Install the React components package
npm install @bitbybit-b3/elements-react

# Or using pnpm
pnpm add @bitbybit-b3/elements-core @bitbybit-b3/elements-react
```

### Add to Your Project

#### 1. Import the CSS

Import the base CSS in your main application file:

```tsx
// src/index.tsx or src/main.tsx
import "@bitbybit-b3/elements-core/dist/index.css";
import "tailwindcss/tailwind.css";

// Your other imports and app code
```

#### 2. Configure Tailwind CSS

Make sure your `tailwind.config.js` includes the Elements UI design tokens:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    // ... your content
    "./node_modules/@bitbybit-b3/elements-core/dist/**/*.{js,ts}",
    "./node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,ts}",
  ],
  // ... your config
};
```

## Basic Setup

### 1. Import Components

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Button>Click me</Button>
    </div>
  );
}
```

### 2. Set Up Theme Provider (Optional)

For theme switching capabilities, set up a theme provider:

```tsx
import { ThemeProvider, setTheme } from "@bitbybit-b3/elements-core";
import { Button } from "@bitbybit-b3/elements-react";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Button onClick={() => setTheme("dark")}>Toggle Theme</Button>
      </div>
    </ThemeProvider>
  );
}
```

## Your First Component

Let's create a simple example using the Button component:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
```

## Available Components

### Core Components

- **Button**: Interactive button with multiple variants and states
- **Input**: Form input field with validation support
- **Card**: Content container with header, body, and footer
- **Badge**: Small status or label component

### Additional Components

The library is continuously growing. Check the [Component API Reference](./component-api.md) for the complete list of available components.

## Component Variants

Most components support multiple variants:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function ButtonVariants() {
  return (
    <div className="space-y-2">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
```

## Component Sizes

Components come in different sizes:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function ButtonSizes() {
  return (
    <div className="space-y-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
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
  );
}
```

## States

Components support various states:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function ButtonStates() {
  return (
    <div className="space-y-2">
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  );
}
```

## Styling Customization

### Using Tailwind Classes

You can customize component styling using Tailwind CSS classes:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function CustomStyledButton() {
  return (
    <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Custom Styled Button
    </Button>
  );
}
```

### Using Design Tokens

The library uses design tokens that you can customize:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function ThemedButton() {
  return (
    <Button className="bg-primary-600 hover:bg-primary-700">
      Themed Button
    </Button>
  );
}
```

## Accessibility

All components are built with accessibility in mind:

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function AccessibleButton() {
  return (
    <Button
      aria-label="Close dialog"
      aria-expanded={isOpen}
      aria-controls="dialog-content"
    >
      Close
    </Button>
  );
}
```

## TypeScript Support

The library is built with TypeScript and provides full type definitions:

```tsx
import { Button, ButtonProps } from "@bitbybit-b3/elements-react";

function CustomButton(props: ButtonProps) {
  return <Button {...props} />;
}
```

## Development Environment

### Running the Playground

To test components in a development environment:

```bash
# Clone the repository
git clone https://github.com/bitbybit-b3/elements.git
cd elements

# Install dependencies
pnpm install

# Start the playground
pnpm dev
```

### Running Storybook

To view component documentation and examples:

```bash
# Start Storybook
pnpm storybook
```

Storybook will be available at `http://localhost:6006`.

## Troubleshooting

### Common Issues

#### 1. CSS Not Loading

If components don't appear styled, make sure you've imported the CSS:

```tsx
import "@bitbybit-b3/elements-core/dist/index.css";
```

#### 2. TypeScript Errors

If you encounter TypeScript errors, ensure you have the latest versions:

```bash
npm install @bitbybit-b3/elements-core@latest @bitbybit-b3/elements-react@latest
```

#### 3. Tailwind CSS Not Working

Make sure your Tailwind CSS configuration includes the library's content:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    // ... your other content
    "./node_modules/@bitbybit-b3/elements-core/dist/**/*.{js,ts}",
    "./node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,ts}",
  ],
  // ... your config
};
```

### Getting Help

If you need help:

1. **Check the documentation**: See the [Component API Reference](./component-api.md)
2. **View examples**: Check the [Usage Examples](./examples.md)
3. **Browse Storybook**: Interactive documentation at `http://localhost:6006`
4. **Create an issue**: Report bugs or request features on GitHub

## Next Steps

Now that you have the basics down, explore:

- [Component API Reference](./component-api.md) - Detailed component documentation
- [Theming Guide](./theming.md) - Customizing colors and styles
- [Usage Examples](./examples.md) - Common use cases and patterns
- [Architecture Overview](../architecture/overview.md) - Understanding the project structure

## Quick Reference

### Import Components

```tsx
import { Button, Input, Card } from "@bitbybit-b3/elements-react";
```

### Basic Usage

```tsx
<Button variant="primary" size="lg">
  Click me
</Button>
```

### Styling

```tsx
<Button className="bg-blue-600 hover:bg-blue-700">Custom Button</Button>
```

### TypeScript

```tsx
interface MyComponentProps {
  title: string;
  disabled?: boolean;
}
```

Happy building! 🎉
