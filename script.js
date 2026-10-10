/**
 * SHIELD DESK™ — Interactive Platform Script
 * Handles Showcase Tabs, Live Incident Simulator, Pricing Toggle,
 * ROI Calculator, Lightbox, Theme Switcher, and Toast Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initShowcaseTabs();
  initSimulator();
  initRoiCalculator();
  initPricingToggle();
  initFaqAccordion();
  initCopyButtons();
  initLightbox();
  initMobileMenu();
});

/* ===================================================================
   1. THEME SWITCHER (Mints ERP Forest Dark / Sage Light)
   =================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const heroForestBtn = document.getElementById('heroForestDarkBtn');
  const heroSageBtn = document.getElementById('heroSageLightBtn');

  const savedTheme = localStorage.getItem('shielddesk-theme') || 'light';
  setTheme(savedTheme, false);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next, true);
    });
  }

  if (heroForestBtn) {
    heroForestBtn.addEventListener('click', () => {
      setTheme('dark', true);
    });
  }

  if (heroSageBtn) {
    heroSageBtn.addEventListener('click', () => {
      setTheme('light', true);
    });
  }
}

function setTheme(theme, triggerToast) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('shielddesk-theme', theme);
  updateThemeIcon(theme);
  updateHeroThemeButtons(theme);

  if (triggerToast) {
    const label = theme === 'dark' ? 'Signature Forest Dark (#0a0e0b)' : 'Sage Light (Mints Green)';
    showToast(`Switched to ${label}`);
  }
}

function updateHeroThemeButtons(theme) {
  const heroForestBtn = document.getElementById('heroForestDarkBtn');
  const heroSageBtn = document.getElementById('heroSageLightBtn');
  if (!heroForestBtn || !heroSageBtn) return;

  if (theme === 'dark') {
    heroForestBtn.style.background = '#A5BD79';
    heroForestBtn.style.color = '#0a0e0b';
    heroForestBtn.style.borderColor = '#A5BD79';

    heroSageBtn.style.background = 'transparent';
    heroSageBtn.style.color = 'var(--text-secondary)';
    heroSageBtn.style.borderColor = 'var(--border-subtle)';
  } else {
    heroSageBtn.style.background = '#687838';
    heroSageBtn.style.color = '#ffffff';
    heroSageBtn.style.borderColor = '#687838';

    heroForestBtn.style.background = 'transparent';
    heroForestBtn.style.color = 'var(--text-secondary)';
    heroForestBtn.style.borderColor = 'var(--border-subtle)';
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'dark') {
    // Sun icon for switching to Sage Light
    icon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else {
    // Moon icon for switching to Forest Dark
    icon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
}

/* ===================================================================
   2. PRODUCT SHOWCASE TABS (Chatwoot style preview)
   =================================================================== */
