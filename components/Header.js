"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Singapore Import", href: "#import" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Logo size={42} />
          <span className="brand-name">Vault &amp; Vantage</span>
        </a>

        <nav className="nav-desktop">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold nav-cta">
            Private Enquiry
          </a>
        </nav>

        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="container mobile-inner">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link mobile-link"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold"
            onClick={() => setOpen(false)}
            style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
          >
            Private Enquiry
          </a>
        </div>
      </div>
    </header>
  );
}
