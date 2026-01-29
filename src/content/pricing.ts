export type SubscriptionTier = "pro" | "pro_plus";

export interface PricingTier {
  tier: SubscriptionTier;
  name: string;
  description: string;
  monthly: number;
  annual: number;
  features: string[];
  isEarlyAdopter?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: "pro",
    name: "Pro",
    description: "MaxCap protection: sleep well, spend smart",
    monthly: 39,
    annual: 390,
    features: [
      "MaxCap: set spending limits, prevent runaway costs",
      "Unlimited workflows with real-time cost tracking",
      "1M workflow-runs/month",
      "14-day trial (credit card required)",
      "Cancel anytime",
      "1min polling frequency",
    ],
  },
  {
    tier: "pro_plus",
    name: "Pro+",
    description: "For teams with advanced needs",
    monthly: 60,
    annual: 600,
    features: [
      "Everything in Pro",
      "User management & RBAC",
      "SSO",
      "Priority support",
    ],
  },
];

export const ANNUAL_SAVINGS_PERCENTAGE = 17;

// Early adopter pricing - first 50 users get $29/month locked-in
export const EARLY_ADOPTER_PRICE = 29;
export const EARLY_ADOPTER_LIMIT = 50;