const showcaseData = {
  'soc': {
    title: 'Security Operations & Incident Workspace',
    desc: 'Real-time incident triage console featuring live telemetry correlation (CrowdStrike Falcon, Microsoft Defender, Wazuh), severity classification, attack timeline visualization, and autonomous AI copilot investigation trigger.',
    img: 'assets/screenshots/soc-incident-workspace.png',
    address: 'https://app.shielddesk.io/dashboard/incidents/INC-8094',
    badge: 'Live SOC Ingestion'
  },
  'scorecard': {
    title: 'Executive Risk Scorecard & Cyber Posture Index',
    desc: 'CISO and executive intelligence dashboard displaying organizational Cyber Posture Index, estimated financial loss avoided, active threats contained, benchmark MTTD/MTTR response velocity, and role-based operator persona switching.',
    img: 'assets/screenshots/risk-scorecard.png',
    address: 'https://app.shielddesk.io/dashboard/executive-scorecard',
    badge: 'Board-Level Metrics'
  },
  'fleet': {
    title: 'Fleet Management & Endpoint PKI Authority',
    desc: 'Enterprise endpoint fleet control plane displaying mTLS X.509 certificate lifecycles, Go universal agent heartbeats (Windows/Linux), host isolation state, and cryptographically signed command dispatch queues.',
    img: 'assets/screenshots/fleet-management.png',
    address: 'https://app.shielddesk.io/dashboard/fleet/pki-cluster-01',
    badge: 'mTLS X.509 PKI'
  },
  'remediation': {
    title: '3-Horizon Remediation Planning & Governance',
    desc: 'Structured 3-horizon remediation orchestrator (Immediate Containment, Short-Term Patching, Long-Term Zero-Trust Hardening) with 4-tier human governance, separation-of-duties enforcement, and RFC 6238 TOTP MFA gates.',
    img: 'assets/screenshots/remediation-plans.png',
    address: 'https://app.shielddesk.io/dashboard/remediation/3-horizon',
    badge: 'Dual-Custody Gates'
  },
  'threat-intel': {
    title: 'Native YARA Malware Threat Engine',
    desc: 'High-performance native YARA malware detection engine featuring AST lexer/parser sandbox, real-time ruleset compiler, custom rule syntax validator, and streaming telemetry match monitors.',
    img: 'assets/screenshots/threat-intel-yara.png',
    address: 'https://app.shielddesk.io/dashboard/intel/yara-compiler',
    badge: 'Native AST Compiler'
  },
  'compliance': {
    title: 'Continuous Compliance Matrix & Audit Evidence Vault',
    desc: 'Automated regulatory compliance mapping across SOC 2 Type II, ISO 27001:2022, NIST CSF 2.0, HIPAA Security Rule, and PCI-DSS v4.0 with SHA-256 Merkle hash-chain tamper-evident audit ledgers.',
    img: 'assets/screenshots/compliance-matrix.png',
    address: 'https://app.shielddesk.io/dashboard/compliance/merkle-vault',
    badge: 'SHA-256 Merkle Vault'
  },
  'vulnerability': {
    title: 'Vulnerability & Secret Scanner Console',
    desc: 'Deep filesystem and container security scanner integrating Aqua Security Trivy for CVE identification and Gitleaks for high-entropy credential and private key leak detection across source trees.',
    img: 'assets/screenshots/vulnerability-scanner.png',
    address: 'https://app.shielddesk.io/dashboard/scanners/trivy-gitleaks',
    badge: 'Trivy + Gitleaks'
  },
  'onboarding': {
    title: '4-Step Self-Service Enterprise Onboarding',
    desc: 'Zero-friction organizational onboarding wizard generating tenant-scoped API keys, one-line universal PowerShell/Bash agent installation commands, and SaaS quota provisioning.',
    img: 'assets/screenshots/onboarding-wizard.png',
    address: 'https://app.shielddesk.io/onboarding/wizard-step-1',
    badge: 'Zero-Touch Deploy'
  }
};

function initShowcaseTabs() {
  const tabButtons = document.querySelectorAll('.showcase-tab-btn');
  const mainImg = document.getElementById('showcaseMainImg');
  const titleEl = document.getElementById('showcaseTitle');
  const descEl = document.getElementById('showcaseDesc');
  const addressEl = document.getElementById('showcaseAddress');
  const badgeEl = document.getElementById('showcaseBadge');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      const data = showcaseData[tabKey];
      if (!data) return;

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = data.img;
          mainImg.alt = data.title;
          mainImg.style.opacity = '1';
        }, 150);
      }

      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (addressEl) addressEl.textContent = data.address;
      if (badgeEl) badgeEl.textContent = data.badge;
    });
  });
}

/* ===================================================================
   3. INTERACTIVE INCIDENT SANDBOX (Live Simulator)
   =================================================================== */
const scenarios = {
  'ransomware': {
    name: 'Ransomware Stager Detected',
    severity: 'critical',
    desc: 'CrowdStrike Falcon detected suspicious beaconing on db-cluster-04 with attempted volume shadow copy purge.',
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
    name: 'Bastion Credential Leak & Lateral Probe',
    severity: 'high',
    desc: 'Gitleaks flagged leaked production SSH keys in git commit, followed by abnormal bastion session spikes.',
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
    name: 'Zero-Day Fleet-Wide Kernel Escalation',
    severity: 'critical',
    desc: 'Wazuh SIEM identified unauthorized root privilege escalation payload injected into 8 core backend hosts.',
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

let currentScenarioKey = 'ransomware';
let currentSimStep = 1;

function initSimulator() {
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  const runBtn = document.getElementById('simNextStepBtn');
  const resetBtn = document.getElementById('simResetBtn');

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScenarioKey = btn.getAttribute('data-scenario');
      currentSimStep = 1;
      renderSimulatorStep();
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (currentSimStep < 4) {
        currentSimStep++;
      } else {
        currentSimStep = 1;
      }
      renderSimulatorStep();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentSimStep = 1;
      renderSimulatorStep();
    });
  }

  renderSimulatorStep();
}

