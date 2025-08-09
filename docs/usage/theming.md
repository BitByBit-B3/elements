# Theming Guide

This guide explains how to customize and extend the design system of the Elements UI library.

## Overview

The Elements UI library uses a design token-based theming system that allows you to customize colors, spacing, typography, and more. All theming is done through the `@bitbybit-b3/elements-core` package.

## Design Tokens

Design tokens are the foundation of the theming system. They are stored in [`packages/core/src/tokens.ts`](../../packages/core/src/tokens.ts:1) and provide a consistent way to define and use design values across your application.

### Token Categories

```typescript
// packages/core/src/tokens.ts
export interface ThemeTokens {
  colors: {
    primary: {
      /* color scale */
    };
    secondary: {
      /* color scale */
    };
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
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
}
```

## Using the Theme Provider

### Basic Setup

To use theming in your application, wrap your components with the `ThemeProvider`:

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

### Custom Theme Provider

You can create a custom theme provider with your own theme:

```tsx
import { ThemeProvider, createTheme } from "@bitbybit-b3/elements-core";
import { Button } from "@bitbybit-b3/elements-react";

// Create a custom theme
const customTheme = createTheme({
  mode: "light",
  tokens: {
    colors: {
      primary: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      // ... other colors
    },
    // ... other tokens
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="min-h-screen bg-background text-foreground">
        <Button>Custom Theme</Button>
      </div>
    </ThemeProvider>
  );
}
```

## Customizing Colors

### Color Tokens

The color system is based on a scale approach:

```typescript
colors: {
  primary: {
    50: '#eff6ff',    // Lightest
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',    // Base
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',    // Darkest
  },
  secondary: {
    // Similar scale for secondary colors
  },
  background: '#ffffff',
  foreground: '#0f172a',
  // ... other colors
}
```

### Creating a Custom Color Scheme

```typescript
import { createTheme } from "@bitbybit-b3/elements-core";

const customColors = createTheme({
  mode: "light",
  tokens: {
    colors: {
      primary: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899", // Pink theme
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },
      secondary: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9", // Blue secondary
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      background: "#ffffff",
      foreground: "#0f172a",
      muted: "#f8fafc",
      mutedForeground: "#64748b",
      accent: "#f1f5f9",
      accentForeground: "#0f172a",
      border: "#e2e8f0",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      ring: "#0ea5e9",
    },
  },
});
```

### Using Custom Colors in Components

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function CustomButton() {
  return <Button className="bg-pink-500 hover:bg-pink-600">Pink Button</Button>;
}
```

## Dark Mode

### Enabling Dark Mode

The library supports dark mode out of the box:

```tsx
import { ThemeProvider, setTheme } from "@bitbybit-b3/elements-core";

function App() {
  const toggleDarkMode = () => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "light" : "dark"
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
      </div>
    </ThemeProvider>
  );
}
```

### System Preference Detection

You can automatically detect system preferences:

```tsx
import {
  ThemeProvider,
  setTheme,
  getSystemTheme,
} from "@bitbybit-b3/elements-core";

