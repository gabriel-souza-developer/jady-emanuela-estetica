import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Config mínima. Build gera arquivos 100% estáticos em dist/
// (dist/index.html + dist/assets/*.js + dist/assets/*.css), publicáveis
// em qualquer hospedagem estática (cPanel/HostGator) sem Node em produção.
export default defineConfig({
  plugins: [react()],
})
