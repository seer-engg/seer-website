import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PRICING_TIERS, ANNUAL_SAVINGS_PERCENTAGE, EARLY_ADOPTER_PRICE, EARLY_ADOPTER_LIMIT, type PricingTier } from "@/content/pricing";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [earlyAdoptersRemaining, setEarlyAdoptersRemaining] = useState<number | null>(null);

  useEffect(() => {
    // In production, fetch from API. For now, assume spots available.
    // This would call: /api/subscriptions/early-adopter-count
    setEarlyAdoptersRemaining(EARLY_ADOPTER_LIMIT);
  }, []);

  const handleSignUp = () => {
    window.location.href = "https://app.getseer.dev";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        {/* Header Section */}
        <section className="px-6 py-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Pricing</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Set it. Forget it. Never get burned.
              </h1>
              <p className="text-lg text-muted-foreground">
                AI workflows with MaxCap protection. One $3K surprise bill is all it takes—don't let it be yours.
              </p>
              {earlyAdoptersRemaining !== null && earlyAdoptersRemaining > 0 && (
                <Badge variant="secondary" className="mt-2">
                  Early Adopter: First {EARLY_ADOPTER_LIMIT} users get ${EARLY_ADOPTER_PRICE}/month forever
                </Badge>
              )}
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-seer text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === "annual"
                    ? "bg-seer text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <Badge variant="secondary" className="ml-2 text-xs">
                  Save {ANNUAL_SAVINGS_PERCENTAGE}%
                </Badge>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="px-6 py-12">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-6 justify-center">
              {PRICING_TIERS.map((tier) => (
                <PricingCard
                  key={tier.tier}
                  tier={tier}
                  billingPeriod={billingPeriod}
                  onSignUp={handleSignUp}
                  showEarlyAdopter={tier.tier === "pro" && earlyAdoptersRemaining !== null && earlyAdoptersRemaining > 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-12 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Why do you require a credit card for the trial?</h3>
                <p className="text-muted-foreground">
                  Seer is built for serious automation. A card on file ensures zero workflow interruptions and prevents limits during critical runs. Plus, you get MaxCap protection from day one—no surprise bills, ever. You won't be charged during the 14-day trial.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens after the trial?</h3>
                <p className="text-muted-foreground">
                  Your subscription auto-renews at the monthly rate. Early adopters (first {EARLY_ADOPTER_LIMIT} users) get ${EARLY_ADOPTER_PRICE}/month locked-in forever. Standard pricing is $49/month. Cancel anytime before trial ends—no questions asked.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's MaxCap and why do I need it?</h3>
                <p className="text-muted-foreground">
                  MaxCap is your safety net. Set a spending limit (e.g., $100/month), and Seer automatically pauses workflows before you hit it. No more waking up to $3K bills from runaway loops or API cost spikes. You control the budget; we enforce it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards and process payments securely through Stripe. All transactions are PCI-DSS compliant.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface PricingCardProps {
  tier: PricingTier;
  billingPeriod: "monthly" | "annual";
  onSignUp: () => void;
  showEarlyAdopter?: boolean;
}

function PricingCard({ tier, billingPeriod, onSignUp, showEarlyAdopter }: PricingCardProps) {
  const basePrice = billingPeriod === "monthly" ? tier.monthly : Math.floor(tier.annual / 12);
  const displayPrice = showEarlyAdopter && tier.tier === "pro" ? EARLY_ADOPTER_PRICE : basePrice;

  return (
    <Card
      className={`relative overflow-hidden flex flex-col ${
        tier.tier === "pro" ? "border-seer shadow-[0_10px_40px_-20px_rgba(131,56,236,0.7)] md:scale-105 md:z-10" : "border-muted"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-seer via-purple-500 to-seer opacity-70" />
      {showEarlyAdopter && (
        <Badge className="absolute top-4 right-4 bg-seer text-white border-seer">
          Early Adopter
        </Badge>
      )}
      <CardHeader className="space-y-3 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-xl">{tier.name}</CardTitle>
          <CardDescription className="text-xs">{tier.description}</CardDescription>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold">
            ${displayPrice}
            {showEarlyAdopter && basePrice !== displayPrice && (
              <span className="text-lg text-muted-foreground line-through ml-2">
                ${basePrice}
              </span>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            {billingPeriod === "annual" ? "per month (billed annually)" : "per month"}
            {showEarlyAdopter && (
              <div className="mt-1 text-seer font-semibold">
                Locked-in forever for first {EARLY_ADOPTER_LIMIT} users
              </div>
            )}
            {billingPeriod === "annual" && !showEarlyAdopter && (
              <div className="mt-1">
                Save ${(tier.monthly - displayPrice) * 12}/year
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 flex flex-col flex-1">
        {/* Features */}
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="pt-4 mt-auto">
          <Button
            className="w-full"
            variant="brand"
            onClick={onSignUp}
          >
            Start
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Pricing;
