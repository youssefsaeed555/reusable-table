import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      constants: path.resolve(__dirname, "src/constants"),
      utils: path.resolve(__dirname, "src/utils"),
      styles: path.resolve(__dirname, "src/styles"),
      assets: path.resolve(__dirname, "src/assets"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
  },
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["src/*"],
      "components/*": ["src/components/*"],
      "constants/*": ["src/constants/*"],
      "utils/*": ["src/utils/*"],
      "styles/*": ["src/styles/*"],
      "assets/*": ["src/assets/*"],
      "hooks/*": ["src/hooks/*"],
    },
  },
  include: ["src"],
});
