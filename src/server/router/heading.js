import express from 'express';

import controller from '../controllers/heading.js';

// import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/heading', controller.getAll);
router.get('/heading/:id', controller.getOne);
router.post('/heading', controller.create);
router.put('/heading/:id', controller.update);
router.delete('/heading/:id', controller.remove);

export default router;
