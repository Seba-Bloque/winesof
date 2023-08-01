import prisma from "../prisma.js";

// Filtrar tablas
export const filterAndSort = async (model, filters, includes, user) => {
    try {
        const parsedSort = {};
        const parsedFilters = {};
        parsedFilters['AND'] = [];

        // PAGINATE
        let skip = 0;
        let take = 25;
        if (filters.page && filters.take) {
            skip = (filters.page - 1) * filters.take;
            if (skip === -filters.take) return { success: false, status: 400, message: 'Se debe proporcionar un valor mayor a 0' }
            take = parseInt(filters.take);
        }
        // Validar el user solo si id existe en user
        if (user?.id) {
            if (filters.userId) { delete filters.userId };
            parsedFilters['userId'] = user.id;
        }
        // Filtrar por...
        if (filters) {
            Object.keys(filters).forEach((filtro) => {
                const key = filtro;
                const value = filters[filtro];
                if (key !== 'page' && key !== 'take') {
                    if (key !== 'sort' && !value.includes(',') && !key.includes('|N')) return parsedFilters[key] = +value;
                    if (!key.includes('|N') && value.includes(',')) {
                        const arrValue = value.split(',');
                        const orFilter = arrValue.map((e) => parseInt(e));
                        if (orFilter.length > 0) return parsedFilters['AND'].push({ OR: [{ [key]: { in: orFilter } }] });
                        return parsedFilters[key] = { OR: [{ in: { id: parseInt(value) } }] }
                    }
                    if (key.includes('|N')) {
                        const modifyKey = key.replace('|N', '');
                        const arrValue = value.split(',');
                        const orFilter = arrValue.map((e) => ({ id: parseInt(e) }));
                        if (orFilter.length > 0) return parsedFilters['AND'].push({ OR: [{ [modifyKey]: { some: { OR: orFilter } } }] });
                        return parsedFilters[modifyKey] = { OR: [{ some: { id: parseInt(value) } }] }
                    }
                }
            });
        }
        if (parsedFilters['AND'].length == 0) {
            delete parsedFilters['AND']
        }
        // Ordenar por...
        if (filters.sort) {
            const sortArray = filters.sort.toString().split(':');
            const field = sortArray[0];
            const order = sortArray[1].toLowerCase();
            if (order !== 'asc' && order !== 'desc') return { success: false, message: 'El valor del parámetro "sort" es inválido' };
            parsedSort[field] = order;
        }
        const results = await prisma[model].findMany({
            skip,
            take,
            where: parsedFilters,
            orderBy: parsedSort,
            include: includes
        });

        return { success: true, data: results };
    } catch (error) {
        return { success: false, message: 'Error al obtener los registros' };
    }
};
// Crear tabla
export const createTable = async (model, dataBody) => {
    try {
        const parsedData = {};

        // Validar datos
        if (!dataBody) return { success: false, status: 400, message: 'Los datos son incorrectos' }
        Object.keys(dataBody).forEach((data) => {
            const key = data;
            const value = dataBody[data];
            if (key.includes('Id')) return parsedData[key.replace('Id', '')] = { connect: { id: parseInt(value) } };
            if (Array.isArray(value)) return parsedData[key] = { connect: value.map((id) => ({ id: parseInt(id) })) };
            return parsedData[key] = value;
        });

        const modelCreated = await prisma[model].create({ data: parsedData });
        if (!modelCreated) return { success: false, status: 500, message: 'Ocurrio un error mientras se intentaba crear el modelo' };

        return { success: true, status: 200, data: modelCreated };
    } catch (error) {
        return { success: false, message: 'Error al obtener los registros' };
    }
};
// Obtener tabla
export const getTable = async (model, params, user) => {
    try {
        const parseData = {};

        Object.keys(params).forEach((parametro) => {
            const key = parametro;
            const val = params[parametro];

            if (key === 'id') return parseData[key] = +val;
            if (key === 'slug') return parseData[key] = val;
        });
        const modelo = await prisma[model].findUnique({ where: parseData });
        // Comprobar si el favorito pertenece al usuario actual
        if (modelo && user) {
            if (modelo.userId !== user.id) return { success: false, status: 403, message: `No se encontraron resultados para ${model}` }
        }
        if (!modelo) return { success: false, status: 500, message: `No se encontraron resultados para ${model}` };
        return { success: true, status: 200, data: modelo };
    } catch (error) {
        return { success: false, message: 'Error al obtener los registros' };
    }
};
// Update tabla
export const updateTable = async (model, id, dataBody) => {
    try {
        const parsedData = {};

        // Buscar el modelo con el id unico;
        if (!id) return { success: false, status: 400, message: 'No se proporciono un id valido' }
        const modelo = await prisma[model].findUnique({ where: { id: id } });
        if (!modelo) return { success: false, status: 400, message: 'No hay resultados para el id' }

        // Validar datos
        if (!dataBody) return { success: false, status: 400, message: 'Los datos son incorrectos' }
        Object.keys(dataBody).forEach((data) => {
            const key = data;
            const value = dataBody[data];
            if (key.includes('Id')) return parsedData[key.replace('Id', '')] = { connect: { id: parseInt(value) } };
            if (Array.isArray(value)) return parsedData[key] = { set: value.map(val => ({ id: parseInt(val) })) }
            return parsedData[key] = value;
        });
        // Actualizar datos
        const modelUpdated = await prisma[model].update({ where: { id: modelo.id }, data: parsedData });
        if (!modelUpdated) return { success: false, status: 500, message: 'Ocurrio un error mientras se intentaba actualizar el modelo' };

        return { success: true, status: 200, data: modelUpdated };
    } catch (error) {
        return { success: false, status: 500, message: 'Error al obtener los registros' };
    }
};
// Delete tabla
export const deleteTable = async (model, id) => {
    try {
        // Buscar el modelo con el id unico;
        if (!id) return { success: false, status: 400, message: 'No se proporciono un id valido' }
        const modelo = await prisma[model].findUnique({ where: { id: id } });
        if (!modelo) return { success: false, status: 400, message: 'No hay resultados para el id' }

        await prisma[model].delete({ where: { id: modelo.id } });
        return { success: true, status: 200 };
    } catch (error) {
        return { success: false, message: 'Error al obtener los registros' };
    }
};
// Middleware para validar el ID de usuario
export const validateUserId = (req, res, next) => {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'ID de usuario inválido' });
    }
    req.userId = userId; // Agregar el ID de usuario validado al objeto req
    next();
};