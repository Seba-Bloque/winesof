import prisma from "../prisma.js";

//? GET TYPES
export const getTypes = async (req, res) => {
    try {
        const type = await prisma.type.findMany();
        if (!type) return res.status(400).json({ error: 'No hay resultados para type' });
        res.json(type);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las type' });
    }
}
//? GET TYPE
export const getType = async (req, res) => {
    try {
        const types = await prisma.type.findFirst({ where: { id: parseInt(req.params.id) } })
        if (!types) return res.status(400).json({ error: 'Type no existe' });
        res.json(types);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener Types' });
    }
}
//? POST TYPE
export const postType = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const type = await prisma.type.create({ data: data });
        if (!type) return res.status(400).json({ error: 'No se pudo crear type' });
        res.json(type);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear type' });
    }
}