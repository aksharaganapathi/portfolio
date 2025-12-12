import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Security headers for development server
    // NOTE: In production, these headers should be configured at the web server level
    // (nginx, Apache, Cloudflare, Vercel, etc.) for proper security enforcement
    headers: {
      // Content Security Policy - prevents XSS attacks
      // NOTE: 'unsafe-inline' is used for development compatibility with Vite HMR
      // Production deployments should use stricter CSP with nonces or hashes
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';",
      // Prevent clickjacking
      'X-Frame-Options': 'DENY',
      // Prevent MIME type sniffing
      'X-Content-Type-Options': 'nosniff',
      // Control referrer information
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Require HTTPS (when deployed)
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    }
  }
})
