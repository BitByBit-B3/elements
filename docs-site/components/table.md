# Table

A table component for displaying tabular data with header, body, and footer sections.

## Installation

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@bitbybit-b3/elements-react';

export default function Demo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Examples

### Basic Table

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
      <TableCell>Developer</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>Designer</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Footer

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Widget A</TableCell>
      <TableCell>5</TableCell>
      <TableCell className="text-right">$50.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Widget B</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-right">$75.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$125.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### With Status Badges

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Order ID</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">#3001</TableCell>
      <TableCell>John Doe</TableCell>
      <TableCell>
        <Badge variant="success">Completed</Badge>
      </TableCell>
      <TableCell className="text-right">$299.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">#3002</TableCell>
      <TableCell>Jane Smith</TableCell>
      <TableCell>
        <Badge variant="warning">Pending</Badge>
      </TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">#3003</TableCell>
      <TableCell>Bob Johnson</TableCell>
      <TableCell>
        <Badge variant="destructive">Cancelled</Badge>
      </TableCell>
      <TableCell className="text-right">$450.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Actions

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Developer</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm">Edit</Button>
        <Button variant="ghost" size="sm">Delete</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Striped Rows

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item, index) => (
      <TableRow
        key={item.id}
        className={index % 2 === 0 ? 'bg-muted/50' : ''}
      >
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.status}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Hoverable Rows

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="hover:bg-muted/50 cursor-pointer">
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
    <TableRow className="hover:bg-muted/50 cursor-pointer">
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Responsive Table

```tsx
<div className="w-full overflow-auto">
  <Table className="min-w-[600px]">
    <TableHeader>
      <TableRow>
        <TableHead>Column 1</TableHead>
        <TableHead>Column 2</TableHead>
        <TableHead>Column 3</TableHead>
        <TableHead>Column 4</TableHead>
        <TableHead>Column 5</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Data 1</TableCell>
        <TableCell>Data 2</TableCell>
        <TableCell>Data 3</TableCell>
        <TableCell>Data 4</TableCell>
        <TableCell>Data 5</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
```

## API Reference

### Table

Root table container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Table content |

### TableHeader

Table header section containing column headers.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Header rows |

### TableBody

Table body section containing data rows.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Body rows |

### TableFooter

Table footer section for summary data.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Footer rows |

### TableRow

A table row.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Table cells |

### TableHead

A header cell in the table header.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Header content |

### TableCell

A data cell in the table body.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `colSpan` | `number` | - | Number of columns to span |
| `children` | `ReactNode` | - | Cell content |

### TableCaption

Caption or description for the table.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Caption text |

## Styling

Tables use semantic HTML elements and can be customized with Tailwind CSS:

```tsx
<Table className="border-separate border-spacing-0">
  <TableHeader>
    <TableRow className="bg-primary text-primary-foreground">
      <TableHead className="text-white">Custom Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="border-b">
      <TableCell className="py-4">Custom Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Accessibility

- Uses semantic HTML table elements
- Proper heading hierarchy with `<thead>` and `<th>`
- Screen reader support via native table semantics
- Caption support for table descriptions
