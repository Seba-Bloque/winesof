import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as citiesCtrl from "../controller/cities.controller.js";

router.get('/cities', citiesCtrl.getCities);
router.post('/cities', citiesCtrl.postCity);

export default router;