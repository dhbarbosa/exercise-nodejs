import sequelize from "./db/db.js"
import DataType from "sequelize"

const Post = sequelize.define("posts", {
  title: DataType.STRING,
  content: DataType.TEXT,
})

sequelize
  .sync()
  .then(() => {
    console.log("> Table Post created successfully")
  })
  .catch((err) => {
    console.log(`> Unable to create table ${err}`)
    process.exit(-1)
  })

export default Post
