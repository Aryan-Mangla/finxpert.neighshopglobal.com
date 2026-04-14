import { trust } from "../data/content";
import "./TrustStrip.css";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <p className="trust-label">{trust.label}</p>
        <div className="trust-logos">
          {trust.logos.map((logo) => (
            <div key={logo.name} className="trust-logo-item">
              <span className="trust-icon">{logo.icon}</span>
              <span className="trust-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
