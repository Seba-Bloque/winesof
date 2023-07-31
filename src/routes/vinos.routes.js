import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as vinosCtrl from "../controller/vinos.controller.js";

router.get('/vinos', vinosCtrl.filterAndSortVinos);
router.get('/vinos/:id', vinosCtrl.getVino);
router.post('/vinos', vinosCtrl.postVinos);

export default router;