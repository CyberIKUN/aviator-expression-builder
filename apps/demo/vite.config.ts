import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8989,
  },
  resolve: {
    alias: [
      {
        find: /^aviator-expression-builder\/style\.css$/,
        replacement: fileURLToPath(
          new URL('../../packages/aviator-expression-builder/style.css', import.meta.url),
        ),
      },
      {
        find: /^aviator-expression-builder\/headless$/,
        replacement: fileURLToPath(
          new URL('../../packages/aviator-expression-builder/headless.js', import.meta.url),
        ),
      },
      {
        find: /^aviator-expression-builder\/vue$/,
        replacement: fileURLToPath(
          new URL('../../packages/aviator-expression-builder/vue.js', import.meta.url),
        ),
      },
      {
        find: /^aviator-expression-builder\/legacy$/,
        replacement: fileURLToPath(
          new URL('../../packages/aviator-expression-builder/legacy.js', import.meta.url),
        ),
      },
      {
        find: /^aviator-expression-builder$/,
        replacement: fileURLToPath(
          new URL('../../packages/aviator-expression-builder/index.js', import.meta.url),
        ),
      },
    ],
  },
  optimizeDeps: {
    exclude: ['aviator-expression-builder'],
  },
})
