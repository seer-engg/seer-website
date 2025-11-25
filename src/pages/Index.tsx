import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ComparisonTable from "@/components/ComparisonTable";
import Asymmetry from "@/components/Asymmetry";
import SeerLoop from "@/components/SeerLoop";
import Features from "@/components/Features";
import GeneticEvals from "@/components/GeneticEvals";
import MemoryBank from "@/components/MemoryBank";
import MemoryGuardrails from "@/components/MemoryGuardrails";
import CodeExample from "@/components/CodeExample";
import CIIntegration from "@/components/CIIntegration";
import OriginStory from "@/components/OriginStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <ComparisonTable />
      <Asymmetry />
      <SeerLoop />
      <Features />
      <GeneticEvals />
      <MemoryBank />
      <MemoryGuardrails />
      <CodeExample />
      <CIIntegration />
      <OriginStory />
      <Footer />
    </div>
  );
};

export default Index;
