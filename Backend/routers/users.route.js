import express from 'express';
import { ActiveCheck, login, profile, register } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// router.get('/', (ActiveCheck));

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(protect, profile);

export default router;
