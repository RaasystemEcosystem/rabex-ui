import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rabex-ui/', // <--- Important for GitHub Pages!
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
