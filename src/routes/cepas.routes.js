import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as cepasCtrl from "../controller/cepas.controller.js";

router.get('/cepa', cepasCtrl.getCepas);
router.get('/cepa/:id', cepasCtrl.getCepa);
router.post('/cepa', cepasCtrl.postCepa);

export default router;