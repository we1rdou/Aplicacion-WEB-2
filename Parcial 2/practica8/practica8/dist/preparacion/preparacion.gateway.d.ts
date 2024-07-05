import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { PreparacionService } from './preparacion.service';
export declare class PreparacionGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly preparacionService;
    wss: Server;
    constructor(preparacionService: PreparacionService);
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
    handleDisconnect(client: Socket): void;
    onMessageFromClient(client: Socket): void;
    create(CreatePreparacionDto: CreatePreparacionDto): CreatePreparacionDto;
    findAll(): {
        idpreparacion: number;
        idcocinero: number;
        idreceta: number;
        nombre: string;
        descripcion: string;
        tiempo: number;
        dificultad: string;
        categoria: string;
    }[];
}
