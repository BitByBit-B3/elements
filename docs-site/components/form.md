# Form

Composable form components with validation support using react-hook-form.

## Installation

```bash
npm install @bitbybit-b3/elements-react react-hook-form @hookform/resolvers zod
```

## Usage

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@bitbybit-b3/elements-react";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
});

export default function Demo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Examples

### Login Form

```tsx
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
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
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </Form>
  );
}
```

### Form with Select

```tsx
const profileSchema = z.object({
  name: z.string().min(2),
  role: z.string({
    required_error: "Please select a role",
  }),
});

function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
```

### Form with Checkbox

```tsx
const settingsSchema = z.object({
  marketing: z.boolean().default(false),
  security: z.boolean(),
});

function SettingsForm() {
  const form = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      marketing: false,
      security: true,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Marketing emails</FormLabel>
                <FormDescription>
                  Receive emails about new products and features
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="security"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Security updates</FormLabel>
                <FormDescription>
                  Receive security alerts and updates
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Save preferences</Button>
      </form>
    </Form>
  );
}
```

### Form with Textarea

```tsx
const feedbackSchema = z.object({
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500),
});

function FeedbackForm() {
  const form = useForm({
    resolver: zodResolver(feedbackSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="What's this about?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Maximum 500 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send Feedback</Button>
      </form>
    </Form>
  );
}
```

## API Reference

### Form

Root form context provider. Pass the form object returned by `useForm()`.

| Prop | Type | Description |
|------|------|-------------|
| All form props | - | Spreads props from `useForm()` return value |
| `children` | `ReactNode` | Form content |

### FormField

Renders a form field with validation state.

| Prop | Type | Description |
|------|------|-------------|
| `control` | `Control` | Form control from `useForm()` |
| `name` | `string` | Field name |
| `render` | `({ field }) => ReactNode` | Render function receiving field props |

### FormItem

Container for a form field and its labels/messages.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Form item content |

### FormLabel

Label for a form field.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Label text |

### FormControl

Wrapper for form input components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Input component |

### FormDescription

Helper text providing additional context.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Description text |

### FormMessage

Displays validation error messages.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Custom error message (optional) |

## Validation

Form components integrate with [react-hook-form](https://react-hook-form.com/) and support validation through [Zod](https://zod.dev/) schemas via [@hookform/resolvers](https://github.com/react-hook-form/resolvers).

### Validation Example

```tsx
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
  terms: z.boolean().refine((val) => val === true),
});
```
