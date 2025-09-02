import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHello = (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
};

const postNews = async (req: Request, res: Response) => {
  const { text } = req.body as { text: string };
  const news = await prisma.news.create({
    data: { text },
  });
  res.status(201).json(news);
};

export { getHello, postNews };
