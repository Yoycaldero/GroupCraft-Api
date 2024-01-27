import express from "express";
import * as projectController from "../controllers/project.controller.js";

const router = express.Router();

// Rutas para los proyectos
router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);
router.get("/:id", projectController.getProjectById);
router.put("/:id", projectController.updateProject);
router.delete("/:id",projectController.deleteProject);

export default router;