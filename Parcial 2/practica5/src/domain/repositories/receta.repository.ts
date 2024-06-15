import { CreateRecetaDto } from '../dtos/receta/create-receta.dto';
import { UpdateRecetaDto } from '../dtos/receta/update-receta.dto';
import { RecetaEntity } from '../entities/receta.entity';

export abstract class RecetaRepository {
  abstract create(createTodoDto: CreateRecetaDto): Promise<RecetaEntity>;
  abstract getAll(): Promise<RecetaEntity[]>;
  abstract findById(id: number): Promise<RecetaEntity>;
  abstract updateById(updateTodoDto: UpdateRecetaDto): Promise<RecetaEntity>;
  abstract deleteById(id: number): Promise<RecetaEntity>;
}
