import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetaService } from './receta.service';
import { RecetaResolver } from './receta.resolver';
import { Receta } from './entities/receta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receta])],
  providers: [RecetaService, RecetaResolver],
  exports: [RecetaService],
})
export class RecetaModule {}
