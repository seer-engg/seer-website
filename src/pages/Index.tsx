import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import HomeComparisonTable from "@/components/HomeComparisonTable";
import SeerLoop from "@/components/SeerLoop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SeerLoop />
      <InteractiveDemo />
      <HomeComparisonTable />
      <Footer />
    </div>
  );
};

export default Index;
