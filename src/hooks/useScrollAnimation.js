import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para detectar cuando un elemento entra en el viewport
 * y agregar una clase de animación.
 * 
 * @param {Object} options - Opciones del IntersectionObserver
 * @param {number} options.threshold - Porcentaje visible para activar (0-1). Default: 0.15
 * @param {string} options.rootMargin - Margen del root. Default: '0px 0px -50px 0px'
 * @param {boolean} options.triggerOnce - Si solo se activa una vez. Default: true
 * @returns {React.RefObject} ref - Referencia para asignar al elemento a observar
 * 
 * @example
 * const ref = useScrollAnimation({ threshold: 0.2 });
 * return <div ref={ref} className="animate-on-scroll">Contenido</div>;
 */
export default function useScrollAnimation({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animated');
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          element.classList.remove('animated');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}
