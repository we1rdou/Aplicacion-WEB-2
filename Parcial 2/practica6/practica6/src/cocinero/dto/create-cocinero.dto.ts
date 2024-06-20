import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateCocineroDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsNumber()
  @IsNotEmpty()
  sueldo: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
