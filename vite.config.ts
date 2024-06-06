import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@interfaces": "/src/interfaces",
      "@enums": "/src/enums",
      "@config": "/src/config",
      "@store": "/src/store",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@hocs": "/src/hocs",
    },
  },
  plugins: [react()],
});
