/**
 * MÓDULO DE NAVEGACIÓN
 * Maneja el menú responsivo móvil y el scroll suave.
 */

export function initNavigation() {
  const toggleBtn = document.querySelector('.header__toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar menú al hacer click en cualquier enlace en móviles
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
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
