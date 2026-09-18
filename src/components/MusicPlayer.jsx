import { useState, useRef, useEffect } from 'react';
import eventData from '../data/event';
import './MusicPlayer.css';

/**
 * MusicPlayer — Botón flotante para controlar la música de fondo.
 * 
 * Se ubica fijo en la esquina inferior derecha. No se auto-reproduce
 * (los navegadores bloquean autoplay con sonido).
 * Muestra animación de pulso cuando la música está sonando.
 */
export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  /* ── Toggle play/pause ── */
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // El navegador puede bloquear la reproducción
        setIsPlaying(false);
      });
    }
  };

  /* ── Sincronizar estado si el audio termina ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  /* ── Cleanup al desmontar: detener audio ── */
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      {/* Elemento de audio oculto */}
      <audio ref={audioRef} src={eventData.musica} preload="none" loop />

      {/* Botón flotante */}
      <button
        className={`music-player ${isPlaying ? 'music-player--playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        title={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {/* Ondas de sonido animadas (visibles cuando suena) */}
        <span className="music-player__waves" aria-hidden="true">
          <span className="music-player__wave music-player__wave--1" />
          <span className="music-player__wave music-player__wave--2" />
          <span className="music-player__wave music-player__wave--3" />
        </span>

        {/* Icono: nota musical o pausa */}
        <span className="music-player__icon" aria-hidden="true">
          {isPlaying ? (
            /* Icono de pausa */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* Icono de nota musical */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" fill="currentColor" />
              <circle cx="18" cy="16" r="3" fill="currentColor" />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}
