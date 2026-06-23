import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects · Siddharth Mishra",
  description:
    "ML models, financial analysis, and engineering research — technical projects by Siddharth Mishra.",
};

const PROJECTS = [
  {
    id: "solar",
    tag: "Research · Engineering",
    title: "Solar panel recycling infrastructure for India",
    subtitle: "B.Tech Thesis · Prof. K. Srinivas Reddy · IIT Madras",
    description:
      "Designed India's end-to-end solar PV recycling infrastructure using a five-stage hybrid recycling process, integrating circular economy principles and policy recommendations aligned to the March 2026 CPCB Guidelines.",
    bullets: [
      "Dual-model waste forecasting: CEEW installed-base model (37.2% CAGR) and Weibull failure distribution — converged to a single effective waste estimate.",
      "MILP-based facility location optimisation via Gurobi — identified 8 optimal locations nationally using K-means clustering, reducing operational cost by 12%.",
      "DCF analysis: IRR 12.2%, NPV ₹25.76 Cr, Benefit-Cost Ratio 1.23 over a 20-year horizon.",
      "Life Cycle Assessment (LCA): net GWP benefit of –1,858 kg CO₂-eq per tonne of panels recycled.",
    ],
    stack: ["Python", "Gurobi", "MILP", "Weibull", "DCF / LCA"],
    github: null,
  },
  {
    id: "bulldozer",
    tag: "Machine Learning · Kaggle",
    title: "Bulldozer price prediction model",
    subtitle: "Kaggle · Regression · Random Forest + XGBoost",
    description:
      "End-to-end ML pipeline on 400,000+ auction records to predict heavy equipment resale prices. Cleaned and engineered features from raw Kaggle data, then trained and stacked ensemble models.",
    bullets: [
      "Cleaned and feature-engineered 400K+ records — handling 50+ features including sale date, equipment age, and usage metrics.",
      "Trained Random Forest and XGBoost ensembles; optimised hyperparameters via grid search to achieve RMSLE of 0.2456 on the Kaggle leaderboard.",
      "Improved accuracy by 15% over the baseline model through systematic feature selection and pipeline tuning.",
    ],
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "Kaggle"],
    github: "https://github.com/Siddharth-Mishra-Personal",
  },
  {
    id: "recommender",
    tag: "Machine Learning · NLP",
    title: "Hybrid movie recommendation system",
    subtitle: "Python · TF-IDF · Cosine similarity",
    description:
      "Content-based and popularity-based hybrid recommender with fuzzy string matching. Built end-to-end from data preprocessing to an interactive CLI — achieving a 20% relevance uplift over the baseline.",
    bullets: [
      "Built a TF-IDF + cosine similarity model across movie metadata (genres, cast, director, overview), boosting relevance by ~20% over a popularity-only baseline.",
      "Integrated fuzzy string matching (difflib) to gracefully handle misspellings and partial inputs.",
      "Designed an interactive CLI for real-time movie input and recommendation output.",
    ],
    stack: ["Python", "TF-IDF", "scikit-learn", "difflib", "Pandas"],
    github: "https://github.com/Siddharth-Mishra-Personal",
  },
  {
    id: "neighbourhoods",
    tag: "Data Science · Geospatial",
    title: "Battle of Neighbourhoods — venue clustering",
    subtitle: "Foursquare API · K-means · Folium",
    description:
      "Processed 500+ venue records from the Foursquare API and applied K-means clustering to identify 20+ distinct neighbourhood clusters for retail expansion analysis, visualised on an interactive Folium map.",
    bullets: [
      "Ingested and cleaned 500+ venue records across categories using the Foursquare Places API.",
      "Applied K-means clustering to identify 20+ distinct neighbourhood profiles and hotspot zones.",
      "Built an interactive Folium choropleth map showing venue density and cluster assignments; automated workflow documentation.",
    ],
    stack: ["Python", "Foursquare API", "K-means", "Folium", "Pandas"],
    github: "https://github.com/Siddharth-Mishra-Personal",
  },
  {
    id: "portfolio-opt",
    tag: "Finance · Quantitative",
    title: "Portfolio optimisation — Markowitz MVP",
    subtitle: "R + Python · Excel Solver · Efficient Frontier",
    description:
      "Applied Markowitz Portfolio Theory to construct a Minimum Variance Portfolio across 7 international and domestic securities and gold. Visualised the Efficient Frontier and optimised asset weights using Excel Solver.",
    bullets: [
      "Constructed a 7-asset MVP (domestic equities, international ETFs, gold) using Markowitz mean-variance optimisation.",
      "Used Excel Solver and Python to minimise portfolio variance subject to return targets and allocation constraints.",
      "Visualised the Efficient Frontier to analyse the risk-return trade-off across the full weight space.",
    ],
    stack: ["Python", "R", "Excel Solver", "Markowitz", "CAPM"],
    github: null,
  },
  {
    id: "risk",
    tag: "Finance · Risk",
    title: "Financial risk and asset management",
    subtitle: "R · GARCH · ARIMA · VaR",
    description:
      "Applied ARIMA forecasting, GARCH/EGARCH volatility modelling, and CAPM for risk-return assessment across 6 listed companies. Calculated Value at Risk for portfolio risk evaluation.",
    bullets: [
      "Applied CAPM for risk-return assessment across 6 listed equities; used ARIMA for asset price forecasting.",
      "Employed GARCH and EGARCH models to analyse volatility clustering and leverage effects.",
      "Calculated Value at Risk (VaR) at 95% and 99% confidence levels for portfolio risk evaluation.",
    ],
    stack: ["R", "Python", "GARCH", "ARIMA", "VaR", "CAPM"],
    github: null,
  },
  {
    id: "movieapp",
    tag: "Frontend · React",
    title: "Movie booking web app",
    subtitle: "React.js · SPA · State management",
    description:
      "Full single-page React application with dynamic movie listings, multi-step seat selection, and a smooth booking flow with real-time seat availability tracking.",
    bullets: [
      "Implemented React Router for seamless multi-page navigation without full page reloads.",
      "Built seat selection UI with real-time availability state management across sessions.",
      "Designed an optimum booking flow with confirmation summary and responsive layout.",
    ],
    stack: ["React.js", "JavaScript", "React Router", "CSS"],
    github: "https://github.com/Siddharth-Mishra-Personal",
  },
];

