import eventData from '../data/event';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Footer.css';

/**
 * Footer — Cierre emotivo y elegante de la invitación.
 * 
 * Incluye mensaje final, firma con tipografía manuscrita,
 * decoraciones SVG sutiles y la fecha como cierre.
 */
export default function Footer() {
  const containerRef = useScrollAnimation({ threshold: 0.15 });
  const signatureRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="footer" aria-label="Cierre de la invitación">
      {/* Separador ornamental superior */}
      <div className="footer__separator" aria-hidden="true">
        <svg width="200" height="24" viewBox="0 0 200 24" fill="none">
          <path d="M0 12 H70" stroke="currentColor" strokeWidth="0.5" />
          <path d="M130 12 H200" stroke="currentColor" strokeWidth="0.5" />
          {/* Diamante central */}
          <path d="M90 12 L100 4 L110 12 L100 20 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          {/* Puntos decorativos */}
          <circle cx="80" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="120" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="footer__content" ref={containerRef}>
        {/* Decoraciones de estrellas */}
        <div className="footer__stars" aria-hidden="true">
          <Star className="footer__star footer__star--1" size={12} />
          <Star className="footer__star footer__star--2" size={8} />
          <Star className="footer__star footer__star--3" size={10} />
          <Star className="footer__star footer__star--4" size={6} />
          <Star className="footer__star footer__star--5" size={9} />
        </div>

        {/* Mensaje principal */}
        <p className="footer__message animate-on-scroll">
          {eventData.mensajeFinal}
        </p>

        {/* Firma */}
        <div className="footer__signature" ref={signatureRef}>
          <span className="footer__name animate-on-scroll delay-2">
            {eventData.nombre.split(' ')[0]}
          </span>
          <span className="footer__heart animate-on-scroll delay-3" aria-hidden="true">
            ♡
          </span>
        </div>

        {/* Fecha de cierre */}
        <p className="footer__date animate-on-scroll delay-4">
          {eventData.fechaDisplay}
        </p>
      </div>
    </footer>
  );
}

/**
 * Star — SVG de estrella decorativa pequeña.
 */
function Star({ className, size = 10 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.18 19 12 15.27 7.82 19l1.09-6.26L3.82 9l6.09-.74L12 2z" />
    </svg>
  );
}
