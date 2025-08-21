
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cartographer } from '@replit/vite-plugin-cartographer'
import path from 'path'

export default defineConfig({
  plugins: [react(), cartographer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