export default function Projects() {
  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <p className="text-xs tracking-widest text-gold uppercase mb-6 font-medium">Technical work</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
          Projects
        </h1>
        <p className="text-muted text-base max-w-xl mb-16 leading-relaxed">
          From MILP-optimised recycling infrastructure to NLP recommenders — a selection of research
          and engineering projects across ML, finance, and full-stack development.
        </p>

        <div className="space-y-12">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="border border-border rounded-lg p-6 md:p-8 bg-surface card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] text-gold tracking-widest uppercase font-medium">
                    {p.tag}
                  </span>
                  <h2 className="font-display text-xl font-bold text-cream mt-1 leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-muted text-xs mt-1">{p.subtitle}</p>
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-border text-muted px-3 py-1.5 rounded hover:border-gold/40 hover:text-gold transition-colors flex-shrink-0"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

              <p className="text-muted text-sm leading-relaxed mb-5">{p.description}</p>

              <ul className="space-y-2 mb-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-gold mt-1.5 flex-shrink-0 text-[8px]">■</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] text-subtle bg-bg border border-border px-2 py-1 rounded font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="border-t border-border mt-16 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-muted text-sm">More on GitHub — including coursework and experiments.</p>
          <a
            href="https://github.com/Siddharth-Mishra-Personal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gold/40 text-gold px-5 py-2 rounded hover:bg-gold hover:text-bg transition-all"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
