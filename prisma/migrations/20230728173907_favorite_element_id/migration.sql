/*
  Warnings:

  - You are about to drop the column `bodegaId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `excursionId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `experienciaId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `restauranteId` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `vinoId` on the `favorites` table. All the data in the column will be lost.
  - Added the required column `elementId` to the `favorites` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "favorites_bodegaId_idx";

-- DropIndex
DROP INDEX "favorites_bodegaId_key";

-- DropIndex
DROP INDEX "favorites_excursionId_idx";

-- DropIndex
DROP INDEX "favorites_excursionId_key";

-- DropIndex
DROP INDEX "favorites_experienciaId_idx";

-- DropIndex
DROP INDEX "favorites_experienciaId_key";

-- DropIndex
DROP INDEX "favorites_restauranteId_idx";

-- DropIndex
DROP INDEX "favorites_restauranteId_key";

-- DropIndex
DROP INDEX "favorites_vinoId_idx";

-- DropIndex
DROP INDEX "favorites_vinoId_key";

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "bodegaId",
DROP COLUMN "excursionId",
DROP COLUMN "experienciaId",
DROP COLUMN "restauranteId",
DROP COLUMN "vinoId",
ADD COLUMN     "elementId" INTEGER NOT NULL;
