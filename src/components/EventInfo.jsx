import eventData from '../data/event';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './EventInfo.css';

/**
 * EventInfo — Detalles del evento: horario, lugar y dirección.
 * Cada dato se presenta en una card con icono SVG.
 */
export default function EventInfo() {
  const titleRef = useScrollAnimation();
  const ornamentRef = useScrollAnimation();
  const dateRef = useScrollAnimation({ threshold: 0.2 });
  const card1Ref = useScrollAnimation({ threshold: 0.2 });
  const card2Ref = useScrollAnimation({ threshold: 0.2 });
  const card3Ref = useScrollAnimation({ threshold: 0.2 });
  const btnRef = useScrollAnimation({ threshold: 0.2 });

  const handleMapsClick = () => {
    if (eventData.googleMapsUrl && !eventData.googleMapsUrl.startsWith('[')) {
      window.open(eventData.googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="event-info" id="event-info" aria-label="Detalles del evento">
      <div className="event-info__container">
        {/* Título */}
        <h2 className="event-info__title" ref={titleRef}>
          <span className="animate-on-scroll">Detalles del Evento</span>
        </h2>

        {/* Ornamento */}
        <div className="event-info__ornament" ref={ornamentRef} aria-hidden="true">
          <svg width="100" height="16" viewBox="0 0 100 16" fill="none" className="animate-on-scroll">
            <path d="M0 8 H38 M62 8 H100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M44 8 L50 2 L56 8 L50 14 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        {/* Fecha destacada */}
        <div className="event-info__date-block animate-on-scroll" ref={dateRef}>
          <span className="event-info__date-day">{eventData.fechaDia}</span>
          <span className="event-info__date-month">{eventData.fechaMes}</span>
          <span className="event-info__date-year">{eventData.fechaAnio}</span>
        </div>

        {/* Cards de información */}
        <div className="event-info__cards">
          {/* Horario */}
          <div className="event-info__card animate-on-scroll" ref={card1Ref}>
            <div className="event-info__card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="event-info__card-content">
              <h3 className="event-info__card-title">Horario</h3>
              <p className="event-info__card-text">{eventData.horario}</p>
            </div>
          </div>

          {/* Lugar */}
          <div className="event-info__card animate-on-scroll" ref={card2Ref}>
            <div className="event-info__card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="event-info__card-content">
              <h3 className="event-info__card-title">Lugar</h3>
              <p className="event-info__card-text">{eventData.lugar}</p>
            </div>
          </div>

          {/* Dirección */}
          <div className="event-info__card animate-on-scroll" ref={card3Ref}>
            <div className="event-info__card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
                <path d="M9 3v15M15 6v15" />
              </svg>
            </div>
            <div className="event-info__card-content">
              <h3 className="event-info__card-title">Dirección</h3>
              <p className="event-info__card-text">{eventData.direccion}</p>
            </div>
          </div>
        </div>

        {/* Botón Cómo llegar */}
        <div className="event-info__btn-wrapper animate-on-scroll" ref={btnRef}>
          <button
            className="btn btn-outline event-info__btn"
            onClick={handleMapsClick}
            aria-label="Abrir ubicación en Google Maps"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Cómo llegar
          </button>
        </div>
      </div>
    </section>
  );
}
