import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import mdx from "@mdx-js/rollup";
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    { enforce: "pre" as const, ...mdx() },
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
