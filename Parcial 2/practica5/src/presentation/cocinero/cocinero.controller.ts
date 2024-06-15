import { prisma } from '../../data/postgres';
import { Request, Response } from 'express';
import { CreateCocineroDto} from '../../domain/dtos/cocinero/create-cocinero.dto';
import { UpdateCocineroDto} from '../../domain/dtos/cocinero/update-cocinero.dto';

import { CocineroRepository } from '../../domain/repositories/cocinero.repository';

export class CocinerosController {

  constructor(private readonly cocineroRepository: CocineroRepository) { }

  public getCocineros = async (req: Request, res: Response) => {
    try {
      const cocineros = await this.cocineroRepository.getAll();
      return res.status(200).json(cocineros);
    } catch (error: any) {
      console.error('Error in getCocineros:', error);
      res.status(500).json({ message: 'Error al obtener los cocineros', error: error.message });
    }
  };

  public getCocineroById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const cocinero = await this.cocineroRepository.findById(id);
      if (!cocinero) {
        return res.status(404).json({ message: `Cocinero con id ${id} no encontrado` });
      }
      return res.json(cocinero);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el cocinero', error: error.message });
    }
  };

  public createCocinero = async (req: Request, res: Response) => {
    try {
      const [error, createCocineroDto] = CreateCocineroDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const cocinero = await this.cocineroRepository.create(createCocineroDto!);
      return res.json(cocinero);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el cocinero', error: error.message });
    }
  };

  public updateCocinero = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateCocineroDto] = UpdateCocineroDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const cocinero = await this.cocineroRepository.updateById(updateCocineroDto!);
      return res.json(cocinero);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el cocinero', error: error.message });
    }
  };

  public deleteCocinero = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.cocineroRepository.deleteById(id);
      return res.json({ message: 'Cocinero eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el cocinero', error: error.message });
    }
  };
}
