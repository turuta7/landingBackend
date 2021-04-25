import express from 'express';

import controller from '../controllers/section.js';

// import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/section', controller.getAll);
router.get('/section/:id', controller.getOne);
router.post('/section', controller.create);
router.put('/section/:id', controller.update);
router.delete('/section/:id', controller.remove);

export default router;
