import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-text">Aria Nail Spa</span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
