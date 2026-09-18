import { useState, useEffect } from 'react';
import eventData from '../data/event';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Countdown.css';

/**
 * Calcula el tiempo restante hasta la fecha objetivo.
 * @param {string} targetDate - Fecha ISO string
 * @returns {{ days: number, hours: number, minutes: number, seconds: number, expired: boolean }}
 */
function getTimeRemaining(targetDate) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

/**
 * Countdown — Cuenta regresiva elegante hasta el día del evento.
 */
export default function Countdown() {
  const [time, setTime] = useState(() => getTimeRemaining(eventData.fecha));
  const sectionRef = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (time.expired) return;

    const interval = setInterval(() => {
      const remaining = getTimeRemaining(eventData.fecha);
      setTime(remaining);
      if (remaining.expired) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [time.expired]);

  const units = [
    { value: time.days, label: 'Días' },
    { value: time.hours, label: 'Horas' },
    { value: time.minutes, label: 'Minutos' },
    { value: time.seconds, label: 'Segundos' },
  ];

  return (
    <section
      id="countdown"
      className="countdown-section"
      aria-label="Cuenta regresiva"
    >
      <div className="countdown animate-on-scroll" ref={sectionRef}>
        {/* Título */}
        <h2 className="countdown__title">Faltan</h2>

        {time.expired ? (
          <div className="countdown__expired">
            <span className="countdown__expired-emoji" aria-hidden="true">🎉</span>
            <p className="countdown__expired-text">¡Hoy es el día!</p>
          </div>
        ) : (
          <div className="countdown__grid">
            {units.map((unit) => (
              <div key={unit.label} className="countdown__card">
                <span className="countdown__number">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="countdown__label">{unit.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Ornamento */}
        <div className="countdown__ornament" aria-hidden="true">
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
            <path d="M0 6 H22 M38 6 H60" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="30" cy="6" r="2.5" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
