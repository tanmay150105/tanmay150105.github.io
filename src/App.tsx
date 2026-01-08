import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <About />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}