import { CocineroService } from './cocinero.service';
import { Cocinero } from './entities/cocinero.entity';
import { CreateCocineroInput } from './dto/create-cocinero.input';
import { UpdateCocineroInput } from './dto/update-cocinero.input';
export declare class CocineroResolver {
    private readonly cocineroService;
    constructor(cocineroService: CocineroService);
    createCocinero(createCocineroInput: CreateCocineroInput): Promise<Cocinero>;
    findAll(estado: string): Promise<Cocinero[]>;
    findOne(id: number): Promise<Cocinero>;
    updateCocinero(updateCocineroInput: UpdateCocineroInput): Promise<Cocinero>;
    removeCocinero(id: number): Promise<Cocinero>;
}
