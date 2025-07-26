import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Path_Finder/', // <-- IMPORTANT for static hosting or opening directly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
