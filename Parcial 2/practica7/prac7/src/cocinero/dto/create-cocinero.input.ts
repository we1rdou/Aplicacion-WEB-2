import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateCocineroInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  cargo: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  sueldo: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  estado: string;
}
