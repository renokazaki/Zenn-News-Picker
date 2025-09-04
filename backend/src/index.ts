import express from "express";
import routeApi from "./routers/routerApi";
import route_n8n from "./routers/route_n8n";

const router = express.Router();

router.use("/api", routeApi);
router.use("/n8n", route_n8n);

export default router;
