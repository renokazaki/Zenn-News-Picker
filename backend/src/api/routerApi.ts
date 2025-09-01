import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

router.get("/greeting", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express!" });
});

router.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post("/tasks", express.json(), async (req: Request, res: Response) => {
  const { name } = req.body as { name: string };
  const task = await prisma.task.create({
    data: { name },
  });
  res.status(201).json(task);
});

export default router;
