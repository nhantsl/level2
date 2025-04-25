import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  base: mode === "production" ? "/level2/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
