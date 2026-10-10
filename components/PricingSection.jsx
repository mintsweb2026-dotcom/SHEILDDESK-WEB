'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Transparent Pricing</span>
          <h2 className="section-title">Security Operations For Any Scale</h2>
          <p className="section-desc">
            Start free with full open source self-hosting, or deploy our managed enterprise cloud with dedicated PKI authority and dual-custody approval.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="pricing-toggle-wrapper">
          <span className="pricing-toggle-label">Billed Monthly</span>
          <label className="toggle-switch" aria-label="Toggle Monthly and Annual billing">
            <input
              type="checkbox"
              id="billingToggle"
              checked={annual}
              onChange={(e) => setAnnual(e.target.checked)}
            />
            <span className="slider-toggle"></span>
          </label>
          <span className="pricing-toggle-label">Billed Annually</span>
          <span className="save-badge">Save 20%</span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          
          {/* Community Tier */}
          <div className="pricing-card">
            <h3 className="pricing-tier-name">Community</h3>
            <p className="pricing-tier-desc">Open-source self-hosted edition for developers, homelabs, and small security teams.</p>
            <div className="pricing-price-box">
              <span className="price-currency">$</span>
              <span className="price-amount">0</span>
              <span className="price-period">/ forever</span>
            </div>
            <ul className="pricing-features-list">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Up to <strong>5 Endpoint Agents</strong></span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Full SOC Incident Workspace</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>CrowdStrike, Defender & Wazuh Ingest</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Native YARA Engine & Scanner</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Community Discord & GitHub Discussions</span>
              </li>
            </ul>
            <a href="https://github.com/Mints-ai/SHIELD-DESK" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Deploy Self-Hosted (GitHub)
            </a>
          </div>

          {/* Professional Tier */}
          <div className="pricing-card popular">
            <span className="popular-badge">Most Popular</span>
            <h3 className="pricing-tier-name">Professional</h3>
            <p className="pricing-tier-desc">Cloud-managed platform for growing security teams and mid-market enterprises.</p>
            <div className="pricing-price-box">
              <span className="price-currency">$</span>
              <span className="price-amount">{annual ? '39' : '49'}</span>
              <span className="price-period">/ month ({annual ? 'billed annually' : 'billed monthly'})</span>
            </div>
            <ul className="pricing-features-list">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Up to <strong>100 Endpoint Agents</strong></span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>AI Blast Radius & Vulnerability ML Model</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>3-Horizon Remediation Task Board</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>RSA-2048 Signed Command Dispatch</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Trivy CVE & Gitleaks Integration</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Priority 4h Email Support</span>
              </li>
            </ul>
            <a href="#simulator" className="btn btn-primary">
              Start 14-Day Free Pilot
            </a>
          </div>

          {/* Enterprise Tier */}
          <div className="pricing-card">
            <h3 className="pricing-tier-name">Enterprise</h3>
            <p className="pricing-tier-desc">Air-gapped dual-custody governance for defense, financial, and healthcare infrastructure.</p>
            <div className="pricing-price-box">
              <span className="price-amount" style={{ fontSize: '36px' }}>Custom</span>
              <span className="price-period">/ tailored SLA</span>
            </div>
            <ul className="pricing-features-list">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Unlimited Endpoint Agents</strong></span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Strict Separation of Duties & Tier 3 Dual MFA</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Air-Gapped & AWS GovCloud Deployment</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Hardware Security Module (HSM) PKI Keys</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Continuous SOC 2 & Merkle Evidence Vault</span>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Dedicated Security Architect & 15-min SLA</span>
              </li>
            </ul>
            <a href="mailto:sales@mintsglobal.ae" className="btn btn-secondary">
              Contact Enterprise Sales
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
