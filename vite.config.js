import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3008,
    host: '0.0.0.0', 
  },
  plugins: [react()],
})
