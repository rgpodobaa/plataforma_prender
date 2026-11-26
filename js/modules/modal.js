/**
 * MÓDULO MODAL DETALLE DE EMPRENDIMIENTO
 * Gestiona la apertura, inyección dinámica de fotos e información,
 * enlaces directos a WhatsApp / Instagram, accesibilidad y cierre.
 */

let lastFocusedElement = null;

// Placeholder para fotos de galería en caso de no existir aún
function getGalleryPlaceholder(text, index) {
  const escapedText = text.replace(/[<>&"']/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;'
  })[character]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="100%" height="100%" fill="#cbd5e1"/><text x="50%" y="45%" font-family="sans-serif" font-size="22" font-weight="bold" fill="#334155" text-anchor="middle" dominant-baseline="middle">${escapedText}</text><text x="50%" y="58%" font-family="sans-serif" font-size="14" fill="#64748b" text-anchor="middle" dominant-baseline="middle">Imagen ${index + 1} no disponible</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function openModal(item) {
  const modal = document.getElementById('modal-detalle');
  if (!modal) return;

  lastFocusedElement = document.activeElement;

  // Referencias a elementos dentro del modal
  const titleEl = modal.querySelector('.modal__title');
  const catEl = modal.querySelector('.modal__category');
  const entrepreneurEl = modal.querySelector('.modal__entrepreneur');
  const descEl = modal.querySelector('.modal__desc');
  const mainImgEl = modal.querySelector('.modal__main-image');
  const thumbsContainer = modal.querySelector('.modal__thumbs');
  const whatsappBtn = modal.querySelector('.modal__btn-whatsapp');
  const instagramBtn = modal.querySelector('.modal__btn-instagram');
  const closeBtn = modal.querySelector('.modal__close');

  // Inyección de textos
  if (titleEl) titleEl.textContent = item.nombre;
  if (catEl) catEl.textContent = item.categoria;
  if (entrepreneurEl) entrepreneurEl.textContent = `Emprendedor/a: ${item.emprendedor}`;
  if (descEl) {
    descEl.textContent = item.descripcionLarga;
    descEl.scrollTop = 0;
  }

  // Lista unificada de fotos (principal + galería)
  const allPhotos = [item.fotoPrincipal, ...(item.galeria || [])];

  // Configurar imagen principal
  if (mainImgEl) {
    const mainPlaceholder = getGalleryPlaceholder(item.nombre, 0);
    mainImgEl.onerror = () => {
      mainImgEl.onerror = null;
      mainImgEl.src = mainPlaceholder;
    };
    mainImgEl.src = item.fotoPrincipal;
    mainImgEl.alt = `${item.nombre} - Foto de producto`;
  }

  // Configurar miniaturas interactivas
  if (thumbsContainer) {
    thumbsContainer.innerHTML = '';
    allPhotos.forEach((photoSrc, idx) => {
      const thumbPlaceholder = getGalleryPlaceholder(item.nombre, idx);
      const thumb = document.createElement('img');
      thumb.src = photoSrc;
      thumb.alt = `Foto ${idx + 1} de ${item.nombre}`;
      thumb.className = `modal__thumb ${idx === 0 ? 'modal__thumb--active' : ''}`;
      thumb.dataset.src = photoSrc;
      thumb.onerror = () => {
        thumb.onerror = null;
        thumb.src = thumbPlaceholder;
      };
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.modal__thumb').forEach(t => t.classList.remove('modal__thumb--active'));
        thumb.classList.add('modal__thumb--active');
        if (mainImgEl) {
          mainImgEl.onerror = () => {
            mainImgEl.onerror = null;
            mainImgEl.src = thumbPlaceholder;
          };
          mainImgEl.src = thumb.dataset.src;
        }
      });
      thumbsContainer.appendChild(thumb);
    });
  }

  // Enlaces de contacto
  if (whatsappBtn) {
    if (item.redes && item.redes.whatsapp) {
      const saludo = item.emprendedor ? `¡Hola ${item.emprendedor}!` : '¡Hola!';
      const msg = encodeURIComponent(`${saludo} Vi tu emprendimiento "${item.nombre}" en la plataforma PRENDER del CFP408 y me gustaría hacerte una consulta.`);
      whatsappBtn.href = `https://wa.me/${item.redes.whatsapp}?text=${msg}`;
      whatsappBtn.style.display = 'inline-flex';
    } else {
      whatsappBtn.style.display = 'none';
    }
  }

  if (instagramBtn) {
    if (item.redes && item.redes.instagram) {
      instagramBtn.href = `https://instagram.com/${item.redes.instagram}`;
      instagramBtn.style.display = 'inline-flex';
    } else {
      instagramBtn.style.display = 'none';
    }
  }

  // Mostrar modal, actualizar ARIA y enfocar botón de cierre
  modal.classList.add('modal--active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (closeBtn) closeBtn.focus();
}

export function closeModal() {
  const modal = document.getElementById('modal-detalle');
  if (!modal) return;
  modal.classList.remove('modal--active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

export function initModal() {
  const modal = document.getElementById('modal-detalle');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal__close');
  const backdrop = modal.querySelector('.modal__backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Cerrar con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });
}
