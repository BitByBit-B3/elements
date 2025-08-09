# Elements UI Documentation

Welcome to the Elements UI library documentation. This comprehensive guide will help you understand, contribute to, and use the Elements UI component library.

## Documentation Structure

### For Contributors

- [**Creating Components**](./contributing/creating-components.md) - Complete guide to building new components
- [**Component Guidelines**](./contributing/component-guidelines.md) - Best practices and conventions
- [**Editing Components**](./contributing/editing-components.md) - How to modify existing components
- [**Testing Components**](./contributing/testing.md) - Testing strategies and tools
- [**Contributing Guide**](./contributing/CONTRIBUTING.md) - How to contribute to the project

### For Users

- [**Getting Started**](./usage/getting-started.md) - Installation and setup
- [**Component API Reference**](./usage/component-api.md) - Detailed component documentation
- [**Theming Guide**](./usage/theming.md) - Customizing themes and tokens
- [**Usage Examples**](./usage/examples.md) - Common use cases and patterns

### Architecture & Design

- [**Architecture Overview**](./architecture/overview.md) - Project structure and design decisions
- [**Design System**](./architecture/design-system.md) - Design tokens and theming
- [**Package Structure**](./architecture/packages.md) - Monorepo organization

### Development

- [**Development Setup**](./development/setup.md) - Local development environment
- [**Build Process**](./development/build.md) - Understanding the build pipeline
- [**Storybook**](./development/storybook.md) - Component development and documentation

## Quick Start

For quick reference, here are the most common tasks:

### Creating a New Component

```bash
# 1. Create component files
mkdir packages/react/src/components/my-component
touch packages/react/src/components/my-component/my-component.tsx
touch packages/react/src/components/my-component/my-component.stories.tsx

# 2. Follow the component creation guide
# See: docs/contributing/creating-components.md
```

### Running Development Environment

```bash
# Start Storybook for component development
pnpm storybook

# Start playground for testing
pnpm dev
```

### Testing Components

```bash
# Run all tests
pnpm test

# Type checking
pnpm typecheck
```

## Key Concepts

- **Tailwind-Only**: Components use only Tailwind CSS classes, no custom CSS
- **Design Tokens**: Centralized theme configuration in `packages/core`
- **Accessibility First**: All components follow WCAG guidelines
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Composable**: Components are designed to work together seamlessly

## Contributing

We welcome contributions! Please read our [Contributing Guide](./contributing/CONTRIBUTING.md) to get started.

## 📋 Component Checklist

When creating or editing components, ensure they meet these criteria:

- [ ] TypeScript definitions
- [ ] Storybook stories
- [ ] Accessibility compliance
- [ ] Tailwind-only styling
- [ ] Proper forwarded refs
- [ ] Comprehensive prop types
- [ ] Documentation and examples

---

**Need help?** Check out our guides or open an issue for assistance.
