import cors from "cors";
import express from "express";
import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/users.routes";

export const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.disable("x-powered-by");
app.use("/users", userRouter);
app.use("/auth", authRouter);
