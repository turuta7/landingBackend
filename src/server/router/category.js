import express from 'express';

import controller from '../controllers/category.js';

// import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/category', controller.getAll);
router.get('/category/:id', controller.getOne);
router.post('/category', controller.create);
router.put('/category/:id', controller.update);
router.delete('/category/:id', controller.remove);

export default router;
