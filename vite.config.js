import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' deixa o build funcionar em qualquer hospedagem (GitHub Pages, Netlify, Vercel...)
export default defineConfig({ base: './', plugins: [react()] })
