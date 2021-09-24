import { Router } from 'express';
import authController from '../controllers/authController';

const router = new Router();

router.post('/login', authController.login);

module.exports = router;
