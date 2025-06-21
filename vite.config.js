import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ Import path module

export default defineConfig({
  base: '/rabex-ui/', // ✅ Required for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Correctly resolve '@'
    },
  },
});

