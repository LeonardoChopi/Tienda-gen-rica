// script/productos/producto1/desc.js

window.producto = {
    id:          "producto1",
    nombre:      "Jabón de lavanda",
    descripcion: "Descripción corta que aparece en la card.",
    contacto: "ambos",   // "whatsapp", "instagram", o "ambos"

    descripcionLarga: `
        <p>Texto largo para la página de descripción.</p>
        <p>Ingredientes, modo de uso, lo que quieras.</p>
    `,

    precio:    "$350",
    destacado: true,

    etiquetas: ["Artesanal", "Natural", "Sin conservantes"],

    imagenes: [
        "script/productos/producto1/img/Producto1.png",
        "script/productos/producto1/img/Productos2.png"
    ]
};