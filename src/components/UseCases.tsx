import { Inbox, FileText, Users, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UseCases = () => {
  const useCases = [
    {
      icon: Inbox,
      title: "Email Inbox Triage",
      pain: "30 minutes every morning sorting through 47 unread emails",
      solution: "Get top 3 priorities in 90 seconds",
      savings: "28 min/day saved",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: FileText,
      title: "LinkedIn Content",
      pain: "45 minutes per week staring at a blank page",
      solution: "AI-drafted post in Google Docs, ready to review",
      savings: "37 hours/year saved",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Users,
      title: "Lead Classification",
      pain: "$40 burned on agent setup before it even works",
      solution: "Classify and route leads instantly, no trial and error",
      savings: "$39/mo flat, no surprises",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: MessageSquare,
      title: "Product Support",
      pain: "Answering 'Do you ship to Alaska?' 20 times per week",
      solution: "Auto-reply from your catalog and knowledge base",
      savings: "2 hours/week saved",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ];

  return (
    <section id="use-cases" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Workflows That Save Time and Money</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One prompt, real results. Built for marketing and sales teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className={`p-8 border rounded-lg bg-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 ${useCase.borderColor}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${useCase.bgColor}`}>
                    <Icon className={`w-6 h-6 ${useCase.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${useCase.bgColor} ${useCase.color}`}>
                      {useCase.savings}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                      Before
                    </div>
                    <p className="text-muted-foreground">
                      {useCase.pain}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                      After
                    </div>
                    <p className="font-medium">
                      {useCase.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="https://app.getseer.dev" target="_blank" rel="noopener noreferrer">
                Try These Workflows
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/demo">
                Book a Demo
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Free tier includes 100 workflow runs per month
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
