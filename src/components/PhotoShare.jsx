import eventData from "../data/event";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./PhotoShare.css";

/**
 * PhotoShare — Sección de código QR para compartir fotos del evento.
 *
 * Muestra un QR generado dinámicamente (API de QR Server) que apunta
 * a la carpeta de Google Drive donde los invitados pueden subir sus fotos.
 * Incluye un enlace alternativo para quienes no pueden escanear el QR.
 */
export default function PhotoShare() {
  const containerRef = useScrollAnimation({ threshold: 0.15 });

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(eventData.fotosDriveUrl)}&color=2C2C2C&bgcolor=FFFEF9&margin=10`;

  return (
    <section className="photo-share" aria-label="Compartir fotos">
      <div className="photo-share__container animate-on-scroll" ref={containerRef}>
        {/* Ícono de cámara elegante */}
        <div className="photo-share__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Cuerpo de la cámara */}
            <rect
              x="6"
              y="16"
              width="36"
              height="24"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Lente exterior */}
            <circle
              cx="24"
              cy="28"
              r="7"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Lente interior */}
            <circle
              cx="24"
              cy="28"
              r="3.5"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
            />
            {/* Flash / visor superior */}
            <path
              d="M17 16 L19 10 H29 L31 16"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Botón de disparo */}
            <circle cx="35" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        {/* Título */}
        <h2 className="photo-share__title">Fotos del Evento</h2>

        {/* Mensaje principal */}
        <p className="photo-share__message">{eventData.fotosMensaje}</p>

        {/* Código QR */}
        <div className="photo-share__qr-wrapper">
          <img
            src={qrUrl}
            alt="Código QR para subir fotos al Google Drive del evento"
            className="photo-share__qr-img"
            width="200"
            height="200"
            loading="lazy"
          />
        </div>

        {/* Texto descriptivo debajo del QR */}
        <p className="photo-share__qr-text">
          Escaneá el QR para subir tus fotos
        </p>

        {/* Link alternativo para mobile */}
        <a
          href={eventData.fotosDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline photo-share__link"
        >
          O tocá acá para subir fotos
        </a>

        {/* Ornamento decorativo */}
        <div className="photo-share__ornament" aria-hidden="true">
          <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
            <path
              d="M0 6 H30 M50 6 H80"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M36 6 L40 2 L44 6 L40 10 Z"
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
