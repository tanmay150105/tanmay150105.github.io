import React from 'react';
import { Sparkles, Code, Palette } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'white' }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, var(--primary-mint), transparent)` }}
      />

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 float opacity-30">
        <Sparkles size={40} style={{ color: 'var(--primary-mint)' }} />
      </div>
      <div className="absolute top-1/3 right-1/4 float-delayed opacity-30">
        <Code size={40} style={{ color: 'var(--light-gray)' }} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 float opacity-30">
        <Palette size={40} style={{ color: 'var(--primary-mint)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in">
          <div
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{ background: 'var(--slate-gray)', color: 'white' }}
          >
            👋 Hi, I'm a Student Developer
          </div>

          <h1 className="mb-6" style={{ color: 'var(--deep-navy)' }}>
            Tanmay Jain
          </h1>
          <h2
            style={{
              color: 'var(--primary-mint)',
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Curious Tech Fixer | Disassembly & Repair Enthusiast | Aspiring Full-Stack Developer | CS @ ADGITM'27
          </h2>

          <p
            className="mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--light-gray)', fontSize: '1.125rem' }}
          >
            I enjoy opening things up, understanding how they work, fixing what’s broken, and learning how hardware and software come together.
            I’m building strong skills in C++ (DSA & OOP) and full-stack development while staying close to hands-on hardware exploration.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full transition-all hover:scale-103"
              style={{
                background: 'var(--primary-mint)',
                color: 'white',
              }}
            >
              View My Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full transition-all hover:scale-103"
              style={{
                border: `2px solid var(--primary-mint)`,
                color: 'var(--deep-navy)',
                background: 'white',
              }}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-2" style={{ border: `2px solid var(--primary-mint)` }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary-mint)' }} />
        </div>
      </div>
    </section>
  );
}