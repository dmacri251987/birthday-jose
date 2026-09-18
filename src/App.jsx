import Hero from './components/Hero'
import Countdown from './components/Countdown'
import EventInfo from './components/EventInfo'
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
 * 4. RSVP (confirmación de asistencia)
 * 5. Footer (cierre emotivo)
 * 6. MusicPlayer (flotante, fuera del flujo)
 */
function App() {
  return (
    <div className="app">
      <Hero />
      <Countdown />
      <EventInfo />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default App
