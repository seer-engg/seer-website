export type SubscriptionTier = "free" | "pro" | "pro_plus" | "ultra";

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
      "Basic workflows",
      "Limited runs each month",
      "Community support",
    ],
  },
  {
    tier: "pro",
    name: "Pro",
    description: "For growing teams",
    monthly: 20,
    annual: 200,
    features: [
      "More workflow runs",
      "Priority execution",
      "Email support",
    ],
  },
  {
    tier: "pro_plus",
    name: "Pro+",
    description: "For power users",
    monthly: 60,
    annual: 600,
    features: [
      "High volume runs",
      "Advanced workflow controls",
      "Priority support",
    ],
  },
  {
    tier: "ultra",
    name: "Ultra",
    description: "Enterprise scale",
    monthly: 100,
    annual: 1000,
    features: [
      "Unlimited runs",
      "All features unlocked",
      "Dedicated support",
    ],
  },
];

export const ANNUAL_SAVINGS_PERCENTAGE = 17;
