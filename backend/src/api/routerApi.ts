import express from "express";
import {
  getHello,
  getGreeting,
  getTasks,
  createTask,
} from "../controller/controller";

const router = express.Router();

router.get("/", getHello);
router.get("/greeting", getGreeting);
router.get("/tasks", getTasks);
router.post("/tasks", createTask);

export default router;
