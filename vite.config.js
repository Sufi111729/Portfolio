import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  }
});
