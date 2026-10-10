'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is the "Prove Before You Act" invariant?',
    answer: 'Most SOAR tools blindly execute remediation scripts that can take down critical database servers or core routers. In ShieldDesk, no destructive or containment action ever dispatches to an endpoint without: (1) an AI simulated blast radius calculation, (2) cryptographic validation of the operator\'s autonomy tier, (3) dual-custody hardware MFA sign-off when applicable, and (4) an automated pre-flight snapshot with rollback capability.'
  },
  {
    question: 'Can ShieldDesk run in completely air-gapped environments?',
    answer: 'Yes. ShieldDesk is packaged as lightweight containerized images with PostgreSQL 16+ and a localized Python Vulnerability ML Engine on port 8000. It requires zero outbound internet access and supports internal offline YARA rule compilation and on-premises mTLS X.509 PKI certificate authorities.'
  },
  {
    question: 'How does the agent daemon ensure zero performance overhead?',
    answer: 'The universal agent is written in pure Go with zero external runtime dependencies. It operates with under 15 MB of memory footprint and consumes less than 0.1% CPU during idle heartbeats. It only wakes up when receiving cryptographically signed commands over mutual TLS.'
  },
  {
    question: 'What happens if an endpoint agent loses connectivity during containment?',
    answer: 'ShieldDesk implements fail-safe rollback logic. If an agent fails to confirm receipt and pre-flight snapshot generation within the cryptographic TTL window, the mitigation task automatically reverts from in_progress back to approved, preventing zombie execution states and alerting administrators.'
  },
  {
    question: 'How does ShieldDesk enforce Separation of Duties (SoD)?',
    answer: 'Separation of duties is enforced at both the API layer and the relational database schema level. In db/schema.sql, database constraints prevent an administrator from self-approving Tier 3 break-glass requests, requiring two distinct SuperAdmins. Meanwhile, SOC Analysts have zero write or execution permissions, acting as read-only viewers.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Enterprise Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about ShieldDesk deployment, agent architecture, and cryptographic governance.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(index)}>
                  <span>{faq.question}</span>
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
