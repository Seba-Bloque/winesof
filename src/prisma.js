import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function populateDatabase() {
    try {
        // Crear países
        // const country1 = await prisma.country.create({
        //   data: {
        //     name: "País 1",
        //     image: 'url'
        //   },
        // });

        const country2 = await prisma.country.findFirst({
          where: {
            id: 1,
          },
        });

        // Crear ciudades
        const city1 = await prisma.city.create({
          data: {
            name: "colonia",
            countryId: country2.id,
          },
        });

        const city2 = await prisma.city.create({
          data: {
            name: "Tacuarembo",
            countryId: country2.id,
          },
        });

        // Crear galería
        // const gallery1 = await prisma.gallery.create({
        //     data: {
        //         name: "Galería 20",
        //     },
        // });

        const gallery3 = await prisma.gallery.create({
          data: {
            name: "Galería 3",
          },
        });

        // Crear imágenes
        const image1 = await prisma.image.create({
            data: {
                url: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                galleryId: gallery3.id,
            },
        });

        const image2 = await prisma.image.create({
            data: {
                url: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                galleryId: gallery3.id,
            },
        });

        // const image3 = await prisma.image.create({
        //     data: {
        //         url: "https://images.unsplash.com/photo-1567845735143-5e5d9d3f8f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        //         galleryId: gallery1.id,
        //     },
        // });

        // Crear bodegas
        const bodega1 = await prisma.bodega.create({
          data: {
            name: "Bodega Colonia",
            city: {
              connect: {
                id: city1.id,
              },
            },
            image: "https://images.unsplash.com/photo-1484347500940-3a373367eb8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            gallery: {
              connect: {
                id: gallery3.id,
              },
            },
          },
        });

        const bodega2 = await prisma.bodega.create({
          data: {
            name: "Bodega Tacuarembo",
            city: {
              connect: {
                id: city2.id,
              },
            },
            image: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
            gallery: {
              connect: {
                id: gallery3.id,
              },
            },
          },
        });

        // Crear eventos
        const servicio1 = await prisma.service.create({
          data: {
            name: "servicio 1",
            bodegas: {
              connect: {
                id: bodega2.id,
              },
            },
          },
        });
        const servicio2 = await prisma.service.create({
          data: {
            name: "servicio 2",
            bodegas: {
              connect: {
                id: bodega2.id,
              },
            },
          },
        });
        const servicio3 = await prisma.service.create({
          data: {
            name: "servicio 3",
            bodegas: {
              connect: {
                id: bodega1.id,
              },
            },
          },
        });

        // const event2 = await prisma.event.create({
        //   data: {
        //     name: "Evento 2",
        //     city: {
        //       connect: {
        //         id: city2.id,
        //       },
        //     },
        //     bodega: {
        //       connect: {
        //         id: bodega2.id,
        //       },
        //     },
        //   },
        // });

        console.log("Base de datos poblada correctamente.");
    } catch (error) {
        console.error("Error al poblar la base de datos:", error);
    } finally {
        await prisma.$disconnect();
    }
}

// populateDatabase();


export default prisma;