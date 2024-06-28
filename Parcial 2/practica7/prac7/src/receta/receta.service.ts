import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './entities/receta.entity';
import { CreateRecetaInput } from './dto/create-receta.input';
import { UpdateRecetaInput } from './dto/update-receta.input';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>,
  ) {}

  create(createRecetaInput: CreateRecetaInput): Promise<Receta> {
    const receta = this.recetaRepository.create(createRecetaInput);
    return this.recetaRepository.save(receta);
  }

  findAll(estado: string): Promise<Receta[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.recetaRepository.find({ where: whereCondition });
  }

  findOne(id: number): Promise<Receta> {
    return this.recetaRepository.findOne({ where: { idreceta: id } });
  }

  async update(id: number, updateRecetaInput: UpdateRecetaInput): Promise<Receta> {
    await this.recetaRepository.update(id, updateRecetaInput);
    return this.recetaRepository.findOneBy({ idreceta: id });
  }

  async remove(id: number): Promise<Receta> {
    const receta = await this.recetaRepository.findOneBy({ idreceta: id });
    if (receta) {
      receta.estado = 'inactivo';
      return this.recetaRepository.save(receta);
    }
    return null;
  }
}
