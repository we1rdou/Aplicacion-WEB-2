import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { Socket } from 'socket.io';
interface User {
    id: string;
    nombre: string;
    isActive: boolean;
}
export declare class PreparacionService {
    private connectedClients;
    registerClient(socket: Socket, userId: string): void;
    removeClient(clienteId: string): void;
    getConnectedClients(): string[];
    getUserFullName(socketId: string): string;
    checkUserConnection(user: User): void;
    create(createPreparacionDto: CreatePreparacionDto): CreatePreparacionDto;
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
export {};
