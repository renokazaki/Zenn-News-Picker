import express from "express";
import routeApi from "./api/routerApi";

const router = express.Router();

router.use("/api", routeApi);

export default router;
