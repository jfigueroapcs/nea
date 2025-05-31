// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import node from "@astrojs/node";
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Obtener el directorio actual usando import.meta.url
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    mode: "middleware",
  }),
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    }
  }
});