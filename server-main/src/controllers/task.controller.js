import Task from "../models/Task.js";

// Obtener todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tasks", details: error.message });
  }
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
  const { name, description, done, members, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      description,
      done,
      members,
      projectId,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error creating task", details: error.message });
  }
};

// Obtener una tarea por su Id
export const getTaskById = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findByPk(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving task", details: error.message });
  }
};

// Actualizar una tarea por su Id
export const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { name, description, done, members, projectId } = req.body;
  try {
    const task = await Task.findByPk(taskId);
    if (task) {
      task.name = name;
      task.description = description;
      task.done = done;
      task.members = members;
      task.projectId = projectId;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating task", details: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findByPk(taskId);
    if (task) {
      await task.destroy();
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting task", details: error.message });
  }
};
