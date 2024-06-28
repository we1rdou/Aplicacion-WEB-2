import { Repository } from 'typeorm';
import { Receta } from './entities/receta.entity';
import { CreateRecetaInput } from './dto/create-receta.input';
import { UpdateRecetaInput } from './dto/update-receta.input';
export declare class RecetaService {
    private readonly recetaRepository;
    constructor(recetaRepository: Repository<Receta>);
    create(createRecetaInput: CreateRecetaInput): Promise<Receta>;
    findAll(estado: string): Promise<Receta[]>;
    findOne(id: number): Promise<Receta>;
    update(id: number, updateRecetaInput: UpdateRecetaInput): Promise<Receta>;
    remove(id: number): Promise<Receta>;
}
