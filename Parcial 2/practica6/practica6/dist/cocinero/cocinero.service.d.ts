import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Repository } from 'typeorm';
import { Cocinero } from './entities/cocinero.entity';
export declare class CocineroService {
    private readonly cocineroRepository;
    constructor(cocineroRepository: Repository<Cocinero>);
    create(createCocineroDto: CreateCocineroDto): Promise<Cocinero>;
    findAll(): Promise<Cocinero[]>;
    findOne(id: number): Promise<Cocinero>;
    update(id: number, updateCocineroDto: UpdateCocineroDto): Promise<Cocinero>;
    remove(id: number): Promise<Cocinero>;
}
