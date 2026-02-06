import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";
import VideoSection from "@/components/home/VideoSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <ServicesPreview />
      <VideoSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
