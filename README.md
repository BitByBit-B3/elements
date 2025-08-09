# Elements UI Library

A Tailwind-only React UI library built with pnpm workspace.

## 🚀 Getting Started

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

## 📁 Project Structure

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

## 📦 Packages

### `@bitbybit-b3/elements-core`

Core design tokens and theme for Elements UI library.

### `@bitbybit-b3/elements-react`

React components library for Elements UI.

### `@bitbybit-b3/elements-docs`

Storybook documentation for Elements UI library.

### `@bitbybit-b3/elements-playground`

Development playground for testing components.

## 🧪 Scripts

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `pnpm install`         | Install all dependencies       |
| `pnpm dev`             | Start playground development   |
| `pnpm build`           | Build all packages             |
| `pnpm storybook`       | Start Storybook                |
| `pnpm build-storybook` | Build Storybook for production |
| `pnpm test`            | Run tests                      |
| `pnpm typecheck`       | TypeScript type checking       |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm typecheck` to check types
5. Run `pnpm build` to build packages
6. Run `pnpm test` to run tests
7. Submit a pull request

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
