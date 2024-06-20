import { IsString, IsNotEmpty, IsArray, MinLength } from 'class-validator';

export class CreateRecetaDto {
  @IsString()
  @IsNotEmpty()
  nombrePlato: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsArray()
  @IsNotEmpty()
  ingredientes: string[];

  @IsString()
  @IsNotEmpty()
  calorias: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
