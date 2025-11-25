import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Asymmetry from "@/components/Asymmetry";
import SeerLoop from "@/components/SeerLoop";
import Features from "@/components/Features";
import MemoryBank from "@/components/MemoryBank";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Asymmetry />
      <SeerLoop />
      <Features />
      <MemoryBank />
      <CodeExample />
      <Footer />
    </div>
  );
};

export default Index;
