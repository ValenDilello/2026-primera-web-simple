# Mi Portfolio Personal

Sitio web simple y fácil de editar. Sin complicaciones, solo HTML, Bootstrap y TypeScript básico.

## Estructura de Archivos

```
/
├── index.html        # Página principal (Hero, Proyectos, Testimonios)
├── sobre-mi.html    # Sobre mí (Historia, Filosofía, Habilidades)
├── portafolio.html  # Todos mis proyectos con modales
├── servicios.html   # Servicios, Proceso, FAQ
├── contacto.html    # Formulario + Redes sociales
│
├── css/
│   └── style.css    # Tus estilos personalizados
│
└── js/
    └── script.ts    # Validación y efectos (TypeScript)
```

## Cómo Usar

### 1. Abrir en navegador
Simplemente haz doble clic en `index.html` y se abrirá en tu navegador.

### 2. Editar el contenido
Cada archivo HTML tiene comentarios que dicen **"CAMBIA ESTO"** o **"CAMBIA AQUÍ"**. 
Busca esos comentarios y reemplaza el texto con tu información.

### 3. Cambiar colores
En `css/style.css` tienes una sección `:root` donde puedes cambiar tus colores:
```css
--tu-color-primario: #2563eb;  /* Cambia aquí */
```

### 4. Agregar proyectos
En `portafolio.html` hay tarjetas de ejemplo. Copia y pega la estructura para agregar más:
```html
<div class="col-md-6 col-lg-4 mb-4">
    <div class="card card-project h-100">
        <img src="..." class="card-img-top" alt="Proyecto">
        <div class="card-body">
            <h5 class="card-title fw-bold">Nombre del Proyecto</h5>
            <p class="card-text text-muted">Descripción</p>
        </div>
    </div>
</div>
```

### 5. El formulario de contacto
El formulario está configurado para mostrar alertas (demo). 
Para hacerlo funcional, conecta el JS a un servicio como:
- Formspree (https://formspree.io)
- EmailJS (https://www.emailjs.com)

## TypeScript - Nota Importante

El archivo `js/script.ts` está en TypeScript. Para usarlo:

**Opción A (más fácil):** Renómbralo a `.js` y úsalo así:
```html
<script src="js/script.js"></script>
```

**Opción B:** Usa un transpilador online como:
https://www.typescriptlang.org/play

**Opción C (recomendada si sabes):**
```bash
npm install -g typescript
tsc js/script.ts
```

## Imágenes

He usado imágenes de placeholder (placehold.co). 
Reemplázalas con tus propias imágenes en la carpeta del proyecto o URLs.

## Tecnologías Usadas

- **Bootstrap 5** (vía CDN - no necesita instalación)
- **Bootstrap Icons** (iconos)
- **TypeScript** (validación básica)

## Personalización

### Cambiar color principal
Busca en `css/style.css`:
```css
--tu-color-primario: #2563eb;
```

### Agregar más FAQ
En `servicios.html`, copia este bloque:
```html
<div class="accordion-item mb-3 border rounded">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" 
                data-bs-toggle="collapse" data-bs-target="#faq5">
            Tu pregunta aquí
        </button>
    </h2>
    <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body text-muted">
            Tu respuesta aquí
        </div>
    </div>
</div>
```

## Notas

- No necesitas servidor - funciona abrir el archivo directamente
- El formulario es solo demo (muestra alertas)
- Las imágenes son placeholders - cámbialas
- Todo el texto editable tiene comentarios "CAMBIA"
