/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'

// vitest.config.ts
// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  //! can remove
  // build: {
  //   sourcemap: true
  // },
  // server: {
  //   host: true,
  //   open: false
  // },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './utils/setupTestsRTL.ts'
  }
})
