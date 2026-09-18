import { useEffect, useState } from 'react';
import eventData from '../data/event';
import './Hero.css';

/**
 * Hero — Pantalla de bienvenida a pantalla completa.
 * Muestra el nombre con tipografía script, título y fecha
 * con animaciones de entrada escalonadas.
 */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Disparar animaciones de entrada tras montar
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('countdown');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" aria-label="Bienvenida">
      {/* Decoraciones de fondo */}
      <div className="hero__bg-decoration" aria-hidden="true">
        <div className="hero__circle hero__circle--1" />
        <div className="hero__circle hero__circle--2" />
        <div className="hero__circle hero__circle--3" />
      </div>

      {/* Contenido principal */}
      <div className="hero__content">
        {/* Ornamento superior */}
        <div className={`hero__ornament-top ${loaded ? 'hero__ornament-top--visible' : ''}`}>
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none" aria-hidden="true">
            <path d="M0 12 H45 M75 12 H120" stroke="currentColor" strokeWidth="0.5" />
            <path d="M52 12 L60 4 L68 12 L60 20 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        {/* Nombre principal */}
        <h1 className={`hero__name ${loaded ? 'hero__name--visible' : ''}`}>
          {eventData.nombre}
        </h1>

        {/* Subtítulo */}
        <p className={`hero__subtitle ${loaded ? 'hero__subtitle--visible' : ''}`}>
          {eventData.titulo}
        </p>

        {/* Fecha */}
        <div className={`hero__date ${loaded ? 'hero__date--visible' : ''}`}>
          <span className="hero__date-line" aria-hidden="true" />
          <span className="hero__date-text">{eventData.fechaDisplay}</span>
          <span className="hero__date-line" aria-hidden="true" />
        </div>

        {/* Ornamento inferior */}
        <div className={`hero__ornament-bottom ${loaded ? 'hero__ornament-bottom--visible' : ''}`}>
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none" aria-hidden="true">
            <path d="M0 8 H30 M50 8 H80" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="8" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>

      {/* Botón scroll hacia abajo */}
      <button
        className={`hero__scroll-btn ${loaded ? 'hero__scroll-btn--visible' : ''}`}
        onClick={handleScrollDown}
        aria-label="Desplazar hacia abajo"
      >
        <span className="hero__scroll-text">Descubrir</span>
        <svg
          className="hero__scroll-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </button>
    </section>
  );
}
