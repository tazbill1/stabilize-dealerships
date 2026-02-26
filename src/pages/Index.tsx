import HeroSection from "@/components/whitepaper/HeroSection";
import Section1Executive from "@/components/whitepaper/Section1Executive";
import Section2Why2026 from "@/components/whitepaper/Section2Why2026";
import Section3Turnover from "@/components/whitepaper/Section3Turnover";
import Section4Pipeline from "@/components/whitepaper/Section4Pipeline";
import Section5Satisfaction from "@/components/whitepaper/Section5Satisfaction";
import Section6FeedbackGap from "@/components/whitepaper/Section6FeedbackGap";
import PlaceholderSection from "@/components/whitepaper/PlaceholderSection";
import TableOfContents from "@/components/whitepaper/TableOfContents";

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
        <PlaceholderSection id="section-7" number={7} title="What Actually Works" dark={false} />
        <PlaceholderSection id="section-8" number={8} title="The Customer Experience Connection" dark />
        <PlaceholderSection id="section-9" number={9} title="Methodology & Sources" dark={false} />
      </div>
    </>
  );
};

export default Index;
