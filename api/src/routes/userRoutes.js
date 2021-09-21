import { Router } from 'express';
import userController from '../controllers/userController';
import isLoggedIn from '../middlewares/isLoggedIn';

const router = new Router();

router.get('/', userController.index); // Cria user
router.get('/:id', userController.show);
router.post('/', userController.store);
router.put('/:id', isLoggedIn, userController.update);
router.delete('/:id', isLoggedIn, userController.delete);

module.exports = router;
