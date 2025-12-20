import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-left tracking-tight">
              Don't Build Agents on Hope.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance mb-12">
              Falsifiable, evidence-based workflow for agents.
            </p>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
