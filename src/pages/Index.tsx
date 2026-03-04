import HeroSection from "@/components/whitepaper/HeroSection";
import Section1Executive from "@/components/whitepaper/Section1Executive";
import Section2Why2026 from "@/components/whitepaper/Section2Why2026";
import Section3Turnover from "@/components/whitepaper/Section3Turnover";
import Section4Pipeline from "@/components/whitepaper/Section4Pipeline";
import Section5Satisfaction from "@/components/whitepaper/Section5Satisfaction";
import Section6FeedbackGap from "@/components/whitepaper/Section6FeedbackGap";
import Section7Solutions from "@/components/whitepaper/Section7Solutions";
import Section8CustomerExperience from "@/components/whitepaper/Section8CustomerExperience";
import Section9Methodology from "@/components/whitepaper/Section9Methodology";
import Section10About from "@/components/whitepaper/Section10About";
import Footer from "@/components/whitepaper/Footer";
import TableOfContents from "@/components/whitepaper/TableOfContents";
import BackToTop from "@/components/whitepaper/BackToTop";

const Index = () => {
  return (
    <>
      <TableOfContents />
      <div className="lg:ml-60">
        <HeroSection />
        <Section1Executive />
        <Section2Why2026 />
        <Section3Turnover />
        <Section4Pipeline />
        <Section5Satisfaction />
        <Section6FeedbackGap />
        <Section7Solutions />
        <Section8CustomerExperience />
        <Section10About />
        <Footer />
      </div>
      <BackToTop />
    </>
  );
};

export default Index;
