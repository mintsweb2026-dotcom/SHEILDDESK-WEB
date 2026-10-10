export default function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <span className="announcement-tag">v2.4 GA</span>
      <span>
        <strong>See Risk. Act With Confidence.</strong> &bull; Cryptographic Dual-Custody & Merkle Audit Ledger now live.
      </span>
      <a
        href="https://github.com/Mints-ai/SHIELD-DESK"
        target="_blank"
        rel="noopener noreferrer"
        className="announcement-link"
      >
        <span>See repository</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </aside>
  );
}
