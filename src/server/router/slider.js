import express from 'express';

import controller from '../controllers/slider.js';

const router = express.Router();
// import {validationEmail} from "../utils/checkingMail.js";

router.get('/slider', controller.getAll);
router.post('/slider', controller.create);
// router.put('/users', controller.create);
router.delete('/slider/:id', controller.create);

export default router;
