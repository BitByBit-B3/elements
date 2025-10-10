# Usage

Learn how to use Elements UI components effectively in your applications.

## Basic Usage

Import components from the package:

```tsx
import { Button, Card, Input } from '@bitbybit-b3/elements-react';

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your name" />
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Component Variants

Most components come with different variants:

```tsx
import { Button } from '@bitbybit-b3/elements-react';

function Variants() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
```

## Sizes

Components support different sizes:

```tsx
import { Button } from '@bitbybit-b3/elements-react';

function Sizes() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🔥</Button>
    </div>
  );
}
```

## Customization with Tailwind

You can extend components with additional Tailwind classes:

```tsx
import { Button } from '@bitbybit-b3/elements-react';

function CustomButton() {
  return (
    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
      Gradient Button
    </Button>
  );
}
```

## Using the cn Utility

Elements UI includes a `cn` utility for merging class names:

```tsx
import { Button, cn } from '@bitbybit-b3/elements-react';

function ConditionalStyles({ isActive }: { isActive: boolean }) {
  return (
    <Button
      className={cn(
        "my-custom-class",
        isActive && "bg-green-500",
        !isActive && "opacity-50"
      )}
    >
      {isActive ? 'Active' : 'Inactive'}
    </Button>
  );
}
```

## Forms

Use form components with React Hook Form:

```tsx
import { useForm } from 'react-hook-form';
import { Button, Input, Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@bitbybit-b3/elements-react';

function MyForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
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

## Hooks

Elements UI provides useful hooks:

### useMobile

Detect if the user is on a mobile device:

```tsx
import { useMobile } from '@bitbybit-b3/elements-react';

function ResponsiveComponent() {
  const isMobile = useMobile();

  return (
    <div>
      {isMobile ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
    </div>
  );
}
```

### useToast

Show toast notifications:

```tsx
import { Button, useToast } from '@bitbybit-b3/elements-react';

function ToastExample() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your action was completed.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
```

## Dark Mode

All components support dark mode. Use Tailwind's dark mode configuration:

```js
// tailwind.config.js
export default {
  darkMode: 'class', // or 'media'
  // ... rest of config
}
```

Then toggle dark mode with a class on your root element:

```tsx
<html className="dark">
  {/* Your app */}
</html>
```

## Composition

Components are designed to be composable:

```tsx
import { Card, Button, Badge, Avatar } from '@bitbybit-b3/elements-react';

function UserCard({ user }) {
  return (
    <Card>
      <Card.Header>
        <div className="flex items-center gap-4">
          <Avatar>
            <Avatar.Image src={user.avatar} />
            <Avatar.Fallback>{user.initials}</Avatar.Fallback>
          </Avatar>
          <div>
            <Card.Title>{user.name}</Card.Title>
            <Badge variant="secondary">{user.role}</Badge>
          </div>
        </div>
      </Card.Header>
      <Card.Content>
        <p>{user.bio}</p>
      </Card.Content>
      <Card.Footer>
        <Button>View Profile</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Best Practices

1. **Import Only What You Need**: Tree-shaking works automatically
2. **Use TypeScript**: Take advantage of full type safety
3. **Customize with Tailwind**: Extend components with Tailwind classes
4. **Compose Components**: Build complex UIs from simple components
5. **Follow Accessibility**: Components are accessible by default, maintain this in your implementations

## Next Steps

- [Browse Components](/components/) - Explore all available components
- [View Examples](https://github.com/BitByBit-B3/elements/tree/main/examples) - See real-world examples
- [GitHub](https://github.com/BitByBit-B3/elements) - View source code and contribute
