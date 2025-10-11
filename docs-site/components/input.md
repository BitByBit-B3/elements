# Input

A text input component for forms and user input.

## Installation

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

```tsx
import { Input } from '@bitbybit-b3/elements-react';

export default function Demo() {
  return <Input placeholder="Enter text..." />;
}
```

## Examples

### Basic Input

```tsx
<Input placeholder="Email" type="email" />
```

### With Label

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
```

### Different Types

```tsx
<div className="space-y-4">
  <Input type="text" placeholder="Text input" />
  <Input type="email" placeholder="Email input" />
  <Input type="password" placeholder="Password input" />
  <Input type="number" placeholder="Number input" />
  <Input type="tel" placeholder="Phone input" />
  <Input type="url" placeholder="URL input" />
  <Input type="search" placeholder="Search input" />
</div>
```

### Disabled State

```tsx
<Input placeholder="Disabled input" disabled />
```

### With Icon

```tsx
<div className="relative">
  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-8" />
</div>
```

### With Button

```tsx
<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>
```

### File Input

```tsx
<div className="space-y-2">
  <Label htmlFor="picture">Upload Picture</Label>
  <Input id="picture" type="file" />
</div>
```

### Controlled Input

```tsx
function ControlledInputDemo() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p className="text-sm text-muted-foreground">
        You typed: {value}
      </p>
    </div>
  );
}
```

### With Form Validation

```tsx
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="username">Username</Label>
    <Input
      id="username"
      placeholder="Enter username"
      required
      minLength={3}
    />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="Enter email"
      required
    />
  </div>
  <Button type="submit">Submit</Button>
</form>
```

### With Error State

```tsx
<div className="space-y-2">
  <Label htmlFor="email-error">Email</Label>
  <Input
    id="email-error"
    type="email"
    placeholder="Enter email"
    className="border-red-500"
  />
  <p className="text-sm text-red-500">Please enter a valid email address</p>
</div>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | HTML input type (text, email, password, etc.) |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Default value (uncontrolled) |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `className` | `string` | - | Additional CSS classes |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | - | Change handler |

All standard HTML input attributes are also supported.

## Accessibility

- Uses native HTML `<input>` element
- Supports all standard input types
- Works with labels using `htmlFor` and `id`
- Supports required and validation attributes
- Keyboard accessible by default
