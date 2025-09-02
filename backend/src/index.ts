import express from "express";
import routeApi from "./api/routerApi";
import route_n8n from "./api/route_n8n";

const router = express.Router();

router.use("/api", routeApi);
router.use("/n8n", route_n8n);

export default router;
