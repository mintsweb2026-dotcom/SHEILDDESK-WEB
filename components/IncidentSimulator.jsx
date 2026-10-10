'use client';

import { useState } from 'react';

const scenarios = {
  'ransomware': {
    name: 'Ransomware Stager',
    severity: 'critical',
    desc: 'CrowdStrike beaconing on db-cluster-04 with attempted VSS purge.',
    rawPayload: {
      alert_id: "CS-88194",
      source: "CrowdStrike Falcon",
      target_host: "db-cluster-04.prod.vpc",
      compromise_vector: "CVE-2024-38077 Windows RCE",
      attacker_ip: "198.51.100.74",
      leaked_auth: "AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE",
      priv_key: "-----BEGIN RSA PRIVATE KEY----- MIIEowIBAAKCAQEA0... [SECRET]"
    },
    tier: 'Tier 2',
    tierDesc: 'Medium-Risk Host Isolation (Requires 1 System Admin MFA sign-off)',
    command: 'ISOLATE_HOST --agent=win-db-04 --revoke-arp --snapshot=lvm0',
    nodesAffected: 4
  },
  'credential': {
    name: 'Bastion Credential Leak',
    severity: 'high',
    desc: 'Gitleaks private key commit followed by abnormal SSH spikes.',
    rawPayload: {
      alert_id: "GL-44021",
      source: "Gitleaks + Defender",
      target_host: "bastion-gateway-01",
      compromise_vector: "High Entropy Private Key Leak",
      attacker_ip: "203.0.113.19",
      leaked_auth: "GITHUB_TOKEN=ghp_9fX2abc89EXAMPLETOKEN99",
      priv_key: "id_ed25519 root access key leak in repository"
    },
    tier: 'Tier 1',
    tierDesc: 'Low-Risk Reversible Session Revocation (Automated snapshot + rate-throttled dispatch)',
    command: 'REVOKE_SESSIONS --user=bastion-admin --flush-tokens --rate-limit=5/5m',
    nodesAffected: 1
  },
  'zero-day': {
    name: 'Kernel Escalation Zero-Day',
    severity: 'critical',
    desc: 'Wazuh SIEM detected root exploit payload on 8 core fleet nodes.',
    rawPayload: {
      alert_id: "WZ-99014",
      source: "Wazuh SIEM",
      target_host: "fleet-core-[01..08]",
      compromise_vector: "Linux Kernel Local Privilege Escalation",
      attacker_ip: "45.33.32.156",
      leaked_auth: "SERVICE_ACCOUNT_TOKEN=eyJhbGciOiJSUzI1NiIsIn...",
      priv_key: "Root exploit binary detected in /dev/shm/.kexec"
    },
    tier: 'Tier 3',
    tierDesc: 'Break-Glass Destructive Rotation (Strict Dual Named SuperAdmin Sign-Off + TOTP MFA)',
    command: 'FLEET_ROTATE_ROOT_CREDENTIALS --scope=fleet-core --hard-reboot',
    nodesAffected: 8
  }
};

