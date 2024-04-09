// vite.config.ts
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
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
});
