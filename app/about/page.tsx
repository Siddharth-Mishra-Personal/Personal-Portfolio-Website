import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Siddharth Mishra",
  description:
    "IIT Madras mechanical engineer, strategy consultant intern, and aspiring VC analyst.",
};

const SKILLS = [
  { category: "Languages", items: ["Python", "SQL", "JavaScript", "R", "MATLAB"] },
  { category: "ML / Data", items: ["scikit-learn", "XGBoost", "TF-IDF", "ARIMA", "GARCH"] },
  { category: "Analytics", items: ["Power BI", "Excel (Solver)", "Pandas", "NumPy"] },
  { category: "Finance", items: ["DCF / NPV / IRR", "CAPM / WACC", "Markowitz MPT", "GARCH/EGARCH"] },
  { category: "Strategy", items: ["Root cause analysis", "S&OP", "MILP optimization", "Scenario planning"] },
  { category: "Tools", items: ["AutoCAD", "MS Office Suite", "React.js", "Gurobi"] },
];

const EDUCATION = [
  {
    degree: "B.Tech · Mechanical Engineering",
    minor: "Minor in Personal & Professional Development (9.50/10)",
    school: "Indian Institute of Technology, Madras",
    year: "2022–2026",
    score: "7.55 / 10.00",
  },
  {
    degree: "Class XII · CBSE",
    school: "Lotus Valley International School, Gurugram",
    year: "2022",
    score: "94.6%",
  },
  {
    degree: "Class X · CBSE",
    school: "Lotus Valley International School, Gurugram",
    year: "2020",
    score: "97.6%",
  },
];

const AWARDS = [
  "AIR 2578 (99.72 percentile) in JEE Main — out of 1M+ students",
  "AIR 2301 in JEE Advanced — out of 160,000+ students",
  "Award of Excellence — highest academic honor at Lotus Valley International School",
  "HScTSS Scholarship from Government of Haryana for exemplary CBSE performance",
  "NTSE Scholar — top 2,000 out of 1M+ students nationwide",
];

const EXTRAS = [
  { icon: "♟", label: "Chess", detail: "IDL & Inter-Hostel Schroeter Trophy competitor" },
  { icon: "🥋", label: "Taekwondo Red Belt", detail: "WT-certified, 10+ competitions representing GIIS Malaysia" },
  { icon: "🏃", label: "Marathon training", detail: "Targeting August 2026 — 17-week structured program" },
  { icon: "🌍", label: "UN Millennium Fellow", detail: "Campus member under UN Academic Impact at IITM" },
  { icon: "🔤", label: "Word Games Club", detail: "Cryptic Crossword & Scrabble at Inter-IIT Cultural, Festember NIT Trichy" },
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

        {/* Header */}
        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">About me</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-8 leading-tight max-w-3xl">
          Engineer by training.
          <br />
          <span className="text-gold">Analyst</span> by disposition.
        </h1>
        <div className="max-w-2xl space-y-4 text-muted text-base leading-relaxed mb-16">
          <p>
            I grew up in Delhi, earned a seat at IIT Madras through JEE Advanced (AIR 2301), and
            spent four years learning to think rigorously about systems — mechanical, financial,
            and organisational.
          </p>
          <p>
            My consulting stints at Accenture and Monitor Deloitte taught me how large organisations
            make decisions under uncertainty. My VC work at igniteXL taught me how early-stage
            companies earn conviction. My B.Tech thesis on solar panel recycling taught me how to
            model a problem end-to-end when no one has done it before.
          </p>
          <p>
            I&apos;m drawn to roles where quantitative thinking and commercial judgment have to work
            together — VC, AI product, and strategy at technical companies. Graduating June 2026.
          </p>
        </div>

        {/* Skills grid */}
        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold text-cream mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map((s) => (
              <div key={s.category} className="border border-border rounded-lg p-5 bg-surface">
                <p className="text-xs text-gold tracking-widest uppercase font-medium mb-3">
                  {s.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted bg-bg border border-border px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-border mb-20" />

        {/* Education */}
        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold text-cream mb-8">Education</h2>
          <div className="space-y-6">
            {EDUCATION.map((e) => (
              <div
                key={e.degree}
                className="grid md:grid-cols-[1fr_auto] gap-4 border-b border-border pb-6 last:border-none"
              >
                <div>
                  <h3 className="text-cream font-medium text-base">{e.degree}</h3>
                  {e.minor && (
                    <p className="text-gold text-sm mt-0.5">{e.minor}</p>
                  )}
                  <p className="text-muted text-sm mt-1">{e.school}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-cream text-sm font-medium">{e.score}</p>
                  <p className="text-muted text-xs mt-0.5">{e.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-20">
          <h2 className="font-display text-2xl font-bold text-cream mb-8">
            Scholastic achievements
          </h2>
          <ul className="space-y-3">
            {AWARDS.map((a) => (
              <li key={a} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0">✦</span>
                {a}
              </li>
            ))}
          </ul>
        </section>

        {/* Extras */}
        <section>
          <h2 className="font-display text-2xl font-bold text-cream mb-8">Beyond the resume</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {EXTRAS.map((e) => (
              <div key={e.label} className="flex gap-4 border border-border rounded-lg p-5 bg-surface card-hover">
                <span className="text-2xl flex-shrink-0">{e.icon}</span>
                <div>
                  <p className="text-cream font-medium text-sm">{e.label}</p>
                  <p className="text-muted text-xs mt-1 leading-relaxed">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
