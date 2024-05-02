import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function llenarEntidad(): Promise<void> {
  try {
    // Insertar 10 cocineros
    for (let i = 0; i < 10; i++) {
      await prisma.cocinero.create({
        data: {
          nombre: `Cocinero${i}`,
          apellido: `Apellido${i}`,
          cargo: 'Chef',
          sueldo: 2000 
        }
      });
    }

    // Insertar 10 recetas
    for (let i = 0; i < 10; i++) {
      await prisma.receta.create({
        data: {
          nombrePlato: `Plato${i}`,
          categoria: 'Categoría',
          ingredientes: ['Ingrediente1', 'Ingrediente2', 'Ingrediente3'],
          calorias: '500', 
        }
      });
    }

    // Insertar 10 preparaciones relacionando cocineros y recetas
    for (let i = 0; i < 10; i++) {
      await prisma.preparacion.create({
        data: {
          receta: {
            connect: { idreceta: i + 1 } // Asociar con receta creada
          },
          cocinero: {
            connect: { idcocinero: i + 1 } // Asociar con cocinero creado
          },
          fecha: '2024-05-02', 
          hora: '12:00', 
          cantidadProductos: 5, 
          costo: 50, 
          tiempoEstimado: 30 
        }
      });
    }

    console.log("Entidad transaccional llenada exitosamente.");
  } catch (error) {
    console.error("Error al llenar la entidad transaccional:", error);
  }
}
