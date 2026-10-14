// ============================================================
// CONTENT FILE — edit everything about the site here.
// Components read from this file, so updating values below
// updates the whole website. No component changes needed.
// ============================================================

// ------------------------------------------------------------
// PROFILE — name, role, contact email, and intro copy.
// Used by: Hero, About, Contact, Footer, and the SEO metadata.
// ------------------------------------------------------------
export const profile = {
  name: "Jason McCarthy",
  role: "Data Scientist & Analyst",
  email: "jasonmccarthy@gmail.com",
  // One-sentence pitch shown under the big hero headline.
  tagline:
    "I combine analytics expertise with backend engineering to build complete, end-to-end data solutions and pipelines.",
  // Longer paragraph shown in the About section.
  intro:
    "I'm a data professional focused on turning raw, messy data into clear decisions. From cleaning and modeling to visualization and storytelling, I deliver insights that move the needle — backed by the engineering knowledge to ship reliable data pipelines.",
  // Headline of the Contact section (the call to action).
  contactCta: "Let's discuss how data can drive better decisions.",
} as const;

// ------------------------------------------------------------
// CORE SKILLS — the "Core" pill group in the Skills section.
// ------------------------------------------------------------
export const coreSkills = [
  "Data Visualization",
  "Data Storytelling",
  "Data Cleaning",
  "Machine Learning",
  "Predictive Modeling",
] as const;

// ------------------------------------------------------------
// TOOL SKILLS — the "Tools" pill group in the Skills section.
// ------------------------------------------------------------
export const toolSkills = [
  "Python",
  "Pandas",
  "SQL",
  "Jupyter Notebook",
  "Power BI",
  "Excel",
] as const;

// ------------------------------------------------------------
// PROJECTS — each entry renders as one card in Featured Projects.
// - problem/solution/impact: the three short paragraphs on the card
// - stack: technology tags at the bottom of the card
// - github/demo: replace the placeholder URLs with real links
// ------------------------------------------------------------
export type Project = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "Customer Churn Prediction Engine",
    problem:
      "A subscription business was losing revenue to churn without knowing which customers were at risk.",
    solution:
      "Built a gradient-boosted classification model on behavioural and billing data, surfaced via a scoring pipeline.",
    impact: "Identified 82% of churners a month early, enabling targeted retention campaigns.",
    stack: ["Python", "Pandas", "scikit-learn", "SQL"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Retail Sales Analytics Dashboard",
    problem:
      "Leadership lacked a single source of truth for store performance across regions.",
    solution:
      "Designed an interactive Power BI dashboard fed by an automated SQL ETL process.",
    impact: "Cut weekly reporting time from 6 hours to near-instant, self-serve access.",
    stack: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Demand Forecasting Pipeline",
    problem:
      "Inventory was consistently over- or under-stocked due to manual forecasting.",
    solution:
      "Developed a time-series forecasting model and scheduled pipeline to predict weekly demand.",
    impact: "Reduced stockouts by 31% and excess inventory holding costs by 18%.",
    stack: ["Python", "Pandas", "Prophet", "Airflow"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Sentiment Analysis of Product Reviews",
    problem:
      "Thousands of reviews held valuable feedback that no one had time to read.",
    solution:
      "Built an NLP pipeline to classify sentiment and extract recurring themes at scale.",
    impact: "Flagged 3 critical product issues that drove a measurable rating uplift.",
    stack: ["Python", "NLTK", "scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Marketing Attribution Model",
    problem:
      "Marketing spend was allocated on gut feel with unclear channel ROI.",
    solution:
      "Created a multi-touch attribution model linking spend to conversions across channels.",
    impact: "Reallocated budget for a 24% improvement in cost per acquisition.",
    stack: ["Python", "Pandas", "SQL", "Power BI"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Real-Time KPI Data Pipeline",
    problem:
      "Operational metrics were stale by the time teams reviewed them.",
    solution:
      "Engineered a streaming ingestion pipeline feeding a live operational dashboard.",
    impact: "Delivered sub-minute KPI freshness for faster operational decisions.",
    stack: ["Python", "SQL", "Kafka", "Power BI"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

// ------------------------------------------------------------
// CERTIFICATIONS — each entry renders as one card with an icon.
// ------------------------------------------------------------
export const certifications = [
  {
    title: "BSc Computer Science",
    issuer: "University",
  },
  {
    title: "Applied Data Science",
    issuer: "WorldQuant University",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    title: "Data Literacy",
    issuer: "DataCamp",
  },
] as const;
