import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="transition-opacity hover:opacity-70"
            style={{ color: 'var(--deep-navy)' }}
          >
            Portfolio
          </button>

          <div className="hidden md:flex gap-8">
            {['Projects', 'Skills', 'Certificates', 'About', 'Experience', 'Resume', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="transition-all hover:opacity-70"
                style={{ color: 'var(--deep-navy)' }}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 rounded-full transition-all hover:scale-103"
            style={{
              background: 'var(--primary-mint)',
              color: 'white',
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}