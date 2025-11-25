import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Terminal from "./Terminal";
import CodeBlock from "./CodeBlock";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            Don't Build Agents on Hope.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            Seer introduces a falsifiable, evidence-based workflow for multi-agent systems. 
            Define your hypothesis, run the experiment, and watch your agents self-correct.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Clone the Repo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-slide-up">
          <CodeBlock />
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
