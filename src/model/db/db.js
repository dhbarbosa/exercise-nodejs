import { Sequelize } from "sequelize"
import connection from "./connection.js"

const sequelize = new Sequelize(
  connection.MYSQL_DATABASE || "projeto",
  connection.MYSQL_USER || "root",
  connection.MYSQL_PASSWORD || "root",
  {
    host: connection.MYSQL_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  },
)

sequelize
  .authenticate()
  .then(() => {
    console.log(`> Connect at database - ${connection.MYSQL_DATABASE}`)
  })
  .catch((err) => {
    console.log(`> Erro on connect to database - Error: ${err}`)
    process.exit(-1)
  })

export default sequelize
