import express from 'express';
import auth from '../controllers/auth.js';
import authMiddleware from '../middleware/auth.js';

import controller from '../controllers/user.js';
import validationEmail from '../middleware/checkingMail.js';

const router = express.Router();

router.get('/user', authMiddleware, controller.getAllUser);
router.post('/user', validationEmail, controller.createUser);
router.put('/user/:id', authMiddleware, controller.updateUser);
router.delete('/user/:id', authMiddleware, controller.removeUser);

router.post('/signin', auth.singIn);

export default router;
