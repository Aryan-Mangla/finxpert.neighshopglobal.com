import { useState, useEffect } from "react";
import { brand, nav } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          <span className="logo-mark">{brand.logo}</span>
          <span className="logo-name">{brand.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar-links hide-mobile">
          {nav.links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar-actions">
          <a href="#login" className="nav-link hide-mobile">Log In</a>
          <a href={nav.cta.href} className="btn btn-primary navbar-cta">
            {nav.cta.label}
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {nav.links.map((link) => (
          <a key={link.label} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#login" className="mobile-link" onClick={() => setMenuOpen(false)}>Log In</a>
        <a href={nav.cta.href} className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
