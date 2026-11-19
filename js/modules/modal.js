/**
 * MÓDULO MODAL DETALLE DE EMPRENDIMIENTO
 * Gestiona la apertura, inyección dinámica de fotos e información,
 * enlaces directos a WhatsApp / Instagram, y cierre.
 */

// Placeholder para fotos de galería en caso de no existir aún
function getGalleryPlaceholder(text, index) {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="100%" height="100%" fill="%23cbd5e1"/><text x="50%" y="45%" font-family="sans-serif" font-size="22" font-weight="bold" fill="%23334155" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(text)}</text><text x="50%" y="58%" font-family="sans-serif" font-size="14" fill="%2364748b" text-anchor="middle" dominant-baseline="middle">Foto ${index + 1} • Curso de Fotografía</text></svg>`;
}

export function openModal(item) {
  const modal = document.getElementById('modal-detalle');
  if (!modal) return;

  // Referencias a elementos dentro del modal
  const titleEl = modal.querySelector('.modal__title');
  const catEl = modal.querySelector('.modal__category');
  const entrepreneurEl = modal.querySelector('.modal__entrepreneur');
  const courseEl = modal.querySelector('.modal__course');
  const descEl = modal.querySelector('.modal__desc');
  const mainImgEl = modal.querySelector('.modal__main-image');
  const thumbsContainer = modal.querySelector('.modal__thumbs');
  const whatsappBtn = modal.querySelector('.modal__btn-whatsapp');
  const instagramBtn = modal.querySelector('.modal__btn-instagram');

  // Inyección de textos
  if (titleEl) titleEl.textContent = item.nombre;
  if (catEl) catEl.textContent = item.categoria;
  if (entrepreneurEl) entrepreneurEl.textContent = `Emprendedor/a: ${item.emprendedor}`;
  if (courseEl) courseEl.textContent = `Egresado/a de: ${item.cursoRealizado} (CFP408)`;
  if (descEl) descEl.textContent = item.descripcionLarga;

  // Lista unificada de fotos (principal + galería)
  const allPhotos = [item.fotoPrincipal, ...(item.galeria || [])];

  // Configurar imagen principal
  if (mainImgEl) {
    const mainPlaceholder = getGalleryPlaceholder(item.nombre, 0);
    mainImgEl.src = item.fotoPrincipal;
    mainImgEl.alt = `${item.nombre} - Foto de producto`;
    mainImgEl.onerror = () => { mainImgEl.src = mainPlaceholder; };
  }

  // Configurar miniaturas interactivas
  if (thumbsContainer) {
    thumbsContainer.innerHTML = allPhotos.map((photoSrc, idx) => {
      const thumbPlaceholder = getGalleryPlaceholder(item.nombre, idx);
      return `
        <img 
          src="${photoSrc}" 
          alt="Miniatura ${idx + 1}" 
          class="modal__thumb ${idx === 0 ? 'modal__thumb--active' : ''}"
          data-src="${photoSrc}"
          onerror="this.onerror=null; this.src='${thumbPlaceholder}';"
        >
      `;
    }).join('');

    // Evento para cambiar la foto principal al hacer clic en una miniatura
    thumbsContainer.querySelectorAll('.modal__thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.modal__thumb').forEach(t => t.classList.remove('modal__thumb--active'));
        thumb.classList.add('modal__thumb--active');
        if (mainImgEl) {
          mainImgEl.src = thumb.src;
        }
      });
    });
  }

  // Enlaces de contacto
  if (whatsappBtn) {
    if (item.redes && item.redes.whatsapp) {
      const msg = encodeURIComponent(`¡Hola ${item.emprendedor}! Vi tu emprendimiento "${item.nombre}" en la plataforma PRENDER del CFP408 y me gustaría hacerte una consulta.`);
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

  // Mostrar modal y bloquear scroll del body
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  const modal = document.getElementById('modal-detalle');
  if (!modal) return;
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
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
