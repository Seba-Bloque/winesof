/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `bodega` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "bodega" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "bodega_slug_key" ON "bodega"("slug");
