import { useEffect, useRef, useState } from "react";
import SectionMarker from "./SectionMarker";
import ScrollAnimate from "./ScrollAnimate";

const solutionsTable = [
  { lever: "Compensation Stability", what: "Reduce earnings variance; balance base + variable; set transparent expectations at hire", roles: "Sales Consultants, Service Advisors" },
  { lever: "Career Pathways", what: "Define visible advancement from entry to leadership; create specialist tracks alongside management", roles: "Technicians, Sales, Advisors" },
  { lever: "Training & Onboarding", what: "Structured 30-60-90 programs; skills-based progression; mentoring; OEM certification investment", roles: "All roles (highest ROI in first 90 days)" },
  { lever: "Workflow & Technology", what: "Remove friction; enable productivity; improve scheduling and workload balance", roles: "Service Advisors, Technicians, Parts" },
  { lever: "Employee Voice & Feedback", what: "Structured pulse surveys; anonymous channels; visible follow-through; manager coaching on listening", roles: "All roles (highest ROI in first 90 days)" },
];

const roadmapSteps = [
  { num: "01", title: "Diagnose", desc: "Map turnover & pay variance by role", color: "#1A1A2E" },
  { num: "02", title: "Root Cause", desc: "Identify earnings volatility, stress & skills gaps", color: "#00695C" },
  { num: "03", title: "Design", desc: "Build comp models, career paths & training", color: "#00838F" },
  { num: "04", title: "Pilot", desc: "Test in one store with 30-60-90 day metrics", color: "#F5A623" },
  { num: "05", title: "Scale", desc: "Deploy playbooks & coaching standards", color: "#FF6B35" },
];

export default function Section7Solutions() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [stepsVisible, setStepsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStepsVisible(true); },
      { threshold: 0.15 }
    );
    if (roadmapRef.current) observer.observe(roadmapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-7" className="section-light section-padding">
      <div className="content-width">
        <SectionMarker number={7} title="What Actually Works: A Solutions Framework" light />
        <ScrollAnimate>
          <p className="text-brand-body-light text-sm md:text-base leading-relaxed mb-12">
            Dealerships that consistently outperform on retention share common characteristics. They do not rely on a single lever — higher pay or better benefits alone — but build integrated systems across five domains. The evidence from NADA benchmarking, CDK sentiment data, and WrenchWay technician surveys converges on a consistent set of high-impact practices.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr style={{ backgroundColor: "#1A1A2E" }}>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Lever</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">What It Means</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Highest-Impact Roles</th>
                </tr>
              </thead>
              <tbody>
                {solutionsTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F5F0]"}>
                    <td className="px-4 py-3 font-medium text-brand-light-foreground whitespace-nowrap">{row.lever}</td>
                    <td className="px-4 py-3 text-brand-body-light">{row.what}</td>
                    <td className="px-4 py-3 text-brand-body-light whitespace-nowrap">{row.roles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <h3 className="text-xl font-bold text-brand-light-foreground mb-4">Implementation Roadmap</h3>
          <p className="text-brand-body-light text-sm md:text-base leading-relaxed mb-10">
            The most effective workforce interventions follow a consistent pattern: diagnose by role, identify root causes specific to that role, design targeted interventions, pilot in a single store or department, measure rigorously, and then scale with playbooks and coaching standards.
          </p>
        </ScrollAnimate>

        <div ref={roadmapRef} className="mb-10">
          {/* Desktop horizontal */}
          <div className="hidden md:flex items-start gap-0 relative">
            {roadmapSteps.map((step, i) => (
              <div
                key={step.num}
                className="flex-1 flex flex-col items-center text-center relative"
                style={{
                  opacity: stepsVisible ? 1 : 0,
                  transform: stepsVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${i * 150}ms`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold mb-3 relative z-10"
                  style={{ backgroundColor: step.color, color: step.color === "#1A1A2E" || step.color === "#00695C" || step.color === "#00838F" ? "#fff" : "#1A1A2E" }}
                >
                  {step.num}
                </div>
                {i < roadmapSteps.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 z-0" style={{ backgroundColor: step.color, opacity: 0.4 }} />
                )}
                <h4 className="font-bold text-brand-light-foreground text-sm mb-1">{step.title}</h4>
                <p className="text-brand-body-light text-xs leading-snug px-2">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Mobile vertical */}
          <div className="md:hidden space-y-4">
            {roadmapSteps.map((step, i) => (
              <div
                key={step.num}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{
                  backgroundColor: "#fff",
                  borderLeft: `4px solid ${step.color}`,
                  opacity: stepsVisible ? 1 : 0,
                  transform: stepsVisible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.5s ease-out ${i * 120}ms`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ backgroundColor: step.color, color: step.color === "#1A1A2E" || step.color === "#00695C" || step.color === "#00838F" ? "#fff" : "#1A1A2E" }}
                >
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-brand-light-foreground text-sm">{step.title}</h4>
                  <p className="text-brand-body-light text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ScrollAnimate>
          <p className="text-brand-caption text-xs mb-14">
            Each phase should be measured against role-specific KPIs: retention rate, time-to-productivity, earnings variance, customer satisfaction (CSI), and cost-per-hire.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="pull-quote p-6 md:p-8">
            <p className="text-foreground italic text-base md:text-lg leading-relaxed">
              "Sales and advisor turnover behave differently than technician turnover — so the fixes must differ. One-size-fits-all retention programs consistently underperform."
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
