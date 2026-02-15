import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// ✅ Definiujemy __dirname w ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  // Wczytanie zmiennych z `.env.local`
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react()],
    base: '/',
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: './index.html',
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5001/galeriazdjec-f4180/us-central1',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ''), // /api/videos -> /getVideos
        },
      },
    },
    resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url)), // ✅ alias działa w każdym pliku
      },
    },
    define: {
      'import.meta.env': {
        ...env,
      },
    },
  };
});
