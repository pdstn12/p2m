import express from 'express';
import { createUser, getUsers } from '../controllers/UserController.js';
import { signIn, signUp } from "../controllers/UserController.js";


const router = express.Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
router.post('/register', signUp);
router.post('/login', signIn);

export default router;