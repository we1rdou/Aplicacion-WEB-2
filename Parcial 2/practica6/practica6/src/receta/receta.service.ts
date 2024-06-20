import { Injectable } from '@nestjs/common';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Repository } from 'typeorm';
import { Receta } from './entities/receta.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>,
  ) {}

  async create(createRecetaDto: CreateRecetaDto): Promise<Receta> {
    const receta = this.recetaRepository.create(createRecetaDto);
    return this.recetaRepository.save(receta);
  }

  async findAll(): Promise<Receta[]> {
    return this.recetaRepository.find();
  }

  async findOne(id: number): Promise<Receta> {
    return this.recetaRepository.findOneBy({ idreceta: id });
  }

  async update(id: number, updateRecetaDto: UpdateRecetaDto): Promise<Receta> {
    await this.recetaRepository.update(id, updateRecetaDto);
    return this.recetaRepository.findOneBy({ idreceta: id });
  }

  async remove(id: number): Promise<Receta> {
    await this.recetaRepository.update(id, { estado: 'inactivo' });
    return this.recetaRepository.findOneBy({ idreceta: id });
  }
}
