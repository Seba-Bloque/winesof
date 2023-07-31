import { Router } from "express";
const router = Router();

// Import Routes
import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';
import bodegasRoutes from './bodegas.routes.js';
import servicesRoutes from './services.routes.js';
import countriesRoutes from './countries.routes.js';
import citiesRoutes from './cities.routes.js';
import vinosRoutes from './vinos.routes.js';
import cepaRoutes from './cepas.routes.js';
import typeRoutes from './types.routes.js';
import imageRoutes from './image.routes.js';
import excursionesRoutes from './excursiones.routes.js';
import experienciasRoutes from './experiencias.routes.js';
import notesRoutes from './notes.routes.js';
import favoritesRoutes from './favorites.routes.js';
import registerRoutes from './register.routes.js';

export const routesList = {
    authRoutes,
    userRoutes,
    bodegasRoutes,
    servicesRoutes,
    excursionesRoutes,
    experienciasRoutes,
    notesRoutes,
    countriesRoutes,
    citiesRoutes,
    vinosRoutes,
    cepaRoutes,
    typeRoutes,
    imageRoutes,
    favoritesRoutes,
    registerRoutes
};

export const indexRoutes = (req, res) => {
    res.json({ message: 'Bienvenido a la API de Winesof' })
}

export default router;