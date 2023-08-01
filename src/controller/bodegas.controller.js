import { createTable, deleteTable, filterAndSort, getTable, updateTable } from "../middleware/index.middlewares.js";

// Filtrar y/o ordenar...
export const filterAndSortBodegas = async (req, res) => {
    try {
        const bodegas = await filterAndSort('bodega', req.query, { services: { select: { id: true } } });
        // Respuesta de error en sort
        if (!bodegas.success) return res.status(400).json({ error: bodegas.message });
        // Respuesta en bodegas data
        if (bodegas.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron bodegas que cumplan los criterios de búsqueda' });
        res.json(bodegas.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las bodegas' });
    }
}
// Obtener bodega por slug
export const getBodega = async (req, res) => {
    try {
        const bodega = await getTable('bodega', req.params);
        if (!bodega.success) return res.status(bodega.status).json({ error: bodega.message });
        if (bodega.data.length === 0) return res.status(bodega.status).json({ mensaje: bodega.message });
        res.json(bodega.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar obtener la bodega' })
    }
}
// Crear Bodega
export const createBodega = async (req, res) => {
    try {
        const bodega = await createTable('bodega', req.body);
        if (!bodega.success) return res.status(bodega.status).json({ error: bodega.message });
        if (bodega.data.length === 0) return res.status(bodega.status).json({ mensaje: bodega.message });
        res.json(bodega.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la bodega' })
    }
}
// Update de bodega
export const updateBodega = async (req, res) => {
    try {
        const bodega = await updateTable('bodega', parseInt(req.params.id), req.body);
        if (!bodega.success) return res.status(bodega.status).json({ error: bodega.message });
        if (bodega.data.length === 0) return res.status(bodega.status).json({ mensaje: bodega.message });
        res.json(bodega.data);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al actualizar' });
    }
}
// Delete de bodega
export const deleteBodega = async (req, res) => {
    try {
        const bodega = await deleteTable('bodega', parseInt(req.params.id));
        if (!bodega.success) return res.status(bodega.status).json({ error: bodega.message });
        res.status(bodega.status).json({ message: 'La bodega fue eliminada correctamente' })
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar eliminar la bodega' });
    }
}