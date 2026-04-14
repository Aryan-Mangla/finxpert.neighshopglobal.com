import { hero } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background decor */}
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-inner">
        {/* Left: Copy */}
        <div className="hero-copy">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot"></span>
            {hero.badge}
          </div>
          <h1 className="hero-headline animate-fade-up delay-1">
            {hero.headline}
            <br />
            <span className="headline-accent">{hero.headlineAccent}</span>
          </h1>
          <p className="hero-subtext animate-fade-up delay-2">{hero.subtext}</p>
          <div className="hero-ctas animate-fade-up delay-3">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.primary ? "btn-primary" : "btn-secondary"}`}
              >
                {cta.primary && <span className="btn-arrow">→</span>}
                {cta.label}
              </a>
            ))}
          </div>
          {/* Inline stats */}
          <div className="hero-stats animate-fade-up delay-4">
            {hero.stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup */}
        <div className="hero-visual animate-fade-up delay-2">
          <div className="mockup-card main-card">
            <div className="mockup-header">
              <span className="mockup-dot red"></span>
              <span className="mockup-dot yellow"></span>
              <span className="mockup-dot green"></span>
              <span className="mockup-title">FinExprt Dashboard</span>
            </div>
            <div className="mockup-balance">
              <p className="balance-label">Total Net Worth</p>
              <h2 className="balance-amount">₹24,38,570</h2>
              <span className="balance-badge">▲ +12.4% this month</span>
            </div>
            <div className="mockup-chart">
              {[40, 65, 45, 80, 60, 90, 75, 95, 70, 88, 92, 100].map((h, i) => (
                <div key={i} className="chart-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}></div>
              ))}
            </div>
            <div className="mockup-categories">
              {[
                { label: "Savings", pct: 42, color: "var(--navy)" },
                { label: "Invest", pct: 33, color: "var(--orange)" },
                { label: "Spend", pct: 25, color: "var(--gray-200)" },
              ].map((c) => (
                <div key={c.label} className="cat-item">
                  <span className="cat-dot" style={{ background: c.color }}></span>
                  <span className="cat-label">{c.label}</span>
                  <span className="cat-pct">{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card alert-card">
            <span className="float-icon">🔔</span>
            <div>
              <p className="float-title">Bill Due Tomorrow</p>
              <p className="float-sub">Netflix · ₹649</p>
            </div>
          </div>
          <div className="float-card gain-card">
            <span className="float-icon">📈</span>
            <div>
              <p className="float-title">Portfolio Up</p>
              <p className="float-sub">+₹18,420 today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
