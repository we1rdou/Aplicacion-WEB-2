import { PreparacionEntity } from '../entities/preparacion.entity';
import { CreatePreparacionDto } from '../dtos/preparacion/create-preparacion.dto';
import { UpdatePreparacionDto } from '../dtos/preparacion/update-preparacion.dto';

export abstract class PreparacionDatasource {
  abstract create(createTodoDto: CreatePreparacionDto): Promise<PreparacionEntity>;
  abstract getAll(): Promise<PreparacionEntity[]>;
  abstract findById(id: number): Promise<PreparacionEntity>;
  abstract updateById(updateTodoDto: UpdatePreparacionDto): Promise<PreparacionEntity>;
  abstract deleteById(id: number): Promise<PreparacionEntity>;
}
