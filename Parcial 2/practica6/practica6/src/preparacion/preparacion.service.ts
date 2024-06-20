import { Injectable } from '@nestjs/common';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
import { Repository } from 'typeorm';
import { Preparacion } from './entities/preparacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
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

  async create(createPreparacionDto: CreatePreparacionDto): Promise<any> {
    const receta = await this.recetaRepository.findOneBy({ idreceta: createPreparacionDto.receta_idreceta });
    const cocinero = await this.cocineroRepository.findOneBy({ idcocinero: createPreparacionDto.cocinero_idcocinero });

    if (!receta || !cocinero) {
      throw new Error('Receta or Cocinero not found');
    }

    const preparacion = this.preparacionRepository.create({
      ...createPreparacionDto,
      receta: receta,
      cocinero: cocinero,
    });

    const savedPreparacion = await this.preparacionRepository.save(preparacion);
    return this.toResponseDto(savedPreparacion);
  }

  async findAll(): Promise<any[]> {
    const preparaciones = await this.preparacionRepository.find({ relations: ['receta', 'cocinero'] });
    return preparaciones.map(preparacion => this.toResponseDto(preparacion));
  }

  async findOne(id: number): Promise<any> {
    const preparacion = await this.preparacionRepository.findOne({
      where: { idpreparacion: id },
      relations: ['receta', 'cocinero'],
    });
    if (!preparacion) {
      throw new Error('Preparacion not found');
    }
    return this.toResponseDto(preparacion);
  }

  async update(id: number, updatePreparacionDto: UpdatePreparacionDto): Promise<any> {
    const preparacion = await this.preparacionRepository.findOneBy({ idpreparacion: id });

    if (!preparacion) {
      throw new Error('Preparacion not found');
    }

    const receta = await this.recetaRepository.findOneBy({ idreceta: updatePreparacionDto.receta_idreceta });
    const cocinero = await this.cocineroRepository.findOneBy({ idcocinero: updatePreparacionDto.cocinero_idcocinero });

    if (!receta || !cocinero) {
      throw new Error('Receta or Cocinero not found');
    }

    const updatedPreparacion = {
      ...preparacion,
      ...updatePreparacionDto,
      receta: receta,
      cocinero: cocinero,
    };

    await this.preparacionRepository.save(updatedPreparacion);
    return this.toResponseDto(updatedPreparacion);
  }

  async remove(id: number): Promise<any> {
    await this.preparacionRepository.update(id, { estado: 'inactivo' });
    const preparacion = await this.preparacionRepository.findOne({
      where: { idpreparacion: id },
      relations: ['receta', 'cocinero'],
    });
    return this.toResponseDto(preparacion);
  }

  private toResponseDto(preparacion: Preparacion): any {
    return {
      idpreparacion: preparacion.idpreparacion,
      receta_idreceta: preparacion.receta ? preparacion.receta.idreceta : null,
      cocinero_idcocinero: preparacion.cocinero ? preparacion.cocinero.idcocinero : null,
      fecha: preparacion.fecha,
      hora: preparacion.hora,
      cantidadProductos: preparacion.cantidadProductos,
      costo: preparacion.costo,
      tiempoEstimado: preparacion.tiempoEstimado,
      estado: preparacion.estado,

    };
  }
  
}
