const CodeBlock = () => {
  return (
    <div className="bg-beige rounded-lg p-6 font-mono text-sm border border-border h-[400px] overflow-auto">
      <div className="text-muted-foreground mb-1"># Define the Hypothesis (Eval)</div>
      <div className="mb-4">
        <span className="text-primary">def</span>{" "}
        <span className="font-semibold">validate_api_response</span>
        <span>(response):</span>
      </div>
      
      <div className="ml-4 mb-4">
        <div className="text-muted-foreground"># Assert expected structure</div>
        <div>
          <span className="text-primary">assert</span>{" "}
          <span className="text-foreground/80">response.status == 200</span>
        </div>
        <div>
          <span className="text-primary">assert</span>{" "}
          <span className="text-foreground/80">"data" in response.json()</span>
        </div>
        <div>
          <span className="text-primary">return</span>{" "}
          <span className="text-success">True</span>
        </div>
      </div>

      <div className="mb-4 border-t border-border pt-4">
        <div className="text-muted-foreground mb-1"># Create the Agent</div>
        <div>
          <span className="text-foreground/80">agent = </span>
          <span className="font-semibold">create_reflexion</span>
          <span>(</span>
        </div>
        <div className="ml-4">
          <span className="text-foreground/80">model=</span>
          <span className="text-warning">ChatOpenAI</span>
          <span>(model=</span>
          <span className="text-success">"gpt-4"</span>
          <span>),</span>
        </div>
        <div className="ml-4">
          <span className="text-foreground/80">evaluator=</span>
          <span className="text-foreground">validate_api_response</span>
          <span>,</span>
        </div>
        <div className="ml-4">
          <span className="text-foreground/80">memory_store=</span>
          <span className="text-foreground">neo4j_memory</span>
        </div>
        <div>
          <span>)</span>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="text-muted-foreground mb-1"># Run the experiment</div>
        <div>
          <span className="text-foreground/80">result = </span>
          <span className="text-foreground">agent.execute(</span>
          <span className="text-success">"Fetch user data"</span>
          <span>)</span>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
