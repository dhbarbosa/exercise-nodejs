import express from "express"
import handlebars from "express-handlebars"
import "dotenv/config"
import post from "./routers/post.router.js"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(post)

export default app
