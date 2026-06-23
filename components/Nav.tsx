"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/case-competitions", label: "Case wins" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-border" : ""
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold text-cream hover:text-gold transition-colors"
        >
          SM
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm gold-underline transition-colors ${pathname === l.href
                ? "text-gold"
                : "text-muted hover:text-cream"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/Master_Resume_Siddharth_Mishra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gold/40 text-gold px-4 py-1.5 rounded hover:bg-gold hover:text-bg transition-all"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-cream transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {
        open && (
          <div className="md:hidden bg-surface border-b border-border px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-base transition-colors ${pathname === l.href ? "text-gold" : "text-muted hover:text-cream"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Master_Resume_Siddharth_Mishra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-gold/40 text-gold px-4 py-2 rounded text-center hover:bg-gold hover:text-bg transition-all"
            >
              Download resume ↗
            </a>
          </div>
        )
      }
    </header>
  );
}
