import React, { useEffect, useRef, useState } from 'react';
import { StarIcon } from './Icons';
import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'VP of Data Infrastructure',
    company: 'Aether Analytics',
    quote: 'NeuralFlow has completely changed how our team operates. Schema changes used to break our dashboards weekly. Now, the agents self-heal and resolve issues instantly.',
    stars: 5,
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="url(#avatar-grad-1)" />
        <circle cx="24" cy="18" r="8" fill="#F8FAFC" />
        <path d="M12 36C12 29.3726 17.3726 24 24 24C30.6274 24 36 29.3726 36 36" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="avatar-grad-1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D9FF" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Principal ML Engineer',
    company: 'Cyberdyne Systems',
    quote: 'Deploying model pipelines was a massive operational bottleneck. With NeuralFlow, we go from model training directly to production pipelines in minutes without any ops toil.',
    stars: 5,
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="url(#avatar-grad-2)" />
        <circle cx="24" cy="18" r="8" fill="#F8FAFC" />
        <path d="M12 36C12 29.3726 17.3726 24 24 24C30.6274 24 36 29.3726 36 36" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="avatar-grad-2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Head of Platform Engineering',
    company: 'Acme Cloud',
    quote: 'Our data lake ingestion process is extremely complex with 400+ endpoints. NeuralFlow handled everything seamlessly and gave us 99.99% uptime with sub-50ms latency.',
    stars: 5,
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="url(#avatar-grad-3)" />
        <circle cx="24" cy="18" r="8" fill="#F8FAFC" />
        <path d="M12 36C12 29.3726 17.3726 24 24 24C30.6274 24 36 29.3726 36 36" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="avatar-grad-3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="social" ref={containerRef} className={`testimonials-section ${isVisible ? 'reveal' : ''}`}>
      <div className="section-header">
        <h2 className="section-title">Loved by the teams who ship data</h2>
        <p className="section-subtitle">
          See how platform leads and ML engineers are automating their data systems with zero friction.
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <div
            key={t.id}
            className="testimonial-card glass-card"
            style={{ '--index': idx }}
          >
            <div className="testimonial-rating">
              {Array.from({ length: t.stars }).map((_, i) => (
                <StarIcon key={i} size={16} />
              ))}
            </div>
            
            <p className="testimonial-quote">"{t.quote}"</p>
            
            <div className="testimonial-profile">
              <div className="profile-avatar">
                {t.avatar}
              </div>
              <div className="profile-info">
                <span className="profile-name">{t.name}</span>
                <span className="profile-role">{t.role}, <span className="profile-company">{t.company}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
