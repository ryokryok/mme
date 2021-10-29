import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA as vPWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vPWA()]
});
