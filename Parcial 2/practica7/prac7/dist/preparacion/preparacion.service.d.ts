import { Repository } from 'typeorm';
import { Preparacion } from './entities/preparacion.entity';
import { CreatePreparacionInput } from './dto/create-preparacion.input';
import { UpdatePreparacionInput } from './dto/update-preparacion.input';
import { Receta } from '../receta/entities/receta.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';
export declare class PreparacionService {
    private readonly preparacionRepository;
    private readonly recetaRepository;
    private readonly cocineroRepository;
    constructor(preparacionRepository: Repository<Preparacion>, recetaRepository: Repository<Receta>, cocineroRepository: Repository<Cocinero>);
    create(createPreparacionInput: CreatePreparacionInput): Promise<Preparacion>;
    findAll(estado: string): Promise<Preparacion[]>;
    findOne(id: number): Promise<Preparacion>;
    update(id: number, updatePreparacionInput: UpdatePreparacionInput): Promise<Preparacion>;
    remove(id: number): Promise<Preparacion>;
}
