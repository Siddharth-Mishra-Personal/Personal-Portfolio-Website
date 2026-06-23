import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience · Siddharth Mishra",
  description:
    "Strategy consulting at Accenture and Monitor Deloitte, VC deal sourcing at igniteXL, and more.",
};

const EXPERIENCES = [
  {
    company: "Accenture India",
    role: "Strategy & Consulting Summer Associate",
    period: "May 2025 – Jul 2025",
    tag: "Strategy · Supply Chain",
    headline:
      "Designed India's first supply chain services hub — a joint venture between two industry leaders in the MENA region.",
    bullets: [
      "Reduced working capital by 27% by rebuilding demand planning from scratch — tackling obsolescence, volatility, and overstocking through Box-Jenkins forecasting on 3 years of customer plant data.",
      "Improved planning accuracy by implementing reclassification and forecast-based replenishment planning using the Box-Jenkins model across the JV's full SKU base.",
      "Ideated integration of SCRaaS (Supply Chain Resilience as a Service) and Control Tower into an existing tech stack spanning Adobe, MiraKL, Blue Yonder, Oracle, ONE, and SAP.",
    ],
  },
  {
    company: "Monitor Deloitte",
    role: "Strategy & Business Design Intern",
    period: "May 2024 – Jul 2024",
    tag: "Strategy · Industry research",
    headline:
      "Led a white paper on India's specialty chemicals sector — researching 30+ companies and prescribing procurement, S&OP, logistics, and digitalization solutions.",
    bullets: [
      "Performed primary and secondary research across 30+ companies to map client pain points in the Specialty Chemicals industry, identifying systemic issues in procurement and capital management.",
      "Architected Pricing Optimization solutions using SARIMA models to forecast chemical commodity prices, reducing exposure to spot-market volatility.",
      "Designed a Digitalization roadmap integrating IoT and Digital Twin technology to improve plant-level visibility and reduce planning latency.",
    ],
  },
  {
    company: "igniteXL Ventures",
    role: "VC Deal Sourcing",
    period: "Mar 2024 – Apr 2024",
    tag: "Venture Capital · Consumer",
    headline:
      "Created an investment summary on Tower 28, a clean makeup brand, with customer-oriented qualitative insights and a multi-year valuation strategy.",
    bullets: [
      "Developed a comprehensive Investment Summary on Tower 28, incorporating consumer sentiment analysis, brand positioning, and category-level qualitative insights.",
      "Built a competitive benchmarking analysis across the Beauty and Wellness sector — mapping Tower 28's positioning relative to comparable portfolio companies.",
      "Devised an advanced multi-year valuation framework contingent on milestone-based scenarios, weighing topline growth, margin expansion, and strategic exit optionality.",
    ],
  },
  {
    company: "BondsIndia",
    role: "Business Analyst Intern",
    period: "Jun 2023 – Jul 2023",
    tag: "Fintech · Product",
    headline:
      "Developed business and functional requirement documents using MoSCoW and RICE scoring to prioritise a content management system overhaul.",
    bullets: [
      "Drafted detailed BRDs and FRDs and a solution proposal using MoSCoW prioritisation and RICE scoring, aligned to the platform's core fixed-income product roadmap.",
      "Collaborated on developing content management systems, ensuring optimum integration with the existing tech stack.",
      "Worked on API testing, Impact Analysis, and composed RFPs to solicit proposals for new systems — covering UAT coordination and vendor evaluation.",
    ],
  },
  {
    company: "Happy Sneeze",
    role: "Market Research Intern",
    period: "Jun 2024 – Jul 2024",
    tag: "Digital Health · Women's health",
    headline:
      "Researched the integrative women's health industry for a mobile therapeutic app targeting urinary incontinence — identifying competitive whitespace and formulating a UVP.",
    bullets: [
      "Mapped the Integrative Women's Health market — analysing product offerings, market size, structure, and adoption trends across pelvic floor therapy and digital therapeutics.",
      "Developed a Competitive Landscape Map highlighting key players, their offerings, clinical claims, and weaknesses to sharpen Happy Sneeze's unique value proposition.",
    ],
  },
];

const LEADERSHIP = [
  {
    org: "Center For Innovation, IIT Madras",
    role: "Head of Sponsorship & Investor Relations",
    period: "Feb 2025 – Present",
    bullets: [
      "Spearheaded sponsorship for Open House '25 and Research Conclave '25 — a first-of-its-kind student expo with 10,000+ attendees.",
      "Contacted 50+ Indian and international companies including GitHub, Jane Street, Autodesk, AnSYS, and Stellantis for sponsorship deals.",
      "3Xed outreach by collaborating with IITM Research Park, ICSR, and Centres of Excellence including FedEx, Walmart, and CTAP.",
      "Conducted hackathons of 1,000+ participants with a prize pool of INR 5 lakhs each, in collaboration with Appian and Alphagrep.",
    ],
  },
  {
    org: "Raftar Formula Racing, IIT Madras",
    role: "Business Plan Lead & Sponsorship, PR & Media",
    period: "Mar 2023 – Dec 2023",
    bullets: [
      "Ideated and planned a profitable business around the FSAE vehicle for static events at multiple Formula Student competitions.",
      "Evaluated the market using data analysis, linear regression, balance sheets, cash flows, and income statements; developed a Deep Dive valuation analysis.",
      "Managed liaison between the team and sponsors, public relations, and post-event proof of branding for Mechanica '24 & '25.",
    ],
  },
  {
    org: "Nirmaan, IIT Madras",
    role: "PM Coordinator",
    period: "Oct 2023 – Dec 2023",
    bullets: [
      "Served as liaison between pre-incubation startups and Nirmaan, providing requirements and resources to early-stage founders.",
      "Organised entrepreneurship sessions with industry spokespersons; connected corporate contacts with budding startups.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">Career</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
          Professional experience
        </h1>
        <p className="text-muted text-base max-w-xl mb-16 leading-relaxed">
          Strategy consulting, VC deal sourcing, and product analytics — across four internships and
          two full-time offers in the pipeline.
        </p>

        {/* Work experience */}
        <div className="space-y-14">
          {EXPERIENCES.map((exp) => (
            <article key={exp.company} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              {/* Left */}
              <div className="flex-shrink-0">
                <p className="text-cream font-medium text-sm">{exp.company}</p>
                <p className="text-muted text-xs mt-1">{exp.period}</p>
                <span className="inline-block mt-3 text-[10px] text-gold tracking-widest uppercase border border-gold/30 rounded px-2 py-0.5">
                  {exp.tag}
                </span>
              </div>
              {/* Right */}
              <div>
                <h2 className="text-muted text-xs tracking-widest uppercase mb-1">{exp.role}</h2>
                <p className="text-cream font-medium text-base leading-snug mb-4">
                  {exp.headline}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-muted text-sm leading-relaxed">
                      <span className="text-gold mt-1.5 flex-shrink-0 text-[8px]">■</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-20" />

        {/* Leadership */}
        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">
          Positions of responsibility
        </p>
        <div className="space-y-10">
          {LEADERSHIP.map((l) => (
            <article key={l.org} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div className="flex-shrink-0">
                <p className="text-cream font-medium text-sm">{l.org}</p>
                <p className="text-muted text-xs mt-1">{l.period}</p>
              </div>
              <div>
                <h2 className="text-muted text-xs tracking-widest uppercase mb-3">{l.role}</h2>
                <ul className="space-y-2">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-muted text-sm leading-relaxed">
                      <span className="text-gold mt-1.5 flex-shrink-0 text-[8px]">■</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
