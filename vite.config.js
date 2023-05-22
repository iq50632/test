import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import {fileURLToPath} from 'url'
import commonjs from "@rollup/plugin-commonjs"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/test/' : '/',
  build: {
    rollupOptions: {
      plugins: [
        commonjs()
      ]
    }
  },
  plugins: [
    vue(),
    vuetify({ 
      autoImport: true,
      styles: { configFile: './src/assets/main.scss' }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
