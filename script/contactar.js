// script/contactar.js — maneja los botones de contacto en las cards

(function () {

    // Carga info.js para obtener los datos de contacto globales
    var scriptTag = document.currentScript ||
        Array.from(document.querySelectorAll('script')).find(function(s) { return s.src.includes('contactar'); });
    var scriptSrc = scriptTag ? scriptTag.src : '';
    var raiz = scriptSrc.includes('/script/')
        ? scriptSrc.split('/script/')[0] + '/'
        : '/';

    // Cargar info.js si no está cargado aún
    if (!window.infoTienda) {
        var s = document.createElement('script');
        s.src = raiz + 'info.js';
        document.head.appendChild(s);
    }

    // Genera el HTML del botón según el tipo de contacto del producto
    window.generarBotonesContacto = function(prod) {
        var info    = window.infoTienda || {};
        var tipo    = prod.contacto || 'ambos';
        var nombre  = encodeURIComponent('Hola! Me interesa el producto: ' + prod.nombre);
        var wa      = info.whatsapp  ? info.whatsapp.replace(/\D/g, '')  : '';
        var ig      = info.instagram ? info.instagram.replace('@', '')    : '';

        var urlWA = 'https://wa.me/' + wa + '?text=' + nombre;
        var urlIG = 'https://instagram.com/' + ig;

        var btnWA = '<a href="' + urlWA + '" target="_blank" class="card-btn btn-wa">💬 WhatsApp</a>';
        var btnIG = '<a href="' + urlIG + '" target="_blank" class="card-btn btn-ig">📸 Instagram</a>';

        if (tipo === 'whatsapp')  return btnWA;
        if (tipo === 'instagram') return btnIG;
        return btnWA + btnIG; // "ambos" o cualquier otro valor
    };

})();