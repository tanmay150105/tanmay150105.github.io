import { Download, FileText } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-10 px-6 scroll-mt-16" style={{ background: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--deep-navy)' }}>
            Resume
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: 'var(--primary-mint)' }}
          />
        </div>

        <div
          className="p-12 rounded-3xl text-center"
          style={{
            background: 'var(--primary-mint)',
            boxShadow: '0 4px 20px rgba(112, 119, 147, 0.1)',
          }}
        >
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: 'white' }}
          >
            <FileText size={40} style={{ color: 'var(--primary-mint)' }} />
          </div>

          <h3 className="mb-4" style={{ color: 'white' }}>
            Download My Resume
          </h3>

          <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'white', opacity: 0.9 }}>
            Get a detailed overview of my education, experience, skills, and projects.
            Available in PDF format for your convenience.
          </p>

          <a
            href="/pdf/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full transition-all hover:scale-103 flex items-center gap-3 mx-auto justify-center"
            style={{
              background: 'white',
              color: 'var(--primary-mint)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none',
              minWidth: 260,
              maxWidth: 320,
            }}
          >
            <Download size={20} />
            <span className="w-full text-center">Download Resume (PDF)</span>
          </a>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['Education', 'Experience', 'Skills', 'Projects', 'Certifications'].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full"
                style={{ background: 'white', color: 'var(--primary-mint)', fontSize: '0.875rem' }}
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}