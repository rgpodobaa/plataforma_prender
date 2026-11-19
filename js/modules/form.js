/**
 * MÓDULO FORMULARIO DE CONVOCATORIA ("Sumá tu Emprendimiento")
 * Valida los campos del formulario HTML y muestra estado de envío.
 */

export function initForm() {
  const form = document.getElementById('sumate-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.elements['nombre'] ? form.elements['nombre'].value.trim() : '';
    const emprendimiento = form.elements['emprendimiento'] ? form.elements['emprendimiento'].value.trim() : '';
    const curso = form.elements['curso'] ? form.elements['curso'].value : '';
    const categoria = form.elements['categoria'] ? form.elements['categoria'].value : '';
    const telefono = form.elements['telefono'] ? form.elements['telefono'].value.trim() : '';
    const descripcion = form.elements['descripcion'] ? form.elements['descripcion'].value.trim() : '';

    if (!nombre || !emprendimiento || !curso || !categoria || !telefono) {
      showFeedback('Por favor, completa todos los campos obligatorios (*).', 'error');
      return;
    }

    // Feedback positivo y reseteo de campos
    showFeedback(`¡Muchas gracias ${nombre}! Tu postulación para "${emprendimiento}" fue recibida con éxito. El equipo del CFP408 se contactará con vos.`, 'success');
    form.reset();
  });

  function showFeedback(message, type) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = 'form__feedback';
    feedback.classList.add(`form__feedback--${type}`);
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
