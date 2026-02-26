import { useEffect, useRef, useState } from "react";
import SectionMarker from "./SectionMarker";

const segments = [
  { name: "Service & Parts", value: 54, color: "#00838F" },
  { name: "Sales", value: 26, color: "#FF6B35" },
  { name: "Admin & Mgmt", value: 14, color: "#F5A623" },
  { name: "Other", value: 6, color: "#888888" },
];

export default function Section2Why2026() {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-2" className="section-dark section-padding">
      <div className="content-width">
        <SectionMarker number={2} title="Why 2026 Is Different" />

        <div className="space-y-6 mb-12 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>
            The post-pandemic era brought temporary tailwinds to dealership profitability — constrained inventory, elevated margins, and pent-up demand. Those conditions have normalized. Dealerships now face a different operating reality: cost pressure on both new and used vehicle margins, intensifying competition for service revenue, and a labor market that remains tight in skilled trades.
          </p>
          <p>
            Cox Automotive's 2025 Service Industry Study found that dealerships have lost approximately 12% of service visits to aftermarket competition since 2018. The root cause is not price alone — it is capacity. When service bays are understaffed, appointment lead times stretch, customers defect, and the fixed operations profit engine slows. Meanwhile, J.D. Power's 2024 Customer Service Index study explicitly links labor and parts shortages to longer appointment wait times, making workforce stability a direct driver of customer satisfaction and retention.
          </p>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">The Workforce Center of Gravity: Fixed Operations</h3>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
          Understanding where people actually work inside a dealership is essential context. Service and parts departments account for the majority of headcount at a typical rooftop — and an increasingly dominant share of gross profit.
        </p>
      </div>

      <div className="chart-width mb-6">
        <h4 className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
          Average Dealership Workforce Composition
        </h4>

        {/* Stacked horizontal bar */}
        <div ref={barRef} className="flex overflow-hidden rounded-lg" style={{ height: 52, gap: 2 }}>
          {segments.map((seg) => (
            <div
              key={seg.name}
              className="flex items-center justify-center transition-all duration-1000 ease-out"
              style={{
                width: visible ? `${seg.value}%` : "0%",
                backgroundColor: seg.color,
                minWidth: visible ? undefined : 0,
              }}
            >
              {seg.value > 10 && (
                <span className="text-white font-bold text-sm md:text-base whitespace-nowrap">
                  {seg.value}%
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          {segments.map((seg) => (
            <div key={seg.name} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
              {seg.name} ({seg.value}%)
            </div>
          ))}
        </div>

        <p className="text-center text-brand-caption text-xs mt-4">Source: NADA Data Mid-Year 2025</p>
      </div>

      <div className="content-width">
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          This distribution means that workforce strategy in a dealership is, first and foremost, a fixed operations strategy. Recruiting, retaining, and developing service technicians, service advisors, and parts professionals is not a supporting function — it is the business.
        </p>
      </div>
    </section>
  );
}
