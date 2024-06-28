import { CreateRecetaInput } from './create-receta.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateRecetaInput extends PartialType(CreateRecetaInput) {
  @Field(() => ID)
  @IsNotEmpty()
  idreceta: number;
}
