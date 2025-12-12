// @ts-check
import { defineConfig } from 'astro/config';

//import tailwindcss from '@tailwindcss/vite';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  /*vite: {
    plugins: [tailwind()]
  },*/
  integrations: [tailwind()],
  site: 'https://ibukye.github.io',
  base: '/Virtual-Reactor-Simulator-Website/',
});