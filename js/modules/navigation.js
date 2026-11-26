/**
 * MÓDULO DE NAVEGACIÓN
 * Maneja el menú responsivo móvil, estado activo al navegar y scroll suave.
 */

export function initNavigation() {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.header__toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

  const setActiveLink = (sectionId) => {
    navLinks.forEach(link => {
      const isMatch = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('nav__link--active', isMatch);
    });
  };

  if (toggleBtn && nav) {
    const closeMenu = () => {
      nav.classList.remove('nav--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    };

    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      toggleBtn.setAttribute(
        'aria-label',
        isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
      );
    });

    // Cerrar menú al hacer click en cualquier enlace en móviles
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Cerrar menú con Escape
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('nav--open')) {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Cerrar menú al hacer click fuera del header
    document.addEventListener('click', event => {
      if (
        nav.classList.contains('nav--open') &&
        header &&
        !header.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Cerrar menú si se ensancha la pantalla a escritorio
    const desktopQuery = window.matchMedia('(min-width: 821px)');
    desktopQuery.addEventListener('change', event => {
      if (event.matches && nav.classList.contains('nav--open')) {
        closeMenu();
      }
    });
  }

  // Resaltar enlace activo al scrollear por secciones
  const observedSections = Array.from(navLinks)
    .map(link => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if (observedSections.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    observedSections.forEach(section => observer.observe(section));
  }

  // Scroll suave al hacer click en enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        if (this.classList.contains('nav__link')) {
          setActiveLink(targetElement.id);
        }
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
