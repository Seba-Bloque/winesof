import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from './config/passport.js';
// Import routes
import { routesList, indexRoutes } from './routes/index.routes.js';

// Initializations
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'Chewbacca',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Register
app.use('/auth/', routesList.registerRoutes);
// Ruta de auth con google
app.use('/auth/google', routesList.authRoutes);

// Routes
app.use('/api', routesList.userRoutes);
app.use('/api', routesList.bodegasRoutes);
app.use('/api', routesList.servicesRoutes);
app.use('/api', routesList.excursionesRoutes);
app.use('/api', routesList.experienciasRoutes);
app.use('/api', routesList.notesRoutes);
app.use('/api', routesList.countriesRoutes);
app.use('/api', routesList.citiesRoutes);
app.use('/api', routesList.vinosRoutes);
app.use('/api', routesList.cepaRoutes);
app.use('/api', routesList.typeRoutes);
app.use('/api', routesList.imageRoutes);
app.use('/api', routesList.favoritesRoutes);
app.use('/', indexRoutes);

export default app;