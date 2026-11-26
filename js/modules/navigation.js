/**
 * MÓDULO DE NAVEGACIÓN
 * Maneja el menú responsivo móvil y el scroll suave.
 */

export function initNavigation() {
  const toggleBtn = document.querySelector('.header__toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

  if (toggleBtn && nav) {
    const closeMenu = () => {
      nav.classList.remove('nav--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    };

    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.setAttribute(
        'aria-label',
        isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
      );
    });

    // Cerrar menú al hacer click en cualquier enlace en móviles
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('nav--open')) {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  // Scroll suave al hacer click en enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
