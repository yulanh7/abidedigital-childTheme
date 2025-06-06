import { resolve } from 'path';

export default {
  root: 'assets',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'assets/js/main.js'),
        style: resolve(__dirname, 'assets/scss/style.scss')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'js/[name][extname]';
        },
        entryFileNames: 'js/[name].js'
      }
    },
    emptyOutDir: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./scss/partials/_variables.scss";`
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    proxy: {
      '/': {
        target: 'http://localhost:8888/abidedigital',
        changeOrigin: true,
        secure: false
      }
    }
  }
};
