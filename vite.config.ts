import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import react from '@vitejs/plugin-react-swc'

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
