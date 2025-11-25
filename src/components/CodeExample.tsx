const CodeExample = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Code First</h2>
          <p className="text-xl text-muted-foreground">
            Python-native. Type-safe. Developer friendly.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 font-mono text-sm overflow-x-auto">
          <div className="text-primary-foreground/60 mb-2"># Install Seer</div>
          <div className="mb-6 text-primary-foreground/90">$ pip install seer-framework</div>

          <div className="text-primary-foreground/60 mb-2"># Create your first reflexion agent</div>
          <div className="space-y-1">
            <div>
              <span className="text-warning">from</span>{" "}
              <span className="text-primary-foreground/90">seer</span>{" "}
              <span className="text-warning">import</span>{" "}
              <span className="text-primary-foreground/90">create_reflexion</span>
            </div>
            <div>
              <span className="text-warning">from</span>{" "}
              <span className="text-primary-foreground/90">langchain_openai</span>{" "}
              <span className="text-warning">import</span>{" "}
              <span className="text-primary-foreground/90">ChatOpenAI</span>
            </div>
          </div>

          <div className="my-6 border-t border-primary-foreground/20" />

          <div className="space-y-1">
            <div>
              <span className="text-primary-foreground/90">agent = </span>
              <span className="text-success">create_reflexion</span>
              <span className="text-primary-foreground/90">(</span>
            </div>
            <div className="ml-4">
              <span className="text-primary-foreground/70">model=</span>
              <span className="text-warning">ChatOpenAI</span>
              <span className="text-primary-foreground/90">(</span>
            </div>
            <div className="ml-8">
              <span className="text-primary-foreground/70">model=</span>
              <span className="text-success">"gpt-4"</span>
              <span className="text-primary-foreground/90">,</span>
            </div>
            <div className="ml-8">
              <span className="text-primary-foreground/70">temperature=</span>
              <span className="text-success">0.7</span>
            </div>
            <div className="ml-4 text-primary-foreground/90">),</div>
            <div className="ml-4">
              <span className="text-primary-foreground/70">memory_store=</span>
              <span className="text-primary-foreground/90">neo4j_memory,</span>
            </div>
            <div className="ml-4">
              <span className="text-primary-foreground/70">evaluator=</span>
              <span className="text-primary-foreground/90">custom_eval,</span>
            </div>
            <div className="ml-4">
              <span className="text-primary-foreground/70">max_iterations=</span>
              <span className="text-success">3</span>
            </div>
            <div className="text-primary-foreground/90">)</div>
          </div>

          <div className="my-6 border-t border-primary-foreground/20" />

          <div className="text-primary-foreground/60 mb-2"># Run with confidence</div>
          <div>
            <span className="text-primary-foreground/90">result = agent.execute(</span>
            <span className="text-success">"Your task here"</span>
            <span className="text-primary-foreground/90">)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
