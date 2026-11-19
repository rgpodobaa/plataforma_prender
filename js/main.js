/**
 * MAIN ENTRYPOINT - PLATAFORMA PRENDER (CFP408)
 * Inicializa todos los módulos una vez cargado el DOM.
 */

import { initNavigation } from './modules/navigation.js';
import { initCatalogo } from './modules/catalogo.js';
import { initModal } from './modules/modal.js';
import { initForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes interactivos
  initNavigation();
  initModal();
  initCatalogo();
  initForm();

  // Actualizar automáticamente el año en el footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  console.log('🚀 Plataforma PRENDER (CFP408) inicializada correctamente.');
});
