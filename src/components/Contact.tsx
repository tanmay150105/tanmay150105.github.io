import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (demo only)
    alert('Thanks for reaching out! This is a demo form.');
  };

  return (
    <section
      id="contact"
      className="py-20 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--deep-navy)' }}>
            Get In Touch
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: 'var(--primary-mint)' }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Info & Socials */}
          <div>
            <h3 className="mb-6" style={{ color: 'var(--deep-navy)' }}>
              Let's Connect!
            </h3>
            <p className="mb-8" style={{ color: 'var(--light-gray)' }}>
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out through the form or connect with me on social media.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--slate-gray)] shadow-md bg-white mb-6">
              <Mail size={24} style={{ color: 'var(--primary-mint)' }} />
              <div className="text-left">
                <p className="text-sm" style={{ color: 'var(--light-gray)' }}>Email</p>
                <a href="mailto:tanmaybuddy7890@gmail.com" style={{ color: 'var(--deep-navy)' }}>
                  tanmaybuddy7890@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 justify-start">
              <a
                href="https://linkedin.com/in/tanmay-jain-601398283"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl border border-[var(--slate-gray)] bg-white transition-all hover:scale-105"
                style={{ color: 'var(--primary-mint)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/tanmay150105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-xl border border-[var(--slate-gray)] bg-white transition-all hover:scale-105"
                style={{ color: 'var(--primary-mint)' }}
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="p-8 rounded-3xl border border-[var(--slate-gray)] bg-white shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2" style={{ color: 'var(--deep-navy)' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 placeholder-[color:var(--light-gray)]"
                  style={{ background: 'rgba(108, 122, 137, 0.1)', color: 'var(--deep-navy)' }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2" style={{ color: 'var(--deep-navy)' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 placeholder-[color:var(--light-gray)]"
                  style={{ background: 'rgba(108, 122, 137, 0.1)', color: 'var(--deep-navy)' }}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2" style={{ color: 'var(--deep-navy)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{ background: 'rgba(108, 122, 137, 0.1)', color: 'var(--deep-navy)' }}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full transition-all hover:scale-103"
                style={{ background: 'var(--primary-mint)', color: 'white' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}