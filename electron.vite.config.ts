import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    build: {
      outDir: 'dist/main',
      sourcemap: true
    },
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@/lib': resolve(__dirname, 'src/main/lib'),
        '@shared': resolve(__dirname, 'src/shared')
      }
    }
  },
  preload: {
    build: {
      outDir: 'dist/preload',
      sourcemap: true
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    build: {
      outDir: 'dist/renderer'
    },
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src'),
        '@shared': resolve(__dirname, 'src/shared'),
        '@/hooks': resolve(__dirname, 'src/renderer/src/hooks'),
        '@/assets': resolve(__dirname, 'src/renderer/src/assets'),
        '@/store': resolve(__dirname, 'src/renderer/src/store'),
        '@/components': resolve(__dirname, 'src/renderer/src/components'),
        '@/mocks': resolve(__dirname, 'src/renderer/src/mocks')
      }
    },
    plugins: [react()]
  }
})
