/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `experiencia` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "experiencia" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "experiencia_slug_key" ON "experiencia"("slug");
