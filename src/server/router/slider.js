import express from 'express';

import controller from '../controllers/slider.js';

// import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/slider', controller.getAll);
router.get('/slider/:id', controller.getOne);
router.post('/slider', controller.create);
router.put('/slider/:id', controller.update);
router.delete('/slider/:id', controller.remove);

export default router;
