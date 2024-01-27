import server from "./app.js";
import { sequelize } from "./database/database.js";

import './models/Project.js'
import './models/Task.js'

async function main() {
  try {
    await sequelize.sync()
    console.log("Connection established")
    server.listen(2004);
    console.log("Server on port 2004");
  } catch (e) {
    console.log(e);
  }
}

main();