function App() {
  useEffect(() => {
    const systemTheme = getSystemTheme();
    setTheme(systemTheme);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Content />
      </div>
    </ThemeProvider>
  );
}
```

### Custom Dark Mode Colors

```typescript
const darkTheme = createTheme({
  mode: "dark",
  tokens: {
    colors: {
      primary: {
        50: "#1e3a8a",
        100: "#1e40af",
        // ... dark mode primary colors
      },
      background: "#0f172a",
      foreground: "#f8fafc",
      // ... other dark mode colors
    },
  },
});
```

## Customizing Spacing

### Spacing Tokens

```typescript
spacing: {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
}
```

### Custom Spacing Scale

```typescript
const customSpacing = createTheme({
  tokens: {
    spacing: {
      xs: "0.125rem", // 2px
      sm: "0.25rem", // 4px
      md: "0.5rem", // 8px
      lg: "1rem", // 16px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "3rem", // 48px
      "4xl": "4rem", // 64px
    },
  },
});
```

### Using Spacing Tokens

```tsx
import { Card } from "@bitbybit-b3/elements-react";

function SpacingExample() {
  return (
    <Card className="p-4xl m-2xl">
      <p className="space-y-md">This content uses custom spacing tokens.</p>
    </Card>
  );
}
```

## Customizing Typography

### Typography Tokens

```typescript
fontSize: {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem',// 30px
  '4xl': '2.25rem', // 36px
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
}
```

### Custom Typography Scale

```typescript
const customTypography = createTheme({
  tokens: {
    fontSize: {
      xs: "0.625rem", // 10px
      sm: "0.75rem", // 12px
      base: "0.875rem", // 14px
      lg: "1rem", // 16px
      xl: "1.125rem", // 18px
      "2xl": "1.25rem", // 20px
      "3xl": "1.5rem", // 24px
      "4xl": "2rem", // 32px
    },
    fontWeight: {
      light: 200,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 800,
    },
  },
});
```

### Using Typography Tokens

```tsx
import { Card, CardTitle, CardContent } from "@bitbybit-b3/elements-react";

function TypographyExample() {
  return (
    <Card>
      <CardTitle className="text-2xl font-bold">Custom Typography</CardTitle>
      <CardContent className="text-base text-muted-foreground">
        This text uses custom typography tokens.
      </CardContent>
    </Card>
  );
}
```

## Customizing Border Radius

### Border Radius Tokens

```typescript
borderRadius: {
  none: '0px',
  sm: '0.125rem',  // 2px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  full: '9999px',
}
```

### Custom Border Radius

```typescript
const customBorders = createTheme({
  tokens: {
    borderRadius: {
      none: "0px",
      sm: "0.25rem", // 4px
      md: "0.5rem", // 8px
      lg: "0.75rem", // 12px
      full: "9999px",
    },
  },
});
```

### Using Border Radius Tokens

```tsx
import { Button, Card } from "@bitbybit-b3/elements-react";

function BorderExample() {
  return (
    <div className="space-y-4">
      <Button className="rounded-full">Full Radius</Button>
      <Card className="rounded-lg">Large Radius</Card>
    </div>
  );
}
```

## Extending the Theme

### Creating a Complete Custom Theme

```typescript
import { createTheme } from "@bitbybit-b3/elements-core";

const customTheme = createTheme({
  mode: "light",
  tokens: {
    colors: {
      primary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      secondary: {
        50: "#fef3c7",
        100: "#fde68a",
        200: "#fcd34d",
        300: "#fbbf24",
        400: "#f59e0b",
        500: "#d97706",
        600: "#b45309",
        700: "#92400e",
        800: "#78350f",
        900: "#713f12",
      },
      background: "#ffffff",
      foreground: "#1f2937",
      muted: "#f9fafb",
      mutedForeground: "#6b7280",
      accent: "#f3f4f6",
      accentForeground: "#1f2937",
      border: "#e5e7eb",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      ring: "#22c55e",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
      "4xl": "6rem",
    },
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
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
  },
});
```

### Using the Custom Theme

```tsx
import { ThemeProvider } from "@bitbybit-b3/elements-core";
import { Button, Card } from "@bitbybit-b3/elements-react";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="min-h-screen bg-background text-foreground">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">Custom Theme</h1>
          <Button>Green Theme Button</Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

## Tailwind CSS Integration

### Extending Tailwind Config

To use custom design tokens in Tailwind CSS, extend your `tailwind.config.js`:

```javascript
// tailwind.config.js
const {
  lightTokens,
  darkTokens,
} = require("@bitbybit-b3/elements-core/src/tokens");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: lightTokens.colors.primary[50],
          100: lightTokens.colors.primary[100],
          // ... rest of the scale
        },
        // ... other colors
      },
      spacing: {
        xs: lightTokens.spacing.xs,
        sm: lightTokens.spacing.sm,
        md: lightTokens.spacing.md,
        lg: lightTokens.spacing.lg,
        xl: lightTokens.spacing.xl,
        "2xl": lightTokens.spacing["2xl"],
        "3xl": lightTokens.spacing["3xl"],
        "4xl": lightTokens.spacing["4xl"],
      },
      borderRadius: {
        none: lightTokens.borderRadius.none,
        sm: lightTokens.borderRadius.sm,
        md: lightTokens.borderRadius.md,
        lg: lightTokens.borderRadius.lg,
        full: lightTokens.borderRadius.full,
      },
      fontSize: {
        xs: lightTokens.fontSize.xs,
        sm: lightTokens.fontSize.sm,
        base: lightTokens.fontSize.base,
        lg: lightTokens.fontSize.lg,
        xl: lightTokens.fontSize.xl,
        "2xl": lightTokens.fontSize["2xl"],
        "3xl": lightTokens.fontSize["3xl"],
        "4xl": lightTokens.fontSize["4xl"],
      },
      fontWeight: {
        light: lightTokens.fontWeight.light,
        normal: lightTokens.fontWeight.normal,
        medium: lightTokens.fontWeight.medium,
        semibold: lightTokens.fontWeight.semibold,
        bold: lightTokens.fontWeight.bold,
      },
      lineHeight: {
        tight: lightTokens.lineHeight.tight,
        normal: lightTokens.lineHeight.normal,
        relaxed: lightTokens.lineHeight.relaxed,
        loose: lightTokens.lineHeight.loose,
      },
    },
  },
  plugins: [],
};
```

### Using Custom Tokens in Tailwind

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function CustomStyledComponent() {
  return (
    <div className="p-4xl bg-primary-50 border border-primary-200 rounded-lg">
      <Button className="text-lg font-semibold bg-primary-600 hover:bg-primary-700">
        Custom Styled Button
      </Button>
    </div>
  );
}
```

## Theme Switching

### Basic Theme Switcher

```tsx
import { ThemeProvider, setTheme } from "@bitbybit-b3/elements-core";
import { Button } from "@bitbybit-b3/elements-react";

function ThemeSwitcher() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </ThemeProvider>
  );
}
```

### Advanced Theme Switcher

```tsx
import {
  ThemeProvider,
  setTheme,
  getSystemTheme,
} from "@bitbybit-b3/elements-core";
import { Button, Select } from "@bitbybit-b3/elements-react";

