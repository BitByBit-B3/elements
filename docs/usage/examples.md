# Usage Examples

This document provides practical examples of how to use components from the Elements UI library in common scenarios.

## Table of Contents

- [Basic Components](#basic-components)
- [Form Examples](#form-examples)
- [Layout Examples](#layout-examples)
- [Navigation Examples](#navigation-examples)
- [Data Display Examples](#data-display-examples)
- [Feedback Examples](#feedback-examples)
- [Complex Examples](#complex-examples)

## Basic Components

### Button Examples

#### Basic Button Usage

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function BasicButtons() {
  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      <div className="space-x-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="space-x-2">
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </div>
  );
}
```

#### Button with Icons

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function ButtonsWithIcons() {
  return (
    <div className="space-x-4">
      <Button
        leftIcon={
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
        }
      >
        Add Item
      </Button>

      <Button
        rightIcon={
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        }
      >
        Save Changes
      </Button>

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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </div>
  );
}
```

### Input Examples

#### Basic Input

```tsx
import { Input } from "@bitbybit-b3/elements-react";

function BasicInput() {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your text..."
    />
  );
}
```

#### Input with Validation

```tsx
import { Input } from "@bitbybit-b3/elements-react";

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setValue(email);
    setError(!validateEmail(email) && email.length > 0);
  };

  return (
    <div className="space-y-2">
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Enter your email"
        error={error}
        helperText={error ? "Please enter a valid email address" : ""}
      />
      <Button
        onClick={() => console.log("Submit:", value)}
        disabled={!validateEmail(value)}
      >
        Submit
      </Button>
    </div>
  );
}
```

## Form Examples

### Login Form

```tsx
import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@bitbybit-b3/elements-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login:", { email, password });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
            loading={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
```

### Registration Form

```tsx
import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@bitbybit-b3/elements-react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Please enter a valid email",
      password:
        formData.password.length >= 8
          ? ""
          : "Password must be at least 8 characters",
      confirmPassword:
        formData.password === formData.confirmPassword
          ? ""
          : "Passwords do not match",
      agreeToTerms: formData.agreeToTerms ? "" : "You must agree to the terms",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration:", formData);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Full Name"
              required
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email address"
              required
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
              required
            />
            {errors.password && (
              <p className="text-sm text-destructive mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <Input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Confirm Password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
              className="rounded border-gray-300"
            />
            <label htmlFor="agreeToTerms" className="text-sm">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-sm text-destructive">{errors.agreeToTerms}</p>
          )}

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

## Layout Examples

### Card Layout

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@bitbybit-b3/elements-react";

function CardLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Feature One</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is the description for the first feature. It explains what this
            feature does and why it's useful.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Two</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is the description for the second feature. It explains what
            this feature does and why it's useful.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Three</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is the description for the third feature. It explains what this
            feature does and why it's useful.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
```

### Form Layout

```tsx
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@bitbybit-b3/elements-react";

function FormLayout() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <Input placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <Input placeholder="Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Website
                </label>
                <Input placeholder="https://example.com" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Navigation Examples

### Simple Navigation

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function SimpleNavigation() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">My App</h1>
          </div>

          <div className="flex items-center space-x-4">
            {["home", "about", "services", "contact"].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "primary" : "ghost"}
                onClick={() => setCurrentPage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### Breadcrumb Navigation

```tsx
import { Badge } from "@bitbybit-b3/elements-react";

function BreadcrumbNavigation() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops", href: "/products/electronics/laptops" },
  ];

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          {index > 0 && <span className="mx-2 text-muted-foreground">/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <a href={crumb.href} className="text-primary hover:underline">
              {crumb.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}
```

## Data Display Examples

### Data Table

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@bitbybit-b3/elements-react";

function DataTable() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Moderator",
      status: "Active",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="font-medium">Name</TableCell>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell className="font-medium">Role</TableCell>
            <TableCell className="font-medium">Status</TableCell>
            <TableCell className="font-medium">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={user.role === "Admin" ? "destructive" : "default"}
                >
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```

### Card Grid

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@bitbybit-b3/elements-react";

function CardGrid() {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$299.99",
      description: "High-quality wireless headphones with noise cancellation",
      image: "headphones.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$399.99",
      description: "Feature-rich smartwatch with health monitoring",
      image: "watch.jpg",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: "$149.99",
      description: "Portable Bluetooth speaker with premium sound",
      image: "speaker.jpg",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "$79.99",
      description: "High-precision gaming mouse with customizable RGB",
      image: "mouse.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col h-full">
          <div className="aspect-square bg-gray-200 rounded-t-lg mb-4"></div>
          <CardHeader>
            <CardTitle className="text-lg">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">{product.price}</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

## Feedback Examples

### Alert Messages

```tsx
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@bitbybit-b3/elements-react";

function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational alert to provide important information to the
          user.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully!
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review your input before proceeding. Some fields may contain
          errors.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred while processing your request. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  );
}
```

### Loading States

```tsx
import { Button, Spinner } from "@bitbybit-b3/elements-react";

function LoadingExamples() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-x-4">
        <Button disabled={isLoading} onClick={handleClick}>
          {isLoading ? "Loading..." : "Click to Load"}
        </Button>

        <Button variant="outline" disabled={isLoading}>
          <Spinner size="sm" className="mr-2" />
          Loading with Spinner
        </Button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <Spinner size="lg" className="mx-auto mb-4" />
            <p className="text-muted-foreground">Loading content...</p>
          </div>
        </div>
      )}
    </div>
  );
}
```

## Complex Examples

### Dashboard Layout

```tsx
import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Alert,
} from "@bitbybit-b3/elements-react";

function Dashboard() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "info", message: "Welcome to your dashboard!", read: false },
    {
      id: 2,
      type: "warning",
      message: "Your subscription expires soon",
      read: false,
    },
    {
      id: 3,
      type: "success",
      message: "Profile updated successfully",
      read: true,
    },
  ]);

  const stats = [
    { label: "Total Users", value: "1,234", change: "+12%" },
    { label: "Revenue", value: "$45,678", change: "+23%" },
    { label: "Active Sessions", value: "567", change: "+5%" },
    { label: "Conversion Rate", value: "3.2%", change: "+0.8%" },
  ];

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Input placeholder="Search..." className="w-64" />
              <Button variant="outline">Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-800"
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "John Doe",
                      action: "created a new project",
                      time: "2 minutes ago",
                    },
                    {
                      user: "Jane Smith",
                      action: "updated settings",
                      time: "15 minutes ago",
                    },
                    {
                      user: "Bob Johnson",
                      action: "commented on your post",
                      time: "1 hour ago",
                    },
                    {
                      user: "Alice Brown",
                      action: "shared a document",
                      time: "3 hours ago",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.user}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.action}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        notification.read
                          ? "bg-gray-50"
                          : "bg-blue-50 border-blue-200"
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            notification.read ? "bg-gray-400" : "bg-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          {!notification.read && (
                            <Badge variant="default" className="mt-1 text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
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
                    Create New Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Upload Files
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Invite Users
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
```

### Modal Dialog

```tsx
import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ModalFooter,
} from "@bitbybit-b3/elements-react";

function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  const openUserModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <Badge variant="default" className="mt-1">
                    {user.role}
                  </Badge>
                </div>
                <div className="space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openUserModal(user)}
                  >
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => openUserModal({})}>Add New User</Button>
        </CardFooter>
      </Card>

      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalHeader>
          <ModalTitle>
            {selectedUser?.id ? "Edit User" : "Add New User"}
          </ModalTitle>
          <ModalDescription>
            {selectedUser?.id
              ? "Update user information below"
              : "Fill in the details to create a new user"}
          </ModalDescription>
        </ModalHeader>
        <ModalContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                defaultValue={selectedUser?.name || ""}
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                defaultValue={selectedUser?.email || ""}
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
              </select>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={closeModal}>
            {selectedUser?.id ? "Update User" : "Create User"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
```

## Best Practices

### 1. Consistent Spacing

Use consistent spacing throughout your application:

```tsx
// Good - consistent spacing
<div className="space-y-4">
  <Card className="p-6">
    <h2 className="text-lg font-semibold mb-4">Title</h2>
    <p className="text-muted-foreground">Content goes here</p>
  </Card>
</div>

// Bad - inconsistent spacing
<div className="space-y-2">
  <Card className="p-4">
    <h2 className="text-lg font-semibold mb-2">Title</h2>
    <p className="text-muted-foreground">Content goes here</p>
  </Card>
</div>
```

### 2. Responsive Design

Make your components responsive:

```tsx
// Good - responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>

// Bad - not responsive
<div className="grid grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### 3. Loading States

Always provide loading feedback:

```tsx
// Good - loading states
const [isLoading, setIsLoading] = useState(false);

const handleClick = async () => {
  setIsLoading(true);
  try {
    await someAsyncOperation();
  } finally {
    setIsLoading(false);
  }
};

return (
  <Button disabled={isLoading} loading={isLoading}>
    Click me
  </Button>
);

// Bad - no loading feedback
const handleClick = async () => {
  await someAsyncOperation();
};

return <Button>Click me</Button>;
```

### 4. Error Handling

Handle errors gracefully:

```tsx
// Good - error handling
const [error, setError] = useState(null);

const handleSubmit = async () => {
  try {
    await someOperation();
    setError(null);
  } catch (err) {
    setError("Something went wrong");
  }
};

return (
  <div>
    <Button onClick={handleSubmit}>Submit</Button>
    {error && <Alert variant="destructive">{error}</Alert>}
  </div>
);

// Bad - no error handling
const handleSubmit = async () => {
  await someOperation();
};

return <Button onClick={handleSubmit}>Submit</Button>;
```

### 5. Accessibility

Ensure your components are accessible:

```tsx
// Good - accessibility
<Button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
>
  Close
</Button>

// Bad - no accessibility attributes
<Button>Close</Button>
```

## Next Steps

- [Component API Reference](./component-api.md) - Detailed component documentation
- [Theming Guide](./theming.md) - Customize colors and styles
- [Getting Started](./getting-started.md) - Installation and setup
- [Architecture Overview](../architecture/overview.md) - Understanding the project structure
