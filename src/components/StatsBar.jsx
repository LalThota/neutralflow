import React, { useEffect, useRef, useState } from 'react';
import './StatsBar.css';

const STATS_DATA = [
  { id: 1, target: 2.4, prefix: '$', suffix: 'B+', label: 'data processed', decimals: 1 },
  { id: 2, target: 99.99, prefix: '', suffix: '%', label: 'uptime commitment', decimals: 2, startFrom: 99.0 },
  { id: 3, target: 50, prefix: '', suffix: 'ms', label: 'average latency', decimals: 0 },
  { id: 4, target: 420, prefix: '', suffix: '+', label: 'live integrations', decimals: 0 }
];

export default function StatsBar() {
  const containerRef = useRef(null);
  const [hasRun, setHasRun] = useState(false);
  const [counts, setCounts] = useState(STATS_DATA.map(d => d.startFrom || 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          startCountUp();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasRun]);

  const startCountUp = () => {
    const duration = 1500; // 1.5s animation
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);

      const nextCounts = STATS_DATA.map((stat) => {
        const start = stat.startFrom || 0;
        const current = start + (stat.target - start) * easeProgress;
        return parseFloat(current.toFixed(stat.decimals));
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Set exact targets at end
        setCounts(STATS_DATA.map(stat => stat.target));
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <section id="stats" className="stats-section animate-slide-up" style={{ '--delay': '450ms', '--dur': '180ms' }}>
      <div ref={containerRef} className="stats-container">
        {STATS_DATA.map((stat, idx) => (
          <React.Fragment key={stat.id}>
            <div className="stat-item">
              <span className="stat-number" aria-live="polite">
                {stat.prefix}
                {counts[idx].toLocaleString(undefined, {
                  minimumFractionDigits: stat.decimals,
                  maximumFractionDigits: stat.decimals
                })}
                {stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {idx < STATS_DATA.length - 1 && (
              <div className="stat-divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
