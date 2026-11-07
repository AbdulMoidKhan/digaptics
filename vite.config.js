import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    // Route chunks stay small; React and the router are shared across them.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router';
          }
        },
      },
    },
    // Warn early if a route chunk grows unexpectedly large.
    chunkSizeWarningLimit: 300,
    cssCodeSplit: true,
    sourcemap: false,
  },
});
