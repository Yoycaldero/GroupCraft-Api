import express from "express"
import morgan from "morgan"
import cors from "cors"
import projectRoute from "./routes/project.routes.js"
import taskRoute from "./routes/task.routes.js"

const server = express()

server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use("/api/projects", projectRoute)
server.use("/api/tasks", taskRoute)

export default server;