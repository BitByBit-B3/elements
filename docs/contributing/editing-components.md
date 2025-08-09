# Editing Components

This guide covers how to modify existing components in the Elements UI library while maintaining consistency and quality.

## When to Edit Components

### Common Reasons for Editing

- **Bug Fixes**: Addressing issues reported by users or automated tests
- **Enhancements**: Adding new features or improving existing functionality
- **Refactoring**: Improving code quality without changing behavior
- **Design Updates**: Updating visual appearance to match design system changes
- **Performance**: Optimizing components for better performance
- **Accessibility**: Improving accessibility compliance

### Decision Making

Before editing a component, consider:

1. **Impact**: Will this change affect other components or applications?
2. **Breaking Changes**: Will this be a breaking change for users?
3. **Alternatives**: Could this be solved with a new component or prop?
4. **Testing**: What tests need to be updated?

## Editing Process

### 1. Understand the Current Implementation

Before making changes:

- Read the existing component code thoroughly
- Understand the current prop structure and behavior
- Review existing tests and stories
- Check for any related documentation

```tsx
// Example: Understanding a Button component
// packages/react/src/components/button/button.tsx

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Current implementation logic
    const isDisabled = disabled || loading;

    return (
      <button
        className={`
          inline-flex items-center justify-center rounded-md text-sm font-medium
          transition-colors focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Current rendering logic */}
      </button>
    );
  }
);
```

### 2. Plan Your Changes

Create a plan for your modifications:

1. **Identify what needs to change**
2. **Determine the approach**
3. **Consider edge cases**
4. **Plan for testing**

```markdown
## Change Plan: Add new button variant

### Current State

- Button has variants: default, destructive, outline, secondary, ghost, link
- No success variant available

### Proposed Changes

- Add success variant with green styling
- Update variantStyles object
- Update Storybook stories
- Add tests for new variant

### Edge Cases

- Ensure success variant works with all sizes
- Ensure success variant works with loading state
- Ensure success variant works with icons
  </markdown>
```

### 3. Make the Changes

Follow these best practices when editing:

#### Prop Changes

```tsx
// Good: Adding optional props
interface ButtonProps {
  // Existing props
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";

  // New optional prop
  success?: boolean;
}

