import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocinero } from './entities/cocinero.entity';
import { CocineroService } from './cocinero.service';
import { CocineroController } from './cocinero.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cocinero])],
  providers: [CocineroService],
  controllers: [CocineroController],
})
export class CocineroModule {}
