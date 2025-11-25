import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SeerLoop from "@/components/SeerLoop";
import Features from "@/components/Features";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <SeerLoop />
      <Features />
      <CodeExample />
      <Footer />
    </div>
  );
};

export default Index;
