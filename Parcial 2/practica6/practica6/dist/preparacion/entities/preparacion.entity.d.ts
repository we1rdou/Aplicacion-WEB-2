import { Receta } from '../../receta/entities/receta.entity';
import { Cocinero } from '../../cocinero/entities/cocinero.entity';
export declare class Preparacion {
    idpreparacion: number;
    receta: Receta;
    cocinero: Cocinero;
    fecha: string;
    hora: string;
    cantidadProductos: number;
    costo: number;
    tiempoEstimado: number;
    estado: string;
}
