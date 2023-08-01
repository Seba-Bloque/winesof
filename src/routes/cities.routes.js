import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as citiesCtrl from "../controller/cities.controller.js";

router.post('/cities', citiesCtrl.postCity);
router.get('/cities', citiesCtrl.getCities);
router.get('/cities/:id', citiesCtrl.getCity);
router.put('/cities/:id', citiesCtrl.updateCity);
router.delete('/cities/:id', citiesCtrl.deleteCity);

export default router;