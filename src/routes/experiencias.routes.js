import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as experienciasCtrl from "../controller/experiencias.controller.js";

router.get('/experiencias', experienciasCtrl.getExperiencias);
router.post('/experiencias', experienciasCtrl.postExperiencia);

export default router;