import { CreateCocineroInput } from './create-cocinero.input';
import { InputType, Field,  PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty,  IsNumber } from 'class-validator';

@InputType()
export class UpdateCocineroInput extends PartialType(CreateCocineroInput) {
  
  @Field(() => ID)
  @IsNotEmpty()
  @IsNumber()
  idcocinero: number;
}
