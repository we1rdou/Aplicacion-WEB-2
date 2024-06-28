import { CreatePreparacionInput } from './create-preparacion.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class UpdatePreparacionInput extends PartialType(CreatePreparacionInput) {

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  idpreparacion: number;
}
