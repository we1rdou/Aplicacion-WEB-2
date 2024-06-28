import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CocineroService } from './cocinero.service';
import { Cocinero } from './entities/cocinero.entity';
import { CreateCocineroInput } from './dto/create-cocinero.input';
import { UpdateCocineroInput } from './dto/update-cocinero.input';

@Resolver(() => Cocinero)
export class CocineroResolver {
  constructor(private readonly cocineroService: CocineroService) {}

  @Mutation(() => Cocinero)
  createCocinero(@Args('createCocineroInput') createCocineroInput: CreateCocineroInput) {
    return this.cocineroService.create(createCocineroInput);
  }

  @Query(() => [Cocinero], { name: 'cocineros' })
  findAll(@Args('estado', { type: () => String, defaultValue: 'activo' }) estado: string) {
    return this.cocineroService.findAll(estado);
  }

  @Query(() => Cocinero, { name: 'cocinero' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cocineroService.findOne(id);
  }

  @Mutation(() => Cocinero)
  updateCocinero(@Args('updateCocineroInput') updateCocineroInput: UpdateCocineroInput) {
    return this.cocineroService.update(updateCocineroInput.idcocinero, updateCocineroInput);
  }

  @Mutation(() => Cocinero)
  removeCocinero(@Args('id', { type: () => Int }) id: number) {
    return this.cocineroService.remove(id);
  }
}
