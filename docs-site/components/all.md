# All Components

Complete reference of all 49+ components available in Elements UI.

## Layout & Structure

### Card
Content container with header, body, and footer sections.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@bitbybit-b3/elements-react';
```

[View Card Documentation](/components/card)

### Separator
Visual divider between content sections.

```tsx
import { Separator } from '@bitbybit-b3/elements-react';
```

### Aspect Ratio
Maintain consistent aspect ratios for media content.

```tsx
import { AspectRatio } from '@bitbybit-b3/elements-react';
```

### Scroll Area
Custom styled scrollable container.

```tsx
import { ScrollArea, ScrollBar } from '@bitbybit-b3/elements-react';
```

### Resizable
Adjustable panel layouts with drag handles.

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@bitbybit-b3/elements-react';
```

---

## Forms & Inputs

### Button
Interactive button with multiple variants and sizes.

```tsx
import { Button } from '@bitbybit-b3/elements-react';
```

[View Button Documentation](/components/button)

### Input
Text input field for forms.

```tsx
import { Input } from '@bitbybit-b3/elements-react';
```

[View Input Documentation](/components/input)

### Textarea
Multi-line text input.

```tsx
import { Textarea } from '@bitbybit-b3/elements-react';
```

### Label
Form field label.

```tsx
import { Label } from '@bitbybit-b3/elements-react';
```

### Checkbox
Binary selection checkbox.

```tsx
import { Checkbox } from '@bitbybit-b3/elements-react';
```

### Radio Group
Single selection from multiple options.

```tsx
import { RadioGroup, RadioGroupItem } from '@bitbybit-b3/elements-react';
```

### Select
Dropdown select with searchable options.

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem } from '@bitbybit-b3/elements-react';
```

[View Select Documentation](/components/select)

### Switch
Toggle switch control.

```tsx
import { Switch } from '@bitbybit-b3/elements-react';
```

### Slider
Range selection slider.

```tsx
import { Slider } from '@bitbybit-b3/elements-react';
```

### Form
Form components with validation support.

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl } from '@bitbybit-b3/elements-react';
```

[View Form Documentation](/components/form)

### Input OTP
One-time password input.

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@bitbybit-b3/elements-react';
```

---

## Navigation

### Tabs
Tabbed interface for content organization.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@bitbybit-b3/elements-react';
```

### Accordion
Collapsible content panels.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@bitbybit-b3/elements-react';
```

### Breadcrumb
Navigation path hierarchy.

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from '@bitbybit-b3/elements-react';
```

### Navigation Menu
Site navigation menu.

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@bitbybit-b3/elements-react';
```

### Menubar
Application menu bar.

```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent } from '@bitbybit-b3/elements-react';
```

### Dropdown Menu
Dropdown action menu.

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@bitbybit-b3/elements-react';
```

### Context Menu
Right-click context menu.

```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from '@bitbybit-b3/elements-react';
```

### Sidebar
Application sidebar navigation.

```tsx
import { Sidebar, SidebarProvider, SidebarContent } from '@bitbybit-b3/elements-react';
```

### Pagination
Page navigation controls.

```tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@bitbybit-b3/elements-react';
```

---

## Overlays & Dialogs

### Dialog
Modal dialog window.

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from '@bitbybit-b3/elements-react';
```

[View Dialog Documentation](/components/dialog)

### Alert Dialog
Confirmation dialog.

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from '@bitbybit-b3/elements-react';
```

### Sheet
Side panel sheet.

```tsx
import { Sheet, SheetTrigger, SheetContent } from '@bitbybit-b3/elements-react';
```

### Drawer
Mobile-friendly drawer panel.

```tsx
import { Drawer, DrawerTrigger, DrawerContent } from '@bitbybit-b3/elements-react';
```

### Popover
Floating content container.

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@bitbybit-b3/elements-react';
```

### Hover Card
Rich hover-triggered card.

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@bitbybit-b3/elements-react';
```

### Tooltip
Hover tooltip for hints.

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@bitbybit-b3/elements-react';
```

---

## Feedback & Status

### Alert
Important user notification.

```tsx
import { Alert, AlertTitle, AlertDescription } from '@bitbybit-b3/elements-react';
```

### Toast
Notification toast message.

```tsx
import { Toast, ToastAction } from '@bitbybit-b3/elements-react';
import { useToast } from '@bitbybit-b3/elements-react';
```

### Toaster
Toast notification container.

```tsx
import { Toaster } from '@bitbybit-b3/elements-react';
```

### Sonner
Alternative toast system.

```tsx
import { Sonner } from '@bitbybit-b3/elements-react';
```

### Progress
Progress indicator bar.

```tsx
import { Progress } from '@bitbybit-b3/elements-react';
```

### Skeleton
Loading state placeholder.

```tsx
import { Skeleton } from '@bitbybit-b3/elements-react';
```

### Badge
Status indicator label.

```tsx
import { Badge } from '@bitbybit-b3/elements-react';
```

---

## Data Display

### Table
Data table with header, body, and footer.

```tsx
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@bitbybit-b3/elements-react';
```

[View Table Documentation](/components/table)

### Avatar
User profile image with fallback.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@bitbybit-b3/elements-react';
```

### Calendar
Date picker calendar.

```tsx
import { Calendar } from '@bitbybit-b3/elements-react';
```

### Chart
Data visualization charts.

```tsx
import { ChartContainer, ChartTooltip, ChartLegend } from '@bitbybit-b3/elements-react';
```

### Carousel
Content and image slider.

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '@bitbybit-b3/elements-react';
```

---

## Interactive

### Command
Command palette with search.

```tsx
import { Command, CommandInput, CommandList, CommandItem } from '@bitbybit-b3/elements-react';
```

### Collapsible
Expandable content section.

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@bitbybit-b3/elements-react';
```

### Toggle
Toggle button.

```tsx
import { Toggle } from '@bitbybit-b3/elements-react';
```

### Toggle Group
Group of toggle buttons.

```tsx
import { ToggleGroup, ToggleGroupItem } from '@bitbybit-b3/elements-react';
```

---

## Utilities

### cn
Utility for merging Tailwind CSS classes.

```tsx
import { cn } from '@bitbybit-b3/elements-react';
```

---

## Hooks

### useIsMobile
Hook for responsive mobile detection.

```tsx
import { useIsMobile } from '@bitbybit-b3/elements-react';

const isMobile = useIsMobile();
```

### useToast
Hook for toast notifications.

```tsx
import { useToast } from '@bitbybit-b3/elements-react';

const { toast } = useToast();
toast({
  title: "Success",
  description: "Your changes have been saved",
});
```

---

## Installation

All components are available in a single package:

```bash
npm install @bitbybit-b3/elements-react
```

## Usage

Import only the components you need:

```tsx
import { Button, Card, Dialog, Input } from '@bitbybit-b3/elements-react';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Component Principles

All components follow these principles:

- **Accessible**: Built on Radix UI primitives with ARIA support
- **Composable**: Flexible composition patterns
- **Typed**: Full TypeScript support
- **Customizable**: Tailwind CSS styling
- **Modern**: React 18+ patterns
- **Experimental**: Part of a university learning project

## Next Steps

- Browse individual [component pages](/components/) for detailed documentation
- Check the [Getting Started](/guide/getting-started) guide
- View [usage examples](/guide/usage)
