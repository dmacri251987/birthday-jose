import './BackgroundGradient.css'

/**
 * BackgroundGradient — Capa de fondo fija con degradados radiales sutiles.
 * Crea un efecto de textura orgánica cálida sobre toda la página.
 */
export default function BackgroundGradient() {
  return (
    <div className="bg-gradient" aria-hidden="true">
      <div className="bg-gradient__layer bg-gradient__layer--1" />
      <div className="bg-gradient__layer bg-gradient__layer--2" />
      <div className="bg-gradient__layer bg-gradient__layer--3" />
      <div className="bg-gradient__layer bg-gradient__layer--4" />
      <div className="bg-gradient__layer bg-gradient__layer--5" />
    </div>
  )
}
