import prisma from "../prisma.js";

//? GET CEPAS
export const getCepas = async (req, res) => {
    try {
        const cepas = await prisma.cepa.findMany();
        if (!cepas) return res.status(400).json({ error: 'No hay resultados para Cepas' });
        res.json(cepas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las Cepas' });
    }
}
//? GET CEPA
export const getCepa = async (req, res) => {
    try {
        const cepa = await prisma.cepa.findFirst({ where: { id: parseInt(req.params.id) } })
        if (!cepa) return res.status(400).json({ error: 'La cepa no existe' });
        res.json(cepa);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener la cepa' });
    }
}
//? POST CEPA
export const postCepa = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const cepa = await prisma.cepa.create({
            data: data
        });
        if (!cepa) return res.status(400).json({ error: 'No se pudo crear la cepa' });
        res.json(cepa);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la Cepa' });
    }
}