# Component Guidelines

This document outlines the best practices and conventions for creating and maintaining components in the Elements UI library.

## Core Principles

### 1. Design System First

- All components must use the design tokens from [`packages/core/src/tokens.ts`](../../packages/core/src/tokens.ts:1)
- Follow the established color palette, spacing, typography, and border radius scales
- Use Tailwind CSS classes that map to the design tokens

### 2. Accessibility First

- All components must meet WCAG 2.1 AA standards
- Ensure keyboard navigation works properly
- Provide appropriate ARIA attributes when needed
- Maintain proper color contrast ratios
- Support screen readers with proper labeling

### 3. Consistency

- Follow established naming conventions
- Use consistent prop patterns across components
- Maintain consistent styling and behavior
- Follow the same file structure and organization

### 4. Performance

- Keep components lightweight and focused
- Avoid unnecessary re-renders
- Use React best practices for optimization
- Consider bundle size implications

## Component Structure

### File Organization

```
components/
├── component-name/
│   ├── component-name.tsx      # Main component
│   ├── component-name.stories.tsx  # Storybook stories
│   ├── component-name.test.tsx     # Unit tests
│   └── index.ts               # Optional: barrel export
```

### Component Template

```tsx
import { forwardRef } from "react";
import React from "react";

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // Props should be specific to the component's purpose
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
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
          base-class-here
          
          // Variant styles
          ${variant === "default" ? "default-variant-styles" : ""}
          ${variant === "primary" ? "primary-variant-styles" : ""}
          ${variant === "secondary" ? "secondary-variant-styles" : ""}
          
          // Size styles
          ${size === "sm" ? "small-size-styles" : ""}
          ${size === "md" ? "medium-size-styles" : ""}
          ${size === "lg" ? "large-size-styles" : ""}
          
          // State styles
          ${disabled ? "disabled-state-styles" : ""}
          
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

ComponentName.displayName = "ComponentName";

export { ComponentName };
```

## Styling Guidelines

### Tailwind CSS Usage

- Use only Tailwind CSS utility classes
- No custom CSS or inline styles
- Follow the existing design token mappings
- Use semantic color names

### Color Usage

```tsx
// Good - using semantic colors
className = "bg-primary-500 text-white hover:bg-primary-600";

// Good - using semantic colors with variants
className =
  "bg-destructive text-destructive-foreground hover:bg-destructive/90";

// Bad - hardcoded colors
className = "bg-blue-600 text-white hover:bg-blue-700";
```

### Spacing Usage

```tsx
// Good - using design tokens
className = "p-sm m-md space-y-xs";

// Good - responsive spacing
className = "p-sm md:p-md lg:p-lg";

// Bad - hardcoded values
className = "p-4 m-2 space-y-1";
```

### Typography Usage

```tsx
// Good - using typography scale
className = "text-base font-medium leading-normal";

// Good - responsive typography
className = "text-sm md:text-base lg:text-lg";

// Bad - hardcoded values
className = "text-16px font-500";
```

## Prop Guidelines

### Prop Naming

- Use clear, descriptive names
- Use camelCase for prop names
- Follow HTML attribute conventions when appropriate

```tsx
// Good
interface ButtonProps {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
}

// Bad
interface ButtonProps {
  v?: "d" | "p" | "s";
  sz?: "s" | "m" | "l";
  dis?: boolean;
  load?: boolean;
}
```

### Prop Types

- Use TypeScript interfaces for props
- Extend appropriate HTML element types
- Use union types for discrete options
- Provide sensible defaults

```tsx
// Good
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
}

// Good - with defaults
const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  disabled = false,
  loading = false,
  ...props
}) => {
  // ...
};
```

### Required Props

- Avoid required props when possible
- Use sensible defaults
- Document required props clearly

```tsx
// Good - with default
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
}

// Bad - required prop
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string; // Required props make components less flexible
}
```

## Accessibility Guidelines

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Implement proper focus management
- Support Tab and Shift+Tab navigation
- Provide visible focus indicators

```tsx
// Good - keyboard accessible button
<button
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      // Handle activation
    }
  }}
>
  Click me
</button>
```

### ARIA Attributes

- Use ARIA attributes when needed
- Provide proper labels for controls
- Ensure proper role attributes
- Use aria-live for dynamic content

```tsx
// Good - proper ARIA usage
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
>
  Close
</button>
```

