# Button

A versatile button component with multiple variants, sizes, and states.

## Installation

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

```tsx
import { Button } from '@bitbybit-b3/elements-react';

export default function Demo() {
  return <Button>Click me</Button>;
}
```

## Variants

### Default

```tsx
<Button variant="default">Default</Button>
```

### Destructive

```tsx
<Button variant="destructive">Destructive</Button>
```

### Outline

```tsx
<Button variant="outline">Outline</Button>
```

### Secondary

```tsx
<Button variant="secondary">Secondary</Button>
```

### Ghost

```tsx
<Button variant="ghost">Ghost</Button>
```

### Link

```tsx
<Button variant="link">Link</Button>
```

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Icon />
</Button>
```

## With Icons

```tsx
import { Mail } from 'lucide-react';

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>
```

## Loading State

```tsx
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>
```

## As Link

```tsx
<Button asChild>
  <a href="/about">About</a>
</Button>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | The visual style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | The size of the button |
| `asChild` | `boolean` | `false` | Use child element as the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

All standard HTML button attributes are also supported.
