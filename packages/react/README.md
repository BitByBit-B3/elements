# @bitbybit-b3/elements-react

Production-ready React UI components built with Radix UI primitives and Tailwind CSS. Battle-tested in real-world applications.

## Features

- **49+ Production-Ready Components** - Fully functional and styled
- **Built on Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling
- **TypeScript Support** - Full type safety via JSDoc
- **Tree-Shakeable** - Import only what you need
- **Zero Config** - Works out of the box
- **Dark Mode Ready** - Built-in theme support
- **Responsive** - Mobile-first design

## Installation

```bash
npm install @bitbybit-b3/elements-react
# or
pnpm add @bitbybit-b3/elements-react
# or
yarn add @bitbybit-b3/elements-react
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Quick Start

### 1. Configure Tailwind CSS

Add to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Add CSS Variables

Add to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}
```

### 3. Import and Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@bitbybit-b3/elements-react';

export default function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Available Components

### Layout & Navigation
- Accordion, Breadcrumb, Navigation Menu, Menubar, Sidebar, Tabs

### Forms & Inputs
- Button, Input, Input OTP, Textarea, Checkbox, Radio Group, Select, Switch, Slider, Label, Form

### Overlays & Dialogs
- Dialog, Alert Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip, Context Menu, Dropdown Menu

### Data Display
- Card, Table, Badge, Avatar, Separator, Aspect Ratio, Scroll Area

### Feedback
- Alert, Toast, Toaster, Sonner, Progress, Skeleton

### Interactive
- Calendar, Carousel, Chart, Collapsible, Command, Resizable, Toggle, Toggle Group

## Usage Examples

### Button with Variants

```tsx
import { Button } from '@bitbybit-b3/elements-react';

<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Form with Validation

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, Input, Button } from '@bitbybit-b3/elements-react';
import { useForm } from 'react-hook-form';

function MyForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Dialog Example

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, Button } from '@bitbybit-b3/elements-react';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <Button>Confirm</Button>
  </DialogContent>
</Dialog>
```

### Data Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@bitbybit-b3/elements-react';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Hooks

### useIsMobile

Detect mobile devices:

```tsx
import { useIsMobile } from '@bitbybit-b3/elements-react';

function MyComponent() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

### useToast

Show toast notifications:

```tsx
import { useToast } from '@bitbybit-b3/elements-react';

function MyComponent() {
  const { toast } = useToast();

  return (
    <button onClick={() => toast({ title: 'Success!', description: 'Action completed' })}>
      Show Toast
    </button>
  );
}
```

## Utilities

### cn (Class Name Utility)

Merge Tailwind classes:

```tsx
import { cn } from '@bitbybit-b3/elements-react';

<div className={cn('bg-red-500', isActive && 'bg-blue-500')} />
```

## Framework Support

### Next.js

Works perfectly with Next.js 13+ (App Router and Pages Router):

```tsx
'use client'; // Only needed for interactive components

import { Button } from '@bitbybit-b3/elements-react';

export default function Page() {
  return <Button>Click me</Button>;
}
```

### Vite

Configure Tailwind as shown above and import components normally.

### Create React App

Add PostCSS config and Tailwind setup, then use components.

## TypeScript Support

All components are fully typed via JSDoc. Your IDE will provide full autocomplete and type checking:

```tsx
import { Button, type ButtonProps } from '@bitbybit-b3/elements-react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Styling & Customization

### Override Default Styles

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Styled Button
</Button>
```

### Use with CSS Modules

```tsx
import styles from './my-component.module.css';
import { Button } from '@bitbybit-b3/elements-react';

<Button className={styles.myButton}>Styled Button</Button>
```

### Dark Mode

Components support dark mode via CSS variables. Update your theme:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark mode variables */
}
```

## Tree Shaking

Only import what you need - unused components are automatically removed:

```tsx
// Good - Only Button and Card are included in bundle
import { Button, Card } from '@bitbybit-b3/elements-react';

// Avoid - Imports everything (though still tree-shakeable)
import * as Elements from '@bitbybit-b3/elements-react';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Found a bug or want to contribute? Visit our [GitHub repository](https://github.com/BitByBit-B3/elements).

## License

Apache 2.0 License - see [LICENSE](https://github.com/BitByBit-B3/elements/blob/main/LICENSE) for details.

## Links

- [Documentation](https://bitbybit-b3.github.io/elements)
- [GitHub](https://github.com/BitByBit-B3/elements)
- [Issues](https://github.com/BitByBit-B3/elements/issues)

---

Made by the [BitByBit-B3](https://github.com/BitByBit-B3) team. Components from our real-world projects, shared with the community.
