import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  notebook?: string;
  certificate?: string;
  isPlaceholder?: boolean;
}

// Type guard for real projects
function isRealProject(project: Project): project is Project {
  return !project.isPlaceholder;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  // Responsive cards per slide
  const getCardsPerSlide = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  // Fill with placeholders
  const getProjectsWithPlaceholders = (projectsArr: Project[]) => {
    const cardsPerSlide = getCardsPerSlide();
    const remainder = projectsArr.length % cardsPerSlide;
    if (remainder === 0) return projectsArr;
    const placeholdersNeeded = cardsPerSlide - remainder;
    const placeholders: Project[] = Array(placeholdersNeeded).fill(null).map(() => ({
      title: 'Coming Soon',
      description: 'New project coming soon',
      image: '',
      tags: [],
      isPlaceholder: true,
    }));
    return [...projectsArr, ...placeholders];
  };

  // Fetch projects
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}projects.json`)
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  // Responsive cards per slide
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  useEffect(() => {
    const handleResize = () => setCardsPerSlide(getCardsPerSlide());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Paginate projects
  const displayProjects = getProjectsWithPlaceholders(projects);
  const totalSlides = Math.max(1, Math.ceil(displayProjects.length / cardsPerSlide));
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => { setCurrentSlide(0); }, [cardsPerSlide, projects]);

  const canScrollLeft = currentSlide > 0;
  const canScrollRight = currentSlide < totalSlides - 1;

  const handleLeft = () => {
    if (canScrollLeft) setCurrentSlide(currentSlide - 1);
  };
  const handleRight = () => {
    if (canScrollRight) setCurrentSlide(currentSlide + 1);
  };

  // Always show cardsPerSlide cards per slide, fill with placeholders if needed
  const slideProjectsRaw = displayProjects.slice(
    currentSlide * cardsPerSlide,
    currentSlide * cardsPerSlide + cardsPerSlide
  );
  const missing = cardsPerSlide - slideProjectsRaw.length;
  const slideProjects = missing > 0
    ? [
        ...slideProjectsRaw,
        ...Array(missing).fill(null).map(() => ({
          title: 'Coming Soon',
          description: 'New project coming soon',
          image: '',
          tags: [],
          isPlaceholder: true,
        }))
      ]
    : slideProjectsRaw;

  return (
    <section id="projects" className="py-20 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--deep-navy)' }}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--primary-mint)' }} />
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handleLeft}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: canScrollLeft ? 'var(--primary-mint)' : 'var(--slate-gray)', color: 'white', boxShadow: '0 4px 20px rgba(59, 186, 156, 0.3)' }}
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
          {/* Cards Row */}
          <div className="flex gap-8 justify-center" style={{ maxWidth: `${cardsPerSlide * 400 + (cardsPerSlide - 1) * 32}px`, margin: '0 auto' }}>
            {slideProjects.map((project, index) => (
              <div
                key={index}
                className="project-card flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-103 flex flex-col"
                style={{ width: '380px', minWidth: '320px', maxWidth: '400px', background: project.isPlaceholder ? 'linear-gradient(135deg, #fefefe 0%, #ecfeff 50%, #f0fdf4 100%)' : 'white', border: `1px solid var(--slate-gray)`, boxShadow: '0 4px 20px rgba(112, 119, 147, 0.1)', minHeight: 0, height: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
              >
                {project.isPlaceholder ? (
                  // Placeholder Card
                  <div className="relative flex flex-col items-center justify-center h-full p-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(rgba(59, 186, 156, 0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(59, 186, 156, 0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                    <div className="relative flex flex-col items-center justify-center gap-8 h-full">
                      <div className="relative flex items-center justify-center">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="relative z-10">
                          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#3BBA9C" strokeWidth="2" strokeLinecap="round" />
                          <rect x="7" y="8" width="10" height="8" rx="2" fill="#e5e7eb" stroke="#3BBA9C" strokeWidth="2" />
                          <rect x="10" y="11" width="4" height="2" rx="1" fill="#3BBA9C" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="text-2xl tracking-wider" style={{ fontFamily: 'monospace', fontWeight: 800, color: '#2E3047', letterSpacing: '0.1em' }}>COMING SOON</h3>
                        <div className="w-32 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #3BBA9C, #06b6d4)' }} />
                      </div>
                      <p className="text-center px-4" style={{ color: '#707793', fontSize: '0.95rem', maxWidth: '280px' }}>New project under development</p>
                      <div className="flex gap-3 mt-4">
                        <div className="progress-dot-simple" style={{ background: '#3BBA9C', animationDelay: '0s' }} />
                        <div className="progress-dot-simple" style={{ background: '#06b6d4', animationDelay: '0.2s' }} />
                        <div className="progress-dot-simple" style={{ background: '#a855f7', animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Project Card
                  <>
                    <div className="relative overflow-hidden h-48 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="mb-3" style={{ color: 'var(--deep-navy)' }}>{project.title}</h3>
                      {project.description.includes('\n-') ? (
                        <ul className="mb-4 flex-1 list-none pl-0" style={{ color: 'var(--light-gray)' }}>
                          {project.description.split('\n').map((point, idx) =>
                            point.trim() ? (
                              <li key={idx} className="flex items-start gap-2 mb-1">
                                <span style={{ minWidth: 18, display: 'flex', alignItems: 'center' }}>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="9" r="8" stroke="#3BBA9C" strokeWidth="2" fill="none" />
                                    <path d="M5.5 9.5L8 12L12.5 7.5" stroke="#3BBA9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                                <span>{point.replace(/^[-•]\s*/, '')}</span>
                              </li>
                            ) : null
                          )}
                        </ul>
                      ) : (
                        <p className="mb-4 flex-1" style={{ color: 'var(--light-gray)', overflow: 'auto', whiteSpace: 'normal' }}>{project.description}</p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full"
                            style={{
                              background: 'var(--slate-gray)',
                              color: 'white',
                              fontSize: '0.875rem',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Only render links if real project */}
                      {isRealProject(project) && (
                        <div className="flex gap-4 flex-wrap">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="flex items-center gap-2 transition-opacity hover:opacity-70"
                              style={{ color: 'var(--primary-mint)' }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="flex items-center gap-2 transition-opacity hover:opacity-70"
                              style={{ color: 'var(--light-gray)' }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={18} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.notebook && (
                            <a
                              href={project.notebook}
                              className="flex items-center gap-2 transition-opacity hover:opacity-70"
                              style={{ color: '#20BEFF' }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} />
                              <span>Kaggle Notebook</span>
                            </a>
                          )}
                          {project.certificate && (
                            <a
                              href={project.certificate}
                              className="flex items-center gap-2 transition-opacity hover:opacity-70"
                              style={{ color: 'var(--primary-mint)' }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} />
                              <span>Certificate</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleRight}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: canScrollRight ? 'var(--primary-mint)' : 'var(--slate-gray)', color: 'white', boxShadow: '0 4px 20px rgba(59, 186, 156, 0.3)' }}
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .progress-dot-simple {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: progress-bounce-simple 1.8s infinite;
        }
        @keyframes progress-bounce-simple {
          0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          25% { transform: translateY(-10px) scale(1.1); opacity: 0.8; }
          50% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
