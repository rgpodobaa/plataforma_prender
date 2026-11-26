# 🔥 PRENDER - Plataforma de Emprendimientos (CFP N° 408)

> **Plataforma web colaborativa para visibilizar, potenciar y conectar los emprendimientos de estudiantes y egresados del Centro de Formación Profesional N° 408.**

---

## 🌟 Contexto del Proyecto

PRENDER es un proyecto interdisciplinario desarrollado en el **CFP408** con la participación articulada de tres cursos:
1. **💻 Diseño de Páginas Web**: Arquitectura de software, maquetado semántico, interactividad y desarrollo colaborativo en GitHub.
2. **🎨 Diseño Gráfico**: Identidad visual corporativa, logotipo y manual de marca oficial.
3. **📸 Curso de Fotografía**: Cobertura fotográfica profesional de los productos y talleres de cada emprendimiento.

---

## 🛠️ Tecnologías y Arquitectura

* **HTML5 Semántico**: Accesibilidad, estructura limpia por secciones independientes.
* **CSS3 Modular & Design Tokens**: Sistema desacoplado con variables (`css/variables.css`) listo para adoptar la paleta y tipografías del manual de marca sin refactorizar. Metodología **BEM**.
* **JavaScript Vanilla (ES6 Modules)**: Sin dependencias externas ni frameworks, garantizando compatibilidad y aprendizaje puro:
  * Renderizado reactivo de tarjetas de catálogo.
  * Buscador en tiempo real por palabras clave.
  * Filtros por rubros profesionales.
  * Ventana modal interactiva con galería de fotos y contacto directo por WhatsApp/Instagram.
  * Carrusel de testimonios con avance automático, controles manuales y pausa.
  * Validación y captura de datos en el formulario de convocatoria.

---

## 📂 Estructura del Proyecto

```
plataforma_prender/
├── index.html                   # Documento principal orquestado
├── README.md                    # Descripción general
│
├── assets/
│   ├── brand/                   # Insumos de Diseño Gráfico (logos, manual de marca)
│   ├── images/
│   │   ├── ui/                  # Fondos y banners
│   │   └── emprendimientos/     # Insumos del Curso de Fotografía
│   └── icons/                   # Iconografía SVG
│
├── css/
│   ├── variables.css            # Design tokens (colores, fuentes, espaciados)
│   ├── base.css                 # Reset, layout y estilos globales
│   ├── styles.css               # Hoja de estilos centralizadora
│   └── components/              # 1 ARCHIVO CSS POR ESTUDIANTE / SECCIÓN
│       ├── header.css
│       ├── hero.css
│       ├── sobre-nosotros.css
│       ├── catalogo.css
│       ├── testimonios.css
│       ├── modal-detalle.css
│       ├── sumate.css
│       └── footer.css
│
├── js/
│   ├── data/
│   │   └── emprendimientos.js   # Base de datos local (20+ emprendimientos MVP)
│   ├── modules/
│   │   ├── navigation.js        # Menú móvil responsivo y navegación suave
│   │   ├── catalogo.js          # Grilla dinámica, buscador y filtros
│   │   ├── testimonios.js       # Carrusel accesible de testimonios
│   │   ├── modal.js             # Ficha de detalle, galería e inyección de WhatsApp
│   │   └── form.js              # Validación del formulario de inscripción
│   └── main.js                  # Entrypoint de JavaScript
│
└── docs/
    └── GUIA_ESTUDIANTES.md      # Guía para el equipo de alumnos (Git, BEM, reglas)
```

---

## 👥 Guía para Alumnos y Flujo de Trabajo

Para conocer las reglas de asignación de secciones, convenciones de nombres BEM y el flujo de ramas en GitHub, consulta la [Guía de Desarrollo para Estudiantes](docs/GUIA_ESTUDIANTES.md).

---

## 🚀 Cómo Ejecutar Localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/plataforma_prender.git
   cd plataforma_prender
   ```
2. Abrir con **Live Server** en VS Code o servir con cualquier servidor estático local (requerido para soportar `ES6 Modules`).
