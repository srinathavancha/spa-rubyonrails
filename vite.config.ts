import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react({ fastRefresh: false }),
    FullReload([
      'app/views/**/*.erb',
      'app/helpers/**/*.rb',
      'config/routes.rb',
      'app/controllers/**/*.rb',
      'app/models/**/*.rb'
    ], { delay: 300 })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/javascript'),
      'styles': path.resolve(__dirname, 'app/javascript/styles'),
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  root: './',
  build: {
    outDir: '../app/assets/builds',
  },
  server: {
    hmr: false,
    watch: {
      usePolling: true,
      interval: 300, // in ms; adjust if needed for performance
    },
    host: 'localhost',
    port: 30361 // or your preferred port
  },
})
