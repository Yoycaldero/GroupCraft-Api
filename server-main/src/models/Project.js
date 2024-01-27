import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Task from "./Task.js";

const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    members: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    timestamps: true,
  }
);

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

export default Project;