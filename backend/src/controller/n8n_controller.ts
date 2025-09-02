import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHello = (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
};

const postNews = async (req: Request, res: Response) => {
  const { text, title, url } = req.body as {
    text: string;
    title: string;
    url: string;
  };
  const news = await prisma.news.create({
    data: { text, title, url },
  });
  res.status(201).json(news);
};

export { getHello, postNews };
