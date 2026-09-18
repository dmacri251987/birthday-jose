import eventData from '../data/event';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './RSVP.css';

/**
 * RSVP — Sección de confirmación de asistencia.
 * Diseño emotivo con botón que abre el formulario de Google.
 */
export default function RSVP() {
  const containerRef = useScrollAnimation({ threshold: 0.15 });
  const decorRef = useScrollAnimation({ threshold: 0.1 });

  const handleConfirm = () => {
    if (eventData.googleFormUrl && !eventData.googleFormUrl.startsWith('[')) {
      window.open(eventData.googleFormUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="rsvp" id="rsvp" aria-label="Confirmar asistencia">
      {/* Decoración de fondo */}
      <div className="rsvp__bg" aria-hidden="true">
        <div className="rsvp__bg-circle rsvp__bg-circle--1" />
        <div className="rsvp__bg-circle rsvp__bg-circle--2" />
      </div>

      <div className="rsvp__container" ref={containerRef}>
        {/* Ornamento superior */}
        <div className="rsvp__ornament animate-on-scroll" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 8 C20 8, 12 2, 8 8 C4 14, 12 20, 20 28 C28 20, 36 14, 32 8 C28 2, 20 8, 20 8Z"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </div>

        {/* Título */}
        <h2 className="rsvp__title animate-on-scroll delay-1">
          ¿Nos acompañás?
        </h2>

        {/* Texto emotivo */}
        <p className="rsvp__text animate-on-scroll delay-2">
          Quiero compartir este momento tan especial con vos.
          Confirmá tu asistencia para que podamos esperarte.
        </p>

        {/* Botón de confirmación */}
        <div className="rsvp__btn-wrapper animate-on-scroll delay-3">
          <button
            className="btn btn-primary rsvp__btn"
            onClick={handleConfirm}
            aria-label="Confirmar asistencia abriendo el formulario"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            Confirmar Asistencia
          </button>
        </div>

        {/* Mensaje final */}
        <p className="rsvp__message animate-on-scroll delay-4" ref={decorRef}>
          {eventData.mensajeFinal}
        </p>

        {/* Ornamento inferior */}
        <div className="rsvp__ornament-bottom animate-on-scroll delay-5" aria-hidden="true">
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
            <path d="M0 8 H30 M50 8 H80" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="8" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
