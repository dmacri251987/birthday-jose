import eventData from "../data/event";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./RSVP.css";

/**
 * RSVP — Sección de confirmación de asistencia.
 * Diseño emotivo con botón que abre el formulario de Google.
 */
export default function RSVP() {
  const containerRef = useScrollAnimation({ threshold: 0.15 });

  const handleConfirm = () => {
    if (eventData.googleFormUrl && !eventData.googleFormUrl.startsWith("[")) {
      window.open(eventData.googleFormUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="rsvp" id="rsvp" aria-label="Confirmar asistencia">
      {/* Decoración de fondo */}
      <div className="rsvp__bg" aria-hidden="true">
        <div className="rsvp__bg-circle rsvp__bg-circle--1" />
        <div className="rsvp__bg-circle rsvp__bg-circle--2" />
      </div>

      <div className="rsvp__container animate-on-scroll" ref={containerRef}>
        {/* Ornamento superior */}
        <div className="rsvp__ornament" aria-hidden="true">
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
        <h2 className="rsvp__title">¿Venís a mi fiesta?</h2>

        {/* Texto emotivo */}
        <p className="rsvp__text">
          Quiero que estés, así que no te cuelgues y confirmame. ¡Te espero! 🤍
        </p>

        {/* Botón de confirmación */}
        <div className="rsvp__btn-wrapper">
          <button
            className="btn btn-primary rsvp__btn"
            onClick={handleConfirm}
            aria-label="Confirmar asistencia abriendo el formulario"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            Confirmar Asistencia
          </button>
        </div>

        {/* Ornamento inferior */}
        <div className="rsvp__ornament-bottom" aria-hidden="true">
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
            <path
              d="M0 8 H30 M50 8 H80"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="40"
              cy="8"
              r="3"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
