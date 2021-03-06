import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: './',
  build: {
    sourcemap: true
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
