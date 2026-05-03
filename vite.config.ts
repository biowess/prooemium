import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // GitHub Pages repo deployment
  // https://username.github.io/preoomium/
  base: '/preoomium/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    host: true,
    port: 5173,
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
});