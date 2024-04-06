// Importar modulos


const express = require("express")
const exphbs = require("express-handlebars")

const indexRoute = require("./routes/index-route")

const path = require("path")

// Variables

const PORT = process.env.PORT || 3000
const bootstrapDir = path.join(__dirname, "node_modules/bootstrap/dist/")
const jqueryDir = path.join(__dirname, "node_modules/jquery/dist/")

const app = express()

// Midleware y Handlebars

app.use(express.static(path.join(__dirname, "public")))
app.use("/bootstrap", express.static(bootstrapDir))
app.use("/jquery", express.static(jqueryDir))

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

// Rutas

app.use("/", indexRoute)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
