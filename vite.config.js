import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/movie-catalog/",
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      shared: "/src/shared",
      entities: "/src/entities",
      widgets: "/src/widgets",
      features: "/src/features",
    },
  },
});
