# Select

A dropdown select component for choosing from a list of options.

## Installation

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@bitbybit-b3/elements-react';

export default function Demo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

## Examples

### Basic Select

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
```

### With Label

```tsx
<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country" className="w-[280px]">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="au">Australia</SelectItem>
    </SelectContent>
  </Select>
</div>
```

### Grouped Options

```tsx
<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Controlled Select

```tsx
function ControlledSelectDemo() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-2">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Selected: {value || "None"}
      </p>
    </div>
  );
}
```

### Disabled Options

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Available Option</SelectItem>
    <SelectItem value="option2" disabled>Disabled Option</SelectItem>
    <SelectItem value="option3">Another Available</SelectItem>
  </SelectContent>
</Select>
```

### Disabled Select

```tsx
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

### In Form

```tsx
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="role">Role</Label>
    <Select name="role" required>
      <SelectTrigger id="role" className="w-full">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="developer">Developer</SelectItem>
        <SelectItem value="designer">Designer</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <Button type="submit">Submit</Button>
</form>
```

## API Reference

### Select

The root select component that manages selection state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled value |
| `onValueChange` | `(value: string) => void` | - | Callback when value changes |
| `defaultValue` | `string` | - | Default value (uncontrolled) |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `name` | `string` | - | Form input name |
| `required` | `boolean` | `false` | Whether selection is required |

### SelectTrigger

The button that opens the select dropdown.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | Element ID for label association |
| `children` | `ReactNode` | - | Trigger content (typically SelectValue) |

### SelectValue

Displays the selected value or placeholder.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text when no value selected |

### SelectContent

The dropdown container for select options.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `position` | `"popper" \| "item-aligned"` | `"popper"` | Positioning strategy |
| `children` | `ReactNode` | - | Select items and groups |

### SelectItem

An individual option in the select dropdown.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Option value (required) |
| `disabled` | `boolean` | `false` | Whether the option is disabled |
| `children` | `ReactNode` | - | Option display text |

### SelectGroup

Groups related options together.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | SelectLabel and SelectItem components |

### SelectLabel

Label for a group of options.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Label text |

## Accessibility

- Built on Radix UI Select primitive
- Keyboard navigation support (Arrow keys, Enter, Space)
- Screen reader announcements
- Focus management
- Supports required and disabled states
- Works with form labels
