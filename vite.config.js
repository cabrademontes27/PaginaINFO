import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //solo para decir que el error siempre fue ./ esto debido que cargaba los assets desde la ruta actual no la raiz
  // y por eso no mostraba nada ademas de que tambien agregamos vercerl.json
  base: '/',
})
