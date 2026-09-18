import useScrollAnimation from "../hooks/useScrollAnimation";
import "./DressCode.css";

/**
 * DressCode — Sección de código de vestimenta.
 * Muestra el dress code "Elegante Sport" con un diseño minimalista y elegante,
 * ícono SVG sutil y animación de entrada al scroll.
 */
export default function DressCode() {
  const containerRef = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="dress-code" aria-label="Código de vestimenta">
      <div
        className="dress-code__container animate-on-scroll"
        ref={containerRef}
      >
        {/* Ícono SVG elegante — vestido de noche estilizado */}
        <div className="dress-code__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Percha / hombros */}
            <path
              d="M18 10 C18 6, 21 4, 24 4 C27 4, 30 6, 30 10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cuello */}
            <path
              d="M20 10 L24 14 L28 10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cuerpo del vestido */}
            <path
              d="M19 14 C18 20, 16 26, 14 34 C14 36, 16 38, 24 38 C32 38, 34 36, 34 34 C32 26, 30 20, 29 14"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cintura */}
            <path
              d="M19 22 C21 23, 27 23, 29 22"
              stroke="currentColor"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            {/* Detalle brillo */}
            <circle cx="24" cy="18" r="0.8" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        {/* Título */}
        <h2 className="dress-code__title">Dress Code</h2>

        {/* Texto principal */}
        <p className="dress-code__text">Elegante Sport</p>

        {/* Ornamento decorativo */}
        <div className="dress-code__ornament" aria-hidden="true">
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
