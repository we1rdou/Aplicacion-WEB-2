import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
export declare class PreparacionController {
    private readonly preparacionService;
    constructor(preparacionService: PreparacionService);
    create(createPreparacionDto: CreatePreparacionDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePreparacionDto: UpdatePreparacionDto): Promise<any>;
    remove(id: number): Promise<any>;
}
