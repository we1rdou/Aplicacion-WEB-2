// data.ts

export interface Cocinero {
    idcocinero: number;
    nombre: string;
    apellido:string;
    cargo:string;
    sueldo: number;
}

export interface Receta {
    idreceta: number;
    nombrePlato: string;
    categoria:string;
    ingredientes: string[];
    calorias:string;
}

export interface Preparacion {
    idpreparacion: number;
    receta_idreceta: number;
    cocinero_idcocinero: number;
    fecha: string; 
    hora: string; 
    cantidadProductos: number;
    costo: number;
    tiempoEstimado: number;
}

export const cocineros: Cocinero[] = [
    { idcocinero: 1, nombre: "Leandro", apellido: "Flores", cargo: "Jefe de cocina", sueldo: 2000 },
    { idcocinero: 2, nombre: "Francisco", apellido: "Sanchez", cargo: "Subejefe de cocina", sueldo: 1700 },
    { idcocinero: 3, nombre: "Jennifer", apellido: "Vazquez", cargo: "Chef gourmet", sueldo: 1500 },
    { idcocinero: 4, nombre: "Jerson", apellido: "Cuenca", cargo: "Ayudante de cocina", sueldo: 1000 },
    { idcocinero: 5, nombre: "Jandry", apellido: "Moreira", cargo: "Ayudante de cocina", sueldo: 1000 }
];

export const recetas: Receta[] = [
    { idreceta: 1, nombrePlato: "Spaghetti a la bolognesa", categoria: "Pastas", ingredientes: ["pasta", "carne molida", "salsa de tomate", "cebolla", "ajo"], calorias:"720c" },
    { idreceta: 2, nombrePlato: "Ensalada César", categoria:"Ensaladas", ingredientes: ["lechuga", "pollo", "pan", "queso parmesano", "aderezo César"], calorias:"320c" },
    { idreceta: 3, nombrePlato: "Sushi", categoria: "Comida Japonesa", ingredientes: ["arroz", "alga nori", "pescado", "aguacate", "salsa de soja"], calorias:"480c" },
    { idreceta: 4, nombrePlato: "Hamburguesa", categoria:"Comida Rapida", ingredientes: ["carne de res", "pan de hamburguesa", "queso cheddar", "lechuga", "tomate"], calorias:"830c" },
    { idreceta: 5, nombrePlato: "Tacos al pastor", categoria:"Comida Mexicana", ingredientes: ["carne de cerdo", "tortillas de maíz", "piña", "cebolla", "cilantro"], calorias:"630c"}
];

export const preparaciones: Preparacion[] = [      
    { idpreparacion: 1, receta_idreceta: 1, cocinero_idcocinero: 1, fecha: "2024-04-25", hora: "18:00", cantidadProductos: 10, costo: 50, tiempoEstimado: 30 },
    { idpreparacion: 2, receta_idreceta: 2, cocinero_idcocinero: 3, fecha: "2024-04-25", hora: "19:00", cantidadProductos: 8, costo: 35, tiempoEstimado: 25 },
    { idpreparacion: 3, receta_idreceta: 3, cocinero_idcocinero: 2, fecha: "2024-04-25", hora: "20:00", cantidadProductos: 15, costo: 60, tiempoEstimado: 40 },
    { idpreparacion: 4, receta_idreceta: 4, cocinero_idcocinero: 4, fecha: "2024-04-25", hora: "21:00", cantidadProductos: 12, costo: 45, tiempoEstimado: 35 },
    { idpreparacion: 5, receta_idreceta: 5, cocinero_idcocinero: 5, fecha: "2024-04-25", hora: "22:00", cantidadProductos: 20, costo: 70, tiempoEstimado: 45 }
];
