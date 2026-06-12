import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: (path) => path.includes('node_modules') || /^[A-Za-z]:[/\\]/.test(path),
    },
  },
});
