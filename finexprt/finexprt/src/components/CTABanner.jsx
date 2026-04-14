import { cta } from "../data/content";
import "./CTABanner.css";

export default function CTABanner() {
  return (
    <section className="cta-section" id="signup">
      <div className="cta-bg">
        <div className="cta-blob cta-blob-1"></div>
        <div className="cta-blob cta-blob-2"></div>
        <div className="cta-dots"></div>
      </div>
      <div className="container cta-inner">
        <div className="cta-badge">🚀 Start Today</div>
        <h2 className="cta-heading animate-fade-up">
          {cta.heading}
          <br />
          <span className="cta-heading-accent">{cta.headingAccent}</span>
        </h2>
        <p className="cta-subtext animate-fade-up delay-1">{cta.subtext}</p>
        <div className="cta-actions animate-fade-up delay-2">
          <a href={cta.primary.href} className="btn btn-primary cta-primary-btn">
            {cta.primary.label} →
          </a>
          <a href={cta.secondary.href} className="btn btn-outline-white">
            {cta.secondary.label}
          </a>
        </div>
        <p className="cta-note animate-fade-up delay-3">{cta.note}</p>
      </div>
    </section>
  );
}
