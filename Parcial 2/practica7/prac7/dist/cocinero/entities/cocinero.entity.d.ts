import { Preparacion } from '../../preparacion/entities/preparacion.entity';
export declare class Cocinero {
    idcocinero: number;
    nombre: string;
    apellido: string;
    cargo: string;
    sueldo: number;
    estado: string;
    preparaciones: Preparacion[];
}
