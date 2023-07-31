import { Router } from "express";
const router = Router();
import passport from "../config/passport.js";
import * as authCtrl from "../controller/auth.controller.js";

// Ruta para iniciar sesión con Google
router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
// Ruta de callback después de la autenticación exitosa
router.get('/callback', passport.authenticate('google', { failureRedirect: '/' }),
    authCtrl.getToken
);

export default router;