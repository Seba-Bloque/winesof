/*
  Warnings:

  - Made the column `slug` on table `bodega` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bodega" ALTER COLUMN "slug" SET NOT NULL;
