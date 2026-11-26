# 🚀 Guía de Desarrollo Colaborativo: Plataforma PRENDER (CFP408)

¡Bienvenido/a al equipo de desarrollo de **PRENDER**! Esta plataforma tiene como propósito visibilizar y potenciar los emprendimientos de alumnos y egresados del **CFP408**.

Para que podamos trabajar todos juntos en el mismo repositorio de GitHub sin pisarnos el código ni generar conflictos de integración, seguiremos esta guía práctica.

---

## 🎯 Tecnologías Utilizadas
* **HTML5 Semántico**: Cada sección tiene su contenedor con etiquetas semánticas (`<header>`, `<section>`, `<article>`, `<footer>`).
* **CSS3 Modular**: No escribimos todo en un archivo gigante. Cada sección tiene su propio archivo `.css`.
* **JavaScript Vanilla (ES6 Modules)**: Sin librerías ni frameworks externos.

---

## 📂 Organización de Archivos y Responsabilidades

Cada estudiante se encargará del diseño y maquetado de **una sección específica**.

| Sección | Responsable | Archivo CSS a editar | Bloque en `index.html` |
| :--- | :--- | :--- | :--- |
| **1. Header & Menú** | Estudiante 1 | `css/components/header.css` | `<!-- SECCIÓN 1: HEADER -->` |
| **2. Hero (Portada)** | Estudiante 2 | `css/components/hero.css` | `<!-- SECCIÓN 2: HERO -->` |
| **3. Sobre PRENDER** | Estudiante 3 | `css/components/sobre-nosotros.css` | `<!-- SECCIÓN 3: SOBRE PRENDER -->` |
| **4. Catálogo / Cards** | Estudiante 4 | `css/components/catalogo.css` | `<!-- SECCIÓN 4: CATÁLOGO -->` |
| **5. Testimonios** | Estudiante 5 | `css/components/testimonios.css` | `<!-- SECCIÓN 5: TESTIMONIOS -->` |
| **6. Formulario Sumate** | Estudiante 6 | `css/components/sumate.css` | `<!-- SECCIÓN 6: FORMULARIO SUMATE -->` |
| **7. Modal de Detalle** | Estudiante 7 | `css/components/modal-detalle.css` | `<!-- SECCIÓN 7: MODAL -->` |
| **8. Footer Institucional**| Estudiante 8 | `css/components/footer.css` | `<!-- SECCIÓN 8: FOOTER -->` |

> ⚠️ **REGLA DE ORO:** 
> - **SOLO edita tu archivo CSS asignado dentro de `css/components/`.**
> - Si necesitas cambiar algo del HTML, modifícalo **únicamente** dentro del bloque correspondiente a tu sección en `index.html`.
> - **NO modifiques** `css/variables.css` ni `css/base.css` sin consultarle antes al integrador.

---

## 🎨 Uso de Variables y Manual de Marca (Diseño Gráfico)

El curso de **Diseño Gráfico** está diseñando el Manual de Marca oficial. Para que la web se adapte automáticamente cuando lo entreguen, **está prohibido escribir colores fijos como `#ff6600` o `black` en tu CSS**. Siempre debes usar las variables definidas:

```css
/* ❌ NO HAGAS ESTO */
.mi-boton {
  background-color: #e65c00;
  color: white;
}

/* ✅ HACE ESTO */
.mi-boton {
  background-color: var(--color-primary);
  color: #ffffff;
  border-radius: var(--radius-sm);
  transition: var(--transition-normal);
}
```

### Variables disponibles principales:
* **Colores**: `var(--color-primary)`, `var(--color-secondary)`, `var(--color-accent)`, `var(--color-bg)`, `var(--color-surface)`, `var(--color-text-main)`, `var(--color-text-muted)`.
* **Espaciados**: `var(--spacing-xs)`, `var(--spacing-sm)`, `var(--spacing-md)`, `var(--spacing-lg)`, `var(--spacing-xl)`, `var(--spacing-2xl)`.
* **Bordes**: `var(--radius-sm)`, `var(--radius-md)`, `var(--radius-lg)`, `var(--radius-full)`.
* **Sombras**: `var(--shadow-sm)`, `var(--shadow-md)`, `var(--shadow-lg)`.

---

## 🏷️ Nomenclatura BEM para Evitar Conflictos

Para evitar que tu CSS afecte la sección de otro compañero, todas las clases deben usar el prefijo de tu sección:

* **Hero**: `.hero__title`, `.hero__description`, `.hero__actions`
* **Sobre Nosotros**: `.about__card`, `.about__card-title`, `.about__card-icon`
* **Catálogo**: `.catalogo__card`, `.catalogo__filter-btn`, `.catalogo__search-input`
* **Testimonios**: `.testimonios__card`, `.testimonios__quote`, `.testimonios__controls`
* **Formulario**: `.form__group`, `.form__label`, `.form__input`

Nunca uses clases genéricas como `.title`, `.boton`, `.card` o `.texto` sin prefijo.

---

## 📸 Fotografías de Productos (Curso de Fotografía)

Las fotos tomadas por el curso de fotografía se guardarán en:
`assets/images/emprendimientos/{id-emprendimiento}/`

* Formato recomendado: **WebP** o **JPG optimizado**.
* En CSS, asegura que las imágenes mantengan su proporción usando:
```css
.tu-imagen {
  width: 100%;
  height: 250px;
  object-fit: cover; /* Evita que la foto se deforme o estire */
}
```

---

## 🐙 Flujo de Trabajo con Git y GitHub

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/plataforma_prender.git
cd plataforma_prender
```

### 2. Crear tu propia rama de trabajo (NUNCA trabajes en `main`)
```bash
# Ejemplo si te tocó la sección Hero:
git checkout -b feature/seccion-hero

# Ejemplo si te tocó el Catálogo:
git checkout -b feature/seccion-catalogo
```

### 3. Probar en tu computadora
Abre la carpeta en VS Code y utiliza la extensión **Live Server** (clic derecho en `index.html` > *Open with Live Server*).

### 4. Guardar tus avances y subirlos
```bash
git status
git add .
git commit -m "feat(hero): maquetado de textos y botones responsivos"
git push origin feature/seccion-hero
```

### 5. Crear el Pull Request (PR)
1. Entra a GitHub en el repositorio.
2. Verás un cartel verde que dice **"Compare & pull request"**. Haz clic.
3. Explica qué cambios hiciste en tu sección y solicita la revisión al integrador del proyecto.

---

¡A prender los motores y éxitos con el desarrollo! 🔥
Cualquier duda, consultá con el integrador técnico de la plataforma.
