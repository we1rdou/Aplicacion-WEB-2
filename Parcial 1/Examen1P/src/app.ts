import express from 'express';
import { PrismaClient, Sucursal } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// punto 1
app.post('/cocinero', async (req, res) => {
  const { nombre, apellido, cargo, sueldo, sucursal } = req.body;
  const cocinero = await prisma.cocinero.create({
    data: { nombre, apellido, cargo, sueldo, sucursal },
  });
  res.json(cocinero);
});

app.post('/receta', async (req, res) => {
  const { nombrePlato, categoria, ingredientes, calorias, sucursal } = req.body;
  const receta = await prisma.receta.create({
    data: { nombrePlato, categoria, ingredientes, calorias, sucursal },
  });
  res.json(receta);
});

app.post('/preparacion', async (req, res) => {
  const { receta_idreceta, cocinero_idcocinero, fecha, hora, cantidadProductos, costo, tiempoEstimado, sucursal } = req.body;
  const preparacion = await prisma.preparacion.create({
    data: {
      receta_idreceta,
      cocinero_idcocinero,
      fecha,
      hora,
      cantidadProductos,
      costo,
      tiempoEstimado,
      sucursal,
    },
  });
  res.json(preparacion);
});

// punto 2
app.put('/preparacion/mover', async (req, res) => {
  const { ids, sucursalOrigen, sucursalDestino } = req.body;

  if (!Array.isArray(ids) || !Object.values(Sucursal).includes(sucursalOrigen as Sucursal) || !Object.values(Sucursal).includes(sucursalDestino as Sucursal)) {
    return res.status(400).json({ error: 'Datos de entrada inválidos' });
  }

  try {
    // Verificar que todas las preparaciones pertenezcan a la sucursal de origen
    const preparaciones = await prisma.preparacion.findMany({
      where: {
        idpreparacion: { in: ids },
        sucursal: sucursalOrigen as Sucursal,
      },
    });

    if (preparaciones.length !== ids.length) {
      return res.status(400).json({ error: 'Algunas preparaciones no pertenecen a la sucursal de origen' });
    }

    // Actualizar la sucursal de las preparaciones
    await prisma.preparacion.updateMany({
      where: {
        idpreparacion: { in: ids },
      },
      data: {
        sucursal: sucursalDestino as Sucursal,
      },
    });

    res.json({ message: 'Preparaciones movidas exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al mover las preparaciones' });
  }
});

// punto 3
app.put('/sucursal/cerrar', async (req, res) => {
  const { sucursalOrigen } = req.body;

  if (!Object.values(Sucursal).includes(sucursalOrigen as Sucursal)) {
    return res.status(400).json({ error: 'Sucursal de origen inválida' });
  }

  try {
    // Mover todos los cocineros de la sucursal origen a CLOSED
    const cocinerosMovidos = await prisma.cocinero.updateMany({
      where: { sucursal: sucursalOrigen as Sucursal },
      data: { sucursal: Sucursal.closed },
    });

    // Mover todas las recetas de la sucursal origen a CLOSED
    const recetasMovidas = await prisma.receta.updateMany({
      where: { sucursal: sucursalOrigen as Sucursal },
      data: { sucursal: Sucursal.closed },
    });

    // Mover todas las preparaciones de la sucursal origen a CLOSED
    const preparacionesMovidas = await prisma.preparacion.updateMany({
      where: { sucursal: sucursalOrigen as Sucursal },
      data: { sucursal: Sucursal.closed },
    });

    const resultado = {
      cocinerosMovidos: cocinerosMovidos.count,
      recetasMovidas: recetasMovidas.count,
      preparacionesMovidas: preparacionesMovidas.count,
    };

    // Callback para manejar el arreglo de elementos movidos
    function manejarElementosMovidos(callback: () => void) {
      callback();
    }

    // Llamar al callback
    manejarElementosMovidos(() => {
        console.log('Elementos movidos:');
        console.log(`Cocineros movidos: ${resultado.cocinerosMovidos}`);
        console.log(`Recetas movidas: ${resultado.recetasMovidas}`);
        console.log(`Preparaciones movidas: ${resultado.preparacionesMovidas}`);
    });

  } catch (error) {
    res.status(500).json({ error: 'Error al cerrar la sucursal' });
  }
});

// Mostrar elementos de una sucursal especificada y de la sucursal CLOSED para constatar el cambio
app.get('/sucursal/verificar', async (req, res) => {
  const { sucursal } = req.query;

  if (!Object.values(Sucursal).includes(sucursal as Sucursal)) {
    return res.status(400).json({ error: 'Sucursal inválida' });
  }

  try {
    const elementosOrigen = {
      cocineros: await prisma.cocinero.findMany({ where: { sucursal: sucursal as Sucursal } }),
      recetas: await prisma.receta.findMany({ where: { sucursal: sucursal as Sucursal } }),
      preparaciones: await prisma.preparacion.findMany({ where: { sucursal: sucursal as Sucursal } }),
    };

    const elementosClosed = {
      cocineros: await prisma.cocinero.findMany({ where: { sucursal: Sucursal.closed } }),
      recetas: await prisma.receta.findMany({ where: { sucursal: Sucursal.closed } }),
      preparaciones: await prisma.preparacion.findMany({ where: { sucursal: Sucursal.closed } }),
    };

    res.json({
      elementosOrigen,
      elementosClosed,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar las sucursales' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
