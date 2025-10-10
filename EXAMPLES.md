# Elements UI - Usage Examples

Real-world examples for all components.

## Getting Started

### Installation

```bash
npm install @bitbybit-b3/elements-react react react-dom tailwindcss
```

### Basic Setup

See the [Quick Start Guide](./packages/react/README.md) for Tailwind configuration.

## Component Examples

### Authentication Form

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Form, FormField, FormItem, FormLabel, FormControl, Input } from '@bitbybit-b3/elements-react';
import { useForm } from 'react-hook-form';

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
```

### Data Table with Actions

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Button, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@bitbybit-b3/elements-react';
import { MoreHorizontal } from 'lucide-react';

export function UsersTable({ users }) {
  return (
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
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Modal Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from '@bitbybit-b3/elements-react';
import { useState } from 'react';

export function DeleteConfirmation({ onConfirm }) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Navigation Menu

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@bitbybit-b3/elements-react';

export function SiteNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-96 gap-3 p-4 md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a href="/products/web">Web Apps</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/products/mobile">Mobile Apps</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
```

### Toast Notifications

```tsx
import { Button, Toaster } from '@bitbybit-b3/elements-react';
import { useToast } from '@bitbybit-b3/elements-react';

export function NotificationExample() {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() =>
          toast({
            title: 'Success!',
            description: 'Your changes have been saved.',
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
}
```

### Command Palette

```tsx
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@bitbybit-b3/elements-react';
import { useState } from 'react';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```

### Settings Form

```tsx
import { Card, CardHeader, CardTitle, CardContent, Label, Switch, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Button } from '@bitbybit-b3/elements-react';

export function SettingsForm() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about your account activity
            </p>
          </div>
          <Switch />
        </div>
        <div className="space-y-2">
          <Label>Language</Label>
          <Select defaultValue="en">
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}
```

### Loading States

```tsx
import { Card, CardHeader, CardContent, Skeleton } from '@bitbybit-b3/elements-react';

export function LoadingCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}
```

### Calendar Picker

```tsx
import { Calendar, Popover, PopoverTrigger, PopoverContent, Button } from '@bitbybit-b3/elements-react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';

export function DatePicker() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : 'Pick a date'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}
```

## Next.js Examples

### App Router (Server Component)

```tsx
// app/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@bitbybit-b3/elements-react';

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Component</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is rendered on the server</p>
      </CardContent>
    </Card>
  );
}
```

### App Router (Client Component)

```tsx
// components/InteractiveCard.tsx
'use client';

import { Card, CardHeader, CardTitle, CardContent, Button } from '@bitbybit-b3/elements-react';
import { useState } from 'react';

export function InteractiveCard() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Component</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </CardContent>
    </Card>
  );
}
```

## More Examples

Visit our [documentation site](https://bitbybit-b3.github.io/elements) for more examples and live demos!
