import prisma from "../prisma.js";
import { validFileData } from "../config/supabaseStorage.js";

// Obtener los paises
export const getCountries = async (req, res) => {
    try {
        const countries = await prisma.country.findMany();
        if (!countries) return res.status(400).json({ error: 'No hay resultados para paises' });
        res.json(countries);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los paises' });
    }
}
// Crear pais
export const postCountries = async (req, res) => {
    try {
        const { name, image } = req.body;
        // Validar imagen para subirla a supabase
        const imageUrl = await validFileData(image);
        const country = await prisma.country.create({ data: { name: name, image: imageUrl.data } });
        if (!country) return res.status(400).json({ error: 'Ocurrio un error al intentar crear un pais' });
        res.json(country);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear el pais' });
    }
}