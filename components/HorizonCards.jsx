export default function HorizonCards() {
  return (
    <section className="horizon-section" id="horizons">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Incident Response Lifecycle</span>
          <h2 className="section-title">The 3-Horizon Remediation Framework</h2>
          <p className="section-desc">
            ShieldDesk structures containment into three clear operational horizons to prevent both immediate data exfiltration and long-term recurrence.
          </p>
        </div>

        <div className="horizon-grid">
          
          {/* Horizon 1 */}
          <div className="horizon-card h1">
            <span className="horizon-tag">Horizon 1 &bull; Minutes</span>
            <h3 className="horizon-title">Immediate Containment</h3>
            <p className="horizon-desc">
              Immediate cryptographic severance of adversary access vectors. Eliminates command-and-control communication while preserving volatile forensic memory.
            </p>
            <ul className="horizon-tasks">
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Quarantine host network interfaces & flush ARP tables</span>
              </li>
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Invalidate all active OAuth session tokens and cookies</span>
              </li>
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Trigger pre-flight LVM snapshot before executing isolation</span>
              </li>
            </ul>
          </div>

          {/* Horizon 2 */}
          <div className="horizon-card h2">
            <span className="horizon-tag">Horizon 2 &bull; Hours</span>
            <h3 className="horizon-title">Short-Term Patching</h3>
            <p className="horizon-desc">
              Rapid remediation of root-cause vulnerabilities identified by Trivy CVE scans and ML exploitation probability predictions.
            </p>
            <ul className="horizon-tasks">
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Apply verified vendor security packages across fleet</span>
              </li>
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Quarantine suspicious payload binaries and DLL drops</span>
              </li>
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Rotate compromised service account tokens and secrets</span>
              </li>
            </ul>
          </div>

          {/* Horizon 3 */}
          <div className="horizon-card h3">
            <span className="horizon-tag">Horizon 3 &bull; Days / Weeks</span>
            <h3 className="horizon-title">Long-Term Zero Trust</h3>
            <p className="horizon-desc">
              Permanent architectural hardening to structurally eliminate the entire attack class and satisfy continuous regulatory compliance matrices.
            </p>
            <ul className="horizon-tasks">
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Deploy microsegmentation firewall rules across cloud VPCs</span>
              </li>
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Implement strict mTLS X.509 certificate authentication</span>
              </li>
              <li className="horizon-task-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Anchor incident remediation proof to Merkle audit vault</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
