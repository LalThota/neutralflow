import React, { useEffect, useRef, useState } from 'react';
import { FEATURES } from '../data/features';
import { FeatureIcon, ChevronIcon } from './Icons';
import './Features.css';

export default function Features() {
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0); // Tracks hovered card on desktop / active panel on mobile
  const [isVisible, setIsVisible] = useState(false);
  const wasMobileRef = useRef(false);

  useEffect(() => {
    // 1. Intersection Observer for Scroll Reveal
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. Resize Observer / Window resize listener for Context Transfer
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      
      // Check if we crossed the breakpoint from desktop to mobile
      if (isMobile && !wasMobileRef.current) {
        // Programmatically open the accordion panel at activeIndexRef.current
        openAccordionPanel(activeIndexRef.current);
      }
      
      wasMobileRef.current = isMobile;
    };

    // Set initial value
    wasMobileRef.current = window.innerWidth < 768;
    if (wasMobileRef.current) {
      openAccordionPanel(activeIndexRef.current);
    }

    window.addEventListener('resize', handleResize);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Direct DOM mutation helper to open accordion panels
  const openAccordionPanel = (index) => {
    const contents = document.querySelectorAll('.accordion-content');
    const items = document.querySelectorAll('.accordion-item');

    contents.forEach((el, i) => {
      const itemEl = items[i];
      const chevronEl = itemEl?.querySelector('.accordion-chevron');
      
      if (i === index) {
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.opacity = '1';
        itemEl?.classList.add('active');
        if (chevronEl) chevronEl.style.transform = 'rotate(180deg)';
      } else {
        el.style.maxHeight = '0px';
        el.style.opacity = '0';
        itemEl?.classList.remove('active');
        if (chevronEl) chevronEl.style.transform = 'rotate(0deg)';
      }
    });
  };

  const handleBentoHover = (index) => {
    activeIndexRef.current = index;
  };

  const handleAccordionClick = (index) => {
    // If clicking already active accordion, we can close it, or keep it open.
    // The requirement says: "Only ONE panel open at a time"
    if (activeIndexRef.current === index) {
      // Toggle it off
      activeIndexRef.current = -1;
      openAccordionPanel(-1);
    } else {
      activeIndexRef.current = index;
      openAccordionPanel(index);
    }
  };

  return (
    <section id="features" ref={sectionRef} className={`features-section ${isVisible ? 'reveal' : ''}`}>
      <div className="section-header">
        <h2 className="section-title">Engineered for absolute pipeline autonomy</h2>
        <p className="section-subtitle">
          Say goodbye to manual ETL monitoring. Our system automatically manages
          ingestion, transforms, and schema integrity.
        </p>
      </div>

      {/* DESKTOP BENTO GRID */}
      <div className="bento-grid-container" aria-label="Features grid">
        {FEATURES.map((feature, idx) => {
          // Asymmetric mapping
          // Card 0: large (span 2 cols)
          // Card 1, 2: medium (1 col)
          // Card 3, 4: small (1 col)
          // Card 5: large (span 2 cols)
          let gridClass = 'bento-medium';
          if (idx === 0 || idx === 5) gridClass = 'bento-large';
          if (idx === 3 || idx === 4) gridClass = 'bento-small';

          return (
            <div
              key={feature.id}
              className={`bento-card ${gridClass}`}
              style={{ '--index': idx, '--accent-color': feature.color }}
              onMouseEnter={() => handleBentoHover(idx)}
            >
              <div className="card-glow" />
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <FeatureIcon name={feature.icon} color={feature.color} size={32} />
                </div>
                <div className="card-info">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </div>
                <div className="card-stat-badge">
                  <span className="stat-label">Metric</span>
                  <span className="stat-value">{feature.stat}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE ACCORDION LIST */}
      <div className="accordion-container" aria-label="Features accordion list">
        {FEATURES.map((feature, idx) => (
          <div
            key={feature.id}
            className="accordion-item"
            style={{ '--accent-color': feature.color }}
          >
            <button
              className="accordion-header"
              onClick={() => handleAccordionClick(idx)}
              aria-label={`Toggle feature details for ${feature.title}`}
            >
              <div className="accordion-header-left">
                <div className="accordion-icon-wrapper">
                  <FeatureIcon name={feature.icon} color={feature.color} size={24} />
                </div>
                <span className="accordion-title">{feature.title}</span>
              </div>
              <ChevronIcon className="accordion-chevron" size={18} />
            </button>

            <div className="accordion-content">
              <div className="accordion-content-inner">
                <p className="accordion-description">{feature.description}</p>
                <div className="accordion-stat-badge">
                  <span className="stat-label">Performance Metric</span>
                  <span className="stat-value">{feature.stat}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
