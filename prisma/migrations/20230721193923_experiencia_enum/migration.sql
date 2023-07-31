-- CreateEnum
CREATE TYPE "Idioma" AS ENUM ('ESPANOL', 'ENGLISH', 'PORTUGUES');

-- AlterTable
ALTER TABLE "experiencia" ADD COLUMN     "bodegaId" INTEGER,
ADD COLUMN     "idioma" "Idioma" NOT NULL DEFAULT 'ESPANOL',
ALTER COLUMN "duration" SET DEFAULT '0';

-- CreateIndex
CREATE INDEX "experiencia_bodegaId_idx" ON "experiencia"("bodegaId");
