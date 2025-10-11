# Dialog

A modal dialog component for displaying content in a layer above the main application.

## Installation

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@bitbybit-b3/elements-react';

export default function Demo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description that provides additional context.
          </DialogDescription>
        </DialogHeader>
        <div>Dialog content goes here</div>
      </DialogContent>
    </Dialog>
  );
}
```

## Examples

### Simple Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <Input placeholder="Name" />
      <Input placeholder="Email" type="email" />
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Controlled Dialog

```tsx
function ControlledDialogDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Open Controlled Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Controlled Dialog</DialogTitle>
        </DialogHeader>
        <p>This dialog's open state is controlled externally.</p>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Form Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Create New Project</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Create Project</DialogTitle>
      <DialogDescription>
        Add a new project to your workspace. Click create when you're done.
      </DialogDescription>
    </DialogHeader>
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>
        <Input id="name" placeholder="My Awesome Project" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter project description" />
      </div>
      <DialogFooter>
        <Button type="submit">Create Project</Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
```

### Custom Width Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Wide Dialog</Button>
  </DialogTrigger>
  <DialogContent className="max-w-3xl">
    <DialogHeader>
      <DialogTitle>Wide Content Dialog</DialogTitle>
    </DialogHeader>
    <div className="grid grid-cols-2 gap-4">
      <div>Left column content</div>
      <div>Right column content</div>
    </div>
  </DialogContent>
</Dialog>
```

## API Reference

### Dialog

The root dialog component that manages dialog state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |
| `modal` | `boolean` | `true` | Whether the dialog is modal |

### DialogTrigger

Button that triggers the dialog to open.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Compose the trigger with a child element |
| `children` | `ReactNode` | - | Trigger content |

### DialogContent

The content container for the dialog.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Dialog content |
| `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | - | Callback when escape key is pressed |
| `onPointerDownOutside` | `(event: PointerDownOutsideEvent) => void` | - | Callback when clicking outside |

### DialogHeader

Header section for the dialog, typically contains title and description.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Header content |

### DialogTitle

Title text for the dialog.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Title text |

### DialogDescription

Description text providing context for the dialog.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Description text |

### DialogFooter

Footer section for the dialog, typically contains action buttons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Footer content |

## Accessibility

- Built on Radix UI Dialog primitive
- Supports keyboard navigation (Escape to close)
- Focus is trapped within the dialog when open
- Returns focus to trigger element on close
- ARIA attributes are automatically applied
