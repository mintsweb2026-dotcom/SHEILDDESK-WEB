'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('curl -sSL https://get.shielddesk.io | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        
        {/* Live Posture Badge */}
        <div className="hero-badge-wrapper">
          <span className="pulse-dot"></span>
          <span className="hero-badge-text">SEE RISK. ACT WITH CONFIDENCE. &bull; CYBER POSTURE INDEX 94.8 &bull; SHIELDDESK CONSOLE</span>
        </div>

        {/* Grand Title */}
        <h1 className="hero-title">
          See Risk.<br />
          <span className="gradient-text">Act With Confidence.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          One unified command center for autonomous security operations. Ingest multi-cloud telemetry, model attack blast radius, enforce cryptographic dual-custody governance, and dispatch signed endpoint containment with automated rollback.
        </p>

        {/* Hero CTAs */}
        <div className="hero-actions">
          <a href="#simulator" className="btn btn-primary btn-lg">
            Request a Live Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#simulator" className="btn btn-secondary btn-lg">
            Try Live Simulator
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </a>
        </div>

        {/* Quick Install Terminal Snippet */}
        <div className="quick-install-box">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="cli-prompt">$</span>
          <code className="cli-code">curl -sSL https://get.shielddesk.io | bash</code>
          <button
            className="cli-copy-btn copy-trigger"
            onClick={copyCommand}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
            aria-label="Copy installation command"
          >
            {copied ? (
              <span className="copied-status">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Copied!</span>
              </span>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            )}
          </button>
        </div>

        {/* Trust Metric Strip */}
        <div className="trust-metric-strip">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>350+ Passed Test Suites</span>
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>mTLS X.509 Cryptographic PKI</span>
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            <span>&lt; 120ms Ingestion Normalization</span>
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            <span>SOC 2 Type II & Merkle Ledger</span>
          </div>
        </div>

      </div>
    </section>
  );
}
