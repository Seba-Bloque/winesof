import prisma from '../prisma.js';
import { validFileData } from '../config/supabaseStorage.js';

// Traer imagenes
export const getImages = async (req, res) => {
    try {
        const image = await prisma.image.findMany();
        if (!image || image.length === 0) return res.status(400).json({ message: 'No hay imagenes disponibles' })
        res.json(image);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al cargar las imagenes' })
    }
}
// Crear imagenes
export const postImage = async (req, res) => {
    try {
        const { image } = req.body;
        if (!image) return res.status(500).json({ error: 'No se proporciono una imagen' });
        const url = await validFileData(image);
        if (!url.success) return res.status(url.status).json({ error: url.message })
        const imageP = await prisma.image.create({
            data: { url: url.data }
        });
        res.json(imageP);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'No se pudo crear la imagen' })
    }
}