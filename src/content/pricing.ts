export const PLAN = {
  name: "Pro",
  price: 60,
  description: "Everything you need to automate your daily work",
  features: [
    "Unlimited workflows",
    "1 million runs per month",
    "$20 in LLM credits included (refreshes every 6 hours)",
    "GPT-5, Gemini, and Kimi K2.5 models",
    "Per-workflow budget caps — Seer stops before you overspend",
    "1-minute polling on triggers",
    "Run from Claude via MCP",
    "14-day free trial",
  ],
};

export const SELF_HOSTED = {
  name: "Self-Hosted",
  price: 0,
  description: "Run Seer on your own infrastructure",
  features: [
    "Unlimited everything",
    "Bring your own API keys",
    "Use any model (OpenAI, Anthropic, Ollama, etc.)",
    "Full source code on GitHub",
    "Community support",
  ],
  cta: { label: "View on GitHub", url: "https://github.com/seer-engg/seer" },
};

export const ENTERPRISE = {
  name: "Enterprise",
  description: "For teams that need more",
  features: [
    "Single sign-on (SSO)",
    "Custom integrations",
    "Dedicated support & SLA",
    "Volume pricing",
  ],
  cta: { label: "Talk to Us", url: "mailto:akshay@getseer.dev" },
};

export const HUMAN_COST = {
  role: "Marketing Assistant",
  low: 2000,
  high: 8000,
};
