//importación de modulos


const express = require("express")

const indexCtrl = require("../controllers/index-controller")

// Init

const router = express.Router()

// Rutas
 
router.route("/").get(indexCtrl.get)

// Export

module.exports = router