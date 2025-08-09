import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
  },
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