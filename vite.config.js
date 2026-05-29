import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr()
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src'),
      "@assets":path.resolve(__dirname,'./src/assets'),
      "@animations":path.resolve(__dirname,'./src/animations'),
      "@contexts":path.resolve(__dirname,'./src/contexts'),


      '@components':path.resolve(__dirname,'./src/components'),
      '@pages':path.resolve(__dirname,'./src/pages'),
      '@routes':path.resolve(__dirname,'./src/routes'),
      '@layouts':path.resolve(__dirname,'./src/layouts')
    }
  }
})
