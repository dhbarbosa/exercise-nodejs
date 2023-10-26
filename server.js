import app from "./src/app.js"
const PORT_SERVER = process.env.PORT_SERVER || 3002
const IP = process.env.IP || "localhost"

app.listen(PORT_SERVER, (err) => {
  err
    ? console.log(`> Erro: ${err}`)
    : console.log(`> http://${IP}:${PORT_SERVER}`)
})
