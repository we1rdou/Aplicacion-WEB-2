import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecetaService } from './receta.service';
import { Receta } from './entities/receta.entity';
import { CreateRecetaInput } from './dto/create-receta.input';
import { UpdateRecetaInput } from './dto/update-receta.input';

@Resolver(() => Receta)
export class RecetaResolver {
  constructor(private readonly recetaService: RecetaService) {}

  @Mutation(() => Receta)
  createReceta(@Args('createRecetaInput') createRecetaInput: CreateRecetaInput) {
    return this.recetaService.create(createRecetaInput);
  }

  @Query(() => [Receta], { name: 'recetas' })
  findAll(@Args('estado', { type: () => String, defaultValue: 'activo' }) estado: string) {
    return this.recetaService.findAll(estado);
  }

  @Query(() => Receta, { name: 'receta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.recetaService.findOne(id);
  }

  @Mutation(() => Receta)
  updateReceta(@Args('updateRecetaInput') updateRecetaInput: UpdateRecetaInput) {
    return this.recetaService.update(updateRecetaInput.idreceta, updateRecetaInput);
  }

  @Mutation(() => Receta)
  removeReceta(@Args('id', { type: () => Int }) id: number) {
    return this.recetaService.remove(id);
  }
}
