import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA as vPWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react(),
    vPWA({
      includeAssets: ["/favicon.ico", "/robots.txt", "/apple-touch-icon.png"],
      manifest: {
        name: "My markdown editor",
        short_name: "MME",
        description: "web base markdown editor",
        theme_color: "#222222",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
});
