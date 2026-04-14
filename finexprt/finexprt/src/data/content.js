// ─────────────────────────────────────────────
//  FinExprt — Central Content Data File
//  Edit everything here; no JSX changes needed.
// ─────────────────────────────────────────────

export const brand = {
  name: "FinExprt",
  tagline: "Expert Finance, Simplified",
  logo: "FE",
};

export const nav = {
  links: [
    { label: "Features", href: "#features" },
    { label: "Products", href: "#products" },
    { label: "Calculator", href: "#calculator" },
    { label: "Insights", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Contact Us", href: "#contact" },
};

export const hero = {
  badge: "Trusted by 500,000+ users",
  headline: "Master Your Money,",
  headlineAccent: "Build Your Future.",
  subtext:
    "FinExprt gives you real-time insights, AI-powered budgeting, and expert investment tools — all in one beautifully simple platform.",
  ctas: [
    { label: "Start for Free", href: "#signup", primary: true },
    { label: "Watch Demo", href: "#demo", primary: false },
  ],
  stats: [
    { value: "$4.2B+", label: "Assets Managed" },
    { value: "500K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
  ],
};

export const trust = {
  label: "Trusted & certified by",
  logos: [
    { name: "Forbes", icon: "📰" },
    { name: "TechCrunch", icon: "💻" },
    { name: "Y Combinator", icon: "🚀" },
    { name: "FDIC Insured", icon: "🏦" },
    { name: "SOC 2", icon: "🔒" },
    { name: "ISO 27001", icon: "✅" },
  ],
};

export const features = {
  heading: "Everything you need to",
  headingAccent: "take control of finances",
  subtext:
    "From tracking daily expenses to planning retirement — FinExprt covers it all with intelligent, automated tools.",
  items: [
    {
      icon: "📊",
      title: "Smart Analytics",
      desc: "Real-time dashboards that visualize spending patterns, net worth trends, and cash flow at a glance.",
      color: "#FF6B2B",
    },
    {
      icon: "🤖",
      title: "AI Budget Coach",
      desc: "Get personalized weekly budgets, savings targets, and anomaly alerts powered by machine learning.",
      color: "#1A3C6B",
    },
    {
      icon: "📈",
      title: "Investment Tracker",
      desc: "Track stocks, ETFs, crypto, and mutual funds across all brokerages in one unified portfolio view.",
      color: "#FF6B2B",
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      desc: "Instant notifications for unusual charges, bill reminders, and market movements that matter to you.",
      color: "#1A3C6B",
    },
    {
      icon: "🛡️",
      title: "Bank-Grade Security",
      desc: "256-bit AES encryption, biometric auth, and continuous fraud monitoring protect every transaction.",
      color: "#FF6B2B",
    },
    {
      icon: "🌐",
      title: "Multi-Currency",
      desc: "Manage finances across 40+ currencies with live exchange rates and automatic conversion reporting.",
      color: "#1A3C6B",
    },
  ],
};

export const tools = {
  heading: "Powerful tools,",
  headingAccent: "zero complexity",
  subtext:
    "Each module is purpose-built to solve a specific financial challenge — and they all work together seamlessly.",
  items: [
    {
      icon: "💰",
      title: "Expense Manager",
      desc: "Automatically categorize and tag every transaction. Set limits per category and get alerts before you overspend.",
      badge: "Most Popular",
      highlight: true,
    },
    {
      icon: "🏠",
      title: "Goals Planner",
      desc: "Set savings goals for home, travel, education, or retirement. See exactly how much to save monthly to get there.",
      badge: null,
      highlight: false,
    },
    {
      icon: "📋",
      title: "Tax Optimizer",
      desc: "Year-round tax planning with automated deduction tracking. Reduce your tax liability — stress-free.",
      badge: "New",
      highlight: false,
    },
    {
      icon: "🔄",
      title: "Bill Automator",
      desc: "Schedule, track, and auto-pay all recurring bills. Never miss a due date or incur a late fee again.",
      badge: null,
      highlight: false,
    },
  ],
};

export const testimonials = {
  heading: "Loved by",
  headingAccent: "real people",
  items: [
    {
      name: "Priya Sharma",
      role: "Freelance Designer, Mumbai",
      avatar: "PS",
      rating: 5,
      quote:
        "FinExprt completely changed how I handle my irregular freelance income. The AI budget coach adapts every month — it's like having a personal CFO.",
    },
    {
      name: "Marcus Allen",
      role: "Software Engineer, Berlin",
      avatar: "MA",
      rating: 5,
      quote:
        "I track investments across three brokerages and two currencies. FinExprt unifies everything beautifully. I can't imagine going back to spreadsheets.",
    },
    {
      name: "Ananya Krishnan",
      role: "MBA Student, Singapore",
      avatar: "AK",
      rating: 5,
      quote:
        "The Goals Planner helped me save ₹3 lakhs for my dream vacation in 8 months. Seeing the progress bar move is genuinely motivating!",
    },
    {
      name: "David Osei",
      role: "Small Business Owner, London",
      avatar: "DO",
      rating: 5,
      quote:
        "Tax season used to be a nightmare. Now my deductions are tracked automatically all year. Saved me hours and a lot of stress.",
    },
    {
      name: "Yuki Tanaka",
      role: "Product Manager, Tokyo",
      avatar: "YT",
      rating: 5,
      quote:
        "The multi-currency support is flawless. I work across USD, JPY, and EUR — FinExprt handles it without a single hiccup.",
    },
    {
      name: "Sofia Mendes",
      role: "Doctor, São Paulo",
      avatar: "SM",
      rating: 5,
      quote:
        "Security was my #1 concern. After researching, FinExprt's 256-bit encryption and biometric login gave me total confidence. Highly recommended.",
    },
  ],
};

export const faq = {
  heading: "Frequently asked",
  headingAccent: "questions",
  items: [
    {
      q: "Is FinExprt free to use?",
      a: "Yes! FinExprt offers a fully-featured free plan. Our Pro plan (₹499/month) unlocks advanced analytics, tax tools, and priority support.",
    },
    {
      q: "How does FinExprt connect to my bank?",
      a: "We use read-only bank connections via certified open-banking APIs. We can never move or modify your money — only read transaction data.",
    },
    {
      q: "Is my financial data secure?",
      a: "Absolutely. All data is encrypted with AES-256 at rest and in transit. We are SOC 2 Type II certified and comply with GDPR and RBI guidelines.",
    },
    {
      q: "Which banks and brokerages are supported?",
      a: "We support 10,000+ institutions across 40 countries — including all major Indian banks, HDFC Securities, Zerodha, Groww, and global platforms like Interactive Brokers.",
    },
    {
      q: "Can I export my data?",
      a: "Yes — export your full transaction history, reports, and tax summaries as CSV, PDF, or Excel at any time. Your data belongs to you.",
    },
    {
      q: "Does FinExprt offer customer support?",
      a: "Free users get in-app chat support. Pro users get priority email + live chat with a 2-hour response guarantee on weekdays.",
    },
  ],
};

export const cta = {
  heading: "Your financial clarity",
  headingAccent: "starts today.",
  subtext:
    "Join 500,000+ people who've taken control of their money with FinExprt. No credit card required.",
  primary: { label: "Create Free Account", href: "#signup" },
  secondary: { label: "Talk to Sales", href: "#contact" },
  note: "Free forever plan available. Upgrade anytime.",
};

export const footer = {
  tagline: "Expert Finance, Simplified.",
  columns: [
    {
      heading: "Product",
      links: ["Features", "Pricing", "Security", "Changelog", "Roadmap"],
    },
    {
      heading: "Company",
      links: ["About", "Blog", "Careers", "Press", "Partners"],
    },
    {
      heading: "Resources",
      links: ["Help Center", "API Docs", "Community", "Webinars", "Status"],
    },
    {
      heading: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
    },
  ],
  social: ["Twitter", "LinkedIn", "Instagram", "YouTube"],
  copy: `© ${new Date().getFullYear()} FinExprt Technologies Pvt. Ltd. All rights reserved.`,
};
