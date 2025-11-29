import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal text-white selection:bg-safety-orange selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <CTA />
      <Footer />
    </main>
  );
}
