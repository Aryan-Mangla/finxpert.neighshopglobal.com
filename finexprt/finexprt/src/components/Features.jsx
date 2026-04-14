import { features } from "../data/content";
import "./Features.css";

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="center">
          <span className="section-label">Core Features</span>
          <h2 className="section-heading">
            {features.heading}{" "}
            <span className="accent">{features.headingAccent}</span>
          </h2>
          <p className="section-subtext">{features.subtext}</p>
        </div>

        <div className="features-grid">
          {features.items.map((feat, i) => (
            <div key={feat.title} className={`feature-card animate-fade-up delay-${(i % 3) + 1}`}>
              <div className="feat-icon-wrap" style={{ background: `${feat.color}15` }}>
                <span className="feat-icon">{feat.icon}</span>
              </div>
              <h3 className="feat-title">{feat.title}</h3>
              <p className="feat-desc">{feat.desc}</p>
              <a href="#" className="feat-link">
                Learn more <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
