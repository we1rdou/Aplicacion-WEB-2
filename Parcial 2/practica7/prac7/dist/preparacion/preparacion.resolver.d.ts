import { PreparacionService } from './preparacion.service';
import { Preparacion } from './entities/preparacion.entity';
import { CreatePreparacionInput } from './dto/create-preparacion.input';
import { UpdatePreparacionInput } from './dto/update-preparacion.input';
export declare class PreparacionResolver {
    private readonly preparacionService;
    constructor(preparacionService: PreparacionService);
    createPreparacion(createPreparacionInput: CreatePreparacionInput): Promise<Preparacion>;
    findAll(estado: string): Promise<Preparacion[]>;
    findOne(id: number): Promise<Preparacion>;
    updatePreparacion(updatePreparacionInput: UpdatePreparacionInput): Promise<Preparacion>;
    removePreparacion(id: number): Promise<Preparacion>;
}
