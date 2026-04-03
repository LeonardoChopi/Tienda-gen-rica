🇬🇧 [English](README.md) · 🇪🇸 [Español](README.es.md)

# 🛍️ Piamonte — Artisanal Store

Welcome to the project. This guide explains everything you need to know to use, modify and publish your store, even if you have never touched code before.

---

## 📁 File structure

```
your-project/
├── info/                       ← logo and store information
│   ├── info.js                 ← store contact details
│   └── logo.png                ← store logo
├── int/                        ← internal pages
│   ├── productos.html
│   ├── contacto.html
│   └── licencia.html
├── script/                     ← all site logic
│   ├── productos/              ← products folder
│   │   ├── index.js            ← list of active products
│   │   ├── producto1/
│   │   │   ├── desc.js         ← product info
│   │   │   └── img/            ← product photos
│   │   ├── producto2/
│   │   └── producto3/
│   ├── carrucel.js
│   ├── cargarprod.js
│   ├── cargarprodall.js
│   ├── buscar.js
│   └── contactar.js
├── index.html                  ← home page
└── style.css                   ← visual styles
```

---

## 🖼️ How to change the logo

1. Prepare your logo image (recommended: PNG with transparent background, approx. 70px height)
2. Name it exactly `logo.png`
3. Replace the file inside the `info/` folder

> ⚠️ The name must be exactly `logo.png` (all lowercase). If you name it `Logo.png` or `LOGO.PNG` it won't work on some servers.

---

## 📞 How to change the contact details

Open the file `info/info.js` and edit the values:

```javascript
window.infoTienda = {
    nombre:    "Your store name",
    instagram: "@your_username",       // ← your Instagram username
    whatsapp:  "+5981234567",          // ← your number with country code
    email:     "you@email.com",        // ← your email
    ubicacion: "Your city, Country",
    horario:   "We respond within 24 hours"
};
```

> 💡 This is the only file where you need to enter your contact information. It is used automatically throughout the store.

---

## 📦 How to add a new product

### Step 1 — Create the product folder

Inside `script/productos/`, copy any existing product folder (for example `producto1`) and rename it. For example: `producto4`.

```
script/productos/
├── producto1/
├── producto2/
├── producto3/
└── producto4/     ← new folder (copied and renamed)
```

### Step 2 — Add the photos

Inside the new folder, go to `img/` and replace the photos with yours. You can add as many photos as you want.

> 💡 Use names without spaces or special characters. For example: `photo1.jpg`, `photo2.jpg`.

### Step 3 — Edit the product information

Open the `desc.js` file inside the new folder and fill in the details:

```javascript
window.producto = {
    id:          "producto4",          // must match the folder name
    nombre:      "Product name",
    descripcion: "Short description shown on the card.",
    precio:      "$500",               // if no price, delete this line
    destacado:   true,                 // true = shown on homepage, false = only in products
    contacto:    "ambos",              // "whatsapp", "instagram" or "ambos" (both)
    imagenes: [
        "script/productos/producto4/img/photo1.jpg",
        "script/productos/producto4/img/photo2.jpg"
    ]
};
```

> ⚠️ The `id` field must be exactly the same as the folder name.

### Step 4 — Register the product

Open `script/productos/index.js` and add the new folder name to the list:

```javascript
window.carpetasProductos = [
    "producto1",
    "producto2",
    "producto3",
    "producto4"     // ← add here
];
```

Done! The product now appears in the store.

---

## ✏️ How to edit an existing product

1. Open the product folder at `script/productos/productname/`
2. Edit the `desc.js` file with the new data
3. To change photos, replace them in the `img/` folder and update the names in `desc.js`

---

## 🗑️ How to delete a product

1. Delete the entire product folder from `script/productos/`
2. Open `script/productos/index.js` and remove that line from the list:

```javascript
window.carpetasProductos = [
    "producto1",
    // "producto2",   ← deleted the folder, delete this line too
    "producto3"
];
```

---

## 🙈 How to hide a product without deleting it

If you want a product to temporarily not appear without deleting it, you have two options:

**Option A — Hide it from the homepage only:**
In its `desc.js`, change `destacado: true` to `destacado: false`.

**Option B — Hide it from the entire store:**
In `script/productos/index.js`, comment out its line with `//`:

```javascript
window.carpetasProductos = [
    "producto1",
    // "producto2",   ← commented out = doesn't appear anywhere
    "producto3"
];
```

---

## 🚀 How to publish the site

### 1. Install Git

Git is the tool that lets you save and upload your code.

📥 Download it from: https://git-scm.com/downloads  
Follow the installer with the default options.

▶️ Installation video tutorial:
```
[ https://www.youtube.com/watch?v=jdXKwLNUfmg&pp=ygUMaW5zdGFsYXIgZ2l0 ]
```

Verify it installed correctly by opening a terminal and typing:
```
git --version
```
If you see something like `git version 2.x.x`, you're good to go.

---

### 2. Create a GitHub account

GitHub is where you will store your code in the cloud.

1. Go to https://github.com and create a free account
2. Confirm your email address

---

### 3. Create a repository on GitHub

A repository is like a cloud folder for your project.

1. Log in to GitHub
2. Click the green **"New"** button
3. Enter a name (for example: `my-store`)
4. Set it to **Public**
5. Don't check any extra options
6. Click **"Create repository"**

▶️ Video tutorial for creating a repository:
```
[ https://www.youtube.com/watch?v=eQMcIGVc8N0&pp=ygUbY3JlYXIgcmVwb3NpdG9yaW8gZW4gZ2l0aHVi ]
```

---

### 4. Upload your project to GitHub

Open a terminal inside your project folder and run these commands one by one:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

> ⚠️ Replace `YOUR_USER` and `YOUR_REPO` with your username and the repository name you created.

Your repository link will be:
```
[ https://github.com/LeonardoChopi/ElRepositorio ]
```

▶️ Video tutorial for uploading the project:
```
[ https://www.youtube.com/watch?v=mq-CDUwHe8Y&pp=ygUbc3ViaXIgcmVwb3NpdG9yaW8gZW4gZ2l0aHVi ]
```

---

### 5. Publish on Netlify (free)

Netlify lets you publish your site for free so anyone can see it.

1. Go to https://netlify.com and create an account (you can use your GitHub account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize access
4. Select your store repository
5. Leave all options as default
6. Click **"Deploy site"**

In a few seconds your site will be published with a URL like:
```
https://random-name.netlify.app
```

You can change that URL from **"Site settings"** → **"Change site name"**.

> 💡 Every time you push changes to GitHub with `git push`, Netlify will automatically update the site.

▶️ Video tutorial for publishing on Netlify:
```
[ https://www.youtube.com/watch?v=7W6-jSOFMgM&pp=ygUTcHVibGljYXIgZW4gTmV0bGlmeQ%3D%3D ]
```

---

### 6. Clone the repository (to work on another computer)

If you want to work on the project from another computer, open the terminal and run:

```bash
git clone https://github.com/LeonardoChopi/Tienda-gen-rica.git
```

```
[ https://www.youtube.com/watch?v=rAnn6vtLm90&pp=ygUZY2xvbmFyIHJlcG9zaXRvcmlvIGdpdGh1Yg%3D%3D ]
```

---

## ❓ Common issues

**Images don't load**  
→ Check that the filename in `desc.js` matches exactly the real filename, including uppercase letters and extension (`.jpg`, `.png`, etc.)

**Product doesn't appear**  
→ Check that you added it in `script/productos/index.js`

**WhatsApp buttons don't work**  
→ Check that the number in `info/info.js` includes the country code (e.g. `+598` for Uruguay)

**Changes don't show on Netlify**  
→ Remember to run `git add .`, `git commit -m "description"` and `git push` every time you modify something

---

## 📄 License

This project uses an open license. You can use, modify and sell it freely.  
If you use it commercially, we appreciate you letting us know at:

- 📧 leonardochopi@gmail.com  
- 🐙 https://github.com/leonardochopi

More details in `int/licencia.html`.