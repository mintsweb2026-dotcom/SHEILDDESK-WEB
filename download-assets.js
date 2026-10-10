const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'screenshots');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const files = [
  'soc-incident-workspace.png',
  'risk-scorecard.png',
  'fleet-management.png',
  'threat-intel-yara.png',
  'remediation-plans.png',
  'compliance-matrix.png',
  'vulnerability-scanner.png',
  'onboarding-wizard.png',
  'sign-in-screen.png'
];

async function download(file) {
  const url = `https://raw.githubusercontent.com/Mints-ai/SHIELD-DESK/main/docs/screenshots/${file}`;
  const dest = path.join(dir, file);
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location, (redirectRes) => {
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded ${file}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded ${file}`);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

(async () => {
  for (const f of files) {
    try {
      await download(f);
    } catch (e) {
      console.error(`Error downloading ${f}:`, e.message);
    }
  }
  console.log('All downloads finished.');
})();
