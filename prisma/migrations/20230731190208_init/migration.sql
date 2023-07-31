-- CreateEnum
CREATE TYPE "Idioma" AS ENUM ('ESPANOL', 'ENGLISH', 'PORTUGUES');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "googleId" TEXT,
    "displayName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "image" TEXT,
    "role" TEXT NOT NULL,
    "countryId" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bodega" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "bodega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "galleryId" INTEGER,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodegaId" INTEGER NOT NULL,

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
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "duration" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "bodegaId" INTEGER,
    "cityId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
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
    "varietal" INTEGER NOT NULL DEFAULT 0,
    "countryId" INTEGER NOT NULL,

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
CREATE TABLE "excursion" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3),
    "duration" TEXT NOT NULL,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "cityId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "bodegaId" INTEGER,

    CONSTRAINT "excursion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiencia" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "featured" INTEGER NOT NULL DEFAULT 0,
    "duration" TEXT,
    "cityId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "bodegaId" INTEGER,
    "idioma" "Idioma" NOT NULL DEFAULT 'ESPANOL',

    CONSTRAINT "experiencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurante" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "featured" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "openingHours" TEXT NOT NULL,
    "awards" TEXT NOT NULL,
    "chef" TEXT NOT NULL,
    "sommelier" TEXT NOT NULL,

    CONSTRAINT "restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bodegaId" INTEGER,
    "vinoId" INTEGER,
    "excursionId" INTEGER,
    "experienciaId" INTEGER,
    "restauranteId" INTEGER,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BodegaService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_VinoBodega" (
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
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_countryId_key" ON "user"("countryId");

-- CreateIndex
CREATE INDEX "user_countryId_idx" ON "user"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "bodega_slug_key" ON "bodega"("slug");

-- CreateIndex
CREATE INDEX "bodega_cityId_idx" ON "bodega"("cityId");

-- CreateIndex
CREATE INDEX "bodega_countryId_idx" ON "bodega"("countryId");

-- CreateIndex
CREATE INDEX "image_galleryId_idx" ON "image"("galleryId");

-- CreateIndex
CREATE UNIQUE INDEX "gallery_bodegaId_key" ON "gallery"("bodegaId");

-- CreateIndex
CREATE INDEX "gallery_bodegaId_idx" ON "gallery"("bodegaId");

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
CREATE INDEX "event_countryId_idx" ON "event"("countryId");

-- CreateIndex
CREATE INDEX "news_bodegaId_idx" ON "news"("bodegaId");

-- CreateIndex
CREATE INDEX "vino_countryId_idx" ON "vino"("countryId");

-- CreateIndex
CREATE INDEX "excursion_countryId_idx" ON "excursion"("countryId");

-- CreateIndex
CREATE INDEX "excursion_cityId_idx" ON "excursion"("cityId");

-- CreateIndex
CREATE INDEX "excursion_bodegaId_idx" ON "excursion"("bodegaId");

-- CreateIndex
CREATE INDEX "experiencia_cityId_idx" ON "experiencia"("cityId");

-- CreateIndex
CREATE INDEX "experiencia_countryId_idx" ON "experiencia"("countryId");

-- CreateIndex
CREATE INDEX "experiencia_bodegaId_idx" ON "experiencia"("bodegaId");

-- CreateIndex
CREATE INDEX "notes_userId_idx" ON "notes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_bodegaId_key" ON "favorites"("bodegaId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_vinoId_key" ON "favorites"("vinoId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_excursionId_key" ON "favorites"("excursionId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_experienciaId_key" ON "favorites"("experienciaId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_restauranteId_key" ON "favorites"("restauranteId");

-- CreateIndex
CREATE INDEX "favorites_userId_idx" ON "favorites"("userId");

-- CreateIndex
CREATE INDEX "favorites_bodegaId_idx" ON "favorites"("bodegaId");

-- CreateIndex
CREATE INDEX "favorites_vinoId_idx" ON "favorites"("vinoId");

-- CreateIndex
CREATE INDEX "favorites_excursionId_idx" ON "favorites"("excursionId");

-- CreateIndex
CREATE INDEX "favorites_experienciaId_idx" ON "favorites"("experienciaId");

-- CreateIndex
CREATE INDEX "favorites_restauranteId_idx" ON "favorites"("restauranteId");

-- CreateIndex
CREATE UNIQUE INDEX "_BodegaService_AB_unique" ON "_BodegaService"("A", "B");

-- CreateIndex
CREATE INDEX "_BodegaService_B_index" ON "_BodegaService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VinoBodega_AB_unique" ON "_VinoBodega"("A", "B");

-- CreateIndex
CREATE INDEX "_VinoBodega_B_index" ON "_VinoBodega"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VinoType_AB_unique" ON "_VinoType"("A", "B");

-- CreateIndex
CREATE INDEX "_VinoType_B_index" ON "_VinoType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VinoCepa_AB_unique" ON "_VinoCepa"("A", "B");

-- CreateIndex
CREATE INDEX "_VinoCepa_B_index" ON "_VinoCepa"("B");
