import React, { useState } from 'react';
import { ChevronIcon } from './Icons';
import './FAQ.css';

const FAQ_DATA = [
  {
    id: 1,
    question: 'How does the 14-day free trial work?',
    answer: 'You can sign up without a credit card. You get full access to all Starter plan features. At the end of 14 days, you can choose to upgrade or remain on our free development tier.'
  },
  {
    id: 2,
    question: 'Can I switch plans mid-cycle?',
    answer: 'Yes, you can upgrade or downgrade your tier at any time. When upgrading, the changes are applied immediately and pro-rated. Downgrades take effect at the end of the current billing cycle.'
  },
  {
    id: 3,
    question: 'What data sources does NeuralFlow connect to?',
    answer: 'We support over 420+ integrations out of the box, including PostgreSQL, MySQL, Snowflake, MongoDB, S3 buckets, Salesforce, and any custom HTTP/REST API endpoints.'
  },
  {
    id: 4,
    question: 'Is my data encrypted at rest and in transit?',
    answer: 'Absolutely. We encrypt all payloads in transit using TLS 1.3 and at rest using AES-256 keys. We never store your core data payloads on our servers—only metadata for agent tracking.'
  },
  {
    id: 5,
    question: 'Do you offer discounts for startups?',
    answer: 'Yes! Startups under 2 years old with less than $1M in funding are eligible for a 50% discount on our Pro plan for their first 12 months. Contact our sales team with your details.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-header">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">
          Everything you need to know about autonomous agent pipelines and billing.
        </p>
      </div>

      <div className="faq-list" aria-label="Frequently Asked Questions Accordion">
        {FAQ_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.id}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                aria-label={`Toggle answer for: ${faq.question}`}
              >
                <span className="faq-question">{faq.question}</span>
                <div className="faq-icon-wrapper">
                  <ChevronIcon className="faq-chevron" direction={isOpen ? 'up' : 'down'} size={18} />
                </div>
              </button>

              <div 
                className="faq-content" 
                aria-hidden={!isOpen}
                style={{ 
                  maxHeight: isOpen ? '200px' : '0px',
                  opacity: isOpen ? 1 : 0
                }}
              >
                <div className="faq-answer-inner">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
