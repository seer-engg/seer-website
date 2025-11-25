import Navbar from "@/components/Navbar";
import MemoryHero from "@/components/MemoryHero";
import MemoryBank from "@/components/MemoryBank";
import MemoryGuardrails from "@/components/MemoryGuardrails";
import Footer from "@/components/Footer";

const Memory = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MemoryHero />
      <MemoryBank />
      <MemoryGuardrails />
      <Footer />
    </div>
  );
};

export default Memory;
