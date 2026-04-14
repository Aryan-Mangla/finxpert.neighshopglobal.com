import { brand, footer } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand col */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-mark">{brand.logo}</span>
              <span className="logo-name">{brand.name}</span>
            </a>
            <p className="footer-tagline">{footer.tagline}</p>
            <div className="footer-social">
              {footer.social.map((s) => (
                <a key={s} href="#" className="social-btn" aria-label={s}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading} className="footer-col">
              <h4 className="footer-col-heading">{col.heading}</h4>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{footer.copy}</p>
          <div className="footer-badges">
            <span className="footer-badge">🔒 256-bit SSL</span>
            <span className="footer-badge">✅ SOC 2 Certified</span>
            <span className="footer-badge">🏦 RBI Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
