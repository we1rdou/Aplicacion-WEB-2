// main.ts

import { cocineros, recetas, preparaciones } from "./data";
import { buscarPorID, buscarCocineroPorID, buscarRecetaPorID, buscarPreparacionPorID } from "./utils";

console.log("Cocineros:");
cocineros.forEach(cocinero => {
    console.log(`ID: ${cocinero.idcocinero}, Nombre: ${cocinero.nombre} ${cocinero.apellido}, Cargo: ${cocinero.cargo}, Sueldo: ${cocinero.sueldo}`);
});

console.log("\nRecetas:");
for (const receta of recetas) {
    console.log(`ID: ${receta.idreceta}, Nombre: ${receta.nombrePlato}, Categoría: ${receta.categoria}, Calorías: ${receta.calorias}`);
}

console.log("\nPreparaciones:");
for (const preparacion of preparaciones) {
    console.log(`ID: ${preparacion.idpreparacion}, Receta ID: ${preparacion.receta_idreceta}, Cocinero ID: ${preparacion.cocinero_idcocinero}, Fecha: ${preparacion.fecha}, Hora: ${preparacion.hora}, Cantidad de Productos: ${preparacion.cantidadProductos}, Costo: ${preparacion.costo}, Tiempo Estimado: ${preparacion.tiempoEstimado}`);
}

// Ejemplo de uso de las funciones de búsqueda
const idBuscado = 3;

const cocineroEncontrado = buscarPorID(cocineros, idBuscado, buscarCocineroPorID(idBuscado));
if (cocineroEncontrado) {
    console.log("Cocinero encontrado:", cocineroEncontrado);
} else {
    console.log("Cocinero no encontrado.");
}

const recetaEncontrada = buscarPorID(recetas, idBuscado, buscarRecetaPorID(idBuscado));
if (recetaEncontrada) {
    console.log("Receta encontrada:", recetaEncontrada);
} else {
    console.log("Receta no encontrada.");
}

const preparacionEncontrada = buscarPorID(preparaciones, idBuscado, buscarPreparacionPorID(idBuscado));
if (preparacionEncontrada) {
    console.log("Preparación encontrada:", preparacionEncontrada);
} else {
    console.log("Preparación no encontrada.");
}
