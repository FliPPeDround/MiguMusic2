import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
