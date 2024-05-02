-- CreateTable
CREATE TABLE "Cocinero" (
    "idcocinero" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "sueldo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cocinero_pkey" PRIMARY KEY ("idcocinero")
);

-- CreateTable
CREATE TABLE "Receta" (
    "idreceta" SERIAL NOT NULL,
    "nombrePlato" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ingredientes" TEXT[],
    "calorias" TEXT NOT NULL,

    CONSTRAINT "Receta_pkey" PRIMARY KEY ("idreceta")
);

-- CreateTable
CREATE TABLE "Preparacion" (
    "idpreparacion" SERIAL NOT NULL,
    "receta_idreceta" INTEGER NOT NULL,
    "cocinero_idcocinero" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "cantidadProductos" INTEGER NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL,
    "tiempoEstimado" INTEGER NOT NULL,

    CONSTRAINT "Preparacion_pkey" PRIMARY KEY ("idpreparacion")
);

-- AddForeignKey
ALTER TABLE "Preparacion" ADD CONSTRAINT "Preparacion_receta_idreceta_fkey" FOREIGN KEY ("receta_idreceta") REFERENCES "Receta"("idreceta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preparacion" ADD CONSTRAINT "Preparacion_cocinero_idcocinero_fkey" FOREIGN KEY ("cocinero_idcocinero") REFERENCES "Cocinero"("idcocinero") ON DELETE RESTRICT ON UPDATE CASCADE;
