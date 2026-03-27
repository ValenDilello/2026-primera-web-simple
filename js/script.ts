/**
 * ============================================
 * SCRIPT PRINCIPAL - EDITA A MANO
 * ============================================
 * Este archivo maneja validaciones y efectos simples.
 * No necesitas compilador - puedes editarlo directamente.
 * Para probarlo, cambia la extensión a .js o usa un transpilador online.
 */

// ============================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ============================================

function validarFormulario(): void {
    const form = document.getElementById('form-contacto');
    
    if (!form) return; // Sale si no existe el formulario

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita envío automático
        
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const mensaje = (document.getElementById('mensaje') as HTMLTextAreaElement).value.trim();
        
        let valido = true;
        
        // Valida nombre (mínimo 2 caracteres)
        if (nombre.length < 2) {
            alert('CAMBIA EL NOMBRE: Debe tener al menos 2 caracteres');
            valido = false;
        }
        
        // Valida email (formato básico)
        if (!email.includes('@') || !email.includes('.')) {
            alert('CAMBIA EL EMAIL: Formato inválido');
            valido = false;
        }
        
        // Valida mensaje (mínimo 10 caracteres)
        if (mensaje.length < 10) {
            alert('CAMBIA EL MENSAJE: Debe tener al menos 10 caracteres');
            valido = false;
        }
        
        // Si todo válido, muestra éxito
        if (valido) {
            alert('¡Mensaje enviado! (Esta es una demo - configura tu backend)');
            (form as HTMLFormElement).reset();
        }
    });
}

// ============================================
// EFECTO DE NAVBAR AL HACER SCROLL
// ============================================

function efectoNavbar(): void {
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

function iniciarSistemaEstrellas(): void {
    const starsContainer = document.getElementById('stars');
    const ratingText = document.getElementById('rating-text');
    const ratingThanks = document.getElementById('rating-thanks');
    
    if (!starsContainer) return; // Sale si no existe el contenedor
    
    const stars = starsContainer.querySelectorAll('.star') as NodeListOf<HTMLElement>;
    const mensajes: Record<number, string> = {
        1: '¡Gracias! Tomaré en cuenta tu opinión',
        2: '¡Gracias! Trabajaré en mejorar',
        3: '¡Gracias! Aprecio tu feedback',
        4: '¡Gracias! Me alegra que te haya gustado',
        5: '¡Wow! ¡Gracias por el apoyo! 🎉'
    };
    
    let haVotado = false;
    
    // Función para marcar estrellas
    stars.forEach((star) => {
        // Cuando haces click en una estrella
        star.addEventListener('click', () => {
            if (haVotado) return; // Ya votó
            
            const value = parseInt(star.getAttribute('data-value') || '0');
            
            // Marca las estrellas hasta el valor seleccionado
            stars.forEach((s) => {
                const sValue = parseInt(s.getAttribute('data-value') || '0');
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
            
            // Guarda la valoración en localStorage (opcional)
            localStorage.setItem('sitioValorado', 'true');
            localStorage.setItem('valoracion', value.toString());
            
            // Muestra mensaje de agradecimiento
            if (ratingThanks) {
                ratingThanks.classList.remove('d-none');
            }
            
            haVotado = true;
            
            // Console log para que veas el valor (para conectar con backend después)
            console.log('Usuario votó:', value, 'estrellas');
        });
        
        // Efecto hover
        star.addEventListener('mouseenter', () => {
            if (haVotado) return;
            
            const value = parseInt(star.getAttribute('data-value') || '0');
            
            stars.forEach((s) => {
                const sValue = parseInt(s.getAttribute('data-value') || '0');
                if (sValue <= value) {
                    s.classList.add('hover');
                    s.classList.remove('bi-star');
                    s.classList.add('bi-star-fill');
                }
            });
        });
        
        star.addEventListener('mouseleave', () => {
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

document.addEventListener('DOMContentLoaded', () => {
    validarFormulario();
    efectoNavbar();
    iniciarSistemaEstrellas();
    
    console.log('Script cargado correctamente');
});

/* 
   NOTA: Para usar este archivo directamente en el navegador:
   
   OPCIÓN 1: Renombra a .js y úsalo así:
   <script src="js/script.js"></script>
   
   OPCIÓN 2: Usa un transpilador online como:
   https://www.typescriptlang.org/play
   
   OPCIÓN 3 (RECOMENDADA): Instala TypeScript localmente:
   npm install -g typescript
   tsc js/script.ts
*/
