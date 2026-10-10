export default function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <span className="announcement-tag">v2.4</span>
      <span>
        Dual-custody approvals and the Merkle audit ledger are now generally available.
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
