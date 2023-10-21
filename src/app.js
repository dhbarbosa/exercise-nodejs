import express from "express"
import handlebars from "express-handlebars"

import "dotenv/config"

const app = express()

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
  res.render("index")
})

export default app