export default function IncidentSimulator() {
  const [scenarioKey, setScenarioKey] = useState('ransomware');
  const [step, setStep] = useState(1);

  const scen = scenarios[scenarioKey];
  const now = '22:15:00 UTC';

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  const reset = () => setStep(1);

  return (
    <section className="simulator-section" id="simulator">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Interactive Live Playground</span>
          <h2 className="section-title">Experience the "Prove Before You Act" Engine</h2>
          <p className="section-desc">
            Test how ShieldDesk intercepts enterprise security telemetry, automatically scrubs credentials with regex patterns, evaluates blast radius, enforces separation of duties, and executes signed mTLS containment.
          </p>
        </div>

        <div className="sandbox-card">
          
          {/* Sidebar */}
          <div className="sandbox-sidebar">
            <div className="sandbox-sidebar-title">Select Attack Scenario</div>
            <div className="scenario-list">
              {Object.keys(scenarios).map((key) => {
                const s = scenarios[key];
                return (
                  <button
                    key={key}
                    className={`scenario-btn ${scenarioKey === key ? 'active' : ''}`}
                    onClick={() => {
                      setScenarioKey(key);
                      setStep(1);
                    }}
                  >
                    <div className="scenario-btn-top">
                      <span className="scenario-title">{s.name}</span>
                      <span className={`scenario-severity severity-${s.severity}`}>
                        {s.severity}
                      </span>
                    </div>
                    <p className="scenario-desc">{s.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Core Invariant Callout */}
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.05em' }}>
                Core System Invariant
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                No remediation command ever executes on an endpoint without a cryptographically verified RSA-2048 dual-custody token.
              </div>
            </div>
          </div>

          {/* Console Main */}
          <div className="sandbox-main">
            
            {/* Stepper */}
            <div className="pipeline-stepper">
              <div className={`pipe-step ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                <div className="pipe-step-num">Step 01 <span>Ingest</span></div>
                <div className="pipe-step-title">Secret Redaction</div>
              </div>
              <div className={`pipe-step ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>
                <div className="pipe-step-num">Step 02 <span>ML Model</span></div>
                <div className="pipe-step-title">AI Blast Radius</div>
              </div>
              <div className={`pipe-step ${step === 3 ? 'active' : step > 3 ? 'completed' : ''}`}>
                <div className="pipe-step-num">Step 03 <span>Governance</span></div>
                <div className="pipe-step-title">Dual-Custody MFA</div>
              </div>
              <div className={`pipe-step ${step === 4 ? 'active' : step > 4 ? 'completed' : ''}`}>
                <div className="pipe-step-num">Step 04 <span>Dispatch</span></div>
                <div className="pipe-step-title">RSA-2048 Signed</div>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="sandbox-output-box">
              <div className="output-header">
                <span>SHIELDDESK SECURITY DAEMON &bull; CONTROL PLANE TELEMETRY STREAM</span>
                <span className="action-status-badge">
                  <span className="pulse-dot"></span>
                  {step === 1 && ' Ingesting Telemetry & Secret Scrubbing'}
                  {step === 2 && ' AI Blast Radius & Vulnerability ML Model'}
                  {step === 3 && ' Dual-Custody Approval & Separation of Duties'}
                  {step === 4 && ' Cryptographically Signed Dispatch & Merkle Ledger'}
                </span>
              </div>
              
              <div className="output-code-lines">
                {step === 1 && (
                  <>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[INGESTION] Received telemetry webhook from <strong>{scen.rawPayload.source}</strong> for incident <strong>{scen.rawPayload.alert_id}</strong></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[REDACTOR] Running <code>src/lib/security/redactor.ts</code> regex sanitization engine...</span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[SCRUBBED] Secret token sanitized: <span className="log-scrubbed">[REDACTED_API_KEY]</span></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[SCRUBBED] Cryptographic credential sanitized: <span className="log-scrubbed">[REDACTED_PRIVATE_KEY]</span></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span className="log-proof">✓ Payload normalized and saved to PostgreSQL without raw secret persistence.</span></div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[ML_ENGINE] Invoking Python Vulnerability ML Engine on port 8000 for <strong>{scen.rawPayload.compromise_vector}</strong></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[CVSS/EPSS] Calculated CVSS 9.8 (Critical) | EPSS Exploitation Probability: <strong>89.4%</strong></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[BLAST_RADIUS] Simulating attack graph: <strong>{scen.nodesAffected} downstream dependent services</strong> at risk</span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[AUTONOMY] Autonomy Tier determined: <strong style={{ color: 'var(--accent-amber)' }}>{scen.tier}</strong></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span className="log-proof">✓ 3-Horizon Remediation Plan drafted: Horizon 1 Containment recommended.</span></div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[GOVERNANCE] Evaluating policy for <strong>{scen.tier}</strong>: {scen.tierDesc}</span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[SOD_CHECK] Database constraint <code>check_separation_of_duties</code> checked: <strong>PASS</strong></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[MFA] Operator (admin@mints.ai) provided RFC 6238 TOTP token: <span className="log-proof">VERIFIED (TOTP 491-038)</span></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[APPROVAL] Mitigation Token generated: <code>tok_live_8f3a92b1cd048e91</code> (Status: Approved)</span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span className="log-proof">✓ Human-in-the-loop governance sign-off completed. Task released to dispatch queue.</span></div>
                  </>
                )}
                {step === 4 && (
                  <>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[PKI_DISPATCH] Formatting canonical payload: <code>{scen.command} | nonce_9024 | {scen.tier}</code></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[RSA-2048] Signed with Tenant Authority Private Key (SHA256withRSA)</span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[THROTTLE] Blast-radius throttle check (max 5 hosts / 5 min): <strong>1/5 within threshold</strong></span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span>[AGENT_EXEC] Remote Go Universal Daemon pre-flight snapshot confirmed -&gt; Executing command</span></div>
                    <div className="log-line"><span className="log-time">[{now}]</span> <span className="log-proof">✓ Tamper-proof Merkle Hash appended: <code>current_hash = SHA256(prev_hash + 40c9f1a8...)</code></span></div>
                  </>
                )}
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="sandbox-controls">
              <button className="btn btn-primary" onClick={nextStep}>
                {step === 1 && 'Execute AI Blast Radius & Investigation →'}
                {step === 2 && 'Verify Autonomy Governance & Dual Approval →'}
                {step === 3 && 'Sign Command with RSA-2048 & Dispatch →'}
                {step === 4 && 'Reset / Run Another Simulation ↺'}
              </button>
              <button className="btn btn-secondary btn-sm" onClick={reset}>
                Reset Simulator
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
