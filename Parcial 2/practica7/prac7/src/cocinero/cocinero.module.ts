import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocineroService } from './cocinero.service';
import { CocineroResolver } from './cocinero.resolver';
import { Cocinero } from './entities/cocinero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cocinero])],
  providers: [CocineroService, CocineroResolver],
  exports: [CocineroService],
})
export class CocineroModule {}
