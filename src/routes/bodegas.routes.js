import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as bodegasCtrl from "../controller/bodegas.controller.js";

router.get('/bodegas', bodegasCtrl.filterAndSortBodegas);
router.get('/bodegas/:slug', bodegasCtrl.getBodega);
router.post('/bodegas', bodegasCtrl.createBodega);
router.put('/bodegas/:id', bodegasCtrl.updateBodega);
router.delete('/bodegas/:id', bodegasCtrl.deleteBodega);

export default router;