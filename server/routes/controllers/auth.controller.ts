import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class AuthController {
  static loginHandler = (req: Request, res: Response) => {
    const result = req.body;

    const token = jwt.sign(
      {
        test: "test",
      },
      "secret",
      {
        expiresIn: 1000 * 60 * 60,
      }
    );
    res.status(201).json({ token });
  };

  static profileHandler = (req: Request, res: Response) => {
    const payload = req.payload;

    res.json({ payload });
  };
}
