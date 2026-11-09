import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relativa: o mesmo dist/ funciona no GitHub Pages (subpasta) e em domínio próprio.
export default defineConfig({
  base: './',
  plugins: [react()],
})
