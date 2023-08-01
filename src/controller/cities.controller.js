import { createTable, deleteTable, filterAndSort, getTable, updateTable } from "../middleware/index.middlewares.js";

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
// Obtener ciudades
export const getCities = async (req, res) => {
    try {
        const cities = await filterAndSort('city', req.query, {});
        if (!cities.success) return res.status(cities.status).json({ error: cities.message });
        if (cities.data.length === 0) return res.status(cities.status).json({ mensaje: 'No hay resultados para ciudades' });

        res.json(cities.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las ciudades' });
    }
}
// Obtener ciudad
export const getCity = async (req, res) => {
    try {
        const city = await getTable('city', req.params);
        if (!city.success) return res.status(city.status).json({ error: city.message });
        if (city.data.length === 0) return res.status(city.status).json({ mensaje: `No se encontro ninguna ciudad con el city id ${parsedInt(req.params.id)}` });

        res.json(city.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar obtener una ciudad' });
    }
}
// Update de ciudades
export const updateCity = async (req, res) => {
    try {
        const city = await updateTable('city', parseInt(req.params.id), req.body);
        if (!city.success) return res.status(city.status).json({ error: city.message });
        if (city.data.length === 0) return res.status(city.status).json({ mensaje: city.message });
        res.json(city.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la ciudad' });
    }
}
// Delete de ciudades
export const deleteCity = async (req, res) => {
    try {
        const city = await deleteTable('city', parseInt(req.params.id));
        if (!city.success) return res.status(city.status).json({ error: city.message });
        res.status(city.status).json({ message: 'La ciudad fue eliminada correctamente' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la ciudad' });
    }
}