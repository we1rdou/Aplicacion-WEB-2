import { prisma } from '../../data/postgres';
import { CocineroEntity } from '../../domain/entities/cocinero.entity';
import { CreateCocineroDto } from '../../domain/dtos/cocinero/create-cocinero.dto';
import { UpdateCocineroDto } from '../../domain/dtos/cocinero/update-cocinero.dto';
import { CocineroDatasource } from '../../domain/datasources/cocinero.datasource';

export class CocineroDatasourceImpl implements CocineroDatasource {

  async create(createCocineroDto: CreateCocineroDto): Promise<CocineroEntity> {
    const cocinero = await prisma.cocinero.create({
      data: createCocineroDto
    });

    return CocineroEntity.fromObject(cocinero);
  }

  async getAll(): Promise<CocineroEntity[]> {
    const cocineros = await prisma.cocinero.findMany();
    return cocineros.map(CocineroEntity.fromObject);
  }

  async findById(id: number): Promise<CocineroEntity> {
    const cocinero = await prisma.cocinero.findFirst({
      where: { idcocinero: id }
    });

    if (!cocinero) throw new Error(`Cocinero with id ${id} not found`);
    return CocineroEntity.fromObject(cocinero);
  }

  async updateById(updateCocineroDto: UpdateCocineroDto): Promise<CocineroEntity> {
    await this.findById(updateCocineroDto.idcocinero);

    const updatedCocinero = await prisma.cocinero.update({
      where: { idcocinero: updateCocineroDto.idcocinero },
      data: updateCocineroDto
    });

    return CocineroEntity.fromObject(updatedCocinero);
  }

  async deleteById(id: number): Promise<CocineroEntity> {
    await this.findById(id);

    const deleted = await prisma.cocinero.delete({
      where: { idcocinero: id }
    });

    return CocineroEntity.fromObject(deleted);
  }
}
