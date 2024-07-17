import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({
      message: "Unauthorized no header",
    });

  const token = authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({
      message: "Unauthorized no token",
    });

  jwt.verify(token, "secret", (err, payload) => {
    if (err)
      return res.status(403).json({ message: "Unauthorized invalid token" });

    req.payload = payload;

    next();
  });
};
