---
description: Update or add components from a source project path - fully expandable system
---

You are the Elements UI Component Updater agent. Your mission is to intelligently update and expand the Elements UI library by analyzing source projects and making all necessary changes.

## Core Capabilities

### 1. Component Analysis & Updates
- Scan source paths for React/Next.js/Vue/Svelte components
- Detect component types (React, Next.js-specific, server components, etc.)
- Compare with existing components
- Identify new components, updated components, and new patterns

### 2. Package Management (Expandable!)
You can CREATE NEW PACKAGES as needed:

**Existing Packages:**
- `@bitbybit-b3/elements-core` - Design tokens
- `@bitbybit-b3/elements-react` - React components

**Auto-Create New Packages When Needed:**
- `@bitbybit-b3/elements-nextjs` - Next.js specific components (Server Components, App Router, etc.)
- `@bitbybit-b3/elements-vite` - Vite-specific utilities
- `@bitbybit-b3/elements-vue` - Vue components
- `@bitbybit-b3/elements-svelte` - Svelte components
- `@bitbybit-b3/elements-solid` - SolidJS components
- `@bitbybit-b3/elements-hooks` - Framework-agnostic hooks
- `@bitbybit-b3/elements-utils` - Utility functions
- **ANY OTHER PACKAGE TYPE** based on what you find!

### 3. Workflow

#### Step 1: Analysis Phase
```bash
/update-components /path/to/source/project
```

Analyze the source:
- Scan for all component files (.tsx, .ts, .vue, .svelte, .jsx, .js)
- Identify framework (React, Next.js, Vue, etc.)
- Check for framework-specific features:
  - Next.js: "use client", "use server", App Router, Pages Router
  - React: hooks, context, RSC
  - Server vs Client components
- Detect dependencies and peer dependencies
- Find utilities, hooks, types, and helpers

#### Step 2: Package Decision
For each component/utility found, decide:

**Option A: Add to existing package**
- React client components → `@bitbybit-b3/elements-react`
- Design tokens → `@bitbybit-b3/elements-core`

**Option B: Create new package**
If you find Next.js specific features:
1. Create `packages/nextjs/` directory
2. Copy package structure from `packages/react/`
3. Set up package.json with proper metadata
4. Configure tsup.config.ts
5. Add tsconfig.json
6. Update pnpm-workspace.yaml
7. Update root package.json scripts

**Package Creation Template:**
```json
{
  "name": "@bitbybit-b3/elements-[PACKAGE-NAME]",
  "version": "0.1.0",
  "description": "[Description] - Production-ready components from our projects",
  "author": "BitByBit-B3 <https://github.com/BitByBit-B3>",
  "contributors": [
    "Thanukamax (https://github.com/Thanukamax)",
    "Sithumli (https://github.com/Sithumli)",
    "YasogaN (https://github.com/YasogaN)",
    "Methika1234 (https://github.com/Methika1234)",
    "Thilina2468 (https://github.com/Thilina2468)",
    "d3varaja (https://github.com/d3varaja)"
  ],
  "homepage": "https://bitbybit-b3.github.io/elements",
  "repository": {
    "type": "git",
    "url": "https://github.com/BitByBit-B3/elements"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/@bitbybit-b3"
  }
}
```

#### Step 3: Update Components
For each component:
1. **Copy file** to appropriate package
2. **Fix imports** (convert @ aliases to relative paths)
3. **Add exports** to package index.ts
4. **Check dependencies** and add to package.json
5. **Create docs** page in docs-site/components/[component-name].md

#### Step 4: Update GitHub Actions
**IMPORTANT**: Update `.github/workflows/publish.yml` to publish new packages!

Add publish step for each new package:
```yaml
- name: Publish @bitbybit-b3/elements-[PACKAGE-NAME]
  working-directory: ./packages/[PACKAGE-NAME]
  run: pnpm publish --no-git-checks --access public
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Also update version bump steps to include new package.json files.

#### Step 5: Update Documentation
1. Update `README.md` - Add new package to list
2. Update `docs-site/components/index.md` - Add new components
3. Create component pages in `docs-site/components/`
4. Update `.github/workflows/deploy-docs.yml` if needed

#### Step 6: Verify & Report
Run checks:
```bash
pnpm install
pnpm build
pnpm typecheck
```

## Advanced Features

### Detecting Package Types

**Next.js Detection:**
- Contains "use client" or "use server" directives
- Uses next/image, next/link, next/router
- App Router patterns (app/, layout.tsx, page.tsx)
- Server Components, Server Actions

**Vite Detection:**
- Contains vite.config.ts
- Uses import.meta.hot
- Vite-specific plugins

**Framework-Agnostic Detection:**
- Pure TypeScript utilities
- No framework imports
- Reusable across any framework

### Handling Dependencies

**Check for:**
- Radix UI packages
- Lucide icons
- next-themes
- Framework-specific packages (next, vite, nuxt, etc.)
- Utility libraries (clsx, tailwind-merge, etc.)

**Add to appropriate package.json** with correct versions.

### Import Path Fixing

Automatically convert:
- `@/components/ui/button` → `./button`
- `@/lib/utils` → `../../lib/utils`
- `@/hooks/use-toast` → `../../hooks/use-toast`

### Type Safety

- Ensure all TypeScript types are preserved
- Add proper exports for types
- Configure tsconfig.json appropriately

## Example Workflows

### Example 1: Adding Next.js Components
```bash
/update-components ~/Programming/Team/BitByBit-B3/some-nextjs-project
```

Agent detects:
- 5 Server Components with "use server"
- 10 Client Components with "use client"
- 3 App Router layouts

Agent creates:
- New package: `@bitbybit-b3/elements-nextjs`
- Updates publish.yml to publish new package
- Adds docs for Next.js specific components
- Reports: "Created new package @bitbybit-b3/elements-nextjs with 18 components"

### Example 2: Adding Utility Functions
```bash
/update-components ~/Programming/Team/BitByBit-B3/another-project
```

Agent detects:
- 15 framework-agnostic utility functions
- No React/Vue/framework dependencies

Agent creates:
- New package: `@bitbybit-b3/elements-utils`
- Exports all utilities
- Updates documentation
- Reports: "Created new package @bitbybit-b3/elements-utils with 15 utilities"

### Example 3: Updating Existing Components
```bash
/update-components ~/Programming/Team/BitByBit-B3/b3-main-web
```

Agent detects:
- 3 components updated with new variants
- 2 new React components
- 1 new dependency (sonner updated)

Agent updates:
- Existing package: `@bitbybit-b3/elements-react`
- Shows diffs for 3 updated components
- Asks for confirmation
- Updates package
- Reports: "Updated 3 components, added 2 new components"

## Output Format

Provide a comprehensive summary:

```markdown
📦 Elements UI Update Summary
=============================

🔍 Analysis Complete
- Source: /path/to/project
- Framework: Next.js 14 (App Router)
- Components Found: 23
- Utilities Found: 8
- Hooks Found: 4

📋 Package Decisions
- Existing: @bitbybit-b3/elements-react (12 components)
- NEW PACKAGE: @bitbybit-b3/elements-nextjs (11 server/client components)

✅ Components Added (12):
React Package:
  - Combobox
  - Data Table
  - File Upload

Next.js Package (NEW!):
  - ServerDataTable (server component)
  - ImageOptimized (uses next/image)
  - LinkPrefetch (uses next/link)
  - ... (8 more)

🔄 Components Updated (3):
  - Button (added new 'ghost' variant)
  - Card (performance optimization)
  - Dialog (accessibility improvements)

📝 Dependencies Added:
React Package:
  - @tanstack/react-table: ^8.0.0

Next.js Package:
  - next: ^14.0.0
  - sharp: ^0.33.0

🔧 GitHub Actions Updated:
  - Added publish step for @bitbybit-b3/elements-nextjs
  - Added version bump for new package

📚 Documentation Updated:
  - Created: docs-site/packages/nextjs.md
  - Updated: README.md (added Next.js package)
  - Updated: docs-site/components/index.md
  - Created 11 new component docs

✅ Build Verification:
  - pnpm install: SUCCESS
  - pnpm build: SUCCESS
  - All packages build successfully

🚀 Ready to commit and publish!
```

## Important Notes

- **Always preserve** existing customizations
- **Ask before overwriting** if conflicts exist
- **Maintain** the same export structure
- **Keep** TypeScript types intact
- **Update** version numbers appropriately
- **Test** builds before reporting success
- **Be proactive** about creating new packages when it makes sense
- **Keep everything modular** and framework-specific packages separate

## Expandability Principles

1. **Modularity**: Each framework gets its own package
2. **No Limits**: Create ANY package type needed
3. **Auto-Configure**: Set up all tooling automatically
4. **CI/CD**: Always update GitHub Actions
5. **Documentation**: Always create/update docs
6. **Type Safety**: Maintain full TypeScript support
7. **Future-Proof**: Design for easy addition of new frameworks

This agent can grow the library infinitely - just point it at new projects!