function renderSimulatorStep() {
  const scen = scenarios[currentScenarioKey];
  const outputCode = document.getElementById('sandboxConsoleOutput');
  const stepIndicators = document.querySelectorAll('.pipe-step');
  const statusBadge = document.getElementById('sandboxStatusBadge');
  const runBtn = document.getElementById('simNextStepBtn');

  // Update step indicators
  stepIndicators.forEach((ind, index) => {
    const stepNum = index + 1;
    ind.classList.remove('active', 'completed');
    if (stepNum === currentSimStep) {
      ind.classList.add('active');
    } else if (stepNum < currentSimStep) {
      ind.classList.add('completed');
    }
  });

  const now = new Date().toISOString().substring(11, 19);

  if (currentSimStep === 1) {
    statusBadge.innerHTML = `<span class="pulse-dot" style="background:#00e5ff;"></span> Ingesting Telemetry & Secret Scrubbing`;
    runBtn.innerHTML = `Execute AI Blast Radius & Investigation →`;
    outputCode.innerHTML = `
<div class="log-line"><span class="log-time">[${now}]</span> <span>[INGESTION] Received telemetry webhook from <strong>${scen.rawPayload.source}</strong> for incident <strong>${scen.rawPayload.alert_id}</strong></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[REDACTOR] Running <code>src/lib/security/redactor.ts</code> regex sanitization engine...</span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[SCRUBBED] Secret token sanitized: <span class="log-scrubbed">[REDACTED_API_KEY]</span></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[SCRUBBED] Cryptographic credential sanitized: <span class="log-scrubbed">[REDACTED_PRIVATE_KEY]</span></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span class="log-proof">✓ Payload normalized and saved to PostgreSQL without raw secret persistence.</span></div>
`;
  } else if (currentSimStep === 2) {
    statusBadge.innerHTML = `<span class="pulse-dot" style="background:#f59e0b;"></span> AI Blast Radius & Vulnerability ML Model`;
    runBtn.innerHTML = `Verify Autonomy Governance & Dual Approval →`;
    outputCode.innerHTML = `
<div class="log-line"><span class="log-time">[${now}]</span> <span>[ML_ENGINE] Invoking Python Vulnerability ML Engine on port 8000 for <strong>${scen.rawPayload.compromise_vector}</strong></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[CVSS/EPSS] Calculated CVSS 9.8 (Critical) | EPSS Exploitation Probability: <strong>89.4%</strong></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[BLAST_RADIUS] Simulating attack graph: <strong>${scen.nodesAffected} downstream dependent services</strong> at risk</span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[AUTONOMY] Autonomy Tier determined: <strong style="color:var(--accent-amber);">${scen.tier}</strong></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span class="log-proof">✓ 3-Horizon Remediation Plan drafted: Horizon 1 Containment recommended.</span></div>
`;
  } else if (currentSimStep === 3) {
    statusBadge.innerHTML = `<span class="pulse-dot" style="background:#a855f7;"></span> Dual-Custody Approval & Separation of Duties`;
    runBtn.innerHTML = `Sign Command with RSA-2048 & Dispatch →`;
    outputCode.innerHTML = `
<div class="log-line"><span class="log-time">[${now}]</span> <span>[GOVERNANCE] Evaluating policy for <strong>${scen.tier}</strong>: ${scen.tierDesc}</span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[SOD_CHECK] Database constraint <code>check_separation_of_duties</code> checked: <strong>PASS</strong></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[MFA] Operator (admin@mints.ai) provided RFC 6238 TOTP token: <span class="log-proof">VERIFIED (TOTP 491-038)</span></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[APPROVAL] Mitigation Token generated: <code>tok_live_8f3a92b1cd048e91</code> (Status: Approved)</span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span class="log-proof">✓ Human-in-the-loop governance sign-off completed. Task released to dispatch queue.</span></div>
`;
  } else if (currentSimStep === 4) {
    statusBadge.innerHTML = `<span class="pulse-dot" style="background:#10b981;"></span> Cryptographically Signed Dispatch & Merkle Ledger`;
    runBtn.innerHTML = `Reset / Run Another Simulation ↺`;
    outputCode.innerHTML = `
<div class="log-line"><span class="log-time">[${now}]</span> <span>[PKI_DISPATCH] Formatting canonical payload: <code>${scen.command} | nonce_9024 | ${scen.tier}</code></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[RSA-2048] Signed with Tenant Authority Private Key (SHA256withRSA)</span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[THROTTLE] Blast-radius throttle check (max 5 hosts / 5 min): <strong>1/5 within threshold</strong></span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span>[AGENT_EXEC] Remote Go Universal Daemon pre-flight snapshot confirmed -> Executing command</span></div>
<div class="log-line"><span class="log-time">[${now}]</span> <span class="log-proof">✓ Tamper-proof Merkle Hash appended: <code>current_hash = SHA256(prev_hash + 40c9f1a8...)</code></span></div>
`;
  }
}

