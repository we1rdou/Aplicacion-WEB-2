import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetaService } from './receta.service';
import { RecetaController } from './receta.controller';
import { Receta } from './entities/receta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receta])],
  providers: [RecetaService],
  controllers: [RecetaController],
})
export class RecetaModule {}
