import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Dts()],
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      name: 'UI-Library',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      plugins: [],
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