### Focus Management

- Manage focus appropriately in modals and dialogs
- Return focus to the element that triggered the interaction
- Use focus traps for modal dialogs

```tsx
// Good - focus management
useEffect(() => {
  if (isOpen) {
    const firstElement = dialogRef.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstElement?.focus();
  }
}, [isOpen]);
```

## Testing Guidelines

### Unit Testing

- Test all component variants
- Test different states (enabled, disabled, loading, etc.)
- Test accessibility features
- Test event handling

```tsx
// Good - comprehensive testing
describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary-500");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
```

### Accessibility Testing

- Test keyboard navigation
- Test screen reader compatibility
- Test color contrast
- Test focus management

```tsx
// Good - accessibility testing
describe("Button Accessibility", () => {
  it("is keyboard accessible", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    fireEvent.keyDown(button, { key: "Enter" });
    // Test keyboard interaction
  });

  it("has proper ARIA attributes", () => {
    render(<Button aria-label="Close">X</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close");
  });
});
```

## Performance Guidelines

### Optimization

- Use React.memo for expensive components
- Use useCallback for event handlers
- Use useMemo for expensive calculations
- Avoid unnecessary re-renders

```tsx
// Good - optimized component
const ExpensiveComponent = React.memo(({ data, onAction }) => {
  const processedData = useMemo(() => {
    return data.map((item) => expensiveProcessing(item));
  }, [data]);

  const handleAction = useCallback(
    (id) => {
      onAction(id);
    },
    [onAction]
  );

  return (
    <div>
      {processedData.map((item) => (
        <Item key={item.id} item={item} onAction={handleAction} />
      ))}
    </div>
  );
});
```

### Bundle Size

- Keep components small and focused
- Avoid unnecessary dependencies
- Use dynamic imports for large components
- Monitor bundle size impact

```tsx
// Good - dynamic import for large components
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

// Usage
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>;
```

## Documentation Guidelines

### Storybook Stories

- Create comprehensive stories for all variants
- Include examples of common use cases
- Document all props and their types
- Show different states and interactions

```tsx
// Good - comprehensive stories
export default {
  title: "Components/Button",
  component: Button,
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

export const Default = {
  args: {
    children: "Button",
  },
};

export const Variants = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};
```

### Code Comments

- Document complex logic
- Explain the purpose of custom hooks
- Document prop types and usage
- Explain design decisions

```tsx
// Good - clear documentation
/**
 * A button component with multiple variants and states.
 *
 * @param variant - The visual style of the button
 * @param size - The size of the button
 * @param disabled - Whether the button is disabled
 * @param loading - Whether the button is in a loading state
 * @param children - The content of the button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, disabled, loading, children, ...props }, ref) => {
    // Complex logic explanation
    const isDisabled = disabled || loading;

    return (
      <button ref={ref} disabled={isDisabled} {...props}>
        {children}
      </button>
    );
  }
);
```

## Code Quality

### Linting and Formatting

- Follow the project's ESLint configuration
- Use Prettier for consistent formatting
- Run lint checks before committing
- Fix all lint errors

### TypeScript

- Use strict TypeScript settings
- Provide proper type definitions
- Avoid any types when possible
- Use generic types appropriately

### Git Best Practices

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Use conventional commit format
- Write meaningful pull request descriptions

## Review Checklist

Before submitting a component for review, ensure it meets all the following criteria:

### Functionality

- [ ] Component works as expected
- [ ] All props work correctly
- [ ] Event handlers work properly
- [ ] Edge cases are handled

### Styling

- [ ] Uses only Tailwind CSS classes
- [ ] Follows design system tokens
- [ ] All variants work correctly
- [ ] Responsive design is implemented

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper ARIA attributes
- [ ] Color contrast meets standards

### Performance

- [ ] No unnecessary re-renders
- [ ] Proper memoization used
- [ ] Bundle size impact considered
- [ ] Performance tested

### Documentation

- [ ] Storybook stories created
- [ ] Props documented
- [ ] Examples provided
- [ ] Code comments added

### Testing

- [ ] Unit tests written
- [ ] Accessibility tests written
- [ ] All variants tested
- [ ] Edge cases tested

### Code Quality

- [ ] TypeScript types correct
- [ ] ESLint passes
- [ ] Prettier formatting
- [ ] Follows project conventions

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
