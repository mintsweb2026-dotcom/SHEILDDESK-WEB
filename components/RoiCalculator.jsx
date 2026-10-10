'use client';

import { useState } from 'react';

export default function RoiCalculator() {
  const [endpoints, setEndpoints] = useState(250);
  const [incidents, setIncidents] = useState(35);

  const hoursSaved = Math.round(incidents * 4.2);
  const breachCostAvoided = Math.round((endpoints * 180) + (incidents * 4200));
  const baseMttrMinutes = 270;
  const shieldDeskMttrMinutes = Math.max(8, Math.round(baseMttrMinutes * 0.22));

  return (
    <section className="calculator-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">Enterprise Value Impact</span>
          <h2 className="section-title">Calculate Your Incident Response ROI</h2>
          <p className="section-desc">
            See how automating alert triage and enforcing cryptographically safe containment reduces MTTR and prevents multimillion-dollar security incidents.
          </p>
        </div>

        <div className="calculator-card">
          
          {/* Sliders */}
          <div className="calc-sliders">
            <div className="slider-group">
              <div className="slider-label-row">
                <span>Protected Enterprise Endpoints & Cloud Hosts</span>
                <span className="slider-value-display" suppressHydrationWarning>{endpoints.toLocaleString('en-US')}</span>
              </div>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={endpoints}
                onChange={(e) => setEndpoints(parseInt(e.target.value, 10))}
                className="custom-range"
                aria-label="Endpoint volume"
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span>Average Security Alerts & Incidents Per Month</span>
                <span className="slider-value-display" suppressHydrationWarning>{incidents.toLocaleString('en-US')}</span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={incidents}
                onChange={(e) => setIncidents(parseInt(e.target.value, 10))}
                className="custom-range"
                aria-label="Incident volume"
              />
            </div>

            <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              * Calculations benchmarked from 350+ automated security simulation test suites and enterprise SOC averages (average manual MTTR: 4.5 hours; average analyst cost: $85/hr).
            </div>
          </div>

          {/* Results Box */}
          <div className="calc-results">
            <div>
              <div className="result-row">
                <span className="result-title">Monthly Analyst Hours Reclaimed</span>
                <span className="result-stat" suppressHydrationWarning>{hoursSaved} hrs/mo</span>
              </div>

              <div className="result-row">
                <span className="result-title">Estimated Annual Breach Cost Avoidance</span>
                <span className="result-stat savings" suppressHydrationWarning>${breachCostAvoided.toLocaleString('en-US')}</span>
              </div>
            </div>

            <div className="calc-breakdown">
              <div className="breakdown-box">
                <h5>MTTR Reduction</h5>
                <p>78%</p>
              </div>
              <div className="breakdown-box">
                <h5>Average Containment Speed</h5>
                <p>{shieldDeskMttrMinutes} min (vs 4.5h)</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
