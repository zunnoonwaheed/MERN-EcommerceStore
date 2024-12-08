import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './src/adminEntry.jsx'
      }
    }
  }
});

