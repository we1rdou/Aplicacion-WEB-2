import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PreparacionService } from './preparacion.service';
import { Preparacion } from './entities/preparacion.entity';
import { CreatePreparacionInput } from './dto/create-preparacion.input';
import { UpdatePreparacionInput } from './dto/update-preparacion.input';

@Resolver(() => Preparacion)
export class PreparacionResolver {
  constructor(private readonly preparacionService: PreparacionService) {}

  @Mutation(() => Preparacion)
  createPreparacion(@Args('createPreparacionInput') createPreparacionInput: CreatePreparacionInput) {
    return this.preparacionService.create(createPreparacionInput);
  }

  @Query(() => [Preparacion], { name: 'preparaciones' })
  findAll(@Args('estado', { type: () => String, nullable:true }) estado: string) {
    return this.preparacionService.findAll(estado);
  }

  @Query(() => Preparacion, { name: 'preparacion' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.preparacionService.findOne(id);
  }

  @Mutation(() => Preparacion)
  updatePreparacion(@Args('updatePreparacionInput') updatePreparacionInput: UpdatePreparacionInput) {
    return this.preparacionService.update(updatePreparacionInput.idpreparacion, updatePreparacionInput);
  }

  @Mutation(() => Preparacion)
  removePreparacion(@Args('id', { type: () => ID }) id: number) {
    return this.preparacionService.remove(id);
  }
}
