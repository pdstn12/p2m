import express from "express";
import { addFile, deleteFile, getFile } from "../controllers/FileController.js";
import { getCurrentUser } from "../controllers/UserController.js";

const router = express.Router();

router.post('/add', getCurrentUser, addFile);
router.get('/:page', getCurrentUser, getFile);
router.get('/delete/:id', getCurrentUser, deleteFile);

export default router;