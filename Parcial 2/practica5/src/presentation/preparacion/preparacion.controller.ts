import { Request, Response } from 'express';
import { CreatePreparacionDto } from '../../domain/dtos/preparacion/create-preparacion.dto';
import { UpdatePreparacionDto } from '../../domain/dtos/preparacion/update-preparacion.dto';
import { PreparacionRepository } from '../../domain/repositories/preparacion.repository';

export class PreparacionesController {

  constructor(private readonly preparacionRepository: PreparacionRepository) { }

  public getPreparaciones = async (req: Request, res: Response) => {
    try {
      const preparaciones = await this.preparacionRepository.getAll();
      return res.status(200).json(preparaciones);
    } catch (error: any) {
      console.error('Error in getPreparaciones:', error);
      res.status(500).json({ message: 'Error al obtener las preparaciones', error: error.message });
    }
  };

  public getPreparacionById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const preparacion = await this.preparacionRepository.findById(id);
      if (!preparacion) {
        return res.status(404).json({ message: `Preparacion con id ${id} no encontrada` });
      }
      return res.json(preparacion);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener la preparacion', error: error.message });
    }
  };

  public createPreparacion = async (req: Request, res: Response) => {
    try {
      const [error, createPreparacionDto] = CreatePreparacionDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const preparacion = await this.preparacionRepository.create(createPreparacionDto!);
      return res.json(preparacion);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear la preparacion', error: error.message });
    }
  };

  public updatePreparacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updatePreparacionDto] = UpdatePreparacionDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const preparacion = await this.preparacionRepository.updateById(updatePreparacionDto!);
      return res.json(preparacion);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar la preparacion', error: error.message });
    }
  };

  public deletePreparacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.preparacionRepository.deleteById(id);
      return res.json({ message: 'Preparacion eliminada correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar la preparacion', error: error.message });
    }
  };
}
