import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload([
      'app/views/**/*.erb',
      'app/helpers/**/*.rb',
      'config/routes.rb',
      'app/controllers/**/*.rb',
      'app/models/**/*.rb'
    ], { delay: 100 })
  ],
})
