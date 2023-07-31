import prisma from '../prisma.js';
// Obtener todos los usuarios
export const obtenerUsers = async (req, res) => {
    try {
        // Buscar usuarios
        const user = await prisma.user.findMany();
        // Si no hay usuarios
        if (user.length === 0) return res.status(404).json({ mensaje: 'No se encontraron usuarios' })
        // Mensaje de respuesta
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}
// Obtener un usuario
export const obtenerUnUser = async (req, res) => {
    try {
        // Buscar el usuario que coincida con el id
        const obtenerUnUser = await prisma.user.findUnique({ where: { id: req.userId } });
        // Si el usuario no existe
        if (!obtenerUnUser) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        // Mensaje de respuesta
        res.json(obtenerUnUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};
// Delete user
export const deleteUser = async (req, res) => {
    try {
        // Verificar si el usuario existe
        const user = await prisma.user.findUnique({ where: { id: req.userId } });
        if (!user) return res.status(404).json({ mensaje: 'El usuario no existe' });
        // Eliminar el usuario
        await prisma.user.delete({ where: { id: user.id } });
        // Mensaje de respuesta
        res.json({ message: 'User eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};