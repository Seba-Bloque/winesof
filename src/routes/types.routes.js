import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as typeCtrl from "../controller/type.controller.js";

router.get('/type', typeCtrl.getTypes);
router.get('/type/:id', typeCtrl.getType);
router.post('/type', typeCtrl.postType);

export default router;