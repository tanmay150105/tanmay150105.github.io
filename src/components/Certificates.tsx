import React, { useEffect, useState } from "react";

interface Certificate {
  title: string;
  organization: string;
  date?: string;
  certificateUrl?: string;
  isPlaceholder?: boolean;
}

export function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const cardsPerRow = 2;

  useEffect(() => {
    fetch('/certificates.json')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setCertificates(data))
      .catch(() => setCertificates([]));
  }, []);

  // Always fill last row to 2 cards
  const remainder = certificates.length % cardsPerRow;
  const placeholdersNeeded = remainder === 0 ? 0 : cardsPerRow - remainder;
  const displayCertificates = [
    ...certificates,
    ...Array(placeholdersNeeded).fill(null).map(() => ({
      title: 'Coming Soon',
      organization: '',
      isPlaceholder: true,
    }))
  ];

  return (
    <section id="certificates" className="scroll-mt-24 py-20 px-6" style={{ background: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--deep-navy)' }}>
            Certificates
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: 'var(--primary-mint)' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {displayCertificates.map((certificate, index) => (
            <div
              key={index}
              className="max-w-md w-full p-6 rounded-2xl border border-[var(--slate-gray)] shadow-md transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer"
              style={{
                background: certificate.isPlaceholder ? 'linear-gradient(135deg, #fefefe 0%, #ecfeff 50%, #f0fdf4 100%)' : 'white',
                boxShadow: '0 4px 20px rgba(112, 119, 147, 0.1)',
              }}
            >
              {certificate.isPlaceholder ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex gap-3 mb-4 mt-2">
                    <div className="progress-dot-simple" style={{ background: '#3BBA9C', animationDelay: '0s' }} />
                    <div className="progress-dot-simple" style={{ background: '#06b6d4', animationDelay: '0.2s' }} />
                    <div className="progress-dot-simple" style={{ background: '#a855f7', animationDelay: '0.4s' }} />
                    <div className="progress-dot-simple" style={{ background: '#22c55e', animationDelay: '0.6s' }} />
                  </div>
                  <h4 className="text-xl font-bold" style={{ color: '#2E3047' }}>COMING SOON</h4>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="mb-0" style={{ color: 'var(--deep-navy)' }}>
                      {certificate.title}
                    </h4>
                    {certificate.date && (
                      <span
                        style={{
                          color: 'var(--light-gray)',
                          fontSize: '0.875rem',
                          opacity: 0.8,
                          marginLeft: '1rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {certificate.date}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <p style={{ color: 'var(--light-gray)', fontSize: '0.95rem' }}>
                      {certificate.organization}
                    </p>
                    {certificate.certificateUrl && (
                      <a
                        href={certificate.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-600 hover:underline transition-all duration-300 font-medium"
                        style={{ color: '#22c55e' }}
                      >
                        Certificate
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
