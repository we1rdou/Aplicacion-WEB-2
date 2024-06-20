import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
import { Repository } from 'typeorm';
import { Preparacion } from './entities/preparacion.entity';
import { Receta } from '../receta/entities/receta.entity';
import { Cocinero } from '../cocinero/entities/cocinero.entity';
export declare class PreparacionService {
    private readonly preparacionRepository;
    private readonly recetaRepository;
    private readonly cocineroRepository;
    constructor(preparacionRepository: Repository<Preparacion>, recetaRepository: Repository<Receta>, cocineroRepository: Repository<Cocinero>);
    create(createPreparacionDto: CreatePreparacionDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePreparacionDto: UpdatePreparacionDto): Promise<any>;
    remove(id: number): Promise<any>;
    private toResponseDto;
}
