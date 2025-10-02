import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      ".ngrok-free.app" // allows all ngrok subdomains
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion', 'gsap'],
          ui: ['lucide-react'],
          // Component chunks
          components: [
            './src/components/Hero.tsx',
            './src/components/OptimizedImage.tsx',
            './src/components/SEO.tsx'
          ],
          pages: [
            './src/pages/Index.tsx',
            './src/pages/About.tsx',
            './src/pages/Contact.tsx',
            './src/pages/Services.tsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
  },
  assetsInclude: ['**/*.webp', '**/*.avif'], // Include modern image formats
}));
