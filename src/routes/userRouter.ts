import { Router } from "express";
import { register } from "../controllers/userController";

export const userRouter = Router()

userRouter.post("/register", register)