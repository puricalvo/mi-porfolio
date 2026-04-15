import { defineConfig } from "astro/config";
import tailwindv4 from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. Pon la URL de tu perfil de GitHub
  site: "https://puricalvo.github.io",

  // 2. IMPORTANTE: Pon el nombre de tu repositorio precedido de una barra /
  // Si tu repo se llama mi-porfolio, debe quedar así:
  base: "/mi-porfolio",

  vite: {
    plugins: [tailwindv4()],
  },
});
