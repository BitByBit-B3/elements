import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@bitbybit-b3/elements-core': path.resolve(__dirname, '../../packages/core/src'),
      '@bitbybit-b3/elements-react': path.resolve(__dirname, '../../packages/react/src'),
    },
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});