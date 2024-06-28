import { Repository } from 'typeorm';
import { Cocinero } from './entities/cocinero.entity';
import { CreateCocineroInput } from './dto/create-cocinero.input';
import { UpdateCocineroInput } from './dto/update-cocinero.input';
export declare class CocineroService {
    private readonly cocineroRepository;
    constructor(cocineroRepository: Repository<Cocinero>);
    create(createCocineroInput: CreateCocineroInput): Promise<Cocinero>;
    findAll(estado: string): Promise<Cocinero[]>;
    findOne(id: number): Promise<Cocinero>;
    update(id: number, updateCocineroInput: UpdateCocineroInput): Promise<Cocinero>;
    remove(id: number): Promise<Cocinero>;
}
