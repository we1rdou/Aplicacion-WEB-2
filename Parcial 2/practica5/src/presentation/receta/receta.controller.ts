import { Request, Response } from 'express';
import { CreateRecetaDto } from '../../domain/dtos/receta/create-receta.dto';
import { UpdateRecetaDto } from '../../domain/dtos/receta/update-receta.dto';
import { RecetaRepository } from '../../domain/repositories/receta.repository';

export class RecetasController {

  constructor(private readonly recetaRepository: RecetaRepository) { }

  public getRecetas = async (req: Request, res: Response) => {
    try {
      const recetas = await this.recetaRepository.getAll();
      return res.status(200).json(recetas);
    } catch (error: any) {
      console.error('Error in getRecetas:', error);
      res.status(500).json({ message: 'Error al obtener las recetas', error: error.message });
    }
  };

  public getRecetaById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const receta = await this.recetaRepository.findById(id);
      if (!receta) {
        return res.status(404).json({ message: `Receta con id ${id} no encontrada` });
      }
      return res.json(receta);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener la receta', error: error.message });
    }
  };

  public createReceta = async (req: Request, res: Response) => {
    try {
      const [error, createRecetaDto] = CreateRecetaDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const receta = await this.recetaRepository.create(createRecetaDto!);
      return res.json(receta);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear la receta', error: error.message });
    }
  };

  public updateReceta = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateRecetaDto] = UpdateRecetaDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const receta = await this.recetaRepository.updateById(updateRecetaDto!);
      return res.json(receta);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar la receta', error: error.message });
    }
  };

  public deleteReceta = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.recetaRepository.deleteById(id);
      return res.json({ message: 'Receta eliminada correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar la receta', error: error.message });
    }
  };
}
