import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preparacion } from './entities/preparacion.entity';
import { CreatePreparacionInput } from './dto/create-preparacion.input';
import { UpdatePreparacionInput } from './dto/update-preparacion.input';
import { Receta } from '../receta/entities/receta.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';

@Injectable()
export class PreparacionService {
  constructor(
    @InjectRepository(Preparacion)
    private readonly preparacionRepository: Repository<Preparacion>,
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>,
    @InjectRepository(Cocinero)
    private readonly cocineroRepository: Repository<Cocinero>,
  ) {}

  async create(createPreparacionInput: CreatePreparacionInput): Promise<Preparacion> {
    const { recetaId, cocineroId, ...rest } = createPreparacionInput;
    const receta = await this.recetaRepository.findOne({ where: { idreceta: recetaId } });
    const cocinero = await this.cocineroRepository.findOne({ where: { idcocinero: cocineroId } });

    if (!receta || !cocinero) {
      throw new Error('Receta or Cocinero not found');
    }

    const preparacion = this.preparacionRepository.create({
      ...rest,
      receta,
      cocinero,
    });
    return this.preparacionRepository.save(preparacion);
  }

  async findAll(estado: string): Promise<Preparacion[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.preparacionRepository.find({ where: whereCondition, relations: ['receta', 'cocinero'] });
  }

  async findOne(id: number): Promise<Preparacion> {
    return this.preparacionRepository.findOne({ where: { idpreparacion: id }, relations: ['receta', 'cocinero'] });
  }

  async update(id: number, updatePreparacionInput: UpdatePreparacionInput): Promise<Preparacion> {
    const { recetaId, cocineroId, ...rest } = updatePreparacionInput;
    const receta = await this.recetaRepository.findOne({ where: { idreceta: recetaId } });
    const cocinero = await this.cocineroRepository.findOne({ where: { idcocinero: cocineroId } });

    if (!receta || !cocinero) {
      throw new Error('Receta or Cocinero not found');
    }

    await this.preparacionRepository.update(id, {
      ...rest,
      receta,
      cocinero,
    });
    return this.preparacionRepository.findOne({ where: { idpreparacion: id }, relations: ['receta', 'cocinero'] });
  }

  async remove(id: number): Promise<Preparacion> {
    const preparacion = await this.preparacionRepository.findOne({ where: { idpreparacion: id }, relations: ['receta', 'cocinero'] });
    if (preparacion) {
      preparacion.estado = 'inactivo';
      return this.preparacionRepository.save(preparacion);
    }
    return null;
  }
}
