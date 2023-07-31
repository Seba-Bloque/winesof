-- CreateTable
CREATE TABLE "excursion" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "duration" TEXT NOT NULL,
    "featured" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "excursion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "excursion_countryId_idx" ON "excursion"("countryId");
