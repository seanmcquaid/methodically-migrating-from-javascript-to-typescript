// vite.config.ts
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import path from 'path';
// import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
    }),
    // checker({
    //   typescript: true,
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
