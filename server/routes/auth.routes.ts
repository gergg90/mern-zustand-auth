import { Router } from "express";
import { requireAuth } from "../middlewares/requireAuth";
import { AuthController } from "./controllers/auth.controller";

export const authRouter = Router();

authRouter.post("/login", AuthController.loginHandler);
authRouter.get("/profile", requireAuth, AuthController.profileHandler);
