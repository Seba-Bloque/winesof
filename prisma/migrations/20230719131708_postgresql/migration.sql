-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "googleId" TEXT NOT NULL,
    "displayName" TEXT,
    "email" TEXT,
    "image" TEXT,
    "role" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bodega" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "galleryId" INTEGER NOT NULL,

    CONSTRAINT "bodega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "galleryId" INTEGER NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "cityId" INTEGER NOT NULL,
    "bodegaId" INTEGER,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodegaId" INTEGER,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vino" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "barrica" INTEGER NOT NULL DEFAULT 0,
    "awared" INTEGER NOT NULL DEFAULT 0,
    "countryId" INTEGER NOT NULL,
    "bodegaId" INTEGER NOT NULL,

    CONSTRAINT "vino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cepa" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cepa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BodegaService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_VinoType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_VinoCepa" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_googleId_key" ON "user"("googleId");

-- CreateIndex
CREATE INDEX "user_displayName_idx" ON "user"("displayName");

-- CreateIndex
CREATE INDEX "bodega_cityId_idx" ON "bodega"("cityId");

-- CreateIndex
CREATE INDEX "bodega_galleryId_idx" ON "bodega"("galleryId");

-- CreateIndex
CREATE INDEX "image_galleryId_idx" ON "image"("galleryId");

-- CreateIndex
CREATE INDEX "service_name_idx" ON "service"("name");

-- CreateIndex
CREATE INDEX "city_name_idx" ON "city"("name");

-- CreateIndex
CREATE INDEX "city_countryId_idx" ON "city"("countryId");

-- CreateIndex
CREATE INDEX "country_name_idx" ON "country"("name");

-- CreateIndex
CREATE INDEX "event_cityId_idx" ON "event"("cityId");

-- CreateIndex
CREATE INDEX "event_bodegaId_idx" ON "event"("bodegaId");

-- CreateIndex
CREATE INDEX "news_bodegaId_idx" ON "news"("bodegaId");

-- CreateIndex
CREATE INDEX "vino_countryId_idx" ON "vino"("countryId");

-- CreateIndex
CREATE INDEX "vino_bodegaId_idx" ON "vino"("bodegaId");

-- CreateIndex
CREATE UNIQUE INDEX "_BodegaService_AB_unique" ON "_BodegaService"("A", "B");

-- CreateIndex
CREATE INDEX "_BodegaService_B_index" ON "_BodegaService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VinoType_AB_unique" ON "_VinoType"("A", "B");

-- CreateIndex
CREATE INDEX "_VinoType_B_index" ON "_VinoType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VinoCepa_AB_unique" ON "_VinoCepa"("A", "B");

-- CreateIndex
CREATE INDEX "_VinoCepa_B_index" ON "_VinoCepa"("B");
