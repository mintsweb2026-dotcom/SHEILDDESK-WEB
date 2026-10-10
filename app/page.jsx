import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ShowcaseTabs from '../components/ShowcaseTabs';
import IncidentSimulator from '../components/IncidentSimulator';
import GovernanceMatrix from '../components/GovernanceMatrix';
import HorizonCards from '../components/HorizonCards';
import FeatureGrid from '../components/FeatureGrid';
import RoiCalculator from '../components/RoiCalculator';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

// Force dynamic Server-Side Rendering (SSR) on every request
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Server-Side Rendered telemetry & dynamic metadata
  const serverTimestamp = new Date().toUTCString();

  return (
    <div className="shielddesk-app-wrapper">
      
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        
        {/* Hero Section */}
        <HeroSection />


        {/* Product Showcase Tabs (Chatwoot style + Mints ERP window frame) */}
        <ShowcaseTabs />

        {/* Enterprise Metrics & Impact Proof Bar */}
        <section className="metrics-banner-section">
          <div className="container">
            <div className="metrics-banner-grid">
              <div className="metric-banner-item">
                <div className="metric-banner-value">99.4%</div>
                <div className="metric-banner-label">Alert Fatigue Redacted</div>
                <div className="metric-banner-sub">Deterministic regex scrubbing before disk</div>
              </div>
              <div className="metric-banner-item">
                <div className="metric-banner-value">&lt; 59s</div>
                <div className="metric-banner-label">Mean Time to Contain (MTTC)</div>
                <div className="metric-banner-sub">Immediate Horizon 1 network isolation</div>
              </div>
              <div className="metric-banner-item">
                <div className="metric-banner-value">0 Drift</div>
                <div className="metric-banner-label">Reversible Blast Radius</div>
                <div className="metric-banner-sub">Pre-flight LVM snapshot before any action</div>
              </div>
              <div className="metric-banner-item">
                <div className="metric-banner-value">100%</div>
                <div className="metric-banner-label">Cryptographic Proof</div>
                <div className="metric-banner-sub">Dual-custody approval & Merkle audit ledger</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Ingestion Ecosystem */}
        <section className="partner-section">
          <div className="container">
            <div className="partner-header-wrapper">
              <span className="partner-eyebrow">Enterprise Integrations</span>
              <h2 className="partner-heading">Native Bi-Directional Telemetry & Vulnerability Ingestion</h2>
              <p className="partner-subheading">
                Zero proprietary lock-in. Connect your existing EDR, SIEM, and container security scanners with instant normalization.
              </p>
            </div>

            <div className="partner-grid">
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">CrowdStrike Falcon</span>
                  <span className="partner-tag">EDR &bull; Webhooks</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">Microsoft Defender</span>
                  <span className="partner-tag">XDR &bull; Graph API</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">Wazuh SIEM</span>
                  <span className="partner-tag">Open SIEM &bull; Syslog</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">Aqua Trivy v0.74</span>
                  <span className="partner-tag">CVE &bull; SBOM</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">Gitleaks v8.30</span>
                  <span className="partner-tag">Entropy Secret Scrub</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">Supabase Cloud</span>
                  <span className="partner-tag">Realtime Telemetry</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">PostgreSQL 16+</span>
                  <span className="partner-tag">ACID Merkle Ledger</span>
                </div>
              </div>
              <div className="partner-logo-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
                <div className="partner-item-info">
                  <span className="partner-name">AWS GuardDuty</span>
                  <span className="partner-tag">CloudTrail & S3</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Interactive Incident Simulator (Live Sandbox) */}
        <IncidentSimulator />


        {/* Core Architectural Pillars / Bento Grid */}
        <FeatureGrid />


        {/* Autonomy Tiers & Governance Hierarchy Table */}
        <GovernanceMatrix />


        {/* 3-Horizon Remediation Framework */}
        <HorizonCards />


        {/* Interactive ROI & Breach Cost Prevention Calculator */}
        <RoiCalculator />


        {/* Transparent Pricing Section */}
        <PricingSection />


        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Bottom CTA Banner */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-glow"></div>
              <h2 className="cta-title">Ready to Replace Alert Fatigue with Cryptographic Proof?</h2>
              <p className="cta-subtitle">
                Deploy the ShieldDesk control plane in minutes. Protect your endpoints with multi-cloud telemetry, blast radius simulations, and zero-drift remediation.
              </p>
              <div className="cta-buttons">
                <a href="#simulator" className="btn btn-primary btn-lg">
                  Request a Live Demo
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
                <a href="https://github.com/Mints-ai/SHIELD-DESK" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  View Source on GitHub ★
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
