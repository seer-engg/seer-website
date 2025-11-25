import Navbar from "@/components/Navbar";
import MemoryBank from "@/components/MemoryBank";
import MemoryGuardrails from "@/components/MemoryGuardrails";
import Footer from "@/components/Footer";

const Memory = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <MemoryBank />
        <MemoryGuardrails />
      </div>
      <Footer />
    </div>
  );
};

export default Memory;
