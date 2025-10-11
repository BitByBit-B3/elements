# Components

Elements UI provides 48+ production-ready components that we use in our own projects.

## Overview

All components are:
- Built with Radix UI primitives
- Styled with Tailwind CSS
- Fully typed with TypeScript
- Accessible by default
- Customizable with variants
- Battle-tested in production

## Component Categories

### Layout & Navigation
- [Accordion](/components/accordion) - Collapsible content panels
- [Breadcrumb](/components/breadcrumb) - Navigation hierarchy
- [Navigation Menu](/components/navigation-menu) - Site navigation menus
- [Menubar](/components/menubar) - Application menu bars
- [Sidebar](/components/sidebar) - Application sidebars
- [Tabs](/components/tabs) - Tabbed interfaces

### Forms & Inputs
- [Button](/components/button) - Interactive buttons with variants
- [Input](/components/input) - Text inputs
- [Input OTP](/components/input-otp) - One-time password inputs
- [Textarea](/components/textarea) - Multi-line text inputs
- [Checkbox](/components/checkbox) - Binary selection input
- [Radio Group](/components/radio-group) - Single selection from multiple options
- [Select](/components/select) - Dropdown select inputs
- [Switch](/components/switch) - Toggle switches
- [Slider](/components/slider) - Range selection sliders
- [Label](/components/label) - Form field labels
- [Form](/components/form) - Form components with validation

### Overlays & Dialogs
- [Dialog](/components/dialog) - Modal dialogs and overlays
- [Alert Dialog](/components/alert-dialog) - User confirmations
- [Sheet](/components/sheet) - Side sheets and panels
- [Drawer](/components/drawer) - Side panel drawers
- [Popover](/components/popover) - Floating content containers
- [Hover Card](/components/hover-card) - Hover-triggered content cards
- [Tooltip](/components/tooltip) - Hover tooltips
- [Context Menu](/components/context-menu) - Right-click context menus
- [Dropdown Menu](/components/dropdown-menu) - Dropdown navigation menus

### Data Display
- [Card](/components/card) - Content container with header, body, and footer
- [Table](/components/table) - Data tables
- [Badge](/components/badge) - Status indicators and labels
- [Avatar](/components/avatar) - User profile images with fallbacks
- [Separator](/components/separator) - Visual dividers
- [Aspect Ratio](/components/aspect-ratio) - Maintain aspect ratios
- [Scroll Area](/components/scroll-area) - Custom scrollable areas

### Feedback
- [Alert](/components/alert) - User notifications
- [Toast](/components/toast) - Notification toasts
- [Toaster](/components/toaster) - Toast container
- [Sonner](/components/sonner) - Toast notifications (alternative)
- [Progress](/components/progress) - Progress indicators
- [Skeleton](/components/skeleton) - Loading placeholders

### Interactive
- [Calendar](/components/calendar) - Date selection interface
- [Carousel](/components/carousel) - Image and content sliders
- [Chart](/components/chart) - Data visualization components
- [Collapsible](/components/collapsible) - Expandable content sections
- [Command](/components/command) - Command palette and search
- [Resizable](/components/resizable) - Resizable panel layouts
- [Toggle](/components/toggle) - Toggle buttons
- [Toggle Group](/components/toggle-group) - Toggle button groups

## Quick Start

Import any component and start using it:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@bitbybit-b3/elements-react';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Next Steps

- Browse individual component pages for detailed documentation
- Check out the [Usage Guide](/guide/usage) for patterns and best practices
- See the [Installation](/guide/installation) guide for setup instructions