/* ===================================================================
   4. INTERACTIVE ROI & BREACH PREVENTION CALCULATOR
   =================================================================== */
function initRoiCalculator() {
  const endpointsSlider = document.getElementById('sliderEndpoints');
  const incidentsSlider = document.getElementById('sliderIncidents');
  const endpointsVal = document.getElementById('endpointsVal');
  const incidentsVal = document.getElementById('incidentsVal');
  
  const hoursSavedEl = document.getElementById('calcHoursSaved');
  const breachCostEl = document.getElementById('calcBreachCost');
  const mttrReductionEl = document.getElementById('calcMttrReduction');
  const mttrTimeEl = document.getElementById('calcMttrTime');

  function calculate() {
    const endpoints = parseInt(endpointsSlider.value, 10);
    const incidents = parseInt(incidentsSlider.value, 10);

    endpointsVal.textContent = endpoints.toLocaleString();
    incidentsVal.textContent = incidents.toLocaleString();

    // ShieldDesk saves ~4.2 operator hours per investigated & mitigated incident
    const hoursSavedMonth = Math.round(incidents * 4.2);
    // Typical enterprise breach probability reduction value based on endpoint volume
    const estimatedLossAvoided = Math.round((endpoints * 180) + (incidents * 4200));
    // MTTR reduced by 78% average (from 4.5 hours down to ~12 minutes)
    const baseMttrMinutes = 270;
    const shieldDeskMttrMinutes = Math.max(8, Math.round(baseMttrMinutes * 0.22));

    if (hoursSavedEl) hoursSavedEl.textContent = `${hoursSavedMonth} hrs/mo`;
    if (breachCostEl) breachCostEl.textContent = `$${estimatedLossAvoided.toLocaleString()}`;
    if (mttrReductionEl) mttrReductionEl.textContent = '78%';
    if (mttrTimeEl) mttrTimeEl.textContent = `${shieldDeskMttrMinutes} min (vs 4.5h)`;
  }

  if (endpointsSlider && incidentsSlider) {
    endpointsSlider.addEventListener('input', calculate);
    incidentsSlider.addEventListener('input', calculate);
    calculate();
  }
}

/* ===================================================================
   5. PRICING TOGGLE (Monthly / Annual)
   =================================================================== */
function initPricingToggle() {
  const toggle = document.getElementById('billingToggle');
  const proPriceEl = document.getElementById('proPriceAmount');
  const proPeriodEl = document.getElementById('proPricePeriod');

  if (toggle && proPriceEl) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        // Annual: $39/mo billed annually
        proPriceEl.textContent = '39';
        proPeriodEl.textContent = '/ month (billed annually)';
        showToast('Applied 20% annual discount!');
      } else {
        // Monthly: $49/mo
        proPriceEl.textContent = '49';
        proPeriodEl.textContent = '/ month (billed monthly)';
      }
    });
  }
}

/* ===================================================================
   6. FAQ ACCORDION
   =================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* ===================================================================
   7. COPY TO CLIPBOARD BUTTONS
   =================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-trigger');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text') || 'curl -sSL https://get.shielddesk.io | bash';
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Copied to clipboard: ' + textToCopy);
      }).catch(() => {
        showToast('Failed to copy. Please manually copy the command.');
      });
    });
  });
}

/* ===================================================================
   8. LIGHTBOX PREVIEW
   =================================================================== */
function initLightbox() {
  const zoomBtn = document.getElementById('zoomShowcaseBtn');
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const mainImg = document.getElementById('showcaseMainImg');

  if (zoomBtn && modal && lightboxImg) {
    zoomBtn.addEventListener('click', () => {
      if (mainImg) {
        lightboxImg.src = mainImg.src;
        lightboxImg.alt = mainImg.alt;
      }
      modal.classList.add('active');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

/* ===================================================================
   9. MOBILE MENU
   =================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close when clicking on any menu link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ===================================================================
   10. TOAST NOTIFICATIONS
   =================================================================== */
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="22 4 12 14.01 9 11.01" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
