-- CreateTable
CREATE TABLE "Coches" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "info" TEXT NOT NULL,
    "imagen1" TEXT NOT NULL,
    "imagen2" TEXT,
    "imagen3" TEXT,

    CONSTRAINT "Coches_pkey" PRIMARY KEY ("id")
);
