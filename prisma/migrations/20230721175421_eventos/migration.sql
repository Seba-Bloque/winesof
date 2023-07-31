/*
  Warnings:

  - You are about to drop the column `name` on the `event` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" DROP COLUMN "name",
ADD COLUMN     "countryId" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "featured" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "excursion" ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "date" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "event_countryId_idx" ON "event"("countryId");
