// script/cargarprodall.js — carga TODOS los productos (para productos.html)

(function () {
    const scriptTag = document.currentScript ||
        [...document.querySelectorAll('script')].find(s => s.src.includes('cargarprodall'));
    const scriptSrc = scriptTag ? scriptTag.src : '';
    const raiz = scriptSrc.includes('/script/')
        ? scriptSrc.split('/script/')[0] + '/'
        : '/';

    const indexScript = document.createElement("script");
    indexScript.src = raiz + "script/productos/index.js";
    indexScript.onload = () => {
        const carpetas = window.carpetasProductos || [];
        const scripts = carpetas.map(c => raiz + `script/productos/${c}/desc.js`);
        const todosLosProductos = [];

        cargarEnOrden(scripts, 0, () => {
            renderizarCards(todosLosProductos);
            iniciarCarruseles();
            window.productosData = todosLosProductos;
            if (window.iniciarBuscador) window.iniciarBuscador();
        });

        function cargarEnOrden(lista, index, onFin) {
            if (index >= lista.length) { onFin(); return; }
            window.producto = undefined;
            const script = document.createElement("script");
            script.src = lista[index];
            script.onload = () => {
                if (window.producto) todosLosProductos.push(window.producto);
                cargarEnOrden(lista, index + 1, onFin);
            };
            script.onerror = () => {
                console.warn(`No se pudo cargar: ${lista[index]}`);
                cargarEnOrden(lista, index + 1, onFin);
            };
            document.head.appendChild(script);
        }
    };

    indexScript.onerror = () => console.error("No se encontró: " + indexScript.src);
    document.head.appendChild(indexScript);

    function linkProducto(id) {
        const enSubcarpeta = window.location.pathname.includes('/int/');
        const base = enSubcarpeta ? 'descripcion.html' : 'int/descripcion.html';
        return `${base}?producto=${encodeURIComponent(id)}`;
    }

    function renderizarCards(productos) {
        const grid = document.getElementById('productos-grid');
        if (!grid) return;
        grid.innerHTML = '';
        if (productos.length === 0) {
            grid.innerHTML = '<p class="sin-resultados">No hay productos disponibles.</p>';
            return;
        }
        productos.forEach(prod => crearCard(prod, grid));
    }

    window.renderizarCards = function (productos) {
        const grid = document.getElementById('productos-grid');
        if (!grid) return;
        grid.innerHTML = '';
        if (productos.length === 0) {
            grid.innerHTML = '<p class="sin-resultados">No se encontraron productos.</p>';
            return;
        }
        productos.forEach(prod => crearCard(prod, grid));
        iniciarCarruseles();
    };

    function crearCard(prod, grid) {
        var imagenes = prod.imagenes || [];
        var card = document.createElement('article');
        card.className = 'card';
        card.dataset.nombre = prod.nombre.toLowerCase();

        // Imágenes del carrusel
        var carruselHTML = '';
        imagenes.forEach(function(img, i) {
            carruselHTML += '<img src="' + raiz + img + '" alt="' + prod.nombre + ' - imagen ' + (i+1) + '" class="' + (i === 0 ? 'activa' : '') + '">';
        });

        // Precio
        var precioHTML = prod.precio ? '<span class="card-precio">' + prod.precio + '</span>' : '';

        // Botones de contacto
        var botonesHTML = window.generarBotonesContacto
            ? window.generarBotonesContacto(prod)
            : '<a href="#" class="card-btn">Consultar</a>';

        card.innerHTML = '<div class="card-imagenes">'
            + '<div class="carrusel">' + carruselHTML + '</div>'
            + '<div class="carrusel-dots"></div>'
            + '<button class="carrusel-btn prev">&#8249;</button>'
            + '<button class="carrusel-btn next">&#8250;</button>'
            + '</div>'
            + '<div class="card-info">'
            + '<h2 class="card-nombre">' + prod.nombre + '</h2>'
            + '<p class="card-descripcion">' + prod.descripcion + '</p>'
            + '<div class="card-footer">' + precioHTML + botonesHTML + '</div>'
            + '</div>';

        grid.appendChild(card);
    }
})();