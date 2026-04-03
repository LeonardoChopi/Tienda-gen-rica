// carrucel.js — inicializa carruseles en todas las .card del DOM
function iniciarCarruseles() {
    document.querySelectorAll('.card').forEach(card => {
        const imgs = card.querySelectorAll('.carrusel img');
        const dotsContainer = card.querySelector('.carrusel-dots');
        let actual = 0;

        // Limpiar dots anteriores (por si se llama más de una vez)
        dotsContainer.innerHTML = '';

        // Crear dots
        imgs.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('activo');
            dot.addEventListener('click', () => ir(i));
            dotsContainer.appendChild(dot);
        });

        function ir(index) {
            imgs[actual].classList.remove('activa');
            dotsContainer.children[actual].classList.remove('activo');
            actual = (index + imgs.length) % imgs.length;
            imgs[actual].classList.add('activa');
            dotsContainer.children[actual].classList.add('activo');
        }

        // Ocultar controles si hay una sola imagen
        const btnPrev = card.querySelector('.prev');
        const btnNext = card.querySelector('.next');

        if (imgs.length <= 1) {
            btnPrev.style.display = 'none';
            btnNext.style.display = 'none';
            dotsContainer.style.display = 'none';
        } else {
            btnPrev.style.display = '';
            btnNext.style.display = '';
            dotsContainer.style.display = '';
            btnPrev.addEventListener('click', () => ir(actual - 1));
            btnNext.addEventListener('click', () => ir(actual + 1));
        }
    });
}

// Exponer globalmente
window.iniciarCarruseles = iniciarCarruseles;