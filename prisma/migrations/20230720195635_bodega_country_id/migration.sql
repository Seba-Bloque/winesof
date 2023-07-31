-- DropIndex
DROP INDEX "bodega_countryId_key";

-- AlterTable
ALTER TABLE "bodega" ALTER COLUMN "countryId" DROP DEFAULT;
