import express from "express";
import { getHello, getNews, postNews } from "../controller/n8n_controller";

const router = express.Router();

router.get("/", getHello);
router.get("/news", getNews);
router.post("/news", postNews);

export default router;
