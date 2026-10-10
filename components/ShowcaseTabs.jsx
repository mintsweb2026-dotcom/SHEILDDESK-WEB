'use client';

import { useState } from 'react';

const showcaseData = {
  'soc': {
    title: 'Security Operations & Incident Workspace',
    desc: 'Real-time incident triage console featuring live telemetry correlation (CrowdStrike Falcon, Microsoft Defender, Wazuh), severity classification, attack timeline visualization, and autonomous AI copilot investigation trigger.',
    img: '/assets/screenshots/soc-incident-workspace.png',
    address: 'https://app.shielddesk.io/dashboard/incidents/INC-8094',
    badge: 'Live SOC Ingestion'
  },
  'scorecard': {
    title: 'Executive Risk Scorecard & Cyber Posture Index',
    desc: 'CISO and executive intelligence dashboard displaying organizational Cyber Posture Index, estimated financial loss avoided, active threats contained, benchmark MTTD/MTTR response velocity, and role-based operator persona switching.',
    img: '/assets/screenshots/risk-scorecard.png',
    address: 'https://app.shielddesk.io/dashboard/executive-scorecard',
    badge: 'Board-Level Metrics'
  },
  'fleet': {
    title: 'Fleet Management & Endpoint PKI Authority',
    desc: 'Enterprise endpoint fleet control plane displaying mTLS X.509 certificate lifecycles, Go universal agent heartbeats (Windows/Linux), host isolation state, and cryptographically signed command dispatch queues.',
    img: '/assets/screenshots/fleet-management.png',
    address: 'https://app.shielddesk.io/dashboard/fleet/pki-cluster-01',
    badge: 'mTLS X.509 PKI'
  },
  'remediation': {
    title: '3-Horizon Remediation Planning & Governance',
    desc: 'Structured 3-horizon remediation orchestrator (Immediate Containment, Short-Term Patching, Long-Term Zero-Trust Hardening) with 4-tier human governance, separation-of-duties enforcement, and RFC 6238 TOTP MFA gates.',
    img: '/assets/screenshots/remediation-plans.png',
    address: 'https://app.shielddesk.io/dashboard/remediation/3-horizon',
    badge: 'Dual-Custody Gates'
  },
  'threat-intel': {
    title: 'Native YARA Malware Threat Engine',
    desc: 'High-performance native YARA malware detection engine featuring AST lexer/parser sandbox, real-time ruleset compiler, custom rule syntax validator, and streaming telemetry match monitors.',
    img: '/assets/screenshots/threat-intel-yara.png',
    address: 'https://app.shielddesk.io/dashboard/intel/yara-compiler',
    badge: 'Native AST Compiler'
  },
  'compliance': {
    title: 'Continuous Compliance Matrix & Audit Evidence Vault',
    desc: 'Automated regulatory compliance mapping across SOC 2 Type II, ISO 27001:2022, NIST CSF 2.0, HIPAA Security Rule, and PCI-DSS v4.0 with SHA-256 Merkle hash-chain tamper-evident audit ledgers.',
    img: '/assets/screenshots/compliance-matrix.png',
    address: 'https://app.shielddesk.io/dashboard/compliance/merkle-vault',
    badge: 'SHA-256 Merkle Vault'
  },
  'vulnerability': {
    title: 'Vulnerability & Secret Scanner Console',
    desc: 'Deep filesystem and container security scanner integrating Aqua Security Trivy for CVE identification and Gitleaks for high-entropy credential and private key leak detection across source trees.',
    img: '/assets/screenshots/vulnerability-scanner.png',
    address: 'https://app.shielddesk.io/dashboard/scanners/trivy-gitleaks',
    badge: 'Trivy + Gitleaks'
  },
  'onboarding': {
    title: '4-Step Self-Service Enterprise Onboarding',
    desc: 'Zero-friction organizational onboarding wizard generating tenant-scoped API keys, one-line universal PowerShell/Bash agent installation commands, and SaaS quota provisioning.',
    img: '/assets/screenshots/onboarding-wizard.png',
    address: 'https://app.shielddesk.io/onboarding/wizard-step-1',
    badge: 'Zero-Touch Deploy'
  }
};

