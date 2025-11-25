import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ComparisonTable from "@/components/ComparisonTable";
import SeerLoop from "@/components/SeerLoop";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <ComparisonTable />
      <SeerLoop />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
