import { Injectable } from '@nestjs/common';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Repository } from 'typeorm';
import { Cocinero } from './entities/cocinero.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CocineroService {
  constructor(
    @InjectRepository(Cocinero)
    private readonly cocineroRepository: Repository<Cocinero>,
  ) {}

  async create(createCocineroDto: CreateCocineroDto): Promise<Cocinero> {
    const cocinero = this.cocineroRepository.create(createCocineroDto);
    return this.cocineroRepository.save(cocinero);
  }

  async findAll(): Promise<Cocinero[]> {
    return this.cocineroRepository.find();
  }

  async findOne(id: number): Promise<Cocinero> {
    return this.cocineroRepository.findOneBy({ idcocinero: id });
  }

  async update(id: number, updateCocineroDto: UpdateCocineroDto): Promise<Cocinero> {
    await this.cocineroRepository.update(id, updateCocineroDto);
    return this.cocineroRepository.findOneBy({ idcocinero: id });
  }

  async remove(id: number): Promise<Cocinero> {
    await this.cocineroRepository.update(id, { estado: 'inactivo' });
    return this.cocineroRepository.findOneBy({ idcocinero: id });
  }
}
