import prisma from "../prisma.js";

//? GET SERVICES
export const getServices = async (req, res) => {
    try {
        const services = await prisma.service.findMany();
        if (!services) return res.status(400).json({ error: 'No hay servicios' });
        res.json(services);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los servicios' });
    }
}
//? GET SERVICE
export const getService = async (req, res) => {
    try {
        const services = await prisma.service.findFirst({ where: { id: parseInt(req.params.id) } });
        if (!services) return res.status(400).json({ error: 'No existe el servicio' });
        res.json(services);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el servicio' });
    }
}
//? POST SERVICES
export const postServices = async (req, res) => {
    try {
        const data = req.body;
        const services = await prisma.service.create({ data: data });
        if (!services) return res.status(400).json({ error: 'Los datos son incorrectos' });
        res.json(services);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear los servicios' });
    }
}