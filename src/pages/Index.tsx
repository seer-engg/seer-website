import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import HomeComparisonTable from "@/components/HomeComparisonTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UseCases />
      <HomeComparisonTable />
      <Footer />
    </div>
  );
};

export default Index;
