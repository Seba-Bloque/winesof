import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as servicesCtrl from "../controller/services.controller.js";

router.get('/services', servicesCtrl.getServices);
router.get('/services/:id', servicesCtrl.getService);
router.post('/services', servicesCtrl.postServices);

export default router;