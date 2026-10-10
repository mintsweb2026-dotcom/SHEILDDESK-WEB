export default function FeatureGrid() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Platform Capabilities</span>
          <h2 className="section-title">Engineered For Zero Tolerance & Zero Drift</h2>
          <p className="section-desc">
            Traditional SOAR tools fail when automated playbooks hallucinate or disrupt production. ShieldDesk replaces brittle scripts with cryptographic verification, separation of duties, and instant state rollback.
          </p>
        </div>

        <div className="features-grid">
          
          {/* Feature 1: Alert Normalization */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <h3 className="feature-title">Telemetry Ingestion & Secret Redaction</h3>
            <p className="feature-desc">
              Ingests raw webhooks from CrowdStrike, Defender, and Wazuh through a centralized regex redactor (<code>redactor.ts</code>). Credentials, private keys, and PII are scrubbed prior to storage.
            </p>
            <div className="feature-badge-list">
              <span className="feature-badge">HMAC-SHA256 Ingestion</span>
              <span className="feature-badge">Zero PII Leakage</span>
              <span className="feature-badge">Tenant Binding</span>
            </div>
          </div>

          {/* Feature 2: AI Blast Radius */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <h3 className="feature-title">AI & Blast Radius Simulation</h3>
            <p className="feature-desc">
              Deterministic Python ML Engine evaluates CVE vectors, computes EPSS exploitation probabilities, models downstream asset dependencies, and simulates attack posture before touching endpoints.
            </p>
            <div className="feature-badge-list">
              <span className="feature-badge">Port 8000 ML Engine</span>
              <span className="feature-badge">EPSS & CVSS Scoring</span>
              <span className="feature-badge">Attack Graph Tree</span>
            </div>
          </div>

          {/* Feature 3: 3-Horizon Remediation */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
            </div>
            <h3 className="feature-title">3-Horizon Structured Mitigation</h3>
            <p className="feature-desc">
              Organizes remediation into Horizon 1 (Immediate Containment), Horizon 2 (Short-Term Patching), and Horizon 3 (Zero-Trust Hardening) with database-persisted task pipelines.
            </p>
            <div className="feature-badge-list">
              <span className="feature-badge">Immediate Isolation</span>
              <span className="feature-badge">Automated Patching</span>
              <span className="feature-badge">Zero-Trust Hardening</span>
            </div>
          </div>

          {/* Feature 4: 4-Tier Separation of Duties */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="feature-title">4-Tier Governance & Separation of Duties</h3>
            <p className="feature-desc">
              Enforced at the SQL constraint level. Tier 1 & 2 permit fast admin self-approval to eliminate incident deadlocks, while Tier 3 destructive tasks mandate dual named SuperAdmins and RFC 6238 TOTP MFA.
            </p>
            <div className="feature-badge-list">
              <span className="feature-badge">SQL check_separation</span>
              <span className="feature-badge">Analyst Zero-Write</span>
              <span className="feature-badge">Dual SuperAdmin Sign-Off</span>
            </div>
          </div>

          {/* Feature 5: Signed Fleet Dispatch */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            </div>
            <h3 className="feature-title">Cryptographic Fleet Dispatch & PKI</h3>
            <p className="feature-desc">
              Universal Go agent for Windows and Linux. Dispatched commands are canonically signed with RSA-2048 keys, governed by emergency kill-switches and a 5-host/5-min blast throttle.
            </p>
            <div className="feature-badge-list">
              <span className="feature-badge">RSA-SHA256 Signing</span>
              <span className="feature-badge">Kill-Switch Gate</span>
              <span className="feature-badge">LVM Pre-flight Snapshot</span>
            </div>
          </div>

          {/* Feature 6: Merkle Ledger */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="12" cy="14" r="2"/></svg>
            </div>
            <h3 className="feature-title">Merkle Hash Audit & Continuous Compliance</h3>
            <p className="feature-desc">
              Every action, sign-off, and state change produces an immutable SHA-256 Merkle hash chain. Map evidence seamlessly to SOC 2 Type II, ISO 27001, NIST CSF 2.0, HIPAA, and PCI-DSS.
            </p>
            <div className="feature-badge-list">
              <span className="feature-badge">Tamper-Proof Audit</span>
              <span className="feature-badge">SOC 2 Type II Ready</span>
              <span className="feature-badge">Immutable Chain</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
