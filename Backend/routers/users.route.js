import express from 'express';
import { ActiveCheck, login, register } from '../controllers/user.controller.js';

const router = express.Router();

// router.get('/', (ActiveCheck));

router.route('/register').post(register);
router.route('/login').post(login);

export default router;