import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: process.env.NODE_ENV || 'development',
  envPrefix: 'DNT_',
  server:{
    watch: {
      usePolling: true,
    },
  }
})
