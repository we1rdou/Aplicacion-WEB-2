import express, { Router, Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : undefined;
  const whereClause = estado ? { estado: estado as any } : {};

  const cocineros = await prisma.cocinero.findMany({
    where: whereClause,
  });
  res.json(cocineros);
});

router.post('/', async (req: Request, res: Response) => {
  const newCocinero = await prisma.cocinero.create({
    data: req.body,
  });
  res.status(201).json(newCocinero);
});

router.get('/:id', async (req: Request, res: Response) => {
  const cocinero = await prisma.cocinero.findUnique({
    where: { idcocinero: parseInt(req.params.id) },
  });
  if (cocinero) {
    res.json(cocinero);
  } else {
    res.status(404).send('Cocinero no encontrado');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedCocinero = await prisma.cocinero.update({
    where: { idcocinero: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(updatedCocinero);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedCocinero = await prisma.cocinero.update({
      where: { idcocinero: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cocinero' });
  }
});

export default router;
