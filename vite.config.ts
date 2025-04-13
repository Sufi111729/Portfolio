import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  build: {
    outDir: 'dist', // Ensure the output directory is correctly set to 'dist'
  },
  server: {
    open: true, // Automatically open the app in the browser on start
  },
  optimizeDeps: {
    include: ['lucide-react'], // Optional, only if you experience issues with this specific dependency
  },
});
