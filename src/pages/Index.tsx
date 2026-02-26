import HeroSection from "@/components/whitepaper/HeroSection";
import Section1Executive from "@/components/whitepaper/Section1Executive";
import Section2Why2026 from "@/components/whitepaper/Section2Why2026";
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
        <PlaceholderSection id="section-3" number={3} title="Where Turnover Concentrates" dark={false} />
        <PlaceholderSection id="section-4" number={4} title="The Technician Pipeline Crisis" dark />
        <PlaceholderSection id="section-5" number={5} title="The Satisfaction Paradox" dark={false} />
        <PlaceholderSection id="section-6" number={6} title="The Feedback Gap" dark />
        <PlaceholderSection id="section-7" number={7} title="What Actually Works" dark={false} />
        <PlaceholderSection id="section-8" number={8} title="The Customer Experience Connection" dark />
        <PlaceholderSection id="section-9" number={9} title="Methodology & Sources" dark={false} />
      </div>
    </>
  );
};

export default Index;
