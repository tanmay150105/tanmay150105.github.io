import React from 'react';

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--deep-navy)' }}>
            Experience
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: 'var(--primary-mint)' }}
          />
        </div>
        <div className="mx-auto max-w-3xl text-left">
          <ul className="mb-6 space-y-4 text-lg" style={{ color: 'var(--light-gray)' }}>
            <li>
              <span role="img" aria-label="tools">🛠️</span> Assembled, disassembled, and troubleshot devices with focus on diagnosing failures and reliable solutions.
            </li>
            <li>
              <span role="img" aria-label="curiosity">💡</span> Connected coding (C++ & Python) with electronics to understand and optimize systems end‑to‑end.
            </li>
            <li>
              <span role="img" aria-label="prototype">🔬</span> Built prototypes and experimented with circuits to solve real‑world problems through iteration.
            </li>
            <li>
              <span role="img" aria-label="rocket">🚀</span> Developed and deployed full‑stack web applications using modern frameworks and tools.
            </li>
            <li>
              <span role="img" aria-label="search">🔍</span> Driven by curiosity, resilience, and passion for practical exposure in hardware + software domains.
            </li>
            <li>
              <span role="img" aria-label="network">🌐</span> Collaborated on team projects with Git & VS Code, adapting quickly to new technologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}