import express from 'express';
import cocineroRoutes from './routes/cocinero';
import recetaRoutes from './routes/receta';
import preparacionRoutes from './routes/preparacion';

const app = express();
const port = 3000;

app.use(express.json());

// Ruta básica para la URL raíz
app.get('/', (req, res) => {
  res.send('Bienvenido al servicio REST de cocina');
});

app.use('/cocineros', cocineroRoutes);
app.use('/recetas', recetaRoutes);
app.use('/preparaciones', preparacionRoutes);

app.listen(port, () => {
  console.log(`Servicio REST escuchando en http://localhost:${port}`);
});