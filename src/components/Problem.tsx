import { AlertCircle, TrendingDown, FileX } from "lucide-react";

const Problem = () => {
  return (
    <section id="philosophy" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">The Workflow Building Challenge</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why existing platforms fall short for AI workflows.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 border border-border rounded-lg bg-background">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tools like Make, n8n, and Zapier are great for simple automations. But AI workflows need fine-grained control, state management, and the ability to interrupt and resume. They need integrations that understand context, not just API calls.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-border rounded-lg bg-background">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Limited Control</h3>
            <p className="text-muted-foreground">
              Most platforms hide complexity behind templates. Real workflows need fine-grained control over every step and decision point.
            </p>
          </div>

          <div className="p-8 border border-border rounded-lg bg-background">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Integration Gaps</h3>
            <p className="text-muted-foreground">
              Generic API connectors don't understand your tools. AI workflows need integrations that know about GitHub PRs, Asana tasks, and Gmail threads.
            </p>
          </div>

          <div className="p-8 border border-border rounded-lg bg-background">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
              <FileX className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">State Management</h3>
            <p className="text-muted-foreground">
              Workflows fail when state isn't managed. Seer handles persistence, resumability, and observability out of the box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
