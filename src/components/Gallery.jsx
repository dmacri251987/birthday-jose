import { useState, useEffect, useCallback, useRef } from 'react';
import eventData from '../data/event';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Gallery.css';

/**
 * Gallery — Galería de fotos con grid asimétrico y lightbox.
 * 
 * Diseño masonry con CSS Grid: fotos 1, 4, 7 ocupan 2 filas.
 * Lightbox con navegación por teclado (Escape, flechas),
 * scroll lock y animaciones de apertura/cierre.
 */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());
  const titleRef = useScrollAnimation({ threshold: 0.2 });

  const fotos = eventData.fotos;
  const isLightboxActive = lightboxIndex !== null;

  /* ── Abrir lightbox ── */
  const openLightbox = (index) => {
    setLightboxIndex(index);
    // Pequeño delay para que la animación de entrada funcione
    requestAnimationFrame(() => setIsLightboxOpen(true));
  };

  /* ── Cerrar lightbox ── */
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    // Esperar a que termine la animación de salida
    setTimeout(() => setLightboxIndex(null), 300);
  }, []);

  /* ── Navegación entre fotos ── */
  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + fotos.length) % fotos.length : null));
  }, [fotos.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % fotos.length : null));
  }, [fotos.length]);

  /* ── Soporte de teclado ── */
  useEffect(() => {
    if (!isLightboxActive) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrev();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxActive, closeLightbox, goToPrev, goToNext]);

  /* ── Scroll lock del body cuando el lightbox está abierto ── */
  useEffect(() => {
    if (isLightboxActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxActive]);

  /* ── Manejo de error de carga de imagen ── */
  const handleImageError = (id) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  /* ── Swipe en móvil para el lightbox ── */
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipe = 50;

    if (Math.abs(diff) > minSwipe) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <section className="gallery" id="gallery" aria-label="Galería de fotos">
      {/* Título de sección */}
      <div className="gallery__header" ref={titleRef}>
        <div className="gallery__ornament animate-on-scroll" aria-hidden="true">
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
            <path d="M0 8 H30 M50 8 H80" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="8" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <h2 className="gallery__title animate-on-scroll delay-1">Momentos</h2>
        <p className="gallery__subtitle animate-on-scroll delay-2">
          Cada imagen cuenta una historia
        </p>
      </div>

      {/* Grid de fotos */}
      <div className="gallery__grid">
        {fotos.map((foto, index) => (
          <GalleryItem
            key={foto.id}
            foto={foto}
            index={index}
            isLarge={[0, 3, 6].includes(index)}
            failed={failedImages.has(foto.id)}
            onError={() => handleImageError(foto.id)}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxActive && (
        <div
          className={`gallery__lightbox ${isLightboxOpen ? 'gallery__lightbox--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${lightboxIndex + 1} de ${fotos.length}`}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botón cerrar */}
          <button
            className="gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar galería"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha anterior */}
          <button
            className="gallery__lightbox-nav gallery__lightbox-nav--prev"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            aria-label="Foto anterior"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Imagen */}
          <div
            className="gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {failedImages.has(fotos[lightboxIndex].id) ? (
              <div className="gallery__lightbox-fallback">
                <span className="gallery__lightbox-fallback-text">
                  {fotos[lightboxIndex].alt}
                </span>
              </div>
            ) : (
              <img
                src={fotos[lightboxIndex].src}
                alt={fotos[lightboxIndex].alt}
                className="gallery__lightbox-img"
              />
            )}
          </div>

          {/* Flecha siguiente */}
          <button
            className="gallery__lightbox-nav gallery__lightbox-nav--next"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Foto siguiente"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Contador */}
          <div className="gallery__lightbox-counter">
            {lightboxIndex + 1} / {fotos.length}
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * GalleryItem — Sub-componente para cada foto del grid.
 * Maneja su propia animación al scroll y fallback de error.
 */
function GalleryItem({ foto, index, isLarge, failed, onError, onClick }) {
  const itemRef = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  // Delay escalonado para animación de entrada
  const delayClass = `delay-${Math.min((index % 5) + 1, 5)}`;

  return (
    <div
      ref={itemRef}
      className={`gallery__item animate-on-scroll ${delayClass} ${isLarge ? 'gallery__item--large' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver ${foto.alt}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      {failed ? (
        <div className="gallery__fallback">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="gallery__fallback-text">{foto.alt}</span>
        </div>
      ) : (
        <img
          src={foto.src}
          alt={foto.alt}
          className="gallery__img"
          loading="lazy"
          onError={onError}
        />
      )}
      <div className="gallery__overlay" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      </div>
    </div>
  );
}
