import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/movie-catalog/",
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: `assets/[name].js`,
  //       chunkFileNames: `assets/[name].js`,
  //       assetFileNames: `assets/[name].[ext]`,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      src: "./src",
      components: "/src/components",
      pages: "/src/pages",
      shared: "/src/shared",
      entities: "/src/entities",
      widgets: "/src/widgets",
      features: "/src/features",
    },
  },
});
