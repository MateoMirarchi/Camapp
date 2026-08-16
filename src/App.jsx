import EnvelopeIntro from './components/EnvelopeIntro';
import HowWeMet from './components/HowWeMet';
import Reunion from './components/Reunion';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import FinalLetter from './components/FinalLetter';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <EnvelopeIntro />
      <HowWeMet />
      <Reunion />
      <Timeline />
      <Gallery />
      <FinalLetter />
      <footer className="footer">Feliz cumpleaños ♡</footer>
    </div>
  );
}
