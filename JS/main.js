document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ HAMBURGUESA ---
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-list');

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
            menu.classList.remove('is-active');
            navLinks.classList.remove('active');
        }));
    }
    

    // --- 2. MODO OSCURO ---
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (darkModeBtn) {
        const darkModeStatus = localStorage.getItem('dark-mode');

        if (darkModeStatus === 'enabled') {
            body.classList.add('dark-theme');
            darkModeBtn.innerText = 'Modo Claro';
        }

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
    }

    // --- 3. LÓGICA DEL FORMULARIO (Limpieza simple) ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página recargue
            
            // Efecto visual rápido en el botón
            const btn = document.getElementById('btn-enviar');
            const textoOriginal = btn.textContent;
            
            btn.textContent = '¡Enviado!';
            btn.style.backgroundColor = '#2d3436';

            // Limpiamos el formulario inmediatamente
            contactForm.reset(); 

            // Después de 2 segundos, el botón vuelve a la normalidad
            setTimeout(() => {
                btn.textContent = textoOriginal;
                btn.style.backgroundColor = ''; // Vuelve al color del CSS
            }, 2000);
        });
    }



    // --- 4. CAMBIO DE ESTILO DE TARJETA (Individual) ---
    const btnEstilo = document.getElementById('change-style');
    const cardPerfil = document.getElementById('profile-card');

    if (btnEstilo && cardPerfil) {
        btnEstilo.addEventListener('click', () => {
            // Toggle de una clase personalizada
            cardPerfil.classList.toggle('tarjeta-resaltada');

            // Verificamos si la clase existe para cambiar el texto y el estilo
            if (cardPerfil.classList.contains('tarjeta-resaltada')) {
                cardPerfil.style.backgroundColor = '#84d4bf';
                cardPerfil.style.border = '2px solid var(--accent)';
                btnEstilo.innerText = 'Restaurar Estilo';
            } else {
                // Volver al original (blanco y sin borde)
                cardPerfil.style.backgroundColor = '#ffffff';
                cardPerfil.style.border = 'none';
                btnEstilo.innerText = 'Cambiar Estilo de Tarjeta';
            }
        });
    }

    // --- 5. BOTÓN INDEX ---
    const btnProposito = document.querySelector('.btn-primary');
    const mensajeProposito = document.getElementById('mensaje-proposito');

    if (btnProposito && mensajeProposito) {
        btnProposito.addEventListener('click', () => {
            // Quitamos la clase 'hidden' para que se vea
            mensajeProposito.classList.toggle('hidden');
            
            // Opcional: Cambiar el texto del botón según el estado
            if (mensajeProposito.classList.contains('hidden')) {
                btnProposito.innerText = 'Conocer Propósito';
            } else {
                btnProposito.innerText = 'Ocultar Propósito';
            }
        });
    }
});