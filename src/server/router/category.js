import express from 'express';
import multer from 'multer';
import controller from '../controllers/category.js';

// const storageConfig = multer.diskStorage({
//   // destination: (req, file, cb) => {
//   //   cb(null, 'uploads');
//   // },
//   // filename: (req, file, cb) => {
//   //   cb(null, file.originalname);
//   // },
// });

const upload = multer();

// import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/category', controller.getAll);
router.get('/category/:id', controller.getOne);
router.post('/category', upload.single('avatar'), controller.create);
router.patch('/category/:id', upload.single('avatar'), controller.update);
router.delete('/category/:id', controller.remove);

export default router;
