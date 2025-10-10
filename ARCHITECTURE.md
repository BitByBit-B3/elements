# Elements UI Architecture

## Expandable Monorepo Structure

Elements UI is designed to be infinitely expandable. Add new packages for any framework or use case.

## Current Structure

```
elements/
├── packages/
│   ├── core/              # @bitbybit-b3/elements-core
│   └── react/             # @bitbybit-b3/elements-react
├── docs-site/             # VitePress documentation
├── .github/workflows/     # CI/CD automation
└── .claude/commands/      # AI agents for automation
```

## Expandable Package System

### Current Packages

1. **@bitbybit-b3/elements-core**
   - Design tokens and theme
   - Framework-agnostic
   - CSS variables and utilities

2. **@bitbybit-b3/elements-react**
   - 49+ React components
   - Radix UI primitives
   - Tailwind CSS styling

### Future Packages (Auto-Created as Needed)

The system automatically creates new packages when needed:

**Framework-Specific:**
- `@bitbybit-b3/elements-nextjs` - Next.js specific (Server Components, App Router, etc.)
- `@bitbybit-b3/elements-vue` - Vue components
- `@bitbybit-b3/elements-svelte` - Svelte components
- `@bitbybit-b3/elements-solid` - SolidJS components
- `@bitbybit-b3/elements-angular` - Angular components

**Tool-Specific:**
- `@bitbybit-b3/elements-vite` - Vite utilities
- `@bitbybit-b3/elements-webpack` - Webpack utilities
- `@bitbybit-b3/elements-turbo` - Turborepo utilities

**Utility Packages:**
- `@bitbybit-b3/elements-utils` - Framework-agnostic utilities
- `@bitbybit-b3/elements-hooks` - React hooks library
- `@bitbybit-b3/elements-types` - Shared TypeScript types
- `@bitbybit-b3/elements-icons` - Icon library
- `@bitbybit-b3/elements-animations` - Animation utilities

**Platform-Specific:**
- `@bitbybit-b3/elements-mobile` - React Native components
- `@bitbybit-b3/elements-electron` - Electron utilities
- `@bitbybit-b3/elements-tauri` - Tauri utilities

## Package Creation Rules

### When to Create a New Package

Create a new package when you find:

1. **Framework-Specific Features**
   - Server Components (Next.js)
   - SFC (Vue Single File Components)
   - Svelte stores
   - Framework-specific routing

2. **Tool-Specific Features**
   - Build tool specific utilities
   - Development tool integrations
   - Framework-specific optimizations

3. **Clear Separation of Concerns**
   - Client vs Server
   - Web vs Mobile
   - UI vs Logic

4. **Dependency Isolation**
   - Avoid bloating main packages
   - Optional peer dependencies
   - Framework version conflicts

### Package Structure Template

```
packages/[NAME]/
├── src/
│   ├── index.ts           # Main exports
│   ├── components/        # Components (if applicable)
│   ├── hooks/            # Hooks (if applicable)
│   ├── utils/            # Utilities
│   └── types/            # TypeScript types
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration
└── README.md             # Package documentation
```

## Automation System

### Slash Commands

#### `/update-components <path>`
Intelligently updates library from source projects:
- Scans for components and utilities
- Determines appropriate package (existing or new)
- Creates new packages if needed
- Updates GitHub Actions
- Updates documentation
- Fixes imports and dependencies

#### `/create-package <name>`
Creates a new package:
- Sets up directory structure
- Configures build tools
- Updates GitHub Actions
- Creates documentation
- Adds to workspace

### GitHub Actions

#### Auto-Scaling Publish Workflow
The publish workflow automatically:
- Detects all packages in `packages/*`
- Bumps versions for all packages
- Builds all packages
- Publishes all packages to GitHub Packages

**No manual updates needed!** Just create a new package directory and it's automatically included.

#### Documentation Deployment
- Auto-deploys VitePress docs to GitHub Pages
- Supports unlimited package documentation
- SEO optimized

## Design Principles

### 1. Modularity
Each framework/tool gets its own package. Never mix concerns.

### 2. No Artificial Limits
Create as many packages as needed. The system scales infinitely.

### 3. Auto-Configuration
Agents handle setup automatically. Minimal manual work.

### 4. Type Safety
Full TypeScript support across all packages.

### 5. Consistent Structure
All packages follow the same structure for predictability.

### 6. Independent Versioning
Each package can be versioned independently if needed.

### 7. Shared Infrastructure
- Common build tools (tsup)
- Common testing setup
- Common CI/CD pipelines
- Shared documentation

## Adding a New Package

### Automatic (Recommended)

Use the `/update-components` command:
```bash
/update-components /path/to/project/with/new/framework
```

The agent will:
1. Analyze the project
2. Detect framework/tools
3. Create appropriate package(s)
4. Configure everything
5. Update CI/CD
6. Create documentation

### Manual

1. **Create directory**: `packages/[name]/`
2. **Copy structure** from existing package
3. **Update package.json** with proper metadata
4. **Configure build** (tsup.config.ts, tsconfig.json)
5. **Update documentation**
6. **Verify**: `pnpm install && pnpm build`

GitHub Actions will automatically detect and publish the new package.

## Benefits of This Architecture

✅ **Scalable** - Add unlimited packages
✅ **Maintainable** - Clear separation of concerns
✅ **Flexible** - Support any framework/tool
✅ **Automated** - AI agents handle most work
✅ **Type-Safe** - Full TypeScript support
✅ **Tested** - Each package builds independently
✅ **Documented** - Auto-generated docs
✅ **Versioned** - Git-based versioning
✅ **Published** - Auto-published to GitHub Packages

## Future Growth

This architecture supports:
- **Unlimited frameworks** - React, Vue, Svelte, Solid, Angular, etc.
- **Unlimited tools** - Vite, Webpack, Turbo, etc.
- **Unlimited platforms** - Web, Mobile, Desktop, etc.
- **Unlimited utilities** - Any shared code

**The library grows with your needs!**

## Contributing

When adding components:
1. Run `/update-components <source-path>`
2. Review the changes
3. Test the build
4. Commit and push
5. CI/CD handles the rest

That's it! The system handles package creation, configuration, and deployment automatically.
