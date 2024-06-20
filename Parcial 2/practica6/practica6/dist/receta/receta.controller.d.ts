import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
export declare class RecetaController {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    create(createRecetaDto: CreateRecetaDto): Promise<import("./entities/receta.entity").Receta>;
    findAll(): Promise<import("./entities/receta.entity").Receta[]>;
    findOne(id: number): Promise<import("./entities/receta.entity").Receta>;
    update(id: number, updateRecetaDto: UpdateRecetaDto): Promise<import("./entities/receta.entity").Receta>;
    remove(id: number): Promise<import("./entities/receta.entity").Receta>;
}
