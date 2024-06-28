import { RecetaService } from './receta.service';
import { Receta } from './entities/receta.entity';
import { CreateRecetaInput } from './dto/create-receta.input';
import { UpdateRecetaInput } from './dto/update-receta.input';
export declare class RecetaResolver {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    createReceta(createRecetaInput: CreateRecetaInput): Promise<Receta>;
    findAll(estado: string): Promise<Receta[]>;
    findOne(id: number): Promise<Receta>;
    updateReceta(updateRecetaInput: UpdateRecetaInput): Promise<Receta>;
    removeReceta(id: number): Promise<Receta>;
}
