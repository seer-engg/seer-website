import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PLAN, SELF_HOSTED, ENTERPRISE, HUMAN_COST } from "@/content/pricing";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        {/* Header */}
        <section className="px-6 py-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              One plan. Flat rate. No surprises.
            </h1>
            <p className="text-lg text-muted-foreground">
              Hire a {HUMAN_COST.role.toLowerCase()}: ${HUMAN_COST.low.toLocaleString()}–${HUMAN_COST.high.toLocaleString()}/mo.
              Or let Seer do it for ${PLAN.price}.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {/* Self-Hosted */}
            <Card className="flex flex-col border-muted">
              <CardHeader className="space-y-3 pb-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{SELF_HOSTED.name}</CardTitle>
                  <CardDescription className="text-xs">{SELF_HOSTED.description}</CardDescription>
                </div>
                <div>
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-xs text-muted-foreground">forever</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-1">
                <ul className="space-y-3">
                  {SELF_HOSTED.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-auto">
                  <Button className="w-full" variant="outline" asChild>
                    <a href={SELF_HOSTED.cta.url} target="_blank" rel="noopener noreferrer">
                      {SELF_HOSTED.cta.label}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro — highlighted */}
            <Card className="relative overflow-hidden flex flex-col border-foreground/20 shadow-glow-lg md:scale-105 md:z-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-foreground/20 via-foreground/40 to-foreground/20 opacity-70" />
              <CardHeader className="space-y-3 pb-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{PLAN.name}</CardTitle>
                  <CardDescription className="text-xs">{PLAN.description}</CardDescription>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground line-through">
                    ${HUMAN_COST.low.toLocaleString()}–${HUMAN_COST.high.toLocaleString()}/mo
                  </div>
                  <div className="text-4xl font-bold">${PLAN.price}<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                  <div className="text-xs text-muted-foreground">vs hiring a {HUMAN_COST.role.toLowerCase()}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-1">
                <ul className="space-y-3">
                  {PLAN.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-auto">
                  <Button className="w-full" variant="brand" asChild>
                    <a href="https://app.getseer.dev" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="flex flex-col border-muted">
              <CardHeader className="space-y-3 pb-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{ENTERPRISE.name}</CardTitle>
                  <CardDescription className="text-xs">{ENTERPRISE.description}</CardDescription>
                </div>
                <div>
                  <div className="text-3xl font-bold">Custom</div>
                  <div className="text-xs text-muted-foreground">tailored to your team</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-1">
                <ul className="space-y-3">
                  {ENTERPRISE.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-auto">
                  <Button className="w-full" variant="outline" asChild>
                    <a href={ENTERPRISE.cta.url}>
                      {ENTERPRISE.cta.label}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-12 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Why $60/month?</h3>
                <p className="text-muted-foreground">
                  Flat rate. No credits to count, no per-operation fees, no surprise bills.
                  Other tools charge per credit — users have reported $3,000–$4,000 incidents from misconfigured workflows.
                  Seer includes built-in budget caps so that can't happen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What are LLM credits?</h3>
                <p className="text-muted-foreground">
                  Your plan includes $20 in LLM credits that refresh every 6 hours.
                  That's enough to run roughly 20 full AI threads per day.
                  You'll see exactly how much each workflow costs in real time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens if I hit my budget cap?</h3>
                <p className="text-muted-foreground">
                  Seer pauses the workflow and notifies you. Nothing runs past your limit.
                  You can raise the cap or wait for it to refresh — you're always in control.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Yes. Cancel anytime from your account settings. Your access continues until the end of the billing period.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's included in self-hosted?</h3>
                <p className="text-muted-foreground">
                  The full source code, unlimited workflows, unlimited runs.
                  Bring your own API keys and run any model — OpenAI, Anthropic, Ollama, whatever you want.
                  Community support via GitHub.
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

export default Pricing;
