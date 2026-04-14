import { useState } from "react";
import { faq } from "../data/content";
import "./FAQ.css";

function FAQItem({ item, open, toggle }) {
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={toggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-chevron">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-answer-wrap" style={{ maxHeight: open ? "300px" : "0" }}>
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left">
            <span className="section-label">FAQ</span>
            <h2 className="section-heading">
              {faq.heading}{" "}
              <span className="accent">{faq.headingAccent}</span>
            </h2>
            <p className="section-subtext">
              Can't find your answer?{" "}
              <a href="#contact" className="faq-contact-link">Contact our support team →</a>
            </p>
          </div>

          <div className="faq-right">
            {faq.items.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
