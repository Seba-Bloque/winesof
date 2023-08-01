import { createTable, filterAndSort } from "../middleware/index.middlewares.js";
import prisma from "../prisma.js";

// Filtrar excursiones
export const getExcursiones = async (req, res) => {
    try {
        const excursiones = await filterAndSort('excursion', req.query, {
            city: {
                select: {
                    name: true
                }
            },
            country: {
                select: {
                    name: true
                }
            }
        });
        // Respuesta de error en sort
        if (!excursiones.success) return res.status(400).json({ error: excursiones.message });
        // Respuesta excursiones data
        if (excursiones.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron excursiones que cumplan los criterios de búsqueda' });
        res.json(excursiones.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener excursiones' });
    }
}
// Crear excursion
export const postExcursion = async (req, res) => {
    try {
        const excursion = await createTable('excursion', req.body);
        if (!excursion.success) return res.status(excursion.status).json({ error: excursion.message });
        if (excursion.data.length === 0) return res.status(excursion.status).json({ mensaje: excursion.message });
        res.json(excursion.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la excursion' });
    }
}