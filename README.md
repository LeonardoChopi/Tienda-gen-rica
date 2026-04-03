🇬🇧 [English](README.md) · 🇪🇸 [Español](README.es.md)

# 🛍️ Piamonte — Tienda Artesanal

Bienvenido al proyecto. Esta guía te explica todo lo que necesitás saber para usar, modificar y publicar tu tienda, aunque nunca hayas tocado código antes.

---

## 📁 Estructura de archivos

```
tu-proyecto/
├── info/                       ← logo e información de la tienda
│   ├── info.js                 ← datos de contacto de la tienda
│   └── logo.png                ← logo de la tienda
├── int/                        ← páginas internas
│   ├── productos.html
│   ├── contacto.html
│   └── licencia.html
├── script/                     ← toda la lógica del sitio
│   ├── productos/              ← carpeta de productos
│   │   ├── index.js            ← lista de productos activos
│   │   ├── producto1/
│   │   │   ├── desc.js         ← info del producto
│   │   │   └── img/            ← fotos del producto
│   │   ├── producto2/
│   │   └── producto3/
│   ├── carrucel.js
│   ├── cargarprod.js
│   ├── cargarprodall.js
│   ├── buscar.js
│   └── contactar.js
├── index.html                  ← página de inicio
└── style.css                   ← estilos visuales
```

---

## 🖼️ Cómo cambiar el logo

1. Prepará tu imagen de logo (recomendado: PNG con fondo transparente, altura aprox. 70px)
2. Nombrala exactamente `logo.png`
3. Reemplazá el archivo que está en la carpeta `info/`

> ⚠️ El nombre debe ser exactamente `logo.png` (todo en minúscula). Si lo llamás `Logo.png` o `LOGO.PNG` no va a funcionar en algunos servidores.

---

## 📞 Cómo cambiar los datos de contacto

Abrí el archivo `info/info.js` y modificá los valores:

```javascript
window.infoTienda = {
    nombre:    "Nombre de tu tienda",
    instagram: "@tu_usuario",        // ← tu usuario de Instagram
    whatsapp:  "+5981234567",        // ← tu número con código de país
    email:     "tu@correo.com",      // ← tu correo
    ubicacion: "Tu ciudad, País",
    horario:   "Respondemos en menos de 24 hs"
};
```

> 💡 Este archivo es el único lugar donde tenés que poner tu información de contacto. Se usa automáticamente en toda la tienda.

---

## 📦 Cómo agregar un producto nuevo

### Paso 1 — Crear la carpeta del producto

Dentro de `script/productos/`, copiá la carpeta de cualquier producto existente (por ejemplo `producto1`) y renombrála. Por ejemplo: `producto4`.

```
script/productos/
├── producto1/
├── producto2/
├── producto3/
└── producto4/     ← nueva carpeta (copiada y renombrada)
```

### Paso 2 — Agregar las fotos

Dentro de la nueva carpeta, entrá a `img/` y reemplazá las fotos con las tuyas. Podés poner tantas fotos como quieras.

> 💡 Usá nombres sin espacios ni caracteres especiales. Por ejemplo: `foto1.jpg`, `foto2.jpg`.

### Paso 3 — Editar la información del producto

Abrí el archivo `desc.js` dentro de la nueva carpeta y completá los datos:

```javascript
window.producto = {
    id:          "producto4",          // debe coincidir con el nombre de la carpeta
    nombre:      "Nombre del producto",
    descripcion: "Descripción corta que aparece en la card.",
    precio:      "$500",               // si no tiene precio, borrá esta línea
    destacado:   true,                 // true = aparece en el inicio, false = solo en productos
    contacto:    "ambos",              // "whatsapp", "instagram" o "ambos"
    imagenes: [
        "script/productos/producto4/img/foto1.jpg",
        "script/productos/producto4/img/foto2.jpg"
    ]
};
```

> ⚠️ El campo `id` debe ser exactamente igual al nombre de la carpeta.

### Paso 4 — Registrar el producto

Abrí `script/productos/index.js` y agregá el nombre de la nueva carpeta a la lista:

```javascript
window.carpetasProductos = [
    "producto1",
    "producto2",
    "producto3",
    "producto4"     // ← agregar acá
];
```

¡Listo! El producto ya aparece en la tienda.

---

## ✏️ Cómo modificar un producto existente

1. Abrí la carpeta del producto en `script/productos/nombredelproducto/`
2. Editá el archivo `desc.js` con los nuevos datos
3. Si querés cambiar las fotos, reemplazalas en la carpeta `img/` y actualizá los nombres en `desc.js`

---

## 🗑️ Cómo eliminar un producto

1. Borrá la carpeta completa del producto en `script/productos/`
2. Abrí `script/productos/index.js` y eliminá esa línea de la lista:

```javascript
window.carpetasProductos = [
    "producto1",
    // "producto2",   ← borraste la carpeta, borrá también esta línea
    "producto3"
];
```

---

## 🙈 Cómo ocultar un producto sin borrarlo

Si querés que un producto no aparezca temporalmente, sin borrarlo, tenés dos opciones:

**Opción A — Ocultarlo del inicio solamente:**
En su `desc.js`, cambiá `destacado: true` a `destacado: false`.

**Opción B — Ocultarlo de toda la tienda:**
En `script/productos/index.js`, comentá su línea con `//`:

```javascript
window.carpetasProductos = [
    "producto1",
    // "producto2",   ← comentado = no aparece en ningún lado
    "producto3"
];
```

---

## 🚀 Cómo publicar el sitio

### 1. Instalar Git

Git es la herramienta que te permite guardar y subir tu código.

📥 Descargalo desde: https://git-scm.com/downloads  
Seguí el instalador con las opciones por defecto.

▶️ Video tutorial de instalación:
```
[ https://www.youtube.com/watch?v=jdXKwLNUfmg&pp=ygUMaW5zdGFsYXIgZ2l0 ]
```

Verificá que se instaló correctamente abriendo una terminal y escribiendo:
```
git --version
```
Si ves algo como `git version 2.x.x`, está todo bien.

---

### 2. Crear una cuenta en GitHub

GitHub es donde vas a guardar tu código en la nube.

1. Entrá a https://github.com y creá una cuenta gratuita
2. Confirmá tu correo electrónico

---

### 3. Crear un repositorio en GitHub

Un repositorio es como una carpeta en la nube para tu proyecto.

1. Iniciá sesión en GitHub
2. Hacé clic en el botón verde **"New"**
3. Poné un nombre (por ejemplo: `mi-tienda`)
4. Dejalo en **Público**
5. No marques ninguna opción extra
6. Hacé clic en **"Create repository"**

▶️ Video tutorial para crear un repositorio:
```
[ https://www.youtube.com/watch?v=eQMcIGVc8N0&pp=ygUbY3JlYXIgcmVwb3NpdG9yaW8gZW4gZ2l0aHVi ]
```

---

### 4. Subir tu proyecto a GitHub

Abrí una terminal dentro de la carpeta de tu proyecto y ejecutá estos comandos uno por uno:

```bash
git init
git add .
git commit -m "primer commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

> ⚠️ Reemplazá `TU_USUARIO` y `TU_REPOSITORIO` con tu usuario y el nombre del repositorio que creaste.

El link de tu repositorio quedará así:
```
[ https://github.com/LeonardoChopi/ElRepositorio ]
```

▶️ Video tutorial para subir el proyecto:
```
[ https://www.youtube.com/watch?v=mq-CDUwHe8Y&pp=ygUbc3ViaXIgcmVwb3NpdG9yaW8gZW4gZ2l0aHVi ]
```

---

### 5. Publicar en Netlify (gratis)

Netlify te permite publicar tu sitio gratis para que cualquiera lo pueda ver.

1. Entrá a https://netlify.com y creá una cuenta (podés usar tu cuenta de GitHub)
2. Hacé clic en **"Add new site"** → **"Import an existing project"**
3. Elegí **GitHub** y autorizá el acceso
4. Seleccioná el repositorio de tu tienda
5. Dejá todas las opciones por defecto
6. Hacé clic en **"Deploy site"**

En unos segundos tu sitio va a estar publicado con una URL como:
```
https://nombre-aleatorio.netlify.app
```

Podés cambiar esa URL desde **"Site settings"** → **"Change site name"**.

> 💡 Cada vez que subas cambios a GitHub con `git push`, Netlify va a actualizar el sitio automáticamente.

▶️ Video tutorial para publicar en Netlify:
```
[ https://www.youtube.com/watch?v=7W6-jSOFMgM&pp=ygUTcHVibGljYXIgZW4gTmV0bGlmeQ%3D%3D ]
```

---

### 6. Clonar el repositorio (para trabajar en otra computadora)

Si querés trabajar en el proyecto desde otra computadora, abrí la terminal y ejecutá:

```bash
git clone https://github.com/LeonardoChopi/Tienda-gen-rica.git
```

```
[ https://www.youtube.com/watch?v=rAnn6vtLm90&pp=ygUZY2xvbmFyIHJlcG9zaXRvcmlvIGdpdGh1Yg%3D%3D ]
```

---

## ❓ Problemas comunes

**Las imágenes no cargan**  
→ Verificá que el nombre del archivo en `desc.js` sea exactamente igual al nombre real del archivo, incluyendo mayúsculas y la extensión (`.jpg`, `.png`, etc.)

**El producto no aparece**  
→ Verificá que lo hayas agregado en `script/productos/index.js`

**Los botones de WhatsApp no funcionan**  
→ Verificá que el número en `info/info.js` tenga el código de país (ej: `+598` para Uruguay)

**Los cambios no se ven en Netlify**  
→ Acordate de hacer `git add .`, `git commit -m "descripcion"` y `git push` cada vez que modificás algo

---

## 📄 Licencia

Este proyecto usa una licencia abierta. Podés usarlo, modificarlo y venderlo libremente.  
Si lo usás comercialmente, se agradece que avises en:

- 📧 leonardochopi@gmail.com  
- 🐙 https://github.com/leonardochopi

Más detalles en `int/licencia.html`.