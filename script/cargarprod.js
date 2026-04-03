// script/cargarprod.js — carga solo productos DESTACADOS (para index.html)

(function () {
    const scriptTag = document.currentScript ||
        [...document.querySelectorAll('script')].find(s => s.src.includes('cargarprod') && !s.src.includes('cargarprodall'));
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
            const destacados = todosLosProductos.filter(p => p.destacado === true);
            renderizarCards(destacados);
            iniciarCarruseles();
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
        // Si la URL contiene /int/ estamos en una subcarpeta, si no estamos en la raíz
        const enSubcarpeta = window.location.pathname.includes('/int/');
        const base = enSubcarpeta ? 'descripcion.html' : 'int/descripcion.html';
        return `${base}?producto=${encodeURIComponent(id)}`;
    }

    function renderizarCards(productos) {
        var grid = document.getElementById('productos-grid');
        if (!grid) return;
        grid.innerHTML = '';
        if (productos.length === 0) {
            grid.innerHTML = '<p class="sin-resultados">No hay productos destacados por el momento.</p>';
            return;
        }
        productos.forEach(function(prod) {
            var imagenes = prod.imagenes || [];
            var card = document.createElement('article');
            card.className = 'card';

            var carruselHTML = '';
            imagenes.forEach(function(img, i) {
                carruselHTML += '<img src="' + raiz + img + '" alt="' + prod.nombre + ' - imagen ' + (i+1) + '" class="' + (i === 0 ? 'activa' : '') + '">';
            });

            var precioHTML = prod.precio ? '<span class="card-precio">' + prod.precio + '</span>' : '';

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
        });
    }
})();