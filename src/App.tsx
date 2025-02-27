import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import AI from './AI';

function App() {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Contact />
      <AI />
    </div>
  );
}

export default App;