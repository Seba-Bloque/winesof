-- AlterTable
ALTER TABLE "excursion" ALTER COLUMN "featured" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "experiencia" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "cityId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "experiencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "experiencia_cityId_idx" ON "experiencia"("cityId");

-- CreateIndex
CREATE INDEX "experiencia_countryId_idx" ON "experiencia"("countryId");
