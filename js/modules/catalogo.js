/**
 * MÓDULO CATÁLOGO Y FILTROS
 * Renderiza dinámicamente las tarjetas de emprendimientos,
 * genera botones de categorías y filtra en tiempo real.
 */

import { emprendimientos } from '../data/emprendimientos.js';
import { openModal } from './modal.js';

// Generador de imagen placeholder SVG si la foto aún no fue tomada/subida
function getPlaceholderImage(text, category) {
  const bgColors = {
    'Gastronomía': '%23ea580c',
    'Carpintería': '%23854d0e',
    'Textil': '%230284c7',
    'Electricidad': '%23ca8a04',
    'Belleza': '%23db2777',
    'Informática': '%234f46e5',
    'Herrería': '%23475569',
    'Jardinería': '%2316a34a',
    'Diseño': '%239333ea'
  };
  const bg = bgColors[category] || '%23e65c00';
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="${bg}"/><text x="50%" y="45%" font-family="sans-serif" font-size="28" font-weight="bold" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(text)}</text><text x="50%" y="60%" font-family="sans-serif" font-size="16" fill="%23f1f5f9" text-anchor="middle" dominant-baseline="middle">PRENDER • CFP408</text></svg>`;
}

export function initCatalogo() {
  const gridContainer = document.getElementById('catalogo-grid');
  const filtersContainer = document.getElementById('catalogo-filters');
  const searchInput = document.getElementById('catalogo-search');

  if (!gridContainer) return;

  let activeCategory = 'Todos';
  let searchTerm = '';

  // 1. Obtener lista única de categorías y sincronizar métricas del Hero
  const categories = ['Todos', ...new Set(emprendimientos.map(item => item.categoria))];
  const statEmprendimientos = document.getElementById('stat-emprendimientos');
  const statRubros = document.getElementById('stat-rubros');

  if (statEmprendimientos) {
    statEmprendimientos.textContent = `+${emprendimientos.length}`;
  }
  if (statRubros) {
    statRubros.textContent = String(categories.length - 1);
  }

  // 2. Renderizar botones de filtro
  if (filtersContainer) {
    filtersContainer.innerHTML = categories.map(cat => `
      <button 
        type="button" 
        class="catalogo__filter-btn ${cat === 'Todos' ? 'catalogo__filter-btn--active' : ''}" 
        data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    filtersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.catalogo__filter-btn');
      if (!btn) return;

      document.querySelectorAll('.catalogo__filter-btn').forEach(b => b.classList.remove('catalogo__filter-btn--active'));
      btn.classList.add('catalogo__filter-btn--active');

      activeCategory = btn.dataset.category;
      applyFilters();
    });
  }

  // 3. Escuchar búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // 4. Filtrar y renderizar
  function applyFilters() {
    const filtered = emprendimientos.filter(item => {
      const matchCategory = (activeCategory === 'Todos') || (item.categoria === activeCategory);
      const matchSearch = 
        item.nombre.toLowerCase().includes(searchTerm) ||
        item.descripcionCorta.toLowerCase().includes(searchTerm) ||
        item.emprendedor.toLowerCase().includes(searchTerm) ||
        item.categoria.toLowerCase().includes(searchTerm);

      return matchCategory && matchSearch;
    });

    renderCards(filtered);
  }

  // 5. Generar HTML de las tarjetas
  function renderCards(items) {
    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="catalogo__empty">
          <p>🔍 No se encontraron emprendimientos que coincidan con tu búsqueda.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = items.map(item => {
      const placeholder = getPlaceholderImage(item.nombre, item.categoria);
      return `
        <article class="catalogo__card" data-id="${item.id}">
          <div class="catalogo__card-header">
            <img 
              src="${item.fotoPrincipal}" 
              alt="${item.nombre} - ${item.categoria}" 
              class="catalogo__card-img"
              loading="lazy"
              onerror="this.onerror=null; this.src='${placeholder}';"
            >
            <span class="catalogo__card-category">${item.categoria}</span>
          </div>
          <div class="catalogo__card-body">
            <h3 class="catalogo__card-title">${item.nombre}</h3>
            <p class="catalogo__card-author">Por ${item.emprendedor}</p>
            <p class="catalogo__card-desc">${item.descripcionCorta}</p>
            <div class="catalogo__card-footer">
              <button type="button" class="btn btn--primary catalogo__card-btn js-open-modal" data-id="${item.id}">
                Ver Detalles y Contacto
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Asignar eventos de apertura de modal a los botones
    gridContainer.querySelectorAll('.js-open-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const selected = emprendimientos.find(e => e.id === id);
        if (selected) {
          openModal(selected);
        }
      });
    });
  }

  // Render inicial
  renderCards(emprendimientos);
}
