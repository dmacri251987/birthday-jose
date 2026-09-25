import BackgroundGradient from "./components/BackgroundGradient";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventInfo from "./components/EventInfo";
import RSVP from "./components/RSVP";
import GiftDetails from "./components/GiftDetails";
import PhotoShare from "./components/PhotoShare";
import Footer from "./components/Footer";
// import MusicPlayer from './components/MusicPlayer'
import "./App.css";

/**
 * App — Componente raíz de la invitación.
 *
 * Orden de secciones:
 * 1. Hero (bienvenida a pantalla completa)
 * 2. Countdown (cuenta regresiva)
 * 3. EventInfo (detalles del evento)
 *  4. RSVP (confirmación de asistencia)
 *  5. GiftDetails (datos para regalar)
 *  6. PhotoShare (QR para compartir fotos)
 *  7. Footer (cierre emotivo)
 */
function App() {
  return (
    <div className="app">
      <BackgroundGradient />
      <Hero />
      <Countdown />
      <EventInfo />
      <RSVP />
      <GiftDetails />
      {/* <PhotoShare /> */}
      <Footer />
      {/* <MusicPlayer /> */}
    </div>
  );
}

export default App;
