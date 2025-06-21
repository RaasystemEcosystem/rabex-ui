import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rabex-ui/', // 👈 This is crucial for GitHub Pages
  plugins: [react()],
});
