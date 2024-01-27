import express from "express";
import * as taskController from "../controllers/task.controller.js";

const router = express.Router();

// Rutas para las tareas
router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.delete("/:id",taskController.deleteTask);

export default router;