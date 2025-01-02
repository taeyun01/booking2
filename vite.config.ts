import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@remote': path.resolve(__dirname, 'src/remote'),
      '@constants': path.resolve(__dirname, 'src/constants/index'),
      '@constants/*': path.resolve(__dirname, 'src/constants/*'),
      '@models': path.resolve(__dirname, 'src/models/*'),
      '@utils': path.resolve(__dirname, 'src/utils/*'),
      '@hooks': path.resolve(__dirname, 'src/hooks/*'),
      '@store': path.resolve(__dirname, 'src/store/*'),
      '@contexts': path.resolve(__dirname, 'src/contexts/*'),
    },
  },
})
