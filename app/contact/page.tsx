import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Siddharth Mishra",
  description:
    "Get in touch with Siddharth Mishra — open to VC, AI Product, and strategy roles from June 2026.",
};

const OPEN_TO = [
  { label: "Venture Capital", detail: "Pre-seed to Series B, tech-focused funds" },
  { label: "AI Product / Growth", detail: "Early-stage AI infra or application companies" },
  { label: "Strategy & Consulting", detail: "McKinsey, BCG, Bain, or boutique tech strategy" },
];

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharth-mishra-a3a41b238/",
    sub: "linkedin.com/in/siddharth-mishra-a3a41b238",
  },
  {
    label: "GitHub",
    href: "https://github.com/Siddharth-Mishra-Personal",
    sub: "github.com/Siddharth-Mishra-Personal",
  },
  {
    label: "Email",
    href: "mailto:sidmishra2004@gmail.com",
    sub: "sidmishra2004@gmail.com",
  },
];

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">Get in touch</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight max-w-2xl">
          Let&apos;s find the right{" "}
          <span className="text-gold">overlap.</span>
        </h1>
        <p className="text-muted text-base max-w-xl mb-16 leading-relaxed">
          Based in Gurugram/Bangalore, open to relocating for the right opportunity. If you&apos;re building something interesting in AI or investing in the people who are — I&apos;d like to hear about it.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — form */}
          <div>
            <h2 className="font-display text-xl font-bold text-cream mb-6">Send a message</h2>
            <ContactForm />
          </div>

          {/* Right — links + open to */}
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl font-bold text-cream mb-6">Direct links</h2>
              <div className="space-y-4">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-between border border-border rounded-lg p-4 bg-surface card-hover group"
                  >
                    <div>
                      <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">
                        {l.label}
                      </p>
                      <p className="text-muted text-xs mt-0.5">{l.sub}</p>
                    </div>
                    <span className="text-muted group-hover:text-gold transition-colors">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-cream mb-6">Open to</h2>
              <div className="space-y-3">
                {OPEN_TO.map((o) => (
                  <div key={o.label} className="flex gap-3">
                    <span className="text-gold mt-1 flex-shrink-0">✦</span>
                    <div>
                      <p className="text-cream text-sm font-medium">{o.label}</p>
                      <p className="text-muted text-xs mt-0.5">{o.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <a
                href="/Master_Resume_Siddharth_Mishra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm border border-gold/40 text-gold px-5 py-2.5 rounded hover:bg-gold hover:text-bg transition-all"
              >
                Download resume
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
