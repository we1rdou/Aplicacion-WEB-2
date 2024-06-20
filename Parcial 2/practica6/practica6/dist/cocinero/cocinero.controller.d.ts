import { CocineroService } from './cocinero.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
export declare class CocineroController {
    private readonly cocineroService;
    constructor(cocineroService: CocineroService);
    create(createCocineroDto: CreateCocineroDto): Promise<import("./entities/cocinero.entity").Cocinero>;
    findAll(): Promise<import("./entities/cocinero.entity").Cocinero[]>;
    findOne(id: number): Promise<import("./entities/cocinero.entity").Cocinero>;
    update(id: number, updateCocineroDto: UpdateCocineroDto): Promise<import("./entities/cocinero.entity").Cocinero>;
    remove(id: number): Promise<import("./entities/cocinero.entity").Cocinero>;
}
