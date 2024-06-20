import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Repository } from 'typeorm';
import { Receta } from './entities/receta.entity';
export declare class RecetaService {
    private readonly recetaRepository;
    constructor(recetaRepository: Repository<Receta>);
    create(createRecetaDto: CreateRecetaDto): Promise<Receta>;
    findAll(): Promise<Receta[]>;
    findOne(id: number): Promise<Receta>;
    update(id: number, updateRecetaDto: UpdateRecetaDto): Promise<Receta>;
    remove(id: number): Promise<Receta>;
}
