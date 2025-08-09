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
pnpm -w dev          # start workspace dev tasks (docs/playground)
```

### Building

Build all packages:

```bash
pnpm -w build        # build all packages (tsup)
```

### Documentation

Start Storybook:

```bash
pnpm -w storybook    # start storybook from docs package
```

Build Storybook for production:

```bash
pnpm -w build-storybook
```

### Testing

Run tests (placeholder for now):

```bash
pnpm -w test
```

### Type Checking

Check TypeScript types:

```bash
pnpm -w typecheck    # tsc --noEmit
```

## 📁 Project Structure

```
elements/
├── package.json              # Workspace root package.json
├── pnpm-workspace.yaml       # Workspace configuration
├── tailwind.config.cjs       # Root Tailwind config
├── postcss.config.cjs        # Root PostCSS config
├── packages/
│   ├── core/                 # Core design tokens and theme
│   ├── react/                # React components library
│   ├── docs/                 # Storybook documentation
│   └── playground/           # Development playground
└── .github/
    └── workflows/
        └── ci.yml            # CI/CD pipeline
```

## 📦 Packages

### `@bitbybit-b3/elements-core`

Core design tokens and theme utilities.

### `@bitbybit-b3/elements-react`

React components library built with Tailwind CSS.

### `@bitbybit-b3/elements-docs`

Storybook documentation site.

### `@bitbybit-b3/elements-playground`

Development playground for testing components.

## 🧪 Scripts

| Command                   | Description                    |
| ------------------------- | ------------------------------ |
| `pnpm install`            | Install all dependencies       |
| `pnpm -w dev`             | Start workspace dev tasks      |
| `pnpm -w build`           | Build all packages             |
| `pnpm -w storybook`       | Start Storybook                |
| `pnpm -w build-storybook` | Build Storybook for production |
| `pnpm -w test`            | Run tests                      |
| `pnpm -w typecheck`       | TypeScript type checking       |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
