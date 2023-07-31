import { createTable, filterAndSort, getTable, updateTable } from "../middleware/index.middlewares.js";

// Obtener Notas
export const getNotes = async (req, res) => {
    try {
        const notes = await filterAndSort('notes', req.query, {});
        // Respuesta de error en sort
        if (!notes.success) return res.status(400).json({ error: notes.message });
        // Respuesta notas data
        if (notes.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron notas' });
        res.json(notes.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al intentar obtener las notas' });
    }
}
// Obtener Nota
export const getNote = async (req, res) => {
    try {
        const notes = await getTable('notes', req.params);
        if (!notes.success) return res.status(notes.status).json({ error: notes.message });
        if (notes.data.length === 0) return res.status(notes.status).json({ mensaje: notes.message });
        res.json(notes.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al intentar obtener las notas' });
    }
}
// Crear Notes
export const postNote = async (req, res) => {
    try {
        const notes = await createTable('notes', req.body);
        if (!notes.success) return res.status(notes.status).json({ error: notes.message });
        if (notes.data.length === 0) return res.status(notes.status).json({ mensaje: notes.message });
        res.json(notes.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al intentar crear la nota' });
    }
}
// Update de Notes
export const updateNote = async (req, res) => {
    try {
        const notes = await updateTable('notes', parseInt(req.params.id), req.body);
        if (!notes.success) return res.status(notes.status).json({ error: notes.message });
        if (notes.data.length === 0) return res.status(notes.status).json({ mensaje: notes.message });
        res.json(notes.data);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al intentar actualizar' });
    }
}