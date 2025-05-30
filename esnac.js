import express from 'express';
import { handler } from './dist/server/entry.mjs';

const app = express();

// Servir archivos estáticos del directorio `dist`
app.use(express.static('./dist/client'));

app.use(handler);

app.listen(3201, () => {
  console.log('Servidor ejecutándose en :3201');
});