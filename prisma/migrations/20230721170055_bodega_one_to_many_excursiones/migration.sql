-- AlterTable
ALTER TABLE "excursion" ADD COLUMN     "bodegaId" INTEGER;

-- CreateIndex
CREATE INDEX "excursion_bodegaId_idx" ON "excursion"("bodegaId");
