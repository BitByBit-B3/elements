# Design System

This document provides a comprehensive overview of the Elements UI library's design system, including design tokens, principles, and implementation guidelines.

## Table of Contents

- [Design Principles](#design-principles)
- [Design Tokens](#design-tokens)
- [Color System](#color-system)
- [Typography System](#typography-system)
- [Spacing System](#spacing-system)
- [Border Radius System](#border-radius-system)
- [Component Design](#component-design)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Animation System](#animation-system)
- [Icon System](#icon-system)
- [Layout System](#layout-system)
- [Implementation Guidelines](#implementation-guidelines)

## Design Principles

### 1. Consistency

**Principle**: Maintain visual and functional consistency across all components.

**Implementation**:

- Use centralized design tokens
- Follow established component patterns
- Maintain consistent spacing and sizing
- Use consistent color semantics

**Example**:

```tsx
// All buttons follow the same pattern
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center rounded-md
          transition-colors focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-offset-2
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${props.className}
        `}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);
```

### 2. Accessibility

**Principle**: Ensure all components are accessible to users with disabilities.

**Implementation**:

- Follow WCAG 2.1 AA guidelines
- Provide proper ARIA attributes
- Ensure keyboard navigation
- Maintain color contrast ratios
- Support screen readers

**Example**:

```tsx
// Accessible button implementation
const AccessibleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ariaLabel, ariaExpanded, ariaControls, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);
```

### 3. Flexibility

**Principle**: Create components that can adapt to different contexts and use cases.

**Implementation**:

- Provide multiple variants
- Support customization through props
- Use CSS custom properties for theming
- Allow composition with other components

**Example**:

```tsx
// Flexible component with multiple variants
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-lg border bg-card text-card-foreground
          ${variant === "outlined" ? "border-2" : ""}
          ${variant === "ghost" ? "border-transparent" : ""}
          ${className}
        `}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
```

### 4. Performance

**Principle**: Optimize components for performance and bundle size.

**Implementation**:

- Use Tailwind CSS for minimal CSS output
- Implement proper memoization
- Avoid unnecessary re-renders
- Optimize bundle size with tree shaking

**Example**:

```tsx
// Optimized component with memoization
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

### 5. Developer Experience

**Principle**: Provide an excellent developer experience with clear APIs and documentation.

**Implementation**:

- Use TypeScript for type safety
- Provide comprehensive documentation
- Include Storybook stories
- Follow React best practices

**Example**:

```typescript
// Clear TypeScript API
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant */
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  /** The size variant */
  size?: "default" | "sm" | "lg" | "icon";
  /** Loading state */
  loading?: boolean;
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
}
```

## Design Tokens

### Token Structure

Design tokens are organized by category and provide a centralized source of truth for the design system:

```typescript
// packages/core/src/tokens.ts
export interface ThemeTokens {
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    destructive: string;
    destructiveForeground: string;
    ring: string;
  };
  spacing: SpacingScale;
  borderRadius: BorderRadiusScale;
  fontSize: FontSizeScale;
  fontWeight: FontWeightScale;
  lineHeight: LineHeightScale;
}
```

### Token Categories

#### Colors

```typescript
interface ColorScale {
  50: string; // Lightest
  100: string;
  200: string;
  300: string;
  400: string;
  500: string; // Base
  600: string;
  700: string;
  800: string;
  900: string; // Darkest
}
```

#### Spacing

```typescript
interface SpacingScale {
  xs: string; // 0.25rem (4px)
  sm: string; // 0.5rem (8px)
  md: string; // 1rem (16px)
  lg: string; // 1.5rem (24px)
  xl: string; // 2rem (32px)
  "2xl": string; // 3rem (48px)
  "3xl": string; // 4rem (64px)
  "4xl": string; // 6rem (96px)
}
```

#### Border Radius

```typescript
interface BorderRadiusScale {
  none: string; // 0px
  sm: string; // 0.125rem (2px)
  md: string; // 0.375rem (6px)
  lg: string; // 0.5rem (8px)
  full: string; // 9999px
}
```

#### Font Size

```typescript
interface FontSizeScale {
  xs: string; // 0.75rem (12px)
  sm: string; // 0.875rem (14px)
  base: string; // 1rem (16px)
  lg: string; // 1.125rem (18px)
  xl: string; // 1.25rem (20px)
  "2xl": string; // 1.5rem (24px)
  "3xl": string; // 1.875rem (30px)
  "4xl": string; // 2.25rem (36px)
}
```

#### Font Weight

```typescript
interface FontWeightScale {
  light: number; // 300
  normal: number; // 400
  medium: number; // 500
  semibold: number; // 600
  bold: number; // 700
}
```

#### Line Height

```typescript
interface LineHeightScale {
  tight: number; // 1.25
  normal: number; // 1.5
  relaxed: number; // 1.625
  loose: number; // 2
}
```

## Color System

### Color Philosophy

The color system is designed to be:

- **Semantic**: Colors have meaning (primary, destructive, etc.)
- **Accessible**: Meets WCAG contrast requirements
- **Scalable**: Consistent color scales for each color
- **Customizable**: Easy to override and extend

### Color Tokens

```typescript
// Light theme colors
export const lightTokens: ThemeTokens = {
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    background: "#ffffff",
    foreground: "#0f172a",
    muted: "#f1f5f9",
    mutedForeground: "#64748b",
    accent: "#f8fafc",
    accentForeground: "#0f172a",
    border: "#e2e8f0",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
    ring: "#3b82f6",
  },
  // ... other tokens
};
```

### Dark Theme Colors

```typescript
// Dark theme colors
export const darkTokens: ThemeTokens = {
  colors: {
    primary: {
      50: "#1e3a8a",
      100: "#1e40af",
      200: "#1d4ed8",
      300: "#2563eb",
      400: "#3b82f6",
      500: "#60a5fa",
      600: "#93c5fd",
      700: "#bfdbfe",
      800: "#dbeafe",
      900: "#eff6ff",
    },
    secondary: {
      50: "#0f172a",
      100: "#1e293b",
      200: "#334155",
      300: "#475569",
      400: "#64748b",
      500: "#94a3b8",
      600: "#cbd5e1",
      700: "#e2e8f0",
      800: "#f1f5f9",
      900: "#f8fafc",
    },
    background: "#0f172a",
    foreground: "#f8fafc",
    muted: "#1e293b",
    mutedForeground: "#94a3b8",
    accent: "#1e293b",
    accentForeground: "#f8fafc",
    border: "#334155",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
    ring: "#60a5fa",
  },
  // ... other tokens
};
```

### Color Usage Guidelines

#### Primary Colors

```tsx
// Use primary colors for primary actions
<Button className="bg-primary-600 hover:bg-primary-700">
  Primary Action
</Button>

// Use primary color accents
<Link className="text-primary-600 hover:text-primary-700">
  Link Text
</Link>
```

#### Semantic Colors

```tsx
// Use destructive colors for destructive actions
<Button variant="destructive">
  Delete
</Button>

// Use muted colors for secondary information
<p className="text-muted-foreground">
  Secondary text
</p>
```

#### Color Contrast

All color combinations meet WCAG 2.1 AA contrast requirements:

```typescript
// Contrast ratios are maintained
const colorPairs = [
  { foreground: '#0f172a', background: '#ffffff', ratio: 21:1 }, // AA
  { foreground: '#64748b', background: '#ffffff', ratio: 7.6:1 }, // AA
  { foreground: '#3b82f6', background: '#ffffff', ratio: 8.9:1 }, // AA
  { foreground: '#ffffff', background: '#3b82f6', ratio: 8.9:1 }, // AA
];
```

## Typography System

### Typography Scale

The typography system is based on a modular scale:

```typescript
export const lightTokens: ThemeTokens = {
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};
```

### Typography Hierarchy

```tsx
// Heading hierarchy
<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-3xl font-bold">Heading 2</h2>
<h3 className="text-2xl font-bold">Heading 3</h3>
<h4 className="text-xl font-semibold">Heading 4</h4>
<h5 className="text-lg font-medium">Heading 5</h5>
<h6 className="text-base font-medium">Heading 6</h6>

// Text hierarchy
<p className="text-base">Body text</p>
<p className="text-sm text-muted-foreground">Secondary text</p>
<p className="text-xs text-muted-foreground">Caption text</p>
```

### Typography Usage

```tsx
// Headings with proper spacing
<div className="space-y-4">
  <h1 className="text-4xl font-bold tracking-tight">Page Title</h1>
  <p className="text-xl text-muted-foreground">
    Page description goes here
  </p>
</div>

// Body text with proper line height
<div className="space-y-4">
  <p className="text-base leading-relaxed">
    This is a paragraph of text with proper line height for readability.
  </p>
  <p className="text-sm text-muted-foreground">
    This is secondary information text.
  </p>
</div>
```

## Spacing System

### Spacing Scale

The spacing system is based on a 4px grid:

```typescript
export const lightTokens: ThemeTokens = {
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
  },
};
```

### Spacing Usage

```tsx
// Consistent spacing between elements
<div className="space-y-4">
  <div className="p-4 border rounded-lg">
    <h3 className="font-semibold mb-2">Card Title</h3>
    <p className="text-sm text-muted-foreground">
      Card content with consistent spacing
    </p>
  </div>
</div>

// Responsive spacing
<div className="p-4 sm:p-6 lg:p-8">
  <h2 className="text-2xl font-bold mb-4 sm:mb-6">
    Responsive Spacing
  </h2>
  <p className="text-sm sm:text-base">
    This content adapts to different screen sizes
  </p>
</div>
```

### Spacing Patterns

```tsx
// Component spacing patterns
const Card = () => (
  <div className="p-6">
    {" "}
    // Large padding for cards
    <h3 className="font-semibold mb-4">Title</h3> // Bottom margin for title
    <p className="text-sm text-muted-foreground mb-6">Content</p> // Bottom margin
    for content
    <Button>Action</Button> // No margin on button
  </div>
);
```

## Border Radius System

### Border Radius Scale

```typescript
export const lightTokens: ThemeTokens = {
  borderRadius: {
    none: "0px",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    full: "9999px",
  },
};
```

### Border Radius Usage

```tsx
// Different border radius values
<div className="space-y-4">
  <div className="rounded-none">No border radius</div>
  <div className="rounded-sm">Small border radius</div>
  <div className="rounded">Medium border radius</div>
  <div className="rounded-lg">Large border radius</div>
  <div className="rounded-full">Full border radius</div>
</div>;

// Component-specific border radius
const Button = () => (
  <button className="rounded-md">Button with medium radius</button>
);

const Card = () => <div className="rounded-lg">Card with large radius</div>;
```

## Component Design

### Component Structure

All components follow a consistent structure:

```tsx
// Component template
const ComponentName = forwardRef<ElementType, ComponentProps>(
  (
    { variant = "default", size = "default", className = "", ...props },
    ref
  ) => {
    return (
      <Element
        ref={ref}
        className={`
          // Base styles
          base-classes-here
          
          // Variant styles
          ${variantStyles[variant]}
          
          // Size styles
          ${sizeStyles[size]}
          
          // User-provided classes
          ${className}
        `}
        {...props}
      >
        {props.children}
      </Element>
    );
  }
);

ComponentName.displayName = "ComponentName";
```

### Button Component Design

```tsx
// Button component with variants and sizes
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      loading = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center rounded-md
          text-sm font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-offset-2 disabled:pointer-events-none
          disabled:opacity-50
          
          // Variant styles
          ${
            variant === "default"
              ? "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500"
              : ""
          }
          ${
            variant === "primary"
              ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
              : ""
          }
          ${
            variant === "secondary"
              ? "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500"
              : ""
          }
          ${
            variant === "destructive"
              ? "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
              : ""
          }
          ${
            variant === "outline"
              ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500"
              : ""
          }
          ${
            variant === "ghost"
              ? "hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500"
              : ""
          }
          ${
            variant === "link"
              ? "text-primary-600 underline-offset-4 hover:underline focus:ring-primary-500"
              : ""
          }
          
          // Size styles
          ${size === "default" ? "h-10 px-4 py-2" : ""}
          ${size === "sm" ? "h-9 rounded-md px-3" : ""}
          ${size === "lg" ? "h-11 rounded-md px-8" : ""}
          ${size === "icon" ? "h-10 w-10" : ""}
          
          // User-provided classes
          ${className}
        `}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {props.children}
      </button>
    );
  }
);
```

### Input Component Design

```tsx
// Input component with validation states
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, disabled = false, className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={`
          flex h-10 w-full rounded-md border border-input bg-background
          px-3 py-2 text-sm ring-offset-background
          file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-muted-foreground
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          
          // Error state
          ${error ? "border-red-500 focus-visible:ring-red-500" : ""}
          
          // User-provided classes
          ${className}
        `}
        {...props}
      />
    );
  }
);
```

## Accessibility Guidelines

### Color Contrast

All text and component combinations meet WCAG 2.1 AA contrast requirements:

```typescript
// Contrast ratios
const contrastRatios = {
  normalText: { ratio: 7:1, level: 'AAA' },
  largeText: { ratio: 4.5:1, level: 'AA' },
  disabledText: { ratio: 3:1, level: 'AA' },
};
```

### Focus Management

```tsx
// Focus styles for accessibility
const focusStyles = {
  default:
    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  inset:
    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset",
};
```

### Keyboard Navigation

```tsx
// Keyboard accessible components
const AccessibleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onKeyDown, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        props.onClick?.(e);
      }
      onKeyDown?.(e);
    };

    return (
      <button ref={ref} onKeyDown={handleKeyDown} {...props}>
        {props.children}
      </button>
    );
  }
);
```

### ARIA Attributes

```tsx
// Proper ARIA attributes
const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open, ariaLabel, ariaDescribedby, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
```

## Animation System

### Animation Principles

- **Subtle**: Use subtle animations for better user experience
- **Fast**: Animations should be quick and responsive
- **Accessible**: Respect user preferences for reduced motion
- **Purposeful**: Animations should have a clear purpose

### Animation Tokens

```typescript
// Animation tokens
const animations = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
  },
};
```

### Animation Usage

```tsx
// Fade in animation
const fadeIn = {
  animation: 'fadeIn 0.3s ease-in-out',
};

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

// Slide in animation
const slideIn = {
  animation: 'slideIn 0.3s ease-out',
};

@keyframes slideIn {
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

## Icon System

### Icon Guidelines

- **Consistent**: Use consistent icon styles and sizes
- **Meaningful**: Icons should have clear meaning
- **Scalable**: Icons should scale properly
- **Accessible**: Icons should have proper ARIA labels

### Icon Usage

```tsx
// Icon component
const Icon = ({ name, className = "", ...props }) => {
  const icons = {
    search: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    close: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  };

  return (
    <span className={className} {...props}>
      {icons[name]}
    </span>
  );
};
```

## Layout System

### Grid System

```tsx
// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### Flexbox Layout

```tsx
// Flexbox layouts
<div className="flex flex-col space-y-4">
  <div className="flex-1">Content</div>
  <div className="flex-shrink-0">Footer</div>
</div>

<div className="flex items-center justify-between">
  <div>Logo</div>
  <div className="flex space-x-4">
    <Nav>Item 1</Nav>
    <Nav>Item 2</Nav>
  </div>
</div>
```

### Container System

```tsx
// Responsive containers
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <Content />
  </div>
</div>
```

## Implementation Guidelines

### Using Design Tokens

```tsx
// Always use design tokens
const Card = () => (
  <div className="p-6 bg-background border border-border rounded-lg">
    <h3 className="text-lg font-semibold text-foreground mb-2">Card Title</h3>
    <p className="text-muted-foreground">Card content using design tokens</p>
  </div>
);
```

### Component Composition

```tsx
// Compose components
const Form = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <Input type="email" placeholder="Enter your email" />
    </div>
    <Button type="submit">Submit</Button>
  </form>
);
```

### Responsive Design

```tsx
// Responsive components
const ResponsiveCard = () => (
  <Card className="p-4 sm:p-6 lg:p-8">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
      Responsive Title
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
      This content adapts to different screen sizes
    </p>
  </Card>
);
```

### Dark Mode Support

```tsx
// Dark mode support
const DarkModeCard = () => (
  <Card className="bg-background text-foreground">
    <h3 className="font-semibold">Dark Mode Compatible</h3>
    <p className="text-muted-foreground">
      This component works in both light and dark modes
    </p>
  </Card>
);
```

## Conclusion

The Elements UI design system provides a comprehensive foundation for building consistent, accessible, and performant user interfaces. By following these guidelines and using the provided design tokens, you can create beautiful and functional applications that meet modern web standards.

---

**Next Steps**:

- [Package Structure](./packages.md) - Learn about the package organization
- [Architecture Overview](./overview.md) - High-level architecture documentation
- [Component Guidelines](../contributing/component-guidelines.md) - Component development guidelines
- [Usage Examples](../usage/examples.md) - Practical usage examples
