import React, { useEffect, useState } from 'react';
import { CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4 } from './Icons';
import './Hero.css';

export default function Hero() {
  const [activeLogs, setActiveLogs] = useState([
    'Initializing self-healing agent pipeline...',
    'Analyzing database schema structure...',
    'Established secure tunnel to storage-09.'
  ]);

  useEffect(() => {
    const logs = [
      'Ingesting events from webhook stream...',
      'Detected API schema shift in CRM endpoint.',
      'Auto-healing schema model definition...',
      'Re-routing event traffic successfully.',
      'Deploying inline ML feature transformer...',
      'Pipeline health: 100% operational.',
      'Processed 12,450 events (avg latency: 42ms).',
      'Synchronizing targets with data lake...'
    ];

    const interval = setInterval(() => {
      setActiveLogs((prev) => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        // Keep only last 3 logs
        return [...prev.slice(1), nextLog];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Animated dot-matrix grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />
      
      <div className="hero-content">
        {/* Eyebrow badge */}
        <div className="hero-eyebrow animate-slide-up" style={{ '--delay': '80ms', '--dur': '200ms' }}>
          <span>Now in General Availability →</span>
        </div>

        {/* H1 Headline */}
        <h1 className="hero-title animate-slide-up" style={{ '--delay': '160ms', '--dur': '200ms' }}>
          Your Data Pipelines,<br />
          <span className="gradient-text">Now Running on Autopilot.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline animate-fade-in" style={{ '--delay': '240ms', '--dur': '200ms' }}>
          NeuralFlow deploys self-healing AI agents that ingest,
          transform, and deliver data across your entire stack —
          without a single line of ops code.
        </p>

        {/* CTAs */}
        <div className="hero-ctas animate-scale-in" style={{ '--delay': '320ms', '--dur': '180ms' }}>
          <a href="#pricing" className="btn btn-accent-gradient" aria-label="Start building for free">
            Start building free <span className="arrow">→</span>
          </a>
          <button className="btn btn-ghost hero-demo-btn" aria-label="Watch 2-minute demo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: '6px' }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch 2-min demo
          </button>
        </div>

        {/* Social Proof Strip */}
        <div className="hero-social-proof animate-fade-in" style={{ '--delay': '400ms', '--dur': '200ms' }}>
          <p className="social-proof-title">Trusted by 2,400+ engineering teams</p>
          <div className="social-proof-logos">
            <CompanyLogo1 className="company-logo" aria-label="Acme Labs logo" />
            <CompanyLogo2 className="company-logo" aria-label="Kronos logo" />
            <CompanyLogo3 className="company-logo" aria-label="Apex Data logo" />
            <CompanyLogo4 className="company-logo" aria-label="CyberFlow logo" />
          </div>
        </div>
      </div>

      {/* Hero Visual: Glassmorphic Dashboard Mockup */}
      <div className="hero-visual animate-fade-in" style={{ '--delay': '350ms', '--dur': '200ms' }}>
        <div className="dashboard-mockup">
          <div className="mockup-header">
            <div className="mockup-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="mockup-title">neuralflow_agent_console</div>
            <div className="mockup-badge">ACTIVE</div>
          </div>

          <div className="mockup-body">
            {/* Visual Agent Graph */}
            <div className="mockup-graph-pane">
              <div className="node node-source">
                <span className="node-label">Sources</span>
                <span className="node-value">DB & Hooks</span>
              </div>
              
              <svg className="node-lines" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting glowing paths */}
                <path d="M50 50 Q 150 10 250 50" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M50 50 Q 150 90 250 50" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" />
                <path d="M50 50 H 250" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                
                {/* Flow particles animated via CSS */}
                <circle r="4" fill="var(--color-accent)">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M50 50 Q 150 10 250 50" />
                </circle>
                <circle r="4" fill="var(--color-primary)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M50 50 Q 150 90 250 50" />
                </circle>
              </svg>

              <div className="node node-agent">
                <div className="agent-core">
                  <div className="agent-radar" />
                  <span className="agent-icon">🧠</span>
                </div>
                <span className="node-label">Agent v2.4</span>
              </div>

              <div className="node node-destination">
                <span className="node-label">Targets</span>
                <span className="node-value">Data Warehouse</span>
              </div>
            </div>

            {/* Performance Stats Panel */}
            <div className="mockup-stats-grid">
              <div className="mockup-stat-card">
                <span className="stat-label">Agent State</span>
                <span className="stat-value text-success">
                  <span className="pulse-dot"></span>
                  HEALED
                </span>
              </div>
              <div className="mockup-stat-card">
                <span className="stat-label">Throughput</span>
                <span className="stat-value text-cyan">4,281/s</span>
              </div>
              <div className="mockup-stat-card">
                <span className="stat-label">SLA Integrity</span>
                <span className="stat-value">99.998%</span>
              </div>
            </div>

            {/* Ingestion Console Log Stream */}
            <div className="mockup-console">
              <div className="console-title">Agent Logs</div>
              <div className="console-stream">
                {activeLogs.map((log, idx) => (
                  <div key={idx} className="console-line">
                    <span className="console-timestamp">[{(new Date()).toLocaleTimeString()}]</span>
                    <span className="console-text">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
