import { Heart, Coffee } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ background: 'var(--dark-gray)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'white' }}>
            About Me
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: 'var(--primary-mint)' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6" style={{ color: 'white' }}>
              I enjoy exploring hardware through disassembly and repair, while building strong skills in C++ and full‑stack development. 
              My goal is to connect hardware and software to create systems I can test, improve, and learn from in real‑world environments..
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div
              className="p-6 rounded-2xl transition-all hover:scale-103"
              style={{
                background: 'white',
                boxShadow: '0 4px 20px rgba(112, 119, 147, 0.1)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--primary-mint)', opacity: 0.2 }}
                >
                  <Heart size={24} style={{ color: 'var(--primary-mint)' }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--deep-navy)' }}>
                    Hardware Explorer
                  </h4>
                  <p style={{ color: 'var(--light-gray)' }}>
                    Disassembly, repair, sensors, and hands-on learning
                  </p>
                </div>
              </div>
            </div>
            <div
              className="p-6 rounded-2xl transition-all hover:scale-103"
              style={{
                background: 'white',
                boxShadow: '0 4px 20px rgba(112, 119, 147, 0.1)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--primary-mint)', opacity: 0.2 }}
                >
                  <Coffee size={24} style={{ color: 'var(--primary-mint)' }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--deep-navy)' }}>
                    Problem Solver
                  </h4>
                  <p style={{ color: 'var(--light-gray)' }}>
                    Tackling challenges physically and digitally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}