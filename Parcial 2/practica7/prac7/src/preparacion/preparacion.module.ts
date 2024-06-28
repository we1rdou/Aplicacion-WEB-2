import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreparacionService } from './preparacion.service';
import { PreparacionResolver } from './preparacion.resolver';
import { Preparacion } from './entities/preparacion.entity';
import { Receta } from '../receta/entities/receta.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';
import { RecetaModule } from '../receta/receta.module';
import { CocineroModule } from '../cocinero/cocinero.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Preparacion, Receta, Cocinero]),
    RecetaModule,
    CocineroModule,
  ],
  providers: [PreparacionService, PreparacionResolver],
  exports: [PreparacionService],
})
export class PreparacionModule {}
