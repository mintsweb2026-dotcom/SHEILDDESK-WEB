export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Brand Col */}
          <div className="footer-brand footer-col-brand">
            <a href="#" className="brand-logo">
              <div className="brand-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div className="brand-name">
                <span>ShieldDesk</span><span className="brand-tm">™</span>
              </div>
            </a>
            <p>
              See Risk. Act With Confidence. Evidence-driven security operations and cryptographic remediation control plane.
            </p>
            <div className="footer-status-pill">
              <span className="pulse-dot"></span>
              <span>All Systems Operational &bull; 99.99% Uptime</span>
            </div>
          </div>

          {/* Product Col */}
          <div className="footer-col">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#showcase">SOC Workspace</a></li>
              <li><a href="#showcase">Executive Scorecard</a></li>
              <li><a href="#showcase">Fleet & PKI Authority</a></li>
              <li><a href="#showcase">3-Horizon Remediation</a></li>
              <li><a href="#showcase">Native YARA Engine</a></li>
              <li><a href="#showcase">Compliance Audit Vault</a></li>
            </ul>
          </div>

          {/* Architecture Col */}
          <div className="footer-col">
            <h4>Architecture</h4>
            <ul className="footer-links">
              <li><a href="#governance">Autonomy Hierarchy</a></li>
              <li><a href="#governance">Separation of Duties</a></li>
              <li><a href="#features">Secret Scrubbing</a></li>
              <li><a href="#features">Blast Radius Engine</a></li>
              <li><a href="#features">mTLS Command Signing</a></li>
              <li><a href="#features">Merkle Hash Ledger</a></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/Mints-ai/SHIELD-DESK/blob/main/README.md" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://github.com/Mints-ai/SHIELD-DESK" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="https://github.com/Mints-ai/SHIELD-DESK/releases" target="_blank" rel="noopener noreferrer">Release Notes</a></li>
              <li><a href="#simulator">Interactive Sandbox</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#faq">Enterprise FAQ</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="https://mintsglobal.ae" target="_blank" rel="noopener noreferrer">Mints Global</a></li>
              <li><a href="https://erp.mintsglobal.ae" target="_blank" rel="noopener noreferrer">Mints ERP</a></li>
              <li><a href="mailto:security@mintsglobal.ae">Security Advisory</a></li>
              <li><a href="mailto:sales@mintsglobal.ae">Contact Sales</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 Mints Global IT & Advertisement LLC. All rights reserved. ShieldDesk™ is a trademark of Mints Global.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#">SOC 2 Type II</a>
            <a href="#">ISO 27001:2022</a>
            <a href="#">NIST CSF 2.0</a>
            <a href="#">HIPAA Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
