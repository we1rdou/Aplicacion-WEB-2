import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreparacionService } from './preparacion.service';
import { PreparacionController } from './preparacion.controller';
import { Preparacion } from './entities/preparacion.entity';
import { Receta } from '../receta/entities/receta.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Preparacion, Receta, Cocinero]),
  ],
  controllers: [PreparacionController],
  providers: [PreparacionService],
})
export class PreparacionModule {}
