import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : undefined;
  const whereClause = estado ? { estado: estado as any } : {};

  const recetas = await prisma.receta.findMany({
    where: whereClause,
  });
  res.json(recetas);
});

router.post('/', async (req: Request, res: Response) => {
  const newReceta = await prisma.receta.create({
    data: req.body,
  });
  res.status(201).json(newReceta);
});

router.get('/:id', async (req: Request, res: Response) => {
  const receta = await prisma.receta.findUnique({
    where: { idreceta: parseInt(req.params.id) },
  });
  if (receta && receta.estado !== 'Eliminado') {
    res.json(receta);
  } else {
    res.status(404).send('Receta no encontrada');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedReceta = await prisma.receta.update({
      where: { idreceta: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedReceta);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la receta' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedReceta = await prisma.receta.update({
      where: { idreceta: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la receta' });
  }
});

export default router;
