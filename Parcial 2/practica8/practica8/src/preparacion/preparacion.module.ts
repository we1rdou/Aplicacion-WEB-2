import { Module } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { PreparacionGateway } from './preparacion.gateway';

@Module({
  providers: [PreparacionGateway, PreparacionService],
})
export class PreparacionModule {}
