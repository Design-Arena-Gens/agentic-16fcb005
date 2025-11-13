export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">
            <span className="brand-mark" />
            <span>AI Horizons</span>
          </div>
          <p>Crafting aligned intelligence for ambitious teams.</p>
        </div>
        <div className="footer__links">
          <a href="#agenda">Agenda</a>
          <a href="#impact">Use Cases</a>
          <a href="#responsibility">Ethics</a>
          <a href="#engage">Resources</a>
        </div>
      </div>
      <div className="footer__meta">© {new Date().getFullYear()} AI Horizons Collective</div>
    </footer>
  );
}
