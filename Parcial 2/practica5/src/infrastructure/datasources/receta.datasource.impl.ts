import { prisma } from '../../data/postgres';
import { RecetaEntity } from '../../domain/entities/receta.entity';
import { CreateRecetaDto } from '../../domain/dtos/receta/create-receta.dto';
import { UpdateRecetaDto } from '../../domain/dtos/receta/update-receta.dto';
import { RecetaDatasource } from '../../domain/datasources/receta.datasource';

export class RecetaDatasourceImpl implements RecetaDatasource {

  async create(createRecetaDto: CreateRecetaDto): Promise<RecetaEntity> {
    const receta = await prisma.receta.create({
      data: {
        ...createRecetaDto,
        calorias: createRecetaDto.calorias.toString() // Convertir calorias a string
      }
    });

    return RecetaEntity.fromObject(receta);
  }

  async getAll(): Promise<RecetaEntity[]> {
    const recetas = await prisma.receta.findMany();
    return recetas.map(RecetaEntity.fromObject);
  }

  async findById(id: number): Promise<RecetaEntity> {
    const receta = await prisma.receta.findFirst({
      where: { idreceta: id }
    });

    if (!receta) throw new Error(`Receta with id ${id} not found`);
    return RecetaEntity.fromObject(receta);
  }

  async updateById(updateRecetaDto: UpdateRecetaDto): Promise<RecetaEntity> {
    await this.findById(updateRecetaDto.idreceta);

    const updatedReceta = await prisma.receta.update({
      where: { idreceta: updateRecetaDto.idreceta },
      data: {
        ...updateRecetaDto,
        calorias: updateRecetaDto.calorias?.toString() // Convertir calorias a string si está definido
      }
    });

    return RecetaEntity.fromObject(updatedReceta);
  }

  async deleteById(id: number): Promise<RecetaEntity> {
    await this.findById(id);

    const deleted = await prisma.receta.delete({
      where: { idreceta: id }
    });

    return RecetaEntity.fromObject(deleted);
  }
}
