/**
 * ============================================
 * SCRIPT PRINCIPAL
 * ============================================
 * Este archivo maneja validaciones y efectos simples.
 */

// ============================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ============================================

function validarFormulario() {
    const form = document.getElementById('form-contacto');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        let valido = true;
        
        if (nombre.length < 2) {
            alert('El nombre debe tener al menos 2 caracteres');
            valido = false;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('Email inválido');
            valido = false;
        }
        
        if (mensaje.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            valido = false;
        }
        
        if (valido) {
            alert('¡Mensaje enviado! (Esta es una demo - configura tu backend)');
            form.reset();
        }
    });
}

// ============================================
// EFECTO DE NAVBAR AL HACER SCROLL
// ============================================

function efectoNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
}

// ============================================
// SISTEMA DE VALORACIÓN CON ESTRELLAS
// ============================================

function iniciarSistemaEstrellas() {
    const starsContainer = document.getElementById('stars');
    const ratingText = document.getElementById('rating-text');
    const ratingThanks = document.getElementById('rating-thanks');
    
    if (!starsContainer) return;
    
    const stars = starsContainer.querySelectorAll('.star');
    const mensajes = {
        1: '¡Gracias! Tomaré en cuenta tu opinión',
        2: '¡Gracias! Trabajaré en mejorar',
        3: '¡Gracias! Aprecio tu feedback',
        4: '¡Gracias! Me alegra que te haya gustado',
        5: '¡Wow! ¡Gracias por el apoyo! 🎉'
    };
    
    let haVotado = false;
    
    // Verificar si ya votó antes
    if (localStorage.getItem('sitioValorado') === 'true') {
        const valoracionGuardada = localStorage.getItem('valoracion');
        if (valoracionGuardada) {
            marcarEstrellas(parseInt(valoracionGuardada));
            haVotado = true;
            if (ratingThanks) ratingThanks.classList.remove('d-none');
            if (ratingText) ratingText.textContent = '¡Ya has valorado antes!';
        }
    }
    
    function marcarEstrellas(value) {
        stars.forEach((s) => {
            const sValue = parseInt(s.getAttribute('data-value'));
            if (sValue <= value) {
                s.classList.add('active');
                s.classList.remove('bi-star');
                s.classList.add('bi-star-fill');
            }
        });
    }
    
    stars.forEach((star) => {
        star.addEventListener('click', function() {
            if (haVotado) return;
            
            const value = parseInt(this.getAttribute('data-value'));
            
            // Marca las estrellas
            stars.forEach((s) => {
                const sValue = parseInt(s.getAttribute('data-value'));
                if (sValue <= value) {
                    s.classList.add('active');
                    s.classList.remove('bi-star');
                    s.classList.add('bi-star-fill');
                }
            });
            
            // Actualiza el texto
            if (ratingText) {
                ratingText.textContent = mensajes[value] || '¡Gracias!';
            }
            
            // Guarda la valoración
            localStorage.setItem('sitioValorado', 'true');
            localStorage.setItem('valoracion', value.toString());
            
            // Muestra mensaje de agradecimiento
            if (ratingThanks) {
                ratingThanks.classList.remove('d-none');
            }
            
            haVotado = true;
            
            console.log('Usuario votó:', value, 'estrellas');
        });
        
        // Efecto hover
        star.addEventListener('mouseenter', function() {
            if (haVotado) return;
            
            const value = parseInt(this.getAttribute('data-value'));
            
            stars.forEach((s) => {
                const sValue = parseInt(s.getAttribute('data-value'));
                if (sValue <= value) {
                    s.classList.add('hover');
                    s.classList.remove('bi-star');
                    s.classList.add('bi-star-fill');
                }
            });
        });
        
        star.addEventListener('mouseleave', function() {
            if (haVotado) return;
            
            stars.forEach((s) => {
                s.classList.remove('hover');
                s.classList.remove('bi-star-fill');
                s.classList.add('bi-star');
            });
        });
    });
}

// ============================================
// INICIALIZA TODO CUANDO CARGUE LA PÁGINA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    validarFormulario();
    efectoNavbar();
    iniciarSistemaEstrellas();
    
    console.log('Script cargado correctamente');
});
