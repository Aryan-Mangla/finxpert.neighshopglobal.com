import { tools } from "../data/content";
import "./Tools.css";

export default function Tools() {
  return (
    <section className="section tools-section" id="tools">
      <div className="tools-bg"></div>
      <div className="container">
        <div className="tools-header">
          <div>
            <span className="section-label">Product Modules</span>
            <h2 className="section-heading">
              {tools.heading}{" "}
              <span className="accent">{tools.headingAccent}</span>
            </h2>
            <p className="section-subtext">{tools.subtext}</p>
          </div>
        </div>

        <div className="tools-grid">
          {tools.items.map((tool, i) => (
            <div
              key={tool.title}
              className={`tool-card animate-fade-up delay-${i + 1} ${tool.highlight ? "tool-highlight" : ""}`}
            >
              {tool.badge && (
                <span className={`tool-badge ${tool.highlight ? "badge-white" : "badge-orange"}`}>
                  {tool.badge}
                </span>
              )}
              <div className="tool-icon">{tool.icon}</div>
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-desc">{tool.desc}</p>
              <a href="#" className={`btn ${tool.highlight ? "btn-outline-white" : "btn-secondary"} tool-cta`}>
                Explore Module →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
