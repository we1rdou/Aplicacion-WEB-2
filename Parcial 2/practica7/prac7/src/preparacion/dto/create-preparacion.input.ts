import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

@InputType()
export class CreatePreparacionInput {

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  recetaId: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  cocineroId: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  fecha: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  hora: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  cantidadProductos: number;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  costo: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  tiempoEstimado: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  estado: string;
}
