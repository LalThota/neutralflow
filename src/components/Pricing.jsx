import React, { useEffect, useRef, useState } from 'react';
import { PRICING_MATRIX, computePrice } from '../data/pricingMatrix';
import './Pricing.css';

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Refs for state isolation of price displays
  const currencyRef = useRef('USD');
  const billingRef = useRef('monthly');

  // DOM node references for direct content changes
  const priceStarterRef = useRef(null);
  const priceProRef = useRef(null);
  const priceEnterpriseRef = useRef(null);

  const suffixStarterRef = useRef(null);
  const suffixProRef = useRef(null);
  const suffixEnterpriseRef = useRef(null);

  useEffect(() => {
    // 1. Intersection Observer for reveal animation
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

    // 2. Set initial prices without triggering re-render
    updatePricesDOM();

    return () => observer.disconnect();
  }, []);

  const updatePricesDOM = () => {
    const curr = currencyRef.current;
    const bill = billingRef.current;

    const priceStarter = computePrice('starter', curr, bill);
    const pricePro = computePrice('pro', curr, bill);
    const priceEnterprise = computePrice('enterprise', curr, bill);

    const suffix = PRICING_MATRIX.billing[bill].suffix;

    // Mutate text nodes directly
    if (priceStarterRef.current) priceStarterRef.current.textContent = priceStarter;
    if (priceProRef.current) priceProRef.current.textContent = pricePro;
    if (priceEnterpriseRef.current) priceEnterpriseRef.current.textContent = priceEnterprise;

    if (suffixStarterRef.current) suffixStarterRef.current.textContent = suffix;
    if (suffixProRef.current) suffixProRef.current.textContent = suffix;
    if (suffixEnterpriseRef.current) suffixEnterpriseRef.current.textContent = suffix;
  };

  const handleBillingToggle = (cycle) => {
    if (billingRef.current === cycle) return;
    billingRef.current = cycle;

    // Direct DOM styling for the toggle pill selector
    const monthlyBtn = document.getElementById('pricing-btn-monthly');
    const annualBtn = document.getElementById('pricing-btn-annual');
    const saveBadge = document.getElementById('pricing-save-badge');

    if (cycle === 'annual') {
      annualBtn?.classList.add('active');
      monthlyBtn?.classList.remove('active');
      if (saveBadge) saveBadge.style.opacity = '1';
    } else {
      monthlyBtn?.classList.add('active');
      annualBtn?.classList.remove('active');
      if (saveBadge) saveBadge.style.opacity = '0';
    }

    updatePricesDOM();
  };

  const handleCurrencyChange = (e) => {
    currencyRef.current = e.target.value;
    updatePricesDOM();
  };

  return (
    <section id="pricing" ref={containerRef} className={`pricing-section ${isVisible ? 'reveal' : ''}`}>
      <div className="section-header">
        <h2 className="section-title">Transparent pricing for scale</h2>
        <p className="section-subtitle">
          Start small and scale agent power dynamically. No hidden provisioning costs.
        </p>
      </div>

      {/* Control row with currency dropdown and billing switcher */}
      <div className="pricing-controls">
        {/* Billing Toggle */}
        <div className="billing-toggle-wrapper">
          <div className="billing-toggle-pill">
            <button
              id="pricing-btn-monthly"
              className="billing-btn active"
              onClick={() => handleBillingToggle('monthly')}
              type="button"
            >
              Monthly
            </button>
            <button
              id="pricing-btn-annual"
              className="billing-btn"
              onClick={() => handleBillingToggle('annual')}
              type="button"
            >
              Annual
            </button>
          </div>
          <span id="pricing-save-badge" className="save-badge">Save 20%</span>
        </div>

        {/* Currency Dropdown */}
        <div className="currency-selector">
          <label htmlFor="currency-select" className="sr-only">Choose Currency</label>
          <select
            id="currency-select"
            className="currency-dropdown-select"
            onChange={handleCurrencyChange}
            defaultValue="USD"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        
        {/* Tier Card: Starter */}
        <div className="pricing-card glass-card" style={{ '--index': 0 }}>
          <div className="card-header">
            <h3 className="tier-name">Starter</h3>
            <p className="tier-tagline">Perfect for prototype pipelines.</p>
            <div className="price-display">
              <span ref={priceStarterRef} className="price-number" data-price="starter">-</span>
              <span ref={suffixStarterRef} className="price-suffix" data-suffix="starter">/mo</span>
            </div>
          </div>
          
          <ul className="tier-features" aria-label="Starter Features">
            <li>5 AI pipeline agents</li>
            <li>50K data events/month</li>
            <li>3 data connectors</li>
            <li>Basic analytics dashboard</li>
            <li>Email support | 99.5% SLA</li>
          </ul>

          <button className="btn btn-ghost w-full card-cta" aria-label="Start Starter free trial">
            Start free trial
          </button>
        </div>

        {/* Tier Card: Pro (Highlighted Card) */}
        <div className="pricing-card glass-card highlighted-card" style={{ '--index': 1 }}>
          <div className="highlight-tag">RECOMMENDED</div>
          <div className="card-header">
            <h3 className="tier-name">Pro</h3>
            <p className="tier-tagline">Ideal for growing platform workloads.</p>
            <div className="price-display">
              <span ref={priceProRef} className="price-number" data-price="pro">-</span>
              <span ref={suffixProRef} className="price-suffix" data-suffix="pro">/mo</span>
            </div>
          </div>
          
          <ul className="tier-features" aria-label="Pro Features">
            <li><strong>25 AI pipeline agents</strong></li>
            <li><strong>500K data events/month</strong></li>
            <li>Unlimited connectors</li>
            <li>Advanced analytics & alerts</li>
            <li>Priority Slack support</li>
            <li>99.9% SLA | Custom webhooks</li>
            <li>Team collaboration tools</li>
          </ul>

          <button className="btn btn-primary w-full card-cta" aria-label="Get started with Pro plan">
            Get started
          </button>
        </div>

        {/* Tier Card: Enterprise */}
        <div className="pricing-card glass-card" style={{ '--index': 2 }}>
          <div className="card-header">
            <h3 className="tier-name">Enterprise</h3>
            <p className="tier-tagline">Built for mission-critical operations.</p>
            <div className="price-display">
              <span ref={priceEnterpriseRef} className="price-number" data-price="enterprise">-</span>
              <span ref={suffixEnterpriseRef} className="price-suffix" data-suffix="enterprise">/mo</span>
            </div>
          </div>
          
          <ul className="tier-features" aria-label="Enterprise Features">
            <li>Unlimited AI agents</li>
            <li>Unlimited data events</li>
            <li>Dedicated infrastructure</li>
            <li>Inline ML model serving</li>
            <li>Dedicated success manager</li>
            <li>99.99% SLA | SSO/SAML/SCIM</li>
            <li>Audit logs & compliance</li>
          </ul>

          <button className="btn btn-ghost w-full card-cta" aria-label="Contact sales team for Enterprise plan">
            Contact sales
          </button>
        </div>

      </div>
    </section>
  );
}
