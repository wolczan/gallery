import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(({ mode }) => {
  // Wczytanie zmiennych z `.env.local`
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react()],
    base: '/gallery/', // Upewnij się, że to pasuje do nazwy repozytorium GitHub Pages
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
      port: 5173, // Domyślny port dla Vite
      strictPort: true, // Zapobieganie zmianie portu na inny (pomaga uniknąć konfliktów)
      proxy: {
        '/api': {
          target: 'https://firebasestorage.googleapis.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    define: {
      'import.meta.env': {
        ...env, // Przekazanie zmiennych środowiskowych do `import.meta.env`
      },
    },
  };
});
