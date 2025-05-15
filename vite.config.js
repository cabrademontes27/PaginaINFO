import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 👈 IMPORTANTE para usar `resolve`

export default defineConfig({
  plugins: [vue()],
  base: '/', // ya está bien
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 👈 Esto permite usar '@/components', '@/pages', etc.
    }
  }
})
