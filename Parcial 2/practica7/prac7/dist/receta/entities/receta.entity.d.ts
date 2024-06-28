import { Preparacion } from '../../preparacion/entities/preparacion.entity';
export declare class Receta {
    idreceta: number;
    nombrePlato: string;
    categoria: string;
    ingredientes: string[];
    calorias: string;
    estado: string;
    preparaciones: Preparacion[];
}
