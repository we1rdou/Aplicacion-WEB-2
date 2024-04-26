// utils.ts

import { Cocinero, Receta, Preparacion } from "./data";

export function buscarPorID<T>(arreglo: T[], id: number, callback: (elemento: T) => boolean): T | undefined {
    return arreglo.find(callback);
}

export const buscarCocineroPorID = (id: number) => (cocinero: Cocinero) => cocinero.idcocinero === id;

export const buscarRecetaPorID = (id: number) => (receta: Receta) => receta.idreceta === id;

export const buscarPreparacionPorID = (id: number) => (preparacion: Preparacion) => preparacion.idpreparacion === id;
