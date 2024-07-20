import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";

export const authRouter = Router();

authRouter.post("/login", AuthController.loginHandler);
authRouter.get("/profile", requireAuth, AuthController.profileHandler);
