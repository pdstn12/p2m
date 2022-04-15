import express from 'express';
import { createUser, getUsers } from '../controllers/UserController.js';
import { signIn, signUp } from "../controllers/UserController.js";


const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/signup', signUp);
router.post('/signin', signIn);

export default router;