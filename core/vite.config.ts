import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import distCss from '@elonehoo/vite-plugin-dist-css'
import types from '@elonehoo/vite-plugin-type-ts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    distCss(),
    types(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'scope',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
