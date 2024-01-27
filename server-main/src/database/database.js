import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "BaseDatos",
    "postgres",
    "sa",
    {
        host: "localhost",
        dialect: "postgres",
        port: 8080
    }
)