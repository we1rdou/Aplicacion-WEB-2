import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreparacionModule } from './preparacion/preparacion.module';

@Module({
  imports: [PreparacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
