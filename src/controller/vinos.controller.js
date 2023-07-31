import { createTable, filterAndSort, getTable } from '../middleware/index.middlewares.js';

// Filtrar vino
export const filterAndSortVinos = async (req, res) => {
    try {
        const vinos = await filterAndSort('vino', req.query, {
            cepa: true,
            type: true,
            bodega: {
                select: {
                    name: true
                }
            }
        });
        // Respuesta de error en sort
        if (!vinos.success) return res.status(400).json({ error: vinos.message });
        // Respuesta vinos data
        if (vinos.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron vinos que cumplan los criterios de búsqueda' });
        res.json(vinos.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los vinos' });
    }
}
// Obtener vino
export const getVino = async (req, res) => {
    try {
        const vino = await getTable('vino', req.params);
        if (!vino.success) return res.status(vino.status).json({ error: vino.message });
        if (vino.data.length === 0) return res.status(vino.status).json({ mensaje: vino.message });
        res.json(vino.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error a obtener el vino' });
    }
}
// Crear vino
export const postVinos = async (req, res) => {
    try {
        const vino = await createTable('vino', req.body);
        if (!vino.success) return res.status(vino.status).json({ error: vino.message });
        if (vino.data.length === 0) return res.status(vino.status).json({ mensaje: vino.message });
        res.json(vino.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear el Vino' });
    }
}