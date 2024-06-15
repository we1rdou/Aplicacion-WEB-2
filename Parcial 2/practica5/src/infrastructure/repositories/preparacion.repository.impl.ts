import { PreparacionEntity } from '../../domain/entities/preparacion.entity';
import { CreatePreparacionDto } from '../../domain/dtos/preparacion/create-preparacion.dto';
import { UpdatePreparacionDto } from '../../domain/dtos/preparacion/update-preparacion.dto';
import { PreparacionDatasource } from '../../domain/datasources/preparacion.datasource';
import { PreparacionRepository } from '../../domain/repositories/preparacion.repository';

export class PreparacionRepositoryImpl implements PreparacionRepository {
  constructor(private readonly datasource: PreparacionDatasource) {}

  create(createPreparacionDto: CreatePreparacionDto): Promise<PreparacionEntity> {
    return this.datasource.create(createPreparacionDto);
  }

  getAll(): Promise<PreparacionEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<PreparacionEntity> {
    return this.datasource.findById(id);
  }

  updateById(updatePreparacionDto: UpdatePreparacionDto): Promise<PreparacionEntity> {
    return this.datasource.updateById(updatePreparacionDto);
  }

  deleteById(id: number): Promise<PreparacionEntity> {
    return this.datasource.deleteById(id);
  }
}