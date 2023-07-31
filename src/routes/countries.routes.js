import { Router } from "express";
const router = Router();

import { authenticateJWT } from '../config/auth.js';
import * as countriesCtrl from "../controller/countries.controller.js";

router.get('/countries', countriesCtrl.getCountries);
router.post('/countries', countriesCtrl.postCountries);

export default router;