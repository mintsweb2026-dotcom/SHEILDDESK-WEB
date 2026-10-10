export default function GovernanceMatrix() {
  return (
    <section className="governance-section" id="governance">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Cryptographic Governance</span>
          <h2 className="section-title">Strict 4-Tier Autonomy & Permission Hierarchy</h2>
          <p className="section-desc">
            ShieldDesk enforces strict mathematical boundaries between read-only observability and endpoint modification.
          </p>
        </div>

        <div className="governance-table-card">
          <div className="table-responsive">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Autonomy Tier</th>
                  <th>Classification</th>
                  <th>Execution Policy</th>
                  <th>Required Sign-Off</th>
                  <th>Eligible Approvers</th>
                  <th>Example Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="tier-pill tier-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/></svg>
                      Tier 0
                    </span>
                  </td>
                  <td><strong>Observation Only</strong></td>
                  <td>Autonomous read & telemetry visualization</td>
                  <td><strong>0</strong> (Fully Autonomous)</td>
                  <td>System Daemon</td>
                  <td>Attack surface mapping, CVSS calculation, blast radius simulation</td>
                </tr>
                <tr>
                  <td>
                    <span className="tier-pill tier-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Tier 1
                    </span>
                  </td>
                  <td><strong>Low-Risk / Reversible</strong></td>
                  <td>Pre-flight snapshot + rate-throttled dispatch</td>
                  <td><strong>1 Approver</strong> (Self-approval allowed)</td>
                  <td><code>system_admin</code>, <code>super_admin</code>, <code>responder</code></td>
                  <td>Revoke user sessions, block outbound domain, blacklist IP on gateway</td>
                </tr>
                <tr>
                  <td>
                    <span className="tier-pill tier-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      Tier 2
                    </span>
                  </td>
                  <td><strong>Containment / Isolation</strong></td>
                  <td>Human Sign-Off Required + RFC 6238 TOTP MFA</td>
                  <td><strong>1 Approver</strong> (Fast Containment)</td>
                  <td><code>system_admin</code>, <code>super_admin</code>, <code>responder</code></td>
                  <td>Quarantine endpoint NIC, isolate database host, deploy OS patch</td>
                </tr>
                <tr>
                  <td>
                    <span className="tier-pill tier-3">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/></svg>
                      Tier 3
                    </span>
                  </td>
                  <td><strong>Break-Glass / Destructive</strong></td>
                  <td>Dual Named SuperAdmin + Strict SoD + Mandatory MFA</td>
                  <td><strong>2 Distinct Admins</strong> (No self-approval)</td>
                  <td>Dual <code>super_admin</code> or <code>system_admin</code></td>
                  <td>Fleet-wide credential rotation, kernel patch reboot, firewall wipe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Separation of duties rule callout */}
        <div className="sod-callout">
          <div className="sod-content">
            <h4>Database-Enforced Separation of Duties Invariant</h4>
            <p>
              Constraint <code>check_separation_of_duties</code> ensures that for Tier 3 destructive actions, requester cannot approve their own request, and two distinct administrators must independently sign off with hardware tokens. Analysts maintain <strong>strict zero write or sign-off authority</strong>.
            </p>
          </div>
          <a
            href="https://github.com/Mints-ai/SHIELD-DESK/blob/main/db/schema.sql"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            View db/schema.sql &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
