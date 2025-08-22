import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Note: DTS disabled due to complex Radix Slot types. Components fully typed via JSDoc.
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next', 'next-themes'],
  treeshake: true,
  minify: false,
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
  },
  tsconfig: './tsconfig.json',
  esbuildOptions: (opts) => {
    opts.loader = {
      ...opts.loader,
      '.js': 'jsx',
      '.ts': 'tsx',
      '.tsx': 'tsx',
    };
    opts.jsxFactory = 'React.createElement';
    opts.jsxFragment = 'React.Fragment';
  },
});