import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';

@Controller('preparacion')
export class PreparacionController {
  constructor(private readonly preparacionService: PreparacionService) {}

  @Post()
  create(@Body() createPreparacionDto: CreatePreparacionDto) {
    return this.preparacionService.create(createPreparacionDto);
  }

  @Get()
  findAll() {
    return this.preparacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.preparacionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePreparacionDto: UpdatePreparacionDto) {
    return this.preparacionService.update(id, updatePreparacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const preparacion = await this.preparacionService.remove(id);
    return preparacion;
  }
}