// Implementation
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ success = false, ...props }, ref) => {
    const variant = success ? "success" : props.variant;
    // ...
  }
);
```

#### Styling Changes

```tsx
// Good: Adding new variant styles
const variantStyles = {
  // Existing variants
  default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

  // New variant
  success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
};
```

#### Behavior Changes

```tsx
// Good: Adding new behavior
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading = false, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) return;
      onClick?.(e);
    };

    return (
      <button onClick={handleClick} disabled={loading} {...props}>
        {/* ... */}
      </button>
    );
  }
);
```

### 4. Update Tests

Update existing tests and add new ones for your changes:

```tsx
// packages/react/src/components/button/button.test.tsx
describe("Button", () => {
  // Existing tests
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  // New tests for changes
  it("renders with success variant", () => {
    render(<Button success>Success</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-green-600");
  });

  it("handles click when not loading", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not handle click when loading", () => {
    const handleClick = jest.fn();
    render(
      <Button loading onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 5. Update Storybook Stories

Update existing stories and add new ones:

```tsx
// packages/react/src/components/button/button.stories.tsx
export default {
  // ... existing configuration
};

// Existing stories
export const Variants: Story = {
  // ... existing implementation
};

// New story for success variant
export const Success: Story = {
  args: {
    success: true,
    children: "Success Button",
  },
};

// Updated story to include success variant
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button success>Success</Button> {/* New variant */}
    </div>
  ),
};
```

### 6. Update Documentation

Update relevant documentation:

````markdown
## Button Component Updates

### New Features

- Added `success` prop for success state styling
- Success variant uses green color scheme

### Usage

```tsx
import { Button } from "@bitbybit-b3/elements-react";

// Success button
<Button success>Operation Successful</Button>;
```
````

### Props

- `success`: boolean - Apply success styling (default: false)

````

## Common Editing Scenarios

### Adding New Variants

```tsx
// 1. Update props interface
interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning';
}

// 2. Add variant styles
const variantStyles = {
  // ... existing variants
  success: 'bg-green-600 text-white hover:bg-green-700',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
};

// 3. Update component logic
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', ...props }, ref) => {
    return (
      <button
        className={`${variantStyles[variant]} ${props.className}`}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);
````

### Adding New Props

```tsx
// 1. Update props interface
interface ButtonProps {
  // Existing props
  variant?: string;
  size?: string;

  // New prop
  icon?: React.ReactNode;
}

// 2. Update component logic
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, children, ...props }, ref) => {
    return (
      <button {...props} ref={ref}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);
```

### Refactoring for Performance

```tsx
// Before: Potential unnecessary re-renders
const ExpensiveComponent = ({ data, filter }) => {
  const filteredData = data.filter((item) => item.includes(filter));
  return (
    <div>
      {filteredData.map((item) => (
        <Item key={item} item={item} />
      ))}
    </div>
  );
};

// After: Memoized for better performance
const ExpensiveComponent = React.memo(({ data, filter }) => {
  const filteredData = useMemo(() => {
    return data.filter((item) => item.includes(filter));
  }, [data, filter]);

  return (
    <div>
      {filteredData.map((item) => (
        <Item key={item} item={item} />
      ))}
    </div>
  );
});
```

### Fixing Accessibility Issues

```tsx
// Before: Missing accessibility attributes
<button onClick={handleClick}>Submit</button>

// After: Proper accessibility
<button
  onClick={handleClick}
  aria-label="Submit form"
  aria-describedby="submit-help"
>
  Submit
</button>
<p id="submit-help" className="sr-only">
  Click to submit the form
</p>
```

## Testing Changes

### Unit Testing

```tsx
describe("Button Changes", () => {
  it("handles new prop correctly", () => {
    render(<Button icon={<Icon />}>Click me</Button>);
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("icon")
    );
  });

  it("works with existing props and new prop", () => {
    render(
      <Button icon={<Icon />} variant="primary">
        Primary
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("bg-primary-500");
  });
});
```

### Integration Testing

```tsx
describe("Button Integration", () => {
  it("works with form submission", () => {
    render(
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </form>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
```

### Visual Testing

```tsx
// Using Storybook for visual testing
export const VisualRegression: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => (
    <div className="space-y-4">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button success>Success</Button>
    </div>
  ),
};
```

## Best Practices

### 1. Maintain Backward Compatibility

- Avoid breaking changes when possible
- Add new props instead of changing existing ones
- Deprecate features gradually with clear communication

### 2. Follow the Design System

- Use existing design tokens
- Follow established patterns
- Maintain visual consistency

### 3. Test Thoroughly

- Test all variants and states
- Test edge cases
- Test accessibility
- Test performance

### 4. Document Changes

- Update Storybook stories
- Update component documentation
- Update README if needed
- Add migration guides for breaking changes

### 5. Review and Refactor

- Review your changes for code quality
- Look for opportunities to simplify
- Ensure consistency with other components
- Check for performance improvements

## Common Pitfalls

### 1. Over-Engineering

```tsx
// Bad: Adding complexity unnecessarily
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      loading,
      disabled,
      success,
      warning,
      error,
      info,
      ...props
    },
    ref
  ) => {
    // Too many props and complex logic
  }
);

// Good: Keep it simple and focused
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      loading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Simple, focused logic
  }
);
```

### 2. Ignoring Edge Cases

```tsx
// Bad: Not handling all states
const Button = ({ loading, disabled, ...props }) => {
  return <button disabled={loading} {...props} />;
  // Missing disabled state handling
};

// Good: Handle all states
const Button = ({ loading, disabled, ...props }) => {
  const isDisabled = loading || disabled;
  return <button disabled={isDisabled} {...props} />;
};
```

### 3. Breaking Changes

```tsx
// Bad: Breaking change
interface ButtonProps {
  variant: "primary" | "secondary"; // Changed from optional to required
}

// Good: Backward compatible
interface ButtonProps {
  variant?: "primary" | "secondary" | "default"; // Added new option, kept optional
}
```

### 4. Performance Issues

```tsx
// Bad: Performance issue
const ExpensiveList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <HeavyComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

// Good: Optimized
const ExpensiveList = React.memo(({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <HeavyComponent key={item.id} item={item} />
      ))}
    </div>
  );
});
```

## Review Checklist

Before submitting your changes, review this checklist:

### Functionality

- [ ] All existing functionality still works
- [ ] New functionality works as expected
- [ ] Edge cases are handled
- [ ] Error states are handled

### Styling

- [ ] Visual changes match design system
- [ ] All variants work correctly
- [ ] Responsive behavior is maintained
- [ ] Accessibility is not broken

### Performance

- [ ] No performance regressions
- [ ] Proper memoization used
- [ ] Bundle size impact is acceptable
- [ ] Loading times are reasonable

### Testing

- [ ] All existing tests pass
- [ ] New tests are added
- [ ] Edge cases are tested
- [ ] Accessibility is tested

### Documentation

- [ ] Storybook stories are updated
- [ ] Component documentation is updated
- [ ] README is updated if needed
- [ ] Migration guides are provided

### Code Quality

- [ ] Code follows project conventions
- [ ] TypeScript types are correct
- [ ] ESLint passes
- [ ] Code is well-documented

## Resources

- [React Documentation](https://react.dev/)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Testing Library Documentation](https://testing-library.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/)
- [Performance Best Practices](https://react.dev/learn/render-and-commit#performance)
