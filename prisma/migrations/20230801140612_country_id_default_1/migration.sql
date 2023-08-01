-- AlterTable
ALTER TABLE "bodega" ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "countryId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "city" ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "countryId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "event" ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "countryId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "excursion" ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "countryId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "experiencia" ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "countryId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "countryId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "vino" ALTER COLUMN "countryId" SET DEFAULT 1;
