# Component API Reference

This document provides detailed API documentation for all components in the Elements UI library.

## Table of Contents

- [Button](#button)
- [Input](#input)
- [Card](#card)
- [Badge](#badge)
- [Alert](#alert)
- [Modal](#modal)
- [Tooltip](#tooltip)
- [Select](#select)
- [Checkbox](#checkbox)
- [Radio](#radio)
- [Switch](#switch)
- [Textarea](#textarea)
- [Table](#table)
- [Pagination](#pagination)
- [Tabs](#tabs)
- [Accordion](#accordion)
- [Progress](#progress)
- [Spinner](#spinner)

## Button

A versatile button component with multiple variants, sizes, and states.

### Import

```tsx
import { Button } from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                                                                       | Default     | Description                  |
| ----------- | ------------------------------------------------------------------------------------------ | ----------- | ---------------------------- |
| `variant`   | `'default' \| 'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'default'` | Visual style variant         |
| `size`      | `'default' \| 'sm' \| 'lg' \| 'icon'`                                                      | `'default'` | Size variant                 |
| `loading`   | `boolean`                                                                                  | `false`     | Loading state                |
| `disabled`  | `boolean`                                                                                  | `false`     | Disabled state               |
| `leftIcon`  | `React.ReactNode`                                                                          | -           | Icon to display on the left  |
| `rightIcon` | `React.ReactNode`                                                                          | -           | Icon to display on the right |
| `className` | `string`                                                                                   | `''`        | Additional CSS classes       |
| `...props`  | `React.ButtonHTMLAttributes<HTMLButtonElement>`                                            | -           | All standard button props    |

### Examples

#### Basic Usage

```tsx
<Button>Default Button</Button>
```

#### Variants

```tsx
<div className="space-x-2">
  <Button variant="default">Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>
```

#### Sizes

```tsx
<div className="space-x-2">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </Button>
</div>
```

#### States

```tsx
<div className="space-y-2">
  <Button>Enabled</Button>
  <Button disabled>Disabled</Button>
  <Button loading>Loading</Button>
</div>
```

#### With Icons

```tsx
<div className="space-x-2">
  <Button leftIcon={<Icon />}>With Left Icon</Button>
  <Button rightIcon={<Icon />}>With Right Icon</Button>
  <Button loading leftIcon={<Icon />}>
    Loading with Icon
  </Button>
</div>
```

## Input

A form input component with validation and styling.

### Import

```tsx
import { Input } from "@bitbybit-b3/elements-react";
```

### Props

| Prop           | Type                                               | Default | Description                        |
| -------------- | -------------------------------------------------- | ------- | ---------------------------------- |
| `value`        | `string`                                           | -       | Input value (controlled)           |
| `defaultValue` | `string`                                           | -       | Input default value (uncontrolled) |
| `onChange`     | `(e: React.ChangeEvent<HTMLInputElement>) => void` | -       | Change handler                     |
| `placeholder`  | `string`                                           | -       | Placeholder text                   |
| `disabled`     | `boolean`                                          | `false` | Disabled state                     |
| `error`        | `boolean`                                          | `false` | Error state                        |
| `helperText`   | `string`                                           | -       | Helper text                        |
| `className`    | `string`                                           | `''`    | Additional CSS classes             |
| `...props`     | `React.InputHTMLAttributes<HTMLInputElement>`      | -       | All standard input props           |

### Examples

#### Basic Usage

```tsx
<Input placeholder="Enter your name" />
```

#### Controlled Input

```tsx
const [value, setValue] = useState("");

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type something..."
/>;
```

#### Error State

```tsx
<Input
  error
  placeholder="This field is required"
  helperText="Please enter a valid value"
/>
```

#### Disabled State

```tsx
<Input disabled placeholder="This input is disabled" />
```

## Card

A flexible container component for displaying content.

### Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                   | Default | Description            |
| ----------- | -------------------------------------- | ------- | ---------------------- |
| `className` | `string`                               | `''`    | Additional CSS classes |
| `...props`  | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props |

### Examples

#### Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Card with Image

```tsx
<Card>
  <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
  <CardHeader>
    <CardTitle>Featured Post</CardTitle>
    <CardDescription>December 12, 2023</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is a featured post with an image at the top.</p>
  </CardContent>
</Card>
```

## Badge

A small status or label component.

### Import

```tsx
import { Badge } from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                                     | Default     | Description             |
| ----------- | -------------------------------------------------------- | ----------- | ----------------------- |
| `variant`   | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Visual style variant    |
| `className` | `string`                                                 | `''`        | Additional CSS classes  |
| `...props`  | `React.HTMLAttributes<HTMLSpanElement>`                  | -           | All standard span props |

### Examples

#### Badge Variants

```tsx
<div className="space-x-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
```

#### Badge with Content

```tsx
<div className="space-x-2">
  <Badge>New</Badge>
  <Badge variant="secondary">12</Badge>
  <Badge variant="destructive">Error</Badge>
</div>
```

## Alert

A contextual alert component for displaying messages.

### Import

```tsx
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                                   | Default     | Description            |
| ----------- | ------------------------------------------------------ | ----------- | ---------------------- |
| `variant`   | `'default' \| 'destructive' \| 'warning' \| 'success'` | `'default'` | Visual style variant   |
| `className` | `string`                                               | `''`        | Additional CSS classes |
| `...props`  | `React.HTMLAttributes<HTMLDivElement>`                 | -           | All standard div props |

### Examples

#### Alert Variants

```tsx
<Alert variant="default">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an informational alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>This is an error alert.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>This is a warning alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>This is a success alert.</AlertDescription>
</Alert>
```

## Modal

A modal dialog component for displaying content.

### Import

```tsx
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ModalFooter,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop           | Type                                   | Default | Description                      |
| -------------- | -------------------------------------- | ------- | -------------------------------- |
| `open`         | `boolean`                              | -       | Whether the modal is open        |
| `onOpenChange` | `(open: boolean) => void`              | -       | Callback when open state changes |
| `className`    | `string`                               | `''`    | Additional CSS classes           |
| `...props`     | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props           |

### Examples

#### Basic Modal

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal open={isOpen} onOpenChange={setIsOpen}>
  <ModalHeader>
    <ModalTitle>Confirm Action</ModalTitle>
    <ModalDescription>This action cannot be undone.</ModalDescription>
  </ModalHeader>
  <ModalContent>
    <p>Are you sure you want to proceed?</p>
  </ModalContent>
  <ModalFooter>
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button onClick={() => setIsOpen(false)}>Confirm</Button>
  </ModalFooter>
</Modal>;
```

## Tooltip

A tooltip component for displaying additional information.

### Import

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                     | Default | Description            |
| ----------- | ---------------------------------------- | ------- | ---------------------- |
| `content`   | `React.ReactNode`                        | -       | Tooltip content        |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip placement      |
| `className` | `string`                                 | `''`    | Additional CSS classes |
| `...props`  | `React.HTMLAttributes<HTMLDivElement>`   | -       | All standard div props |

### Examples

#### Basic Tooltip

```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

#### Custom Placement

```tsx
<div className="space-x-2">
  <Tooltip content="Top tooltip" placement="top">
    <Button>Top</Button>
  </Tooltip>
  <Tooltip content="Bottom tooltip" placement="bottom">
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip content="Left tooltip" placement="left">
    <Button>Left</Button>
  </Tooltip>
  <Tooltip content="Right tooltip" placement="right">
    <Button>Right</Button>
  </Tooltip>
</div>
```

## Select

A dropdown select component.

### Import

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop            | Type                                   | Default            | Description                 |
| --------------- | -------------------------------------- | ------------------ | --------------------------- |
| `value`         | `string`                               | -                  | Selected value (controlled) |
| `onValueChange` | `(value: string) => void`              | -                  | Value change handler        |
| `placeholder`   | `string`                               | `Select an option` | Placeholder text            |
| `disabled`      | `boolean`                              | `false`            | Disabled state              |
| `className`     | `string`                               | `''`               | Additional CSS classes      |
| `...props`      | `React.HTMLAttributes<HTMLDivElement>` | -                  | All standard div props      |

### Examples

#### Basic Select

```tsx
<Select onValueChange={(value) => console.log(value)}>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

## Checkbox

A checkbox component for multiple selection.

### Import

```tsx
import { Checkbox } from "@bitbybit-b3/elements-react";
```

### Props

| Prop              | Type                                          | Default | Description                |
| ----------------- | --------------------------------------------- | ------- | -------------------------- |
| `checked`         | `boolean`                                     | -       | Checked state (controlled) |
| `onCheckedChange` | `(checked: boolean) => void`                  | -       | Checked change handler     |
| `disabled`        | `boolean`                                     | `false` | Disabled state             |
| `className`       | `string`                                      | `''`    | Additional CSS classes     |
| `...props`        | `React.InputHTMLAttributes<HTMLInputElement>` | -       | All standard input props   |

### Examples

#### Basic Checkbox

```tsx
<Checkbox onCheckedChange={(checked) => console.log(checked)}>
  Accept terms and conditions
</Checkbox>
```

## Radio

A radio button component for single selection.

### Import

```tsx
import { Radio, RadioGroup } from "@bitbybit-b3/elements-react";
```

### Props

| Prop            | Type                                   | Default | Description                 |
| --------------- | -------------------------------------- | ------- | --------------------------- |
| `value`         | `string`                               | -       | Selected value (controlled) |
| `onValueChange` | `(value: string) => void`              | -       | Value change handler        |
| `disabled`      | `boolean`                              | `false` | Disabled state              |
| `className`     | `string`                               | `''`    | Additional CSS classes      |
| `...props`      | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props      |

### Examples

#### Radio Group

```tsx
<RadioGroup onValueChange={(value) => console.log(value)}>
  <div className="flex items-center space-x-2">
    <Radio value="option1" />
    <label>Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <Radio value="option2" />
    <label>Option 2</label>
  </div>
  <div className="flex items-center space-x-2">
    <Radio value="option3" />
    <label>Option 3</label>
  </div>
</RadioGroup>
```

## Switch

A toggle switch component.

### Import

```tsx
import { Switch } from "@bitbybit-b3/elements-react";
```

### Props

| Prop              | Type                                          | Default | Description                |
| ----------------- | --------------------------------------------- | ------- | -------------------------- |
| `checked`         | `boolean`                                     | -       | Checked state (controlled) |
| `onCheckedChange` | `(checked: boolean) => void`                  | -       | Checked change handler     |
| `disabled`        | `boolean`                                     | `false` | Disabled state             |
| `className`       | `string`                                      | `''`    | Additional CSS classes     |
| `...props`        | `React.InputHTMLAttributes<HTMLInputElement>` | -       | All standard input props   |

### Examples

#### Basic Switch

```tsx
<Switch onCheckedChange={(checked) => console.log(checked)} />
```

## Textarea

A textarea component for multi-line text input.

### Import

```tsx
import { Textarea } from "@bitbybit-b3/elements-react";
```

### Props

| Prop          | Type                                                  | Default | Description                 |
| ------------- | ----------------------------------------------------- | ------- | --------------------------- |
| `value`       | `string`                                              | -       | Textarea value (controlled) |
| `onChange`    | `(e: React.ChangeEvent<HTMLTextAreaElement>) => void` | -       | Change handler              |
| `placeholder` | `string`                                              | -       | Placeholder text            |
| `disabled`    | `boolean`                                             | `false` | Disabled state              |
| `rows`        | `number`                                              | `3`     | Number of rows              |
| `className`   | `string`                                              | `''`    | Additional CSS classes      |
| `...props`    | `React.TextareaHTMLAttributes<HTMLTextAreaElement>`   | -       | All standard textarea props |

### Examples

#### Basic Textarea

```tsx
<Textarea placeholder="Enter your message..." rows={4} />
```

## Table

A table component for displaying data.

### Import

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                     | Default | Description              |
| ----------- | ---------------------------------------- | ------- | ------------------------ |
| `className` | `string`                                 | `''`    | Additional CSS classes   |
| `...props`  | `React.HTMLAttributes<HTMLTableElement>` | -       | All standard table props |

### Examples

#### Basic Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Pagination

A pagination component for navigating through data.

### Import

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop           | Type                                   | Default | Description            |
| -------------- | -------------------------------------- | ------- | ---------------------- |
| `totalPages`   | `number`                               | -       | Total number of pages  |
| `currentPage`  | `number`                               | -       | Current page number    |
| `onPageChange` | `(page: number) => void`               | -       | Page change handler    |
| `className`    | `string`                               | `''`    | Additional CSS classes |
| `...props`     | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props |

### Examples

#### Basic Pagination

```tsx
<Pagination
  totalPages={10}
  currentPage={1}
  onPageChange={(page) => console.log(page)}
>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Tabs

A tab component for organizing content.

### Import

```tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop            | Type                                   | Default | Description                   |
| --------------- | -------------------------------------- | ------- | ----------------------------- |
| `value`         | `string`                               | -       | Active tab value (controlled) |
| `onValueChange` | `(value: string) => void`              | -       | Tab change handler            |
| `className`     | `string`                               | `''`    | Additional CSS classes        |
| `...props`      | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props        |

### Examples

#### Basic Tabs

```tsx
<Tabs onValueChange={(value) => console.log(value)}>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3</p>
  </TabsContent>
</Tabs>
```

## Accordion

An accordion component for collapsible content.

### Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@bitbybit-b3/elements-react";
```

### Props

| Prop          | Type                                   | Default    | Description                    |
| ------------- | -------------------------------------- | ---------- | ------------------------------ |
| `type`        | `'single' \| 'multiple'`               | `'single'` | Accordion type                 |
| `collapsible` | `boolean`                              | `false`    | Whether items can be collapsed |
| `className`   | `string`                               | `''`       | Additional CSS classes         |
| `...props`    | `React.HTMLAttributes<HTMLDivElement>` | -          | All standard div props         |

### Examples

#### Basic Accordion

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Progress

A progress bar component for showing progress.

### Import

```tsx
import { Progress } from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                   | Default | Description            |
| ----------- | -------------------------------------- | ------- | ---------------------- |
| `value`     | `number`                               | -       | Progress value (0-100) |
| `className` | `string`                               | `''`    | Additional CSS classes |
| `...props`  | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props |

### Examples

#### Basic Progress

```tsx
<Progress value={45} />
```

## Spinner

A loading spinner component.

### Import

```tsx
import { Spinner } from "@bitbybit-b3/elements-react";
```

### Props

| Prop        | Type                                   | Default | Description            |
| ----------- | -------------------------------------- | ------- | ---------------------- |
| `size`      | `'sm' \| 'md' \| 'lg'`                 | `'md'`  | Spinner size           |
| `className` | `string`                               | `''`    | Additional CSS classes |
| `...props`  | `React.HTMLAttributes<HTMLDivElement>` | -       | All standard div props |

### Examples

#### Basic Spinner

```tsx
<Spinner />
```

#### Different Sizes

```tsx
<div className="space-x-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>
```

## Component Patterns

### Controlled Components

Most components support controlled usage patterns:

```tsx
// Controlled input
const [value, setValue] = useState("");
<Input value={value} onChange={(e) => setValue(e.target.value)} />;

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onCheckedChange={setChecked} />;
```

### Uncontrolled Components

Components also support uncontrolled usage:

```tsx
// Uncontrolled input
<Input defaultValue="Default value" />

// Uncontrolled checkbox
<Checkbox defaultChecked />
```

### Composition

Components are designed to work together:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Form</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input placeholder="Name" />
    <Input placeholder="Email" />
    <Button>Submit</Button>
  </CardContent>
</Card>
```

## Accessibility

All components include accessibility features:

- **Keyboard navigation**: Full keyboard support
- **Screen reader support**: Proper ARIA attributes
- **Focus management**: Visible focus indicators
- **Color contrast**: WCAG compliant colors

## TypeScript Support

All components provide full TypeScript definitions:

```tsx
interface CustomButtonProps extends ButtonProps {
  customProp: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  customProp,
  ...props
}) => {
  return <Button {...props}>{customProp}</Button>;
};
```

## Best Practices

1. **Use semantic HTML elements** when possible
2. **Provide proper labels** for form controls
3. **Test accessibility** with keyboard navigation
4. **Use controlled components** for complex state management
5. **Combine components** for rich interfaces
6. **Follow the design system** for consistency

## Next Steps

- [Usage Examples](./examples.md) - See components in action
- [Theming Guide](./theming.md) - Customize the look and feel
- [Architecture Overview](../architecture/overview.md) - Understand the project structure
