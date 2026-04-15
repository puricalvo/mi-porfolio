// @ts-check
import { defineConfig } from "astro/config";
import tailwindv4 from "@tailwindcss/vite"; // Importamos el plugin de Tailwind 4

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindv4()], // Activamos el plugin en Vite
  },
});
