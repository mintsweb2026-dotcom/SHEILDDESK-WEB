import './globals.css';
import '../refine.css';

export const metadata = {
  metadataBase: new URL('https://shielddesk.io'),
  title: 'ShieldDesk™ — See Risk. Act With Confidence. | Enterprise Security Operations',
  description: 'See Risk. Act With Confidence. ShieldDesk is an evidence-driven security operations and remediation control plane engineered around the unyielding invariant: PROVE BEFORE YOU ACT. Ingest multi-cloud telemetry, model attack blast radius, enforce cryptographic dual-custody governance, and dispatch signed endpoint containment with automated rollback.',
  keywords: ['ShieldDesk', 'See Risk Act With Confidence', 'Mints AI', 'SOC', 'Security Operations', 'SOAR', 'Cybersecurity', 'Trivy', 'YARA', 'Next.js 16', 'SSR'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: 'ShieldDesk™ — See Risk. Act With Confidence.',
    description: 'See Risk. Act With Confidence. Autonomous multi-cloud security telemetry correlation, AI blast radius modeling, dual-custody separation of duties, and RSA-2048 signed fleet dispatch.',
    images: ['/logo.png'],
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@500;600;700;800;900&family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-grid-overlay"></div>
        <div className="ambient-glow"></div>
        <div className="top-scroll-vignette" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
