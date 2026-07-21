// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://deltahbc.com',
  vite: {
    plugins: [tailwindcss()],
  },
  // Mejoras de SEO
  integrations: [],
  // Compresión de salida
  compressHTML: true,
});