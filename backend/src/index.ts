import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/api/greeting", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express!" });
});

const prisma = new PrismaClient();

app.get("/api/tasks", async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/api/tasks", express.json(), async (req: Request, res: Response) => {
  const { name } = req.body as { name: string };
  const task = await prisma.task.create({
    data: { name },
  });
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
