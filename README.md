# Elements UI Library

> **Production-ready components we built for our projects, now shared with the community.**

A comprehensive Tailwind-based React UI component library featuring 48+ beautifully designed components built with Radix UI primitives and Tailwind CSS. These are real components we use in our production applications, battle-tested and continuously updated.

[![npm version](https://img.shields.io/npm/v/@bitbybit-b3/elements-react.svg)](https://github.com/BitByBit-B3/elements/packages)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-BitByBit--B3-181717?logo=github)](https://github.com/BitByBit-B3)

## Built by BitByBit-B3

**Author**: [BitByBit-B3](https://github.com/BitByBit-B3)

**Contributors**:

- [YasogaN](https://github.com/YasogaN)
- [Methika1234](https://github.com/Methika1234)
- [Sithumli](https://github.com/Sithumli)
- [Thilina2468](https://github.com/Thilina2468)
- [d3varaja](https://github.com/d3varaja)
- [Thanukamax](https://github.com/Thanukamax)

## Documentation

Visit our documentation site: [https://bitbybit-b3.github.io/elements](https://bitbybit-b3.github.io/elements)

## Quick Start

```bash
# Install the package
npm install @bitbybit-b3/elements-react

# or with pnpm
pnpm add @bitbybit-b3/elements-react

# or with yarn
yarn add @bitbybit-b3/elements-react
```

```tsx
import { Button } from "@bitbybit-b3/elements-react";

function App() {
  return <Button variant="default">Click me</Button>;
}
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
pnpm install
```

### Development

Start the development environment:

```bash
pnpm dev             # start playground development
```

### Building

Build all packages:

```bash
pnpm build           # build all packages
```

### Documentation

Start Storybook:

```bash
pnpm storybook       # start storybook from docs package
```

Build Storybook for production:

```bash
pnpm build-storybook
```

### Testing

Run tests:

```bash
pnpm test
```

### Type Checking

Check TypeScript types:

```bash
pnpm typecheck       # tsc --noEmit
```

## Project Structure

```
elements/
├── package.json              # Workspace root package.json
├── pnpm-workspace.yaml       # Workspace configuration
├── tailwind.config.cjs       # Root Tailwind config
├── postcss.config.cjs        # Root PostCSS config
├── packages/                 # Workspace packages
│   ├── core/                 # Core design tokens and theme
│   ├── react/                # React components library
│   ├── docs/                 # Storybook documentation
│   └── playground/           # Development playground
└── docs/                     # Documentation site
    ├── architecture/         # Architecture documentation
    ├── contributing/         # Contributing guidelines
    ├── development/          # Development documentation
    └── usage/                # Usage documentation
```

## Components

### Available Components (48+)

- **Accordion** - Collapsible content panels
- **Alert & Alert Dialog** - User notifications and confirmations
- **Avatar** - User profile images with fallbacks
- **Badge** - Status indicators and labels
- **Breadcrumb** - Navigation hierarchy
- **Button** - Interactive buttons with variants
- **Calendar** - Date selection interface
- **Card** - Content container with header, body, and footer
- **Carousel** - Image and content sliders
- **Chart** - Data visualization components
- **Checkbox** - Binary selection input
- **Collapsible** - Expandable content sections
- **Command** - Command palette and search
- **Context Menu** - Right-click context menus
- **Dialog** - Modal dialogs and overlays
- **Drawer** - Side panel drawers
- **Dropdown Menu** - Dropdown navigation menus
- **Form** - Form components with validation
- **Hover Card** - Hover-triggered content cards
- **Input & Input OTP** - Text and OTP inputs
- **Label** - Form field labels
- **Menubar** - Application menu bars
- **Navigation Menu** - Site navigation menus
- **Pagination** - Page navigation controls
- **Popover** - Floating content containers
- **Progress** - Progress indicators
- **Radio Group** - Single selection from multiple options
- **Resizable** - Resizable panel layouts
- **Scroll Area** - Custom scrollable areas
- **Select** - Dropdown select inputs
- **Separator** - Visual dividers
- **Sheet** - Side sheets and panels
- **Sidebar** - Application sidebars
- **Skeleton** - Loading placeholders
- **Slider** - Range selection sliders
- **Sonner** - Toast notifications
- **Switch** - Toggle switches
- **Table** - Data tables
- **Tabs** - Tabbed interfaces
- **Textarea** - Multi-line text inputs
- **Toast** - Notification toasts
- **Toggle & Toggle Group** - Toggle buttons
- **Tooltip** - Hover tooltips

### Hooks

- **useMobile** - Mobile device detection
- **useToast** - Toast notification management

### Utilities

- **cn** - Tailwind class name merger utility

## Packages

### Current Packages

#### `@bitbybit-b3/elements-core`

Core design tokens and theme for Elements UI library.

#### `@bitbybit-b3/elements-react`

React components library for Elements UI with 49+ production-ready components.

### Expandable Package System

Elements UI is designed to grow infinitely! New packages are automatically created as needed:

**Framework-Specific (Auto-Created):**

- `@bitbybit-b3/elements-nextjs` - Next.js components (Server Components, App Router)
- `@bitbybit-b3/elements-vue` - Vue components
- `@bitbybit-b3/elements-svelte` - Svelte components
- `@bitbybit-b3/elements-solid` - SolidJS components

**Utility Packages (Auto-Created):**

- `@bitbybit-b3/elements-utils` - Framework-agnostic utilities
- `@bitbybit-b3/elements-hooks` - React hooks library
- `@bitbybit-b3/elements-icons` - Icon library

Use `/update-components <path>` to automatically create new packages when scanning projects!

### `@bitbybit-b3/elements-docs`

Storybook documentation for Elements UI library.

### `@bitbybit-b3/elements-playground`

Development playground for testing components.

## Scripts

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `pnpm install`         | Install all dependencies       |
| `pnpm dev`             | Start playground development   |
| `pnpm build`           | Build all packages             |
| `pnpm storybook`       | Start Storybook                |
| `pnpm build-storybook` | Build Storybook for production |
| `pnpm test`            | Run tests                      |
| `pnpm typecheck`       | TypeScript type checking       |

## Roadmap

### Automation & Expansion

- [x] **Auto-Expandable Package System** - Automatically create packages for any framework
- [x] **Intelligent Component Updates** - AI agent that scans projects and updates library
- [x] **Auto-Scaling CI/CD** - GitHub Actions that automatically detect and publish new packages

### Planned Packages

- [ ] **@bitbybit-b3/elements-nextjs** - Next.js specific components
- [ ] **@bitbybit-b3/elements-hooks** - Framework-agnostic hooks
- [ ] **@bitbybit-b3/elements-utils** - Utility functions library
- [ ] **shadcn/ui Extension** - Compatible extension package for shadcn/ui

### Features

- [ ] Component playground and interactive examples
- [ ] Dark mode optimization
- [ ] Additional components based on community feedback
- [ ] Performance optimizations
- [ ] Accessibility enhancements

## Contributing

We welcome contributions! These components are actively used in our projects, and we update them regularly.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm typecheck` to check types
5. Run `pnpm build` to build packages
6. Run `pnpm test` to run tests
7. Submit a pull request

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Links

- **GitHub**: [https://github.com/BitByBit-B3/elements](https://github.com/BitByBit-B3/elements)
- **Documentation**: [https://bitbybit-b3.github.io/elements](https://bitbybit-b3.github.io/elements)
- **Issues**: [https://github.com/BitByBit-B3/elements/issues](https://github.com/BitByBit-B3/elements/issues)
- **Team**: [https://github.com/BitByBit-B3](https://github.com/BitByBit-B3)

---

Made by the [BitByBit-B3](https://github.com/BitByBit-B3) team. Components from our real-world projects, shared with the community.
