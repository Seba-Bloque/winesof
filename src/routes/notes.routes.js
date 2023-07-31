import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as notesCtrl from "../controller/notes.controller.js";

router.get('/notes', notesCtrl.getNotes);
router.get('/notes/:id', notesCtrl.getNote);
router.post('/notes', notesCtrl.postNote);
router.put('/notes/:id', notesCtrl.updateNote);

export default router;