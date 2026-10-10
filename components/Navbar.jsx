'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="ShieldDesk Home">
          <div className="brand-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4" strokeWidth="2.5"/>
            </svg>
          </div>
          <div className="brand-name">
            <span>ShieldDesk</span><span className="brand-tm">™</span>
          </div>
          <span className="brand-version-badge">v2.4 Enterprise</span>
        </a>

        {/* Desktop Nav Menu (Chatwoot Structure) */}
        <nav aria-label="Main Navigation">
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="navMenu">
            <li className="nav-item">
              <a href="#showcase" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Product
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </a>
              <div className="dropdown-menu">
                <a href="#showcase" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                  <div className="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  </div>
                  <div className="dropdown-text">
                    <h4>SOC Incident Workspace</h4>
                    <p>Real-time telemetry correlation & triage</p>
                  </div>
                </a>
                <a href="#showcase" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                  <div className="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                  </div>
                  <div className="dropdown-text">
                    <h4>Fleet & Endpoint PKI</h4>
                    <p>mTLS X.509 universal Go daemon</p>
                  </div>
                </a>
                <a href="#showcase" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                  <div className="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  </div>
                  <div className="dropdown-text">
                    <h4>3-Horizon Remediation</h4>
                    <p>Immediate containment & zero-trust hardening</p>
                  </div>
                </a>
                <a href="#showcase" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                  <div className="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>
                  </div>
                  <div className="dropdown-text">
                    <h4>Native YARA Engine</h4>
                    <p>AST parser, compiler & streaming monitors</p>
                  </div>
                </a>
                <a href="#showcase" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                  <div className="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="dropdown-text">
                    <h4>Compliance Audit Vault</h4>
                    <p>SOC 2 Type II, ISO 27001 & Merkle Ledger</p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item"><a href="#simulator" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Live Simulator</a></li>
            <li className="nav-item"><a href="#governance" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Governance & Tiers</a></li>
            <li className="nav-item"><a href="#horizons" className="nav-link" onClick={() => setMobileMenuOpen(false)}>3 Horizons</a></li>
            <li className="nav-item"><a href="#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
            <li className="nav-item"><a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
          </ul>
        </nav>

        {/* Nav Actions */}
        <div className="nav-actions">
          {/* GitHub Star Pill */}
          <a
            href="https://github.com/Mints-ai/SHIELD-DESK"
            target="_blank"
            rel="noopener noreferrer"
            className="github-star-pill"
            title="View Source on GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>Star</span>
            <span className="star-count">★ 1.2k</span>
          </a>

          <a href="#simulator" className="btn btn-secondary btn-sm nav-hide-mobile">Sandbox</a>
          <a href="#pricing" className="btn btn-primary btn-sm">Book Demo</a>

          <button
            className="mobile-toggle"
            id="mobileNavToggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>

      </div>
    </header>
  );
}
