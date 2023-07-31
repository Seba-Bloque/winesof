/*
  Warnings:

  - You are about to drop the column `elementId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `typeEntity` on the `favorites` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bodegaId]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vinoId]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[excursionId]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[experienciaId]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restauranteId]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "elementId",
DROP COLUMN "typeEntity",
ADD COLUMN     "bodegaId" INTEGER,
ADD COLUMN     "excursionId" INTEGER,
ADD COLUMN     "experienciaId" INTEGER,
ADD COLUMN     "restauranteId" INTEGER,
ADD COLUMN     "vinoId" INTEGER;

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
CREATE INDEX "favorites_bodegaId_idx" ON "favorites"("bodegaId");

-- CreateIndex
CREATE INDEX "favorites_vinoId_idx" ON "favorites"("vinoId");

-- CreateIndex
CREATE INDEX "favorites_excursionId_idx" ON "favorites"("excursionId");

-- CreateIndex
CREATE INDEX "favorites_experienciaId_idx" ON "favorites"("experienciaId");

-- CreateIndex
CREATE INDEX "favorites_restauranteId_idx" ON "favorites"("restauranteId");
