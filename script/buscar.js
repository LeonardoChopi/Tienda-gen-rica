// script/buscar.js — buscador en tiempo real por nombre

(function () {

    function iniciarBuscador() {
        const input = document.getElementById('input-buscar');
        if (!input) return;

        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();
            const productos = window.productosData || [];

            if (query === '') {
                // Si está vacío, mostrar todos
                window.renderizarCards(productos);
                return;
            }

            const filtrados = productos.filter(p =>
                p.nombre.toLowerCase().includes(query) ||
                p.descripcion.toLowerCase().includes(query)
            );

            window.renderizarCards(filtrados);
        });
    }

    // Si los productos ya cargaron, iniciar ya; si no, esperar
    if (window.productosData) {
        iniciarBuscador();
    } else {
        window.iniciarBuscador = iniciarBuscador;
    }

})();