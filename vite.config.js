import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(), eslint()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
