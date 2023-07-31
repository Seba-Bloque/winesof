import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as notesCtrl from "../controller/favorites.controller.js";

router.post('/favorites', notesCtrl.postFavorites);
router.get('/favorites', authenticateJWT,notesCtrl.getFavorites);
router.get('/favorites/:id', authenticateJWT, notesCtrl.getFavorite);
router.put('/favorites/:id', notesCtrl.updateFavorites);
router.delete('/favorites/:id', notesCtrl.deleteFavorites);

export default router;