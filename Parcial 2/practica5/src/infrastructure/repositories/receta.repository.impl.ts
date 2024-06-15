import { RecetaEntity } from '../../domain/entities/receta.entity';
import { CreateRecetaDto } from '../../domain/dtos/receta/create-receta.dto';
import { UpdateRecetaDto } from '../../domain/dtos/receta/update-receta.dto';
import { RecetaDatasource } from '../../domain/datasources/receta.datasource';
import { RecetaRepository} from '../../domain/repositories/receta.repository';

export class RecetaRepositoryImpl implements RecetaRepository {
  constructor(private readonly datasource: RecetaDatasource) {}

  create(createRecetaDto: CreateRecetaDto): Promise<RecetaEntity> {
    return this.datasource.create(createRecetaDto);
  }

  getAll(): Promise<RecetaEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<RecetaEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateRecetaDto: UpdateRecetaDto): Promise<RecetaEntity> {
    return this.datasource.updateById(updateRecetaDto);
  }

  deleteById(id: number): Promise<RecetaEntity> {
    return this.datasource.deleteById(id);
  }
}