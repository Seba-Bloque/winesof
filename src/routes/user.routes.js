import { Router } from "express";
const router = Router();
import { authenticateJWT } from '../config/auth.js';
import * as userCtrl from "../controller/user.controller.js";
import { validateUserId } from "../middleware/index.middlewares.js";

router.get('/users', authenticateJWT, userCtrl.obtenerUsers);
router.get('/users/:id', authenticateJWT, validateUserId, userCtrl.obtenerUnUser);
router.delete('/users/:id', authenticateJWT, validateUserId, userCtrl.deleteUser);

export default router;