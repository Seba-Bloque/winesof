/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `excursion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "excursion" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "excursion_slug_key" ON "excursion"("slug");
