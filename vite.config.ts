import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    // Ensure preview mode handles SPA routing correctly
    // All routes should fallback to index.html for client-side routing
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        // Exclude agent code from build
        /^scripts\/agent/,
        // Exclude LangChain dependencies (they're in devDependencies)
        /^@langchain/,
        /^langchain/,
      ],
    },
  },
}));
