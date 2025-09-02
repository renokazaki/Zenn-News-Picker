import express from "express";
import { getHello, postNews } from "../controller/n8n_controller";

const router = express.Router();

router.get("/", getHello);
router.post("/news", postNews);

export default router;
