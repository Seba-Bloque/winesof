import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as imageCtrl from "../controller/image.controller.js";

router.get('/image', imageCtrl.getImages);
router.post('/image', imageCtrl.postImage);

export default router;