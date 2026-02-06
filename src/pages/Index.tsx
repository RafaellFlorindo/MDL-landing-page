import AlertBar from "@/components/landing/AlertBar";
import Hero from "@/components/landing/Hero";
import AgentPreview from "@/components/landing/AgentPreview";
import Comparison from "@/components/landing/Comparison";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AlertBar />
    <Hero />
    <AgentPreview />
    <Comparison />
    <HowItWorks />
    <Testimonials />
    <Offer />
    <FAQ />
    <Footer />
  </div>
);

export default Index;
