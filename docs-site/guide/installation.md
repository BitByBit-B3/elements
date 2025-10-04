# Installation

This guide covers everything you need to install and configure Elements UI in your project.

## Package Installation

Install the Elements UI React package:

::: code-group

```bash [npm]
npm install @bitbybit-b3/elements-react
```

```bash [pnpm]
pnpm add @bitbybit-b3/elements-react
```

```bash [yarn]
yarn add @bitbybit-b3/elements-react
```

:::

## Required Dependencies

Elements UI has peer dependencies that you need to install:

```bash
npm install react react-dom tailwindcss
```

The components are built on top of Radix UI primitives. These are included as dependencies, so you don't need to install them separately.

## Tailwind CSS Configuration

### 1. Install Tailwind CSS

If you haven't already, install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Content Paths

Update your `tailwind.config.js` to include Elements UI components:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this line to include Elements UI components
    "./node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Add Tailwind Directives

Add the Tailwind directives to your CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## TypeScript Configuration (Optional)

If you're using TypeScript, Elements UI is fully typed. No additional configuration needed!

The package includes TypeScript definitions out of the box.

## Import Styles

Import the CSS file in your main entry point (e.g., `src/main.tsx` or `src/index.tsx`):

```tsx
import './index.css'; // Your Tailwind CSS file
```

## Verify Installation

Create a simple component to verify everything is working:

```tsx
import { Button } from '@bitbybit-b3/elements-react';

function App() {
  return (
    <div className="p-4">
      <Button variant="default">
        Installation Successful! 🎉
      </Button>
    </div>
  );
}

export default App;
```

If you see a styled button, you're all set!

## Framework-Specific Guides

### Next.js

For Next.js 13+ with App Router:

1. Create `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
```

2. Import CSS in `app/layout.tsx`:

```tsx
import './globals.css'
```

### Vite

Vite works out of the box with the standard configuration above.

### Create React App

CRA works with the standard configuration. Make sure to import your CSS in `src/index.tsx`.

## Troubleshooting

### Components Not Styled

If components appear unstyled:

1. Verify Tailwind CSS is properly configured
2. Check that you've included the Elements UI path in `content` array
3. Ensure Tailwind directives are in your CSS file
4. Clear your build cache and restart your dev server

### TypeScript Errors

If you get TypeScript errors:

1. Ensure you're using TypeScript 5.0 or higher
2. Check that `@types/react` is installed
3. Verify your `tsconfig.json` includes proper paths

### Import Errors

If you get import errors:

1. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Clear your package manager cache
3. Verify the package is in your `package.json`

## Next Steps

- [Usage Guide](/guide/usage) - Learn how to use components effectively
- [Components](/components/) - Browse all available components
- [Examples](https://github.com/BitByBit-B3/elements/tree/main/examples) - See example implementations
