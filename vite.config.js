import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs-extra';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      writeBundle() {
        fs.copySync('sitemap.xml', 'dist/sitemap.xml');
        fs.copySync('robots.txt', 'dist/robots.txt');
        fs.copySync('_redirects', 'dist/_redirects');
        fs.copySync('netlify.toml', 'dist/netlify.toml');
      },
    },
  ],
  base: '/'
});
