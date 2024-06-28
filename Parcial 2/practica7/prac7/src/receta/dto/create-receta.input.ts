import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

@InputType()
export class CreateRecetaInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  nombrePlato: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  categoria: string;

  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  ingredientes: string[];

  @Field()
  @IsNotEmpty()
  @IsString()
  calorias: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  estado: string;
}
