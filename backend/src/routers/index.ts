import express from "express";
import route_n8n from "./n8n/route_n8n";

const router = express.Router();

router.use("/n8n", route_n8n);

export default router;
