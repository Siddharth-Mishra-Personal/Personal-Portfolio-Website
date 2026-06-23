import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Competitions · Siddharth Mishra",
  description:
    "National case competition wins — 1st of 500+ at SJMSOM IIT Bombay, Top 20 of 21,000+ teams, and more.",
};

const WINS = [
  {
    rank: "1st",
    pool: "500+ teams",
    event: "SJMSOM Business Case · IIT Bombay",
    tag: "Strategy · Supply Chain",
    description:
      "Built a full CAPEX plan and GTM strategy for a domestic Q-Commerce player expanding into B2B supply chain. Projected 40% inventory cost reduction and 80% processing time improvement across 7 Tier-1 cities, reducing traditional distribution margins from 58–64% to 5–9%.",
  },
  {
    rank: "3rd",
    pool: "200+ teams",
    event: "Sankalan '25 · IIT Kanpur Infrastructure Conclave",
    tag: "Infrastructure · Urban Planning",
    description:
      "Proposed a redevelopment plan for New Delhi Railway Station (NDRS) to ease overcrowding by 12% and enhance multimodal connectivity. Designed sustainable infrastructure upgrades maximising energy efficiency, minimising waste and passenger disruption.",
  },
  {
    rank: "Top 8",
    pool: "1,000+ teams",
    event: "McKinsey Consularium · DOMS, IIT Madras",
    tag: "Operations · Consulting",
    description:
      "Developed a distribution network optimisation solution using scenario planning and prototyping — increasing market output by 50% and recovering 20–22% of logistics cost through route optimisation strategies.",
  },
  {
    rank: "Top 8",
    pool: "250+ teams",
    event: "Athena's Proposal · Inspiria Knowledge",
    tag: "Biotech · Innovation",
    description:
      "Pitched a hunger-suppressing ingestible tablet targeting obesity — architected a Vibrating Ingestible Bio-Electronic Stimulator (VIBES) and built a Technology Readiness Level timeline with testing and validation strategies.",
  },
  {
    rank: "Top 10",
    pool: "800+ teams",
    event: "Young Leaders · Masters' Union",
    tag: "Consumer · Policy",
    description:
      "Proposed consumer education and product reformulation strategies to reduce stigma around hemp. Predicted a 2× increase in adoption rates by expanding e-commerce and retail partnerships for accessibility.",
  },
  {
    rank: "Top 20",
    pool: "21,000+ teams",
    event: "Road Safety Challenge · HOAI & NHAI",
    tag: "Infrastructure · Behavioural",
    description:
      "Designed solutions to improve the Velachery-Taramani Link Road FOB in Chennai. Built a behavioural and engineering solution incorporating enhanced lane configuration, intelligent traffic flow management, and safety upgrades.",
  },
  {
    rank: "Top 50",
    pool: "100,000+ teams",
    event: "Teliport · Tata Elxsi 2024",
    tag: "Robotics · AI",
    description:
      "Ideated a scalable, AI-enabled robotic rail wagon crawler inspection platform. Architected a robotic arm for precise sensor deployment, integrating LIDAR, ultrasonic transducers, and thermal imagers — with a full implementation roadmap and regulatory compliance plan.",
  },
  {
    rank: "Top 50",
    pool: "100,000+ teams",
    event: "NationBuilding 2025 · Nation With Namo",
    tag: "Sports Policy · Strategy",
    description:
      "Developed a strategic roadmap for India to achieve 100+ medals (including 35 gold) at the 2036 Olympics. Designed a 6-phase grassroots implementation strategy aligned to the Viksit Bharat vision.",
  },
  {
    rank: "Top 100",
    pool: "100,000+ teams",
    event: "HSBC IBCP 2024",
    tag: "Strategy · Retail",
    description:
      "Ideated a multi-phase expansion strategy for a Delhi-based pet store — transforming pricing plans, optimising finances, and devising internal knowledge transfer sessions to ensure intra-company alignment.",
  },
  {
    rank: "Represented",
    pool: "Inter IIT Tech 13.0",
    event: "Inter IIT Tech 13.0 — Case Guild",
    tag: "Engineering · Optimisation",
    description:
      "Led a 4-member contingent presenting solar panel recycling solutions to Insolation Energy Limited at IIT Bombay. Created a QCMINLP model using K-means clustering and Gurobi to identify 8 optimal recycling facility locations, cutting operational cost significantly. Drafted a 22-page final report.",
  },
];

const TIER_COLORS: Record<string, string> = {
  "1st": "border-gold text-gold",
  "3rd": "border-gold/60 text-gold/80",
  "Top 8": "border-muted/40 text-muted",
  "Top 10": "border-muted/40 text-muted",
  "Top 20": "border-muted/30 text-subtle",
  "Top 50": "border-muted/30 text-subtle",
  "Top 100": "border-muted/20 text-subtle",
  Represented: "border-muted/20 text-subtle",
};

export default function CaseCompetitions() {
  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">Competitive record</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
          Case competitions
        </h1>
        <p className="text-muted text-base max-w-xl mb-4 leading-relaxed">
          Nine national-level competitions. One first place. Consistent top-percentile finishes
          against 100,000+ participants.
        </p>

        {/* Summary stat chips */}
        <div className="flex flex-wrap gap-3 mb-16">
          {[
            ["1", "national 1st place"],
            ["3", "podium finishes"],
            ["9+", "competitions entered"],
            ["100K+", "teams competed against"],
          ].map(([n, l]) => (
            <div key={l} className="border border-border rounded-lg px-4 py-3 bg-surface">
              <p className="font-display text-2xl font-bold text-gold leading-none">{n}</p>
              <p className="text-muted text-xs mt-1">{l}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {WINS.map((w) => (
            <article
              key={w.event}
              className="border border-border rounded-lg p-6 bg-surface card-hover grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            >
              {/* Rank */}
              <div className="flex-shrink-0">
                <div
                  className={`inline-block border rounded px-3 py-1 font-display text-xl font-bold ${TIER_COLORS[w.rank] ?? "border-muted/20 text-subtle"}`}
                >
                  {w.rank}
                </div>
                <p className="text-muted text-xs mt-2">{w.pool}</p>
              </div>
              {/* Content */}
              <div>
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <h2 className="text-cream font-medium text-base leading-snug">{w.event}</h2>
                  <span className="text-[10px] text-gold tracking-widest uppercase border border-gold/30 rounded px-2 py-0.5 flex-shrink-0">
                    {w.tag}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{w.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
