import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHello = (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
};

const getGreeting = (req: Request, res: Response) => {
  res.json({ message: "Hello from Express!" });
};

const getTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

const createTask = async (req: Request, res: Response) => {
  const { name } = req.body as { name: string };
  const task = await prisma.task.create({
    data: { name },
  });
  res.status(201).json(task);
};

export { getHello, getGreeting, getTasks, createTask };
