import { createTable, filterAndSort } from "../middleware/index.middlewares.js";

// Obtener ciudades
export const getCities = async (req, res) => {
    try {
        const cities = await filterAndSort('city', req.query, {});
        // Respuesta de error en sort
        if (!cities.success) return res.status(400).json({ error: cities.message });
        // Respuesta en cities data
        if (cities.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron ciudades que cumplan los criterios de búsqueda' });

        res.json(cities.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las ciudades' });
    }
}
// Crear ciudades
export const postCity = async (req, res) => {
    try {
        const city = await createTable('city', req.body);
        if (!city.success) return res.status(city.status).json({ error: city.message });
        if (city.data.length === 0) return res.status(city.status).json({ mensaje: city.message });
        res.json(city.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la ciudad' });
    }
}