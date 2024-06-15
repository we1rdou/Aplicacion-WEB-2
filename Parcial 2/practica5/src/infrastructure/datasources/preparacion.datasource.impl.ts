import { prisma } from '../../data/postgres';
import { PreparacionEntity } from '../../domain/entities/preparacion.entity';
import { CreatePreparacionDto } from '../../domain/dtos/preparacion/create-preparacion.dto';
import { UpdatePreparacionDto } from '../../domain/dtos/preparacion/update-preparacion.dto';
import { PreparacionDatasource } from '../../domain/datasources/preparacion.datasource';

export class PreparacionDatasourceImpl implements PreparacionDatasource {

  async create( createPreparacionDto: CreatePreparacionDto ): Promise<PreparacionEntity> {
    const preparacion = await prisma.preparacion.create({
      data: createPreparacionDto!
    });

    return PreparacionEntity.fromObject( preparacion );
  }

  async getAll(): Promise<PreparacionEntity[]> {
    const preparacion = await prisma.preparacion.findMany();
    return preparacion.map( preparacion => PreparacionEntity.fromObject(preparacion) );
  }

  async findById( id: number ): Promise<PreparacionEntity> {
    const preparacion = await prisma.preparacion.findFirst({
      where: { idpreparacion:id }
    });

    if ( !preparacion ) throw `Registro with id ${ id } not found`;
    return PreparacionEntity.fromObject( preparacion);
  }
  

  async updateById( updatePreparacionDto: UpdatePreparacionDto ): Promise<PreparacionEntity> {
    await this.findById( updatePreparacionDto.idpreparacion );
    
    const updatedPreparacion = await prisma.preparacion.update({
      where: { idpreparacion: updatePreparacionDto.idpreparacion },
      data: updatePreparacionDto!.values
    });

    return PreparacionEntity.fromObject(updatedPreparacion);
  }

  async deleteById( id: number ): Promise<PreparacionEntity> {
    await this.findById( id );
    const deleted = await prisma.preparacion.delete({
      where: { idpreparacion:id }
    });

    return PreparacionEntity.fromObject( deleted );
  }

}
