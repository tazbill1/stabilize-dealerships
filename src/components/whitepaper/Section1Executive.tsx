import SectionMarker from "./SectionMarker";
import ScrollAnimate from "./ScrollAnimate";
import { ChevronDown } from "lucide-react";

const insightBlocks = [
  {
    stat: "42%",
    headline: "Industry turnover is double the national average",
    context: "Dealerships churn nearly half their workforce every year — and it clusters in predictable roles.",
    accentVar: "--brand-green",
    accentHex: "hsl(var(--brand-green))",
  },
  {
    stat: "66%",
    headline: "Sales is a revolving door",
    context: "Two-thirds of sales consultants leave annually. Earnings volatility and no visible career path are the top drivers.",
    accentVar: "--brand-orange",
    accentHex: "hsl(var(--brand-orange))",
  },
  {
    stat: "82% → 39%",
    headline: "Satisfaction is a mirage",
    context: "Employees report high satisfaction today — but only 39% see a clear career path. That gap is where turnover hides.",
    accentVar: "--brand-teal",
    accentHex: "hsl(var(--brand-teal))",
  },
  {
    stat: "42%",
    headline: "Nearly half of all quits are preventable",
    context: "Gallup found that 42% of departing employees said management could have done something to keep them.",
    accentVar: "--brand-gold",
    accentHex: "hsl(var(--brand-gold))",
  },
];

export default function Section1Executive() {
  return (
    <section id="section-1" className="section-light section-padding">
      <div className="content-width">
        <SectionMarker number={1} title="Executive Summary" light />

        {/* Part A: The Story in 30 Seconds */}
        <ScrollAnimate>
          <h3 className="text-lg font-bold text-brand-light-foreground mb-6 tracking-tight">
            The Story in 30 Seconds
          </h3>
        </ScrollAnimate>

        <div className="relative mb-16">
          {/* Desktop: horizontal flow with connectors */}
          <div className="hidden md:grid md:grid-cols-4 gap-0 items-stretch">
            {insightBlocks.map((block, i) => (
              <ScrollAnimate key={i} delay={i * 100} className="flex">
                <div className="flex items-stretch w-full">
                  <div
                    className="insight-block flex-1 rounded-lg p-5 flex flex-col"
                    style={{ borderTop: `3px solid ${block.accentHex}` }}
                  >
                    <div
                      className="text-2xl lg:text-3xl font-extrabold mb-2"
                      style={{ color: block.accentHex }}
                    >
                      {block.stat}
                    </div>
                    <h4 className="font-bold text-sm lg:text-base text-white mb-2 leading-snug">
                      {block.headline}
                    </h4>
                    <p className="text-xs lg:text-sm text-white/60 leading-relaxed">
                      {block.context}
                    </p>
                  </div>
                  {i < insightBlocks.length - 1 && (
                    <div className="flex items-center px-1">
                      <div className="w-6 h-px bg-white/20 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-white/20" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Mobile: vertical stack with line connectors */}
          <div className="md:hidden space-y-0">
            {insightBlocks.map((block, i) => (
              <ScrollAnimate key={i} delay={i * 80}>
                <div
                  className="insight-block rounded-lg p-5"
                  style={{ borderLeft: `4px solid ${block.accentHex}` }}
                >
                  <div
                    className="text-2xl font-extrabold mb-1"
                    style={{ color: block.accentHex }}
                  >
                    {block.stat}
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1 leading-snug">
                    {block.headline}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {block.context}
                  </p>
                </div>
                {i < insightBlocks.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-5 bg-white/15 relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[5px] border-t-white/15" />
                    </div>
                  </div>
                )}
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* Part B: The Bottom Line — proof point */}
        <ScrollAnimate>
          <div className="proof-point-card rounded-lg p-6 md:p-8 mb-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <div className="text-3xl md:text-4xl font-extrabold text-primary leading-none">
                67% → 21%
              </div>
            </div>
            <div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                In pilot dealerships, structured engagement systems — not higher pay — cut turnover by more than two-thirds.{" "}
                <span className="font-semibold">The fix isn't more money. It's better systems.</span>
              </p>
            </div>
          </div>
        </ScrollAnimate>

        {/* Part C: Pull quote + 90-day callout (kept as-is) */}
        <ScrollAnimate>
          <div className="pull-quote p-6 md:p-8 mb-8">
            <p className="text-foreground italic text-base md:text-lg leading-relaxed">
              "High churn is not a people problem — it is a system design problem. Dealerships that build structured compensation, career pathways, and onboarding systems consistently outperform on retention."
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="callout-green p-6 md:p-8">
            <h4 className="font-bold text-lg mb-3">What to do in the next 90 days:</h4>
            <p className="text-sm md:text-base leading-relaxed">
              Run a churn diagnostic by role. Stabilize earnings in your highest-turnover departments. Launch a structured 30-60-90 day onboarding program for new hires. Track service appointment lead time as a workforce health indicator.
            </p>
          </div>
        </ScrollAnimate>

        {/* Part D: Keep Reading nudge */}
        <ScrollAnimate>
          <div className="flex flex-col items-center mt-12 text-brand-caption">
            <p className="text-sm text-center max-w-lg mb-2">
              ↓ Dive deeper: role-by-role data, the feedback gap research, and a solutions framework below
            </p>
            <ChevronDown className="w-5 h-5 animate-bounce opacity-60" />
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
