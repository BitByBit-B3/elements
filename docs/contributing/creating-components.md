# Creating Components

This guide will walk you through the process of creating new components in the Elements UI library.

## Component Structure

Each component in the Elements UI library follows a consistent structure:

```
packages/react/src/components/component-name/
├── component-name.tsx          # Main component implementation
├── component-name.stories.tsx  # Storybook stories for documentation
└── component-name.test.tsx     # Unit tests (optional but recommended)
```

## Step-by-Step Guide

### 1. Create Component Directory

```bash
mkdir packages/react/src/components/your-component
```

### 2. Create Component File

Create the main component file with the following structure:

```tsx
// packages/react/src/components/your-component/your-component.tsx
import { forwardRef } from "react";
import React from "react";

export interface YourComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  // Define your component props here
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  (
    {
      className = "",
      variant = "default",
      size = "md",
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          // Base styles
          inline-flex items-center justify-center
          
          // Variant styles
          ${variant === "default" ? "bg-gray-100 text-gray-900" : ""}
          ${variant === "primary" ? "bg-blue-600 text-white" : ""}
          ${variant === "secondary" ? "bg-gray-200 text-gray-800" : ""}
          
          // Size styles
          ${size === "sm" ? "text-sm px-2 py-1" : ""}
          ${size === "md" ? "text-base px-4 py-2" : ""}
          ${size === "lg" ? "text-lg px-6 py-3" : ""}
          
          // Disabled state
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          
          // User-provided classes
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

YourComponent.displayName = "YourComponent";

export { YourComponent };
```

### 3. Create Storybook Stories

Create the stories file for documentation and testing:

```tsx
// packages/react/src/components/your-component/your-component.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./your-component";

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <YourComponent variant="default">Default</YourComponent>
      <YourComponent variant="primary">Primary</YourComponent>
      <YourComponent variant="secondary">Secondary</YourComponent>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <YourComponent size="sm">Small</YourComponent>
      <YourComponent size="md">Medium</YourComponent>
      <YourComponent size="lg">Large</YourComponent>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Playground: Story = {
  args: {
    children: "Your Component",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <YourComponent>Default</YourComponent>
      <YourComponent className="hover:bg-blue-700">Hover Me</YourComponent>
      <YourComponent className="focus:ring-4 focus:ring-blue-300">
        Focus Me
      </YourComponent>
      <YourComponent disabled>Disabled</YourComponent>
    </div>
  ),
};
```

### 4. Update Component Exports

Add your component to the main React package exports:

```tsx
// packages/react/src/index.ts
export { YourComponent } from "./components/your-component/your-component";
```

## Component Guidelines

### TypeScript Requirements

- Use TypeScript interfaces for component props
- Extend appropriate HTML element props when needed
- Use `forwardRef` for components that need to be referenced
- Provide proper type definitions for all props

### Styling Requirements

- Use only Tailwind CSS classes (no custom CSS)
- Follow the existing design tokens from `packages/core`
- Implement proper hover, focus, and disabled states
- Use semantic color classes that align with the design system

### Accessibility Requirements

- Ensure keyboard navigation works
- Provide appropriate ARIA attributes when needed
- Use proper focus management
- Ensure color contrast meets WCAG guidelines

### Testing Requirements

- Write unit tests for component behavior
- Test different variants and states
- Test accessibility features
- Test responsive behavior

## Best Practices

### 1. Keep Components Focused

Each component should have a single, clear responsibility. Avoid creating overly complex components that try to do too much.

### 2. Use Forward Refs

Always use `forwardRef` for components that might need to be referenced by parent components.

### 3. Prop Design

- Use clear, descriptive prop names
- Provide sensible defaults
- Use union types for discrete options
- Include proper TypeScript types

### 4. Styling

- Use utility classes from the design system
- Avoid hardcoded values
- Use responsive classes when appropriate
- Ensure consistent spacing and sizing

### 5. Documentation

- Write clear Storybook stories
- Include examples of common use cases
- Document all props and their types
- Show different variants and states

## Example: Complete Button Component

For a complete example, see the existing Button component at [`packages/react/src/components/button/button.tsx`](../../packages/react/src/components/button/button.tsx:1).

## Next Steps

Once you've created your component:

1. Test it thoroughly in the Storybook environment
2. Add it to the playground if needed
3. Update the main component index file
4. Consider writing additional documentation
5. Submit a pull request for review

## Troubleshooting

### Common Issues

**Build Errors**: Make sure all imports are correct and the component is properly exported.

**TypeScript Errors**: Ensure all props are properly typed and you're using the correct React types.

**Styling Issues**: Verify you're using Tailwind classes correctly and following the design system.

**Storybook Not Showing**: Check that your stories file is properly configured and the component is exported correctly.

### Getting Help

If you encounter issues:

1. Check existing components for patterns
2. Review the contributing guidelines
3. Ask for help in team channels
4. Create an issue with detailed information
