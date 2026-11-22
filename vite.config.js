import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pour GitHub Pages : remplace '/' par '/nom-du-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
