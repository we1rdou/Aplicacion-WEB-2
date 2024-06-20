import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocineroModule } from './cocinero/cocinero.module';
import { RecetaModule } from './receta/receta.module';
import { PreparacionModule } from './preparacion/preparacion.module';
import { Cocinero } from './cocinero/entities/cocinero.entity';
import { Receta } from './receta/entities/receta.entity';
import { Preparacion } from './preparacion/entities/preparacion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'adm',
      database: 'prac6',
      entities: [Cocinero, Receta, Preparacion],
      synchronize: true,
    }),
    CocineroModule,
    RecetaModule,
    PreparacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
