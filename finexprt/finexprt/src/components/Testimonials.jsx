import { testimonials } from "../data/content";
import "./Testimonials.css";

function StarRating({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">
            {testimonials.heading}{" "}
            <span className="accent">{testimonials.headingAccent}</span>
          </h2>
        </div>

        <div className="testi-grid">
          {testimonials.items.map((t, i) => (
            <div key={t.name} className={`testi-card animate-fade-up delay-${(i % 3) + 1}`}>
              <StarRating count={t.rating} />
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">
                  <span>{t.avatar}</span>
                </div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
