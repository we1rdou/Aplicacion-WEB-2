import { CocineroEntity } from '../../domain/entities/cocinero.entity';
import { CreateCocineroDto } from '../../domain/dtos/cocinero/create-cocinero.dto';
import { UpdateCocineroDto } from '../../domain/dtos/cocinero/update-cocinero.dto';
import { CocineroDatasource } from '../../domain/datasources/cocinero.datasource';
import { CocineroRepository } from '../../domain/repositories/cocinero.repository';

export class CocineroRepositoryImpl implements CocineroRepository {
  constructor(private readonly datasource: CocineroDatasource) {}

  create(createCocineroDto: CreateCocineroDto): Promise<CocineroEntity> {
    return this.datasource.create(createCocineroDto);
  }

  getAll(): Promise<CocineroEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<CocineroEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateCocineroDto: UpdateCocineroDto): Promise<CocineroEntity> {
    return this.datasource.updateById(updateCocineroDto);
  }

  deleteById(id: number): Promise<CocineroEntity> {
    return this.datasource.deleteById(id);
  }
}