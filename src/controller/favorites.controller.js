import { createTable, deleteTable, filterAndSort, getTable, updateTable } from "../middleware/index.middlewares.js";

// Obtener favoritos
export const getFavorites = async (req, res) => {
    try {
        const favorites = await filterAndSort('favorites', req.query, req.user, {
            bodega: {
                select: {
                    name: true
                }
            },
            vino: {
                select: {
                    name: true
                }
            },
            experiencia: {
                select: {
                    title: true
                }
            },
            excursion: {
                select: {
                    title: true
                }
            },
            restaurante: {
                select: {
                    title: true
                }
            }
        });
        if (!favorites.success) return res.status(400).json({ error: favorites.message });
        if (favorites.data.length === 0) return res.status(404).json({ mensaje: 'No se encontraron resultados' });
        res.json(favorites.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al intentar obtener las listas de favoritos' });
    }
}
// Obtener favorito
export const getFavorite = async (req, res) => {
    try {
        const favorites = await getTable('favorites', req.params, req.user);
        if (!favorites.success) return res.status(favorites.status).json({ error: favorites.message });
        if (favorites.data.length === 0) return res.status(favorites.status).json({ mensaje: favorites.message });
        res.json(favorites.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al intentar obtener la lista de favoritos' });
    }
}
// Crear favorito
export const postFavorites = async (req, res) => {
    try {
        const favorites = await createTable('favorites', req.body);
        if (!favorites.success) return res.status(favorites.status).json({ error: favorites.message });
        if (favorites.data.length === 0) return res.status(favorites.status).json({ mensaje: favorites.message });
        res.json(favorites.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al intentar crear la lista de favoritos' });
    }
}
// Update favoritos
export const updateFavorites = async (req, res) => {
    try {
        const favorites = await updateTable('favorites', parseInt(req.params.id), req.body);
        if (!favorites.success) return res.status(favorites.status).json({ error: favorites.message });
        if (favorites.data.length === 0) return res.status(favorites.status).json({ mensaje: favorites.message });
        res.json(favorites.data);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al intentar actualizar la lista de favoritos' });
    }
}
// Delete favoritos
export const deleteFavorites = async (req, res) => {
    try {
        const favorites = await deleteTable('favorites', parseInt(req.params.id), req.body);
        if (!favorites.success) return res.status(favorites.status).json({ error: favorites.message });
        res.status(favorites.status).json({ message: 'Se elimino el elemento correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error al intentar eliminar la lista de favoritos' });
    }
}