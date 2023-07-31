-- CreateTable
CREATE TABLE "restaurante" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "featured" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "openingHours" TEXT NOT NULL,
    "awards" TEXT NOT NULL,
    "chef" TEXT NOT NULL,
    "sommelier" TEXT NOT NULL,

    CONSTRAINT "restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bodegaId" INTEGER,
    "vinoId" INTEGER,
    "excursionId" INTEGER,
    "experienciaId" INTEGER,
    "restauranteId" INTEGER,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "favorites_bodegaId_key" ON "favorites"("bodegaId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_vinoId_key" ON "favorites"("vinoId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_excursionId_key" ON "favorites"("excursionId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_experienciaId_key" ON "favorites"("experienciaId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_restauranteId_key" ON "favorites"("restauranteId");

-- CreateIndex
CREATE INDEX "favorites_userId_idx" ON "favorites"("userId");

-- CreateIndex
CREATE INDEX "favorites_bodegaId_idx" ON "favorites"("bodegaId");

-- CreateIndex
CREATE INDEX "favorites_vinoId_idx" ON "favorites"("vinoId");

-- CreateIndex
CREATE INDEX "favorites_excursionId_idx" ON "favorites"("excursionId");

-- CreateIndex
CREATE INDEX "favorites_experienciaId_idx" ON "favorites"("experienciaId");

-- CreateIndex
CREATE INDEX "favorites_restauranteId_idx" ON "favorites"("restauranteId");
