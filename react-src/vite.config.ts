import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import neutralino from "vite-plugin-neutralino";

export default defineConfig({
  plugins: [
    react(),
    // Inject global variables into HTML.
    neutralino({
      rootPath: "../",
    }),
  ],
});
