import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 用: https://geekfeedjapan.github.io/compass/
export default defineConfig({
  plugins: [react()],
  base: '/compass/',
})