function AdvancedThemeSwitcher() {
  const [theme, setThemeState] = useState("system");

  const handleThemeChange = (newTheme: string) => {
    setThemeState(newTheme);

    if (newTheme === "system") {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeProvider>
      <div className="space-y-4">
        <Select value={theme} onValueChange={handleThemeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </ThemeProvider>
  );
}
```

## Responsive Theming

### Mobile-First Approach

```typescript
const responsiveTheme = createTheme({
  tokens: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... rest of the scale
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl: '4rem',
      '4xl': '6rem',
    },
  },
});
```

### Using Responsive Tokens

```tsx
import { Card } from "@bitbybit-b3/elements-react";

function ResponsiveCard() {
  return (
    <Card className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        Responsive Design
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
        This card adapts to different screen sizes.
      </p>
    </Card>
  );
}
```

## Best Practices

### 1. Use Design Tokens

Always use design tokens instead of hardcoded values:

```tsx
// Good
<Button className="bg-primary-600 hover:bg-primary-700">Button</Button>

// Bad
<Button className="bg-blue-600 hover:bg-blue-700">Button</Button>
```

### 2. Maintain Consistency

Use the same tokens throughout your application:

```tsx
// Good
<div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
  <h2 className="text-lg font-semibold text-primary-900">Title</h2>
</div>

// Bad
<div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <h2 className="text-lg font-semibold text-blue-900">Title</h2>
</div>
```

### 3. Use Semantic Colors

Use semantic color names for better maintainability:

```tsx
// Good
<div className="bg-destructive text-destructive-foreground">Error</div>
<div className="bg-success text-success-foreground">Success</div>

// Bad
<div className="bg-red-600 text-white">Error</div>
<div className="bg-green-600 text-white">Success</div>
```

### 4. Test Themes

Test your themes in different contexts:

```tsx
function ThemeTesting() {
  return (
    <div className="space-y-4">
      <Card>
        <h3 className="font-semibold">Light Theme Test</h3>
        <p className="text-muted-foreground">Text in light mode</p>
      </Card>

      <div className="dark">
        <Card>
          <h3 className="font-semibold">Dark Theme Test</h3>
          <p className="text-muted-foreground">Text in dark mode</p>
        </Card>
      </div>
    </div>
  );
}
```

### 5. Document Your Theme

Keep documentation of your custom theme:

```markdown
# Custom Theme Documentation

## Color Palette

- Primary: Green (#22c55e)
- Secondary: Amber (#f59e0b)
- Background: White (#ffffff)
- Text: Gray-900 (#1f2937)

## Spacing Scale

- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)

## Typography

- Base: 1rem (16px)
- Headings: 1.5rem - 2.25rem (24px - 36px)
```

## Troubleshooting

### Common Issues

#### 1. Colors Not Applying

If colors don't appear correctly, ensure you're using the right token names:

```tsx
// Check token names
import { lightTokens } from "@bitbybit-b3/elements-core";

console.log(lightTokens.colors.primary[500]); // Should be #3b82f6
```

#### 2. Dark Mode Not Working

Make sure you're using the `dark` class correctly:

```tsx
// Add dark class to parent element
<div className="dark">
  <DarkModeComponent />
</div>
```

#### 3. Custom Theme Not Applied

Verify your theme is properly set up:

```tsx
// Check theme provider
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

### Debugging Theme Issues

#### 1. Inspect Tokens

```tsx
import { getThemeTokens } from "@bitbybit-b3/elements-core";

function DebugTheme() {
  const tokens = getThemeTokens();
  console.log("Current theme tokens:", tokens);
  return null;
}
```

#### 2. Test Individual Components

```tsx
function ComponentTest() {
  return (
    <div className="space-y-4">
      <Button>Button Test</Button>
      <Input placeholder="Input Test" />
      <Card>
        <CardTitle>Card Test</CardTitle>
        <CardContent>Content Test</CardContent>
      </Card>
    </div>
  );
}
```

## Resources

- [Design Tokens Documentation](https://designsystemsrepo.com/design-tokens/)
- [Tailwind CSS Theming](https://tailwindcss.com/docs/customizing-colors)
- [Dark Mode Guide](https://tailwindcss.com/docs/dark-mode)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## Next Steps

- [Usage Examples](./examples.md) - See theming in action
- [Component API Reference](./component-api.md) - Learn about all available components
- [Architecture Overview](../architecture/overview.md) - Understand the project structure
