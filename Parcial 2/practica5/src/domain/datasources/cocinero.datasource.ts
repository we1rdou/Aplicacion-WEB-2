import { CocineroEntity } from '../entities/cocinero.entity';
import { CreateCocineroDto } from '../dtos/cocinero/create-cocinero.dto';
import { UpdateCocineroDto } from '../dtos/cocinero/update-cocinero.dto';

export abstract class CocineroDatasource {
  abstract create(createTodoDto: CreateCocineroDto): Promise<CocineroEntity>;
  abstract getAll(): Promise<CocineroEntity[]>;
  abstract findById(id: number): Promise<CocineroEntity>;
  abstract updateById(updateTodoDto: UpdateCocineroDto): Promise<CocineroEntity>;
  abstract deleteById(id: number): Promise<CocineroEntity>;
}
