import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Content Security Policy - prevents XSS attacks
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';",
      // Prevent clickjacking
      'X-Frame-Options': 'DENY',
      // Prevent MIME type sniffing
      'X-Content-Type-Options': 'nosniff',
      // Enable browser XSS protection
      'X-XSS-Protection': '1; mode=block',
      // Control referrer information
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Require HTTPS (when deployed)
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    }
  }
})
