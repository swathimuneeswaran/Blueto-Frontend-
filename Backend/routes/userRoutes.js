import express from 'express';
import { register,login } from "../controllers/authController.js";
const router=express.Router();

router.post('/login',login)

router.post('/signup',register)


export default router;