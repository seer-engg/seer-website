export type SubscriptionTier = "free" | "pro";

export interface PricingTier {
  tier: SubscriptionTier;
  name: string;
  description: string;
  monthly: number;
  annual: number;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: "free",
    name: "Free",
    description: "Get started with Seer",
    monthly: 0,
    annual: 0,
    features: [
      "3 workflows",
      "100 workflow-runs/month",
      "5 Chat AI messages",
      "14-day limit",
      "15min polling frequency",
      "$5 LLM credits/month",
    ],
  },
  {
    tier: "pro",
    name: "Pro",
    description: "For growing teams",
    monthly: 20,
    annual: 200,
    features: [
      "Unlimited workflows",
      "1M workflow-runs/month",
      "100 Chat AI messages",
      "No day limit",
      "1min polling frequency",
      "$20 LLM credits/month",
      "Global variables",
      "User management & RBAC",
      "SSO",
    ],
  },
];

export const ANNUAL_SAVINGS_PERCENTAGE = 17;
