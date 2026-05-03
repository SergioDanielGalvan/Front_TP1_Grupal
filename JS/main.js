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


// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // 1. Verificar si el usuario ya tenía una preferencia guardada
    const darkModeStatus = localStorage.getItem('dark-mode');

    if (darkModeStatus === 'enabled') {
        body.classList.add('dark-theme');
        darkModeBtn.innerText = 'Modo Claro';
    }

    // 2. Escuchar el click en el botón
    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeBtn.innerText = 'Modo Claro';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeBtn.innerText = 'Modo Oscuro';
        }
    });
});