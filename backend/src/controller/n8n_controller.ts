import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHello = (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
};

const getNews = async (req: Request, res: Response) => {
  const news = await prisma.news.findMany();
  res.json(news);
};

const postNews = async (req: Request, res: Response) => {
  const { text, title, url, publishedAt } = req.body as {
    text: string;
    title: string;
    url: string;
    publishedAt: Date;
  };
  const news = await prisma.news.create({
    data: { text, title, url, publishedAt },
  });
  res.status(201).json(news);
};

export { getHello, getNews, postNews };
