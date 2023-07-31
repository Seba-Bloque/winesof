-- AlterTable
ALTER TABLE "excursion" ADD COLUMN     "cityId" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "excursion_cityId_idx" ON "excursion"("cityId");
