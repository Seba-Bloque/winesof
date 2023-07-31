/*
  Warnings:

  - You are about to drop the column `bodegaId` on the `vino` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "vino_bodegaId_idx";

-- AlterTable
ALTER TABLE "vino" DROP COLUMN "bodegaId";

-- CreateTable
CREATE TABLE "_VinoBodega" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VinoBodega_AB_unique" ON "_VinoBodega"("A", "B");

-- CreateIndex
CREATE INDEX "_VinoBodega_B_index" ON "_VinoBodega"("B");
