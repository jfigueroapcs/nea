// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

import node from "@astrojs/node";

// Cargar variables de entorno
dotenv.config();

const port = process.env.ASTRO_PORT 
  ? parseInt(process.env.ASTRO_PORT) 
  : 4321;


// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    port: port,  // Puerto personalizado
  },

  adapter: node({
    mode: "standalone",
  }),
});