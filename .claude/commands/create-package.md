---
description: Create a new package in the Elements UI monorepo
---

You are the Elements UI Package Creator agent. Create new packages on demand.

## When to Use

```bash
/create-package nextjs
/create-package vue
/create-package utils
/create-package hooks
```

## Process

### Step 1: Package Setup

Create directory structure:
```
packages/[PACKAGE-NAME]/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

### Step 2: package.json Template

```json
{
  "name": "@bitbybit-b3/elements-[PACKAGE-NAME]",
  "version": "0.1.0",
  "description": "[Description] - Production-ready [framework/tools] from our projects",
  "author": "BitByBit-B3 <https://github.com/BitByBit-B3>",
  "contributors": [
    "YasogaN (https://github.com/YasogaN)",
    "Thilina2468 (https://github.com/Thilina2468)",
    "Methika1234 (https://github.com/Methika1234)",
    "d3varaja (https://github.com/d3varaja)",
    "Thanukamax (https://github.com/Thanukamax)",
    "Sithumli (https://github.com/Sithumli)"
  ],
  "homepage": "https://bitbybit-b3.github.io/elements",
  "bugs": {
    "url": "https://github.com/BitByBit-B3/elements/issues"
  },
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "typecheck": "tsc --noEmit"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/BitByBit-B3/elements"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/@bitbybit-b3"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
}
```

### Step 3: Update Workspace

Add to `pnpm-workspace.yaml`:
```yaml
packages:
  - 'packages/*'
```

### Step 4: Update GitHub Actions

Edit `.github/workflows/publish.yml`:

Add version bump:
```yaml
# Update packages/[PACKAGE-NAME]/package.json
jq --arg v "${{ steps.get_version.outputs.new_version }}" '.version = $v' packages/[PACKAGE-NAME]/package.json > packages/[PACKAGE-NAME]/package.json.tmp
mv packages/[PACKAGE-NAME]/package.json.tmp packages/[PACKAGE-NAME]/package.json
```

Add publish step:
```yaml
- name: Publish @bitbybit-b3/elements-[PACKAGE-NAME]
  working-directory: ./packages/[PACKAGE-NAME]
  run: pnpm publish --no-git-checks --access public
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Step 5: Update Documentation

1. Update `README.md` - Add package to list
2. Create `docs-site/packages/[PACKAGE-NAME].md`
3. Update `docs-site/.vitepress/config.ts` sidebar

### Step 6: Verify

```bash
pnpm install
pnpm build
```

## Example Output

```
Package Creation Complete
=========================

Created: @bitbybit-b3/elements-nextjs

Structure:
  packages/nextjs/
  ├── src/index.ts
  ├── package.json
  ├── tsconfig.json
  ├── tsup.config.ts
  └── README.md

Updated:
  - pnpm-workspace.yaml
  - .github/workflows/publish.yml
  - README.md
  - docs-site/packages/nextjs.md

Build test: SUCCESS

Ready to add components!
```
