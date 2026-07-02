import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    // Accept all incoming hosts (crucial for ngrok / Cloudflare Tunnel)
    allowedHosts: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // Prevent HMR blocking issues under proxy environments
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000
    }
  }
})
