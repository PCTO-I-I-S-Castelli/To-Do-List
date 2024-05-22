import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import sourceMapSupport from 'source-map-support';


sourceMapSupport.install();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
