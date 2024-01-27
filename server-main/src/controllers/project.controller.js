import Project from "../models/Project.js";

// Obtener todos los proyectos
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving projects", details: error.message });
  }
};

// Ta creando lo porjecto aqui tu sabe
export const createProject = async (req, res) => {
  const { owner, name, description, members } = req.body;
  try {
    const newProject = await Project.create({
      owner,
      name,
      description,
      members,
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Error creating project", details: error.message });
  }
};

// Aqui se llama el proyecto por el id
export const getProjectById = async (req, res) => {
  const projectId = req.params.id;
  try {
    const project = await Project.findByPk(projectId);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving project", details: error.message });
  }
};

// Aqui se actualiza por el id
export const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const { owner, name, description, members } = req.body;
  try {
    const project = await Project.findByPk(projectId);
    if (project) {
      project.owner = owner;
      project.name = name;
      project.description = description;
      project.members = members;
      await project.save();
      res.json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating project", details: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const projectId = req.params.id;
  try {
    const project = await Project.findByPk(projectId);
    if (project) {
      await project.destroy();
      res.json({ message: "Project deleted successfully" });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting project", details: error.message });
  }
};
