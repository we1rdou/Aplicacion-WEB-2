import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function consultarTransacciones(): Promise<void> {
  try {
    const preparaciones = await prisma.preparacion.findMany({
      include: { cocinero: true, receta: true }
    });
    console.log("Transacciones:");
    console.log(preparaciones);
  } catch (error) {
    console.error("Error al consultar las transacciones:", error);
  }
}
