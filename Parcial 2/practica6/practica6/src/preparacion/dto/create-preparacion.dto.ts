import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePreparacionDto {
  @IsNumber()
  @IsNotEmpty()
  receta_idreceta: number;

  @IsNumber()
  @IsNotEmpty()
  cocinero_idcocinero: number;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsNumber()
  @IsNotEmpty()
  cantidadProductos: number;

  @IsNumber()
  @IsNotEmpty()
  costo: number;

  @IsNumber()
  @IsNotEmpty()
  tiempoEstimado: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
