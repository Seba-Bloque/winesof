/*
  Warnings:

  - You are about to drop the column `galleryId` on the `bodega` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[countryId]` on the table `bodega` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bodegaId]` on the table `gallery` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[countryId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "bodega_galleryId_idx";

-- DropIndex
DROP INDEX "user_displayName_idx";

-- AlterTable
ALTER TABLE "bodega" DROP COLUMN "galleryId",
ADD COLUMN     "countryId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "gallery" ADD COLUMN     "bodegaId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "news" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "countryId" INTEGER,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "bodega_countryId_key" ON "bodega"("countryId");

-- CreateIndex
CREATE INDEX "bodega_countryId_idx" ON "bodega"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "gallery_bodegaId_key" ON "gallery"("bodegaId");

-- CreateIndex
CREATE INDEX "gallery_bodegaId_idx" ON "gallery"("bodegaId");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_countryId_key" ON "user"("countryId");

-- CreateIndex
CREATE INDEX "user_countryId_idx" ON "user"("countryId");
