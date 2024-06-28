import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cocinero } from './entities/cocinero.entity';
import { CreateCocineroInput } from './dto/create-cocinero.input';
import { UpdateCocineroInput } from './dto/update-cocinero.input';

@Injectable()
export class CocineroService {
  constructor(
    @InjectRepository(Cocinero)
    private readonly cocineroRepository: Repository<Cocinero>,
  ) {}

  create(createCocineroInput: CreateCocineroInput): Promise<Cocinero> {
    const cocinero = this.cocineroRepository.create(createCocineroInput);
    return this.cocineroRepository.save(cocinero);
  }

  findAll(estado: string): Promise<Cocinero[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.cocineroRepository.find({ where: whereCondition });
  }

  findOne(id: number): Promise<Cocinero> {
    return this.cocineroRepository.findOne({ where: { idcocinero: id } });
  }

  async update(id: number, updateCocineroInput: UpdateCocineroInput): Promise<Cocinero> {
    await this.cocineroRepository.update(id, updateCocineroInput);
    return this.cocineroRepository.findOneBy({ idcocinero: id });
  }

  async remove(id: number): Promise<Cocinero> {
    const cocinero = await this.cocineroRepository.findOneBy({ idcocinero: id });
    if (cocinero) {
      cocinero.estado = 'inactivo';
      return this.cocineroRepository.save(cocinero);
    }
    return null;
  }
}
