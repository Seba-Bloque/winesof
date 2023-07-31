import { filterAndSort } from "../middleware/index.middlewares.js";
import prisma from "../prisma.js";

// Filtrar experiencias
export const getExperiencias = async (req, res) => {
    try {
        const experiencias = await filterAndSort('experiencia', req.query, {
            city: {
                select: {
                    name: true
                }
            }
        });
        // Respuesta de error en sort
        if (!experiencias.success) return res.status(400).json({ error: experiencias.message });
        // Respuesta experiencias data
        if (experiencias.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron experiencias que cumplan los criterios de búsqueda' });
        res.json(experiencias.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener experiencias' });
    }
}
// Crear experiencia
export const postExperiencia = async (req, res) => {
    try {
        const experiencia = await createTable('experiencia', req.body);
        if (!experiencia.success) return res.status(experiencia.status).json({ error: experiencia.message });
        if (experiencia.data.length === 0) return res.status(experiencia.status).json({ mensaje: experiencia.message });
        res.json(experiencia.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la experiencia' });
    }
}