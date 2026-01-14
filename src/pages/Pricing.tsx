import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PRICING_TIERS, ANNUAL_SAVINGS_PERCENTAGE, type PricingTier } from "@/content/pricing";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const handleFreeTrial = () => {
    window.location.href = "https://app.getseer.dev/signup";
  };

  const handleSignUp = (tier: string) => {
    if (tier === "free") {
      handleFreeTrial();
    } else {
      window.location.href = "https://app.getseer.dev/signup";
    }
  };

  const handleContactUs = () => {
    // You can update this to point to a contact form or email
    window.location.href = "mailto:sales@getseer.dev?subject=Seer%20Pricing%20Inquiry";
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
                Simple, transparent pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the perfect plan for your workflow automation needs. Always free to get started.
              </p>
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
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PRICING_TIERS.map((tier) => (
                <PricingCard
                  key={tier.tier}
                  tier={tier}
                  billingPeriod={billingPeriod}
                  onFreeTrial={() => handleFreeTrial()}
                  onSignUp={() => handleSignUp(tier.tier)}
                  onContactUs={() => handleContactUs()}
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
                <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  The Free plan gives you access to all core features with limited monthly runs. Start with Free and upgrade whenever you need more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom enterprise plans?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide custom pricing for large teams and enterprise needs. Contact our sales team to discuss your requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards and process payments securely through Stripe.
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
  onFreeTrial: () => void;
  onSignUp: () => void;
  onContactUs: () => void;
}

function PricingCard({ tier, billingPeriod, onFreeTrial, onSignUp, onContactUs }: PricingCardProps) {
  const displayPrice = billingPeriod === "monthly" ? tier.monthly : Math.floor(tier.annual / 12);
  const periodLabel = billingPeriod === "monthly" ? "month" : "year";
  const isFreePlan = tier.tier === "free";

  return (
    <Card
      className={`relative overflow-hidden flex flex-col ${
        tier.tier === "pro" ? "border-seer shadow-[0_10px_40px_-20px_rgba(131,56,236,0.7)] md:scale-105 md:z-10" : "border-muted"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-seer via-purple-500 to-seer opacity-70" />
      <CardHeader className="space-y-3 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-xl">{tier.name}</CardTitle>
          <CardDescription className="text-xs">{tier.description}</CardDescription>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold">
            {isFreePlan ? "Free" : `$${displayPrice}`}
          </div>
          {!isFreePlan && (
            <div className="text-xs text-muted-foreground">
              {billingPeriod === "annual" ? "per month (billed annually)" : "per month"}
              {billingPeriod === "annual" && (
                <div className="mt-1">
                  Save ${(tier.monthly - displayPrice) * 12}/year
                </div>
              )}
            </div>
          )}
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

        {/* CTA Buttons */}
        <div className="space-y-2 pt-4 mt-auto">
          <Button
            className="w-full"
            variant={isFreePlan ? "outline" : "brand"}
            onClick={onFreeTrial}
          >
            Start free trial
          </Button>
          <Button
            className="w-full"
            variant="brand"
            onClick={onSignUp}
          >
            Sign up / Get started
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={onContactUs}
          >
            Learn more / Contact us
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Pricing;
