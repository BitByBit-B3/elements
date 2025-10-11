# Card

A flexible container component for displaying content with optional header, footer, and structured sections.

## Installation

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@bitbybit-b3/elements-react';

export default function Demo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <p>Card footer</p>
      </CardFooter>
    </Card>
  );
}
```

## Examples

### Simple Card

```tsx
<Card>
  <CardContent>
    <p>A simple card with just content</p>
  </CardContent>
</Card>
```

### Card with Header

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Overview</CardTitle>
    <CardDescription>View your project statistics and activity</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <p>Active projects: 12</p>
      <p>Completed tasks: 45</p>
    </div>
  </CardContent>
</Card>
```

### Card with Actions

```tsx
<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Message preview content...</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Dismiss</Button>
    <Button>View All</Button>
  </CardFooter>
</Card>
```

### Form Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your information to create an account</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input placeholder="Email" type="email" />
    <Input placeholder="Password" type="password" />
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign Up</Button>
  </CardFooter>
</Card>
```

## API Reference

### Card

The root card container component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Card content |

### CardHeader

Header section of the card, typically contains title and description.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Header content |

### CardTitle

Title text for the card header.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Title text |

### CardDescription

Description text for the card header.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Description text |

### CardContent

Main content area of the card.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Card content |

### CardFooter

Footer section of the card, typically contains actions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Footer content |

## Styling

Card components use Tailwind CSS classes and can be customized using the `className` prop:

```tsx
<Card className="w-[350px]">
  <CardHeader className="bg-slate-100">
    <CardTitle>Custom Styled Card</CardTitle>
  </CardHeader>
  <CardContent className="pt-6">
    Content with custom padding
  </CardContent>
</Card>
```