export default function ShowcaseTabs() {
  const [activeTab, setActiveTab] = useState('soc');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = showcaseData[activeTab];

  return (
    <section className="showcase-section" id="showcase">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow">Enterprise Console Cockpit</span>
          <h2 className="section-title">One Unified Command Center for Every Persona</h2>
          <p className="section-desc">
            Explore live modules: from real-time SOC incident correlation and blast radius modeling to cryptographically signed fleet dispatch and compliance audits.
          </p>
        </div>

        <div className="showcase-stage-container">
          <div className="showcase-glow-backdrop" aria-hidden="true"></div>

          {/* Floating Live Telemetry Chips */}
          <div className="floating-telemetry-row">
            <div className="floating-telemetry-chip">
              <span className="telemetry-pulse-dot"></span>
              <span>4 Ingestion Streams Active &bull; &lt;42ms Latency</span>
            </div>
            <div className="floating-telemetry-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>Dual-Custody Gate: 2/2 Signatures Enforced</span>
            </div>
            <div className="floating-telemetry-chip hide-mobile">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              <span>Pre-Flight LVM Snapshot Verified</span>
            </div>
          </div>

          <div className="showcase-wrapper">
          
            {/* Top Horizontal Tab Bar (Chatwoot Structure) */}
            <div className="showcase-tab-bar" role="tablist">
            <button
              className={`showcase-tab-btn ${activeTab === 'soc' ? 'active' : ''}`}
              onClick={() => setActiveTab('soc')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span>1. SOC Workspace</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'scorecard' ? 'active' : ''}`}
              onClick={() => setActiveTab('scorecard')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              <span>2. Executive Risk</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'fleet' ? 'active' : ''}`}
              onClick={() => setActiveTab('fleet')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>
              <span>3. Fleet & PKI</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'remediation' ? 'active' : ''}`}
              onClick={() => setActiveTab('remediation')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>4. Remediation Plans</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'threat-intel' ? 'active' : ''}`}
              onClick={() => setActiveTab('threat-intel')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
              <span>5. YARA Engine</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'compliance' ? 'active' : ''}`}
              onClick={() => setActiveTab('compliance')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>6. Compliance Vault</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'vulnerability' ? 'active' : ''}`}
              onClick={() => setActiveTab('vulnerability')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/></svg>
              <span>7. Trivy & Secrets</span>
            </button>
            <button
              className={`showcase-tab-btn ${activeTab === 'onboarding' ? 'active' : ''}`}
              onClick={() => setActiveTab('onboarding')}
              role="tab"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
              <span>8. Onboarding</span>
            </button>
          </div>

          {/* Window Bar (Mints ERP macOS Traffic Light Frame) */}
          <div className="showcase-header">
            <div className="window-dots">
              <div className="window-dot red"></div>
              <div className="window-dot yellow"></div>
              <div className="window-dot green"></div>
            </div>
            <div className="window-address">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>{current.address}</span>
            </div>
            <div className="window-actions">
              <span className="window-action-badge">{current.badge}</span>
            </div>
          </div>

          {/* Showcase Viewport */}
          <div className="showcase-viewport">
            <div className="showcase-image-container">
              <img
                key={current.img}
                src={current.img}
                alt={current.title}
                className="showcase-img"
              />
              
              {/* Caption Overlay */}
              <div className="showcase-caption-overlay">
                <div className="caption-content">
                  <h3>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--accent-cyan)' }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {current.title}
                  </h3>
                  <p>{current.desc}</p>
                </div>
                <button
                  className="zoom-btn"
                  title="Inspect Full Screen"
                  onClick={() => setLightboxOpen(true)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>Zoom Full View</span>
                </button>
              </div>

            </div>
          </div>

          </div>
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxOpen && (
        <div className="lightbox-modal active" role="dialog" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close dialog"
            >
              &times;
            </button>
            <img src={current.img} alt={current.title} className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  );
}
