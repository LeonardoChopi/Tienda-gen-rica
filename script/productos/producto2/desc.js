// script/productos/producto1/desc.js

window.producto = {
    id:          "producto2",
    nombre:      "2 de lavanda",
    descripcion: "Descripción corta que aparece en la card.",
    contacto: "whatsapp",   // "whatsapp", "instagram", o "ambos"

    descripcionLarga: `
        <p>Texto largo para la página de descripción.</p>
        <p>Ingredientes, modo de uso, lo que quieras.</p>
    `,

    precio:    "$350",
    destacado: false,

    etiquetas: ["Artesanal", "Natural", "Sin conservantes"],

    imagenes: [
        "script/productos/producto2/img/Productos2.png"
    ]
};