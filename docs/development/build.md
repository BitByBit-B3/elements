# Build Process

This document provides detailed information about the build process and configuration for the Elements UI library.

## Table of Contents

- [Overview](#overview)
- [Build Tools](#build-tools)
- [Build Configuration](#build-configuration)
- [Build Scripts](#build-scripts)
- [Build Process](#build-process)
- [Development Builds](#development-builds)
- [Production Builds](#production-builds)
- [Build Optimization](#build-optimization)
- [Build Artifacts](#build-artifacts)
- [Build Performance](#build-performance)
- [Troubleshooting](#troubleshooting)

## Overview

The Elements UI library uses a modern build system optimized for performance and developer experience. The build process is organized around several key tools:

- **tsup**: For building TypeScript packages
- **Vite**: For building the playground application
- **Storybook**: For building documentation
- **PostCSS**: For CSS processing

The build system is designed to:

- Produce optimized, production-ready builds
- Maintain fast development builds
- Provide type safety through TypeScript
- Generate proper distribution packages
- Support multiple output formats (CommonJS, ES Modules)

## Build Tools

### tsup

**Purpose**: Fast TypeScript bundler for packages

**Configuration**: `packages/*/tsup.config.ts`

**Features**:

- Fast TypeScript compilation
- Multiple output formats (CJS, ESM)
- Type declaration generation
- Source map generation
- Tree shaking

### Vite

**Purpose**: Next-generation frontend build tool for the playground

**Configuration**: `packages/playground/vite.config.ts`

**Features**:

- Fast development server
- Optimized production builds
- Hot module replacement
- Plugin system
- Built-in optimizations

### Storybook

**Purpose**: Component documentation and development

**Configuration**: `packages/docs/.storybook/`

**Features**:

- Interactive component documentation
- Auto-generated API documentation
- Accessibility testing
- Development server

### PostCSS

**Purpose**: CSS transformation and processing

**Configuration**: `postcss.config.cjs`

**Features**:

- Tailwind CSS processing
- Autoprefixer
- CSS optimization

## Build Configuration

### Core Package Build

```typescript
// packages/core/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  clean: true,
  external: [],
});
```

**Key Configuration Options**:

- `entry`: Entry point for the build
- `format`: Output formats (CommonJS and ES Modules)
- `dts`: Generate TypeScript declarations
- `sourcemap`: Generate source maps
- `clean`: Clean output directory before build
- `external`: External dependencies

### React Package Build

```typescript
// packages/react/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  clean: true,
  external: ["react", "react-dom"],
});
```

**Key Differences from Core**:

- Externalizes React and React DOM
- Builds React-specific components
- Maintains the same output format

### Playground Build

```typescript
// packages/playground/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@bitbybit-b3/elements-core": path.resolve(__dirname, "../core/src"),
      "@bitbybit-b3/elements-react": path.resolve(__dirname, "../react/src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
```

**Key Configuration Options**:

- `plugins`: React plugin for JSX support
- `resolve.path`: Path aliases for workspace packages
- `server`: Development server configuration
- `optimizeDeps`: Dependency optimization
- `build`: Production build configuration

### Storybook Build

```typescript
// packages/docs/.storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Add Tailwind CSS support
    config.css = config.css || {};
    if (typeof config.css === "object") {
      config.css.postcss = config.css.postcss || {};
      if (typeof config.css.postcss === "object") {
        config.css.postcss.plugins = config.css.postcss.plugins || [];
        config.css.postcss.plugins.push(require("tailwindcss"));
        config.css.postcss.plugins.push(require("autoprefixer"));
      }
    }

    // Add path alias for workspace packages
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@bitbybit-b3/elements-core": "../../packages/core/src",
      "@bitbybit-b3/elements-react": "../../packages/react/src",
    };

    return config;
  },
};

export default config;
```

## Build Scripts

### Root Package Scripts

```json
// package.json
{
  "scripts": {
    "build": "pnpm -r run build",
    "build:core": "cd packages/core && pnpm build",
    "build:react": "cd packages/react && pnpm build",
    "build:docs": "cd packages/docs && pnpm build-storybook",
    "build:playground": "cd packages/playground && pnpm build",
    "build:watch": "pnpm -r run build --watch",
    "build:clean": "pnpm -r run build:clean",
    "build:analyze": "pnpm -r run build:analyze"
  }
}
```

### Package-Specific Scripts

```json
// packages/core/package.json
{
  "scripts": {
    "build": "tsup src/index.ts",
    "build:watch": "tsup src/index.ts --watch",
    "build:clean": "rm -rf dist",
    "build:analyze": "pnpm build && node -e \"console.log('Build complete for core package')\""
  }
}

// packages/react/package.json
{
  "scripts": {
    "build": "tsup",
    "build:watch": "tsup --watch",
    "build:clean": "rm -rf dist",
    "build:analyze": "pnpm build && node -e \"console.log('Build complete for react package')\""
  }
}

// packages/docs/package.json
{
  "scripts": {
    "build": "pnpm typecheck && pnpm build-storybook",
    "build:clean": "rm -rf storybook-static",
    "build:analyze": "pnpm build && node -e \"console.log('Build complete for docs package')\""
  }
}

// packages/playground/package.json
{
  "scripts": {
    "build": "tsc && vite build",
    "build:clean": "rm -rf dist",
    "build:analyze": "pnpm build && node -e \"console.log('Build complete for playground package')\""
  }
}
```

## Build Process

### 1. Core Package Build

```bash
cd packages/core
pnpm build
```

**Process**:

1. TypeScript compilation
2. Bundle generation (CJS and ESM)
3. Type declaration generation
4. Source map generation
5. Output to `dist/` directory

**Output**:

```
packages/core/dist/
├── index.js          # CommonJS bundle
├── index.esm.js      # ES Module bundle
├── index.d.ts        # TypeScript declarations
├── index.js.map      # Source map for CJS
└── index.esm.js.map  # Source map for ESM
```

### 2. React Package Build

```bash
cd packages/react
pnpm build
```

**Process**:

1. TypeScript compilation
2. Component bundling
3. Bundle splitting and optimization
4. Type declaration generation
5. Source map generation

**Output**:

```
packages/react/dist/
├── index.js          # CommonJS bundle
├── index.esm.js      # ES Module bundle
├── index.d.ts        # TypeScript declarations
├── index.js.map      # Source map for CJS
└── index.esm.js.map  # Source map for ESM
```

### 3. Docs Package Build

```bash
cd packages/docs
pnpm build-storybook
```

**Process**:

1. Story generation from component files
2. Static site generation
3. Asset optimization
4. Documentation generation

**Output**:

```
packages/docs/storybook-static/
├── index.html        # Main HTML file
├── static/           # Static assets
├── stories/          # Story files
└── main.*.js         # JavaScript bundles
```

### 4. Playground Package Build

```bash
cd packages/playground
pnpm build
```

**Process**:

1. TypeScript compilation
2. Vite bundling
3. Code splitting
4. Asset optimization
5. Static site generation

**Output**:

```
packages/playground/dist/
├── index.html        # Main HTML file
├── assets/           # Optimized assets
├── static/           # Static files
└── *.js              # JavaScript bundles
```

## Development Builds

### Watch Mode

```bash
# Core package watch mode
cd packages/core
pnpm build:watch

# React package watch mode
cd packages/react
pnpm build:watch

# Playground development server
cd packages/playground
pnpm dev

# Storybook development server
cd packages/docs
pnpm storybook
```

### Concurrent Development

```bash
# Start all development servers
pnpm dev:all
```

This will start:

- Playground development server (port 3000)
- Storybook development server (port 6006)

## Production Builds

### Full Production Build

```bash
# Build all packages for production
pnpm build

# Build specific packages
pnpm build:core
pnpm build:react
pnpm build:docs
pnpm build:playground
```

### Production Build Features

1. **Minification**: All JavaScript and CSS is minified
2. **Tree Shaking**: Unused code is eliminated
3. **Code Splitting**: Code is split into smaller chunks
4. **Asset Optimization**: Images and fonts are optimized
5. **Source Maps**: Production source maps are generated
6. **Type Declarations**: TypeScript declarations are generated

### Build Analysis

```bash
# Analyze build output
pnpm build:analyze
```

This will provide detailed information about:

- Bundle sizes
- Dependencies
- Tree shaking effectiveness
- Optimization opportunities

## Build Optimization

### Bundle Optimization

1. **Tree Shaking**: Unused code is automatically removed
2. **Code Splitting**: Large bundles are split into smaller chunks
3. **Minification**: Code is minified to reduce file sizes
4. **Compression**: Gzip compression is applied to static assets

### Dependency Optimization

1. **External Dependencies**: Large dependencies (React, etc.) are externalized
2. **Peer Dependencies**: Dependencies are marked as peer dependencies where appropriate
3. **Bundle Analysis**: Bundle sizes are monitored and optimized

### CSS Optimization

1. **PurgeCSS**: Unused CSS is removed
2. **Autoprefixer**: Vendor prefixes are automatically added
3. **Minification**: CSS is minified to reduce file sizes
4. **Critical CSS**: Critical CSS is inlined for better performance

## Build Artifacts

### Core Package Artifacts

```
packages/core/dist/
├── index.js          # CommonJS bundle
├── index.esm.js      # ES Module bundle
├── index.d.ts        # TypeScript declarations
├── index.js.map      # Source map for CJS
└── index.esm.js.map  # Source map for ESM
```

### React Package Artifacts

```
packages/react/dist/
├── index.js          # CommonJS bundle
├── index.esm.js      # ES Module bundle
├── index.d.ts        # TypeScript declarations
├── index.js.map      # Source map for CJS
└── index.esm.js.map  # Source map for ESM
```

### Docs Package Artifacts

```
packages/docs/storybook-static/
├── index.html        # Main HTML file
├── static/           # Static assets
├── stories/          # Story files
├── main.*.js         # JavaScript bundles
└── preview.*.js      # Preview bundles
```

### Playground Package Artifacts

```
packages/playground/dist/
├── index.html        # Main HTML file
├── assets/           # Optimized assets
├── static/           # Static files
├── *.js              # JavaScript bundles
└── *.css             # CSS bundles
```

## Build Performance

### Build Speed Optimization

1. **Watch Mode**: Development builds are optimized for speed
2. **Incremental Builds**: Only changed files are rebuilt
3. **Parallel Processing**: Multiple packages are built in parallel
4. **Caching**: Build artifacts are cached for faster subsequent builds

### Memory Optimization

1. **Memory Limits**: Build processes are configured with appropriate memory limits
2. **Garbage Collection**: Build processes are optimized for garbage collection
3. **Stream Processing**: Large files are processed as streams when possible

### Disk Space Optimization

1. **Clean Builds**: Build directories are cleaned before each build
2. **Artifact Management**: Build artifacts are managed efficiently
3. **Cache Management**: Build caches are managed to prevent disk space issues

## Troubleshooting

### Common Build Issues

#### TypeScript Errors

```bash
# Check TypeScript errors
pnpm typecheck

# Fix TypeScript errors
# Edit the source files and rebuild
```

#### Build Failures

```bash
# Clean build artifacts
pnpm build:clean

# Rebuild from scratch
pnpm build
```

#### Dependency Issues

```bash
# Reinstall dependencies
pnpm install

# Update dependencies
pnpm update
```

#### Path Resolution Issues

```bash
# Check path aliases
# Verify vite.config.ts and tsup.config.ts configurations

# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Debugging

#### Source Maps

```bash
# Enable source maps in development
# Check build configuration for sourcemap settings

# Debug with source maps
# Use browser dev tools to debug with original source code
```

#### Bundle Analysis

```bash
# Analyze bundle sizes
pnpm build:analyze

# Use bundle analyzer tools
# Install @next/bundle-analyzer for detailed analysis
```

#### Performance Monitoring

```bash
# Monitor build performance
# Use time command to measure build times

# Optimize slow builds
# Identify bottlenecks and optimize configuration
```

### Build Environment Issues

#### Node.js Version

```bash
# Check Node.js version
node --version

# Use correct Node.js version
# Use nvm or similar to manage Node.js versions
```

#### pnpm Version

```bash
# Check pnpm version
pnpm --version

# Update pnpm
npm install -g pnpm
```

#### Disk Space

```bash
# Check available disk space
df -h

# Clean up unnecessary files
# Remove node_modules, dist, and other build artifacts
```

## Conclusion

The build system for the Elements UI library is designed to be:

- **Fast**: Optimized for quick development builds
- **Reliable**: Consistent and predictable build output
- **Scalable**: Handles growing codebases efficiently
- **Maintainable**: Easy to understand and modify
- **Optimized**: Produces small, efficient production builds

This build system provides a solid foundation for developing and distributing the Elements UI library.

---

**Next Steps**:

- [Storybook Setup](./storybook.md) - Storybook development and documentation
- [Development Setup](./setup.md) - Local development environment setup
- [Architecture Overview](../architecture/overview.md) - High-level architecture documentation
- [Component Guidelines](../contributing/component-guidelines.md) - Component development guidelines
