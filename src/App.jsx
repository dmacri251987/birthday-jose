import Hero from './components/Hero'
import Countdown from './components/Countdown'
import EventInfo from './components/EventInfo'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

/**
 * App — Componente raíz de la invitación.
 * 
 * Orden de secciones:
 * 1. Hero (bienvenida a pantalla completa)
 * 2. Countdown (cuenta regresiva)
 * 3. EventInfo (detalles del evento)
 * 4. Gallery (galería de fotos)
 * 5. RSVP (confirmación de asistencia)
 * 6. Footer (cierre emotivo)
 * 7. MusicPlayer (flotante, fuera del flujo)
 */
function App() {
  return (
    <div className="app">
      <Hero />
      <Countdown />
      <EventInfo />
      <Gallery />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default App
