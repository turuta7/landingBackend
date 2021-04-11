import express from 'express';
import auth from '../controllers/auth.js';

import controller from '../controllers/user.js';
import validationEmail from '../middelware/checkingMail.js';

const router = express.Router();
// import {validationEmail} from "../utils/checkingMail.js";

router.get('/user', controller.getAllUser);
router.post('/user', validationEmail, controller.createUser);
router.put('/user/:id', controller.updateUser);
router.delete('/user/:id', controller.removeUser);

router.post('/signin', auth.singIn);

export default router;
