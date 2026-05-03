// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    const btnInteraccion = document.getElementById('btn-interaccion');
    const mensajeProposito = document.getElementById('mensaje-proposito');

    // Función: Mostrar/Ocultar mensaje al hacer clic
    if (btnInteraccion) {
        btnInteraccion.addEventListener('click', () => {
            mensajeProposito.classList.toggle('hidden');
            
            // Cambio de estilo dinámico al botón
            if (!mensajeProposito.classList.contains('hidden')) {
                btnInteraccion.textContent = 'Cerrar Mensaje';
                btnInteraccion.style.backgroundColor = '#2d3436';
            } else {
                btnInteraccion.textContent = 'Conocer Propósito';
                btnInteraccion.style.backgroundColor = '#00b894';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-list');

    // Función para abrir/cerrar menú hamburguesa
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer clic en un link
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navLinks.classList.remove('active');
    }));
});