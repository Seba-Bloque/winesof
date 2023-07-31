import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as excursionesCtrl from "../controller/excursiones.controller.js";

router.get('/excursiones', excursionesCtrl.getExcursiones);
router.post('/excursiones', excursionesCtrl.postExcursion);

export default router;