import Link from "next/link";

const TICKER_ITEMS = [
  "99.72 percentile · JEE Main",
  "AIR 2301 · JEE Advanced",
  "1st / 500+ teams · SJMSOM IIT Bombay",
  "3rd / 200+ teams · IIT Kanpur",
  "Top 20 / 21,000+ teams · HOAI",
  "Top 50 / 100,000+ teams · Tata Elxsi",
  "Top 8 / 1,000+ teams · McKinsey Consularium",
  "27% working capital reduction · Accenture",
  "IRR 12.2% · B.Tech Thesis",
];

const FEATURED = [
  {
    tag: "Strategy · Consulting",
    title: "Supply chain JV for two MENA industry leaders",
    description:
      "Accenture India, Summer 2025. Reduced working capital by 27% using Box-Jenkins forecasting and a full reclassification of 3-year plant data across an $X00M joint venture.",
    href: "/experience",
    label: "View experience →",
  },
  {
    tag: "Technical · ML",
    title: "Solar panel recycling infrastructure for India",
    description:
      "B.Tech thesis under Prof. K. Srinivas Reddy. MILP-optimised facility network, Weibull failure models, and DCF analysis yielding IRR 12.2% and NPV ₹25.76 Cr.",
    href: "/projects",
    label: "View projects →",
  },
  {
    tag: "Case competition · 1st place",
    title: "B2B Q-Commerce expansion: 1st of 500+ teams",
    description:
      "SJMSOM, IIT Bombay. Built a full GTM and CAPEX plan for a domestic Q-Commerce player entering B2B supply chain — projecting 40% inventory cost reduction across 7 Tier-1 cities.",
    href: "/case-competitions",
    label: "View all wins →",
  },
];

const LOGOS = [
  "Accenture",
  "Monitor Deloitte",
  "igniteXL Ventures",
  "IIT Madras",
  "BondsIndia",
];

export default function Home() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-28">
        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-sans font-medium">
          IIT Madras · Mech Eng · Class of 2026
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-cream mb-8 max-w-4xl">
          Where supply chains meet
          <br />
          <span className="text-gold">venture theses</span> —{" "}
          <br className="hidden md:block" />
          and the math checks out.
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          IIT Madras mechanical engineer turned strategy consultant, now building
          conviction in AI infrastructure and deep-tech. I&apos;ve stress-tested
          business models at Accenture and Monitor Deloitte, built ML pipelines
          in Python, and won national case competitions against 100,000+ teams.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/experience"
            className="bg-gold text-bg text-sm font-medium px-6 py-3 rounded hover:bg-gold-dim transition-colors"
          >
            See my work
          </Link>
          <Link
            href="/contact"
            className="border border-border text-cream text-sm px-6 py-3 rounded hover:border-gold/40 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="border-y border-border py-3 overflow-hidden">
        <div className="flex ticker-track whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              <span className="text-xs text-muted font-medium tracking-wide uppercase">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Company logos ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <p className="text-xs tracking-widest text-subtle uppercase mb-8 font-medium">
          Experience at
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
          {LOGOS.map((l) => (
            <span key={l} className="text-subtle text-sm font-medium">
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="border-t border-border" />
      </div>

      {/* ── Featured work ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="flex items-end justify-between mb-12 gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted gold-underline hover:text-cream transition-colors hidden md:block"
          >
            All projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((f) => (
            <div
              key={f.title}
              className="border border-border rounded-lg p-6 card-hover bg-surface flex flex-col gap-4"
            >
              <span className="text-xs text-gold tracking-widest uppercase font-medium">
                {f.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-cream leading-snug">
                {f.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed flex-1">
                {f.description}
              </p>
              <Link
                href={f.href}
                className="text-sm text-gold gold-underline self-start mt-2"
              >
                {f.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2">
              Open to VC, AI Product, and strategy roles.
            </h2>
            <p className="text-muted text-sm max-w-md">
              Graduating June 2026. Based in Delhi, open to relocating.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-gold text-bg text-sm font-medium px-6 py-3 rounded hover:bg-gold-dim transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </div>
  );
}
