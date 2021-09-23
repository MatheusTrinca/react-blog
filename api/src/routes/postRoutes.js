import { Router } from 'express';
import postController from '../controllers/postController';
import isLoggedIn from '../middlewares/isLoggedIn';

const router = new Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', isLoggedIn, postController.store);
router.put('/', isLoggedIn, postController.store);
router.put('/:id', isLoggedIn, postController.update);
router.delete('/:id', isLoggedIn, postController.delete);

module.exports = router;
