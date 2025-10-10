# Getting Started

Welcome to Elements UI! This guide will help you get up and running quickly.

## What is Elements UI?

Elements UI is a comprehensive collection of React components that we've built for our own production applications. Instead of keeping them private, we're sharing them with the community as we build and refine them.

## Why Elements UI?

- **Production-Ready**: These components are used in real applications, not just examples
- **Battle-Tested**: Continuously updated and improved based on real-world usage
- **Tailwind-First**: Easy to customize and extend with Tailwind CSS
- **Accessible**: Built on Radix UI primitives for excellent accessibility
- **TypeScript**: Fully typed for great developer experience

## Prerequisites

Before you begin, ensure you have:

- Node.js 18.0.0 or higher
- React 18.0.0 or higher
- Tailwind CSS 3.0.0 or higher

## Installation

Install the package using your preferred package manager:

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

## Tailwind CSS Setup

Elements UI requires Tailwind CSS. If you haven't set it up yet:

1. Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@bitbybit-b3/elements-react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add Tailwind directives to your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Your First Component

Import and use a component:

```tsx
import { Button } from '@bitbybit-b3/elements-react';

function App() {
  return (
    <div>
      <Button variant="default">
        Click me
      </Button>
    </div>
  );
}
```

## Next Steps

- [Installation Guide](/guide/installation) - Detailed installation instructions
- [Usage Guide](/guide/usage) - Learn how to use components
- [Components](/components/) - Browse all available components

## Need Help?

- [GitHub Issues](https://github.com/BitByBit-B3/elements/issues) - Report bugs or request features
- [GitHub Discussions](https://github.com/BitByBit-B3/elements/discussions) - Ask questions and share ideas
