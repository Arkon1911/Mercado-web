$(function () {
    $(".add-to-cart").on("click", function (event) {
       const img = $(this).parent().parent().find("img")
 
       // toggle
       img.toggleClass("added")
       $(this).text(function (i, text) {
          return text === "Agregar al carrito" ? "Eliminar del carrito" : "Agregar al carrito"
       })
    })
 
    $("#cart-toggle").on("click", function (event) {
       const modalBody = $(".modal-body")
       const products = $(".added")
       modalBody.empty()
 
       if (products.length === 0) {
          modalBody.append("<p>No hay productos en el carrito</p>")
       }
 
       products.each(function (index, product) {
          modalBody.append(`<div class="product col-4">
             <img src="${product.src}" alt="${product.name}" width="100%">
             
          </div>`)
       })
    })
 })