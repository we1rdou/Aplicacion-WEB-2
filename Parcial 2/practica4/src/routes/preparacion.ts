import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : undefined;
  const whereClause = estado ? { estado: estado as any } : {};

  const preparaciones = await prisma.preparacion.findMany({
    where: whereClause,
  });
  res.json(preparaciones);
});

router.post('/', async (req: Request, res: Response) => {
  const newPreparacion = await prisma.preparacion.create({
    data: req.body,
  });
  res.status(201).json(newPreparacion);
});

router.get('/:id', async (req: Request, res: Response) => {
  const preparacion = await prisma.preparacion.findUnique({
    where: { idpreparacion: parseInt(req.params.id) },
  });
  if (preparacion && preparacion.estado !== 'Eliminado') {
    res.json(preparacion);
  } else {
    res.status(404).send('Preparacion no encontrada');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedPreparacion = await prisma.preparacion.update({
    where: { idpreparacion: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(updatedPreparacion);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPreparacion = await prisma.preparacion.update({
      where: { idpreparacion: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la preparacion' });
  }
});

export default router;
