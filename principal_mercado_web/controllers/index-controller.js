//modulos 

const { create } = require("express-handlebars")
// Local modules
const { products } = require("../db/products")

const hbs = create({})

//Handlebars

// Get
const get = async (req, res) => {
   res.render("index", {
      title: "Come Sano, Come Fresco Spa",
      products,
      helpers: {
         createWelcomeMsg: (msg) => {
            return `<h1>${msg}</h1>`
         },
      },
   })
}

// Exportación

module.exports = {
   get,
}