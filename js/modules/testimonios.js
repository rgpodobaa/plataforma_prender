/**
 * MÓDULO DEL CARRUSEL DE TESTIMONIOS
 * Controla el avance automático y manual de las tarjetas.
 */

export function initTestimonios() {
  const carousel = document.getElementById('testimonios-carousel');
  if (!carousel) return;

  const viewport = carousel.querySelector('.testimonios__viewport');
  const track = carousel.querySelector('.testimonios__track');
  const previousButton = carousel.querySelector('[data-testimonios-prev]');
  const nextButton = carousel.querySelector('[data-testimonios-next]');
  const toggleButton = carousel.querySelector('[data-testimonios-toggle]');

  if (!viewport || !track || !previousButton || !nextButton || !toggleButton) return;

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let autoplayEnabled = !motionPreference.matches;
  let pointerInside = false;
  let focusInside = false;
  let timer = null;

  const updateToggleButton = () => {
    toggleButton.setAttribute('aria-label', autoplayEnabled ? 'Pausar carrusel' : 'Reanudar carrusel');
    toggleButton.setAttribute('aria-pressed', String(!autoplayEnabled));
  };

  const clearTimer = () => {
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
  };

  const scheduleNext = () => {
    clearTimer();
    if (!autoplayEnabled || pointerInside || focusInside || document.hidden) return;

    timer = window.setTimeout(() => {
      move(1);
      scheduleNext();
    }, 6000);
  };

  const getStep = () => {
    const firstCard = track.firstElementChild;
    if (!firstCard) return 0;

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  function move(direction) {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (maxScroll <= 1) return;

    const atStart = viewport.scrollLeft <= 1;
    const step = getStep();
    const atEnd = maxScroll - viewport.scrollLeft <= step / 2;
    const behavior = motionPreference.matches ? 'auto' : 'smooth';

    if (direction > 0 && atEnd) {
      viewport.scrollTo({ left: 0, behavior });
    } else if (direction < 0 && atStart) {
      viewport.scrollTo({ left: maxScroll, behavior });
    } else {
      viewport.scrollBy({ left: step * direction, behavior });
    }
  }

  previousButton.addEventListener('click', () => {
    move(-1);
    scheduleNext();
  });

  nextButton.addEventListener('click', () => {
    move(1);
    scheduleNext();
  });

  toggleButton.addEventListener('click', () => {
    autoplayEnabled = !autoplayEnabled;
    updateToggleButton();
    scheduleNext();
  });

  carousel.addEventListener('mouseenter', () => {
    pointerInside = true;
    clearTimer();
  });

  carousel.addEventListener('mouseleave', () => {
    pointerInside = false;
    scheduleNext();
  });

  carousel.addEventListener('focusin', () => {
    focusInside = true;
    clearTimer();
  });

  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) {
      focusInside = false;
      scheduleNext();
    }
  });

  document.addEventListener('visibilitychange', scheduleNext);

  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      autoplayEnabled = false;
      updateToggleButton();
    }
    scheduleNext();
  });

  updateToggleButton();
  scheduleNext();
}
