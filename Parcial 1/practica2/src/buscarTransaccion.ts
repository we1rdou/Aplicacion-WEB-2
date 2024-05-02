import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function buscarTransaccion(id: number): Promise<void> {
  try {
    const preparacion = await prisma.preparacion.findUnique({
      where: { idpreparacion: id },
      include: { cocinero: true, receta: true }
    });
    console.log("Transacción encontrada:");
    console.log(preparacion);
  } catch (error) {
    console.error("Error al buscar la transacción:", error);
  }
}
