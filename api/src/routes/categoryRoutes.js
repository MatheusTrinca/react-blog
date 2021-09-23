import { Router } from 'express';
import categoryController from '../controllers/categoryController';
import isLoggedIn from '../middlewares/isLoggedIn';

const router = new Router();

router.get('/', categoryController.index);
router.post('/', isLoggedIn, categoryController.store);

module.exports = router;
