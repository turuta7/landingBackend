import express from 'express';

import controller from '../controllers/slider.js';

import authMiddleware from '../middelware/auth.js';

const router = express.Router();
// import {validationEmail} from "../utils/checkingMail.js";

router.get('/slider', authMiddleware, controller.getAll);
router.post('/slider', authMiddleware, controller.create);
router.put('/slider/:id', authMiddleware, controller.update);
router.delete('/slider/:id', authMiddleware, controller.remove);

export default router;
