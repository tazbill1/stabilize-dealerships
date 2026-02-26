import { useCountUp } from "@/hooks/useCountUp";
import ScrollAnimate from "./ScrollAnimate";

const stats = [
  { value: 42, suffix: "%", label: "Overall Annual Turnover", borderClass: "stat-card-border-green" },
  { value: 66, suffix: "%", label: "Sales Consultant Turnover", borderClass: "stat-card-border-orange" },
  { value: 70, prefix: "~", suffix: "K", label: "Tech Openings/Year", borderClass: "stat-card-border-teal" },
  { value: 82, suffix: "%", label: "Employee Job Satisfaction", borderClass: "stat-card-border-gold" },
];

function StatCard({ value, suffix, prefix, label, borderClass }: typeof stats[0]) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className={`stat-card ${borderClass} p-5 md:p-6 text-center`}>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const keyFindings = [
  "Turnover is not uniform — it clusters by role with predictable root causes",
  "Technician supply is structurally constrained for the foreseeable decade",
  "Employee satisfaction can rise while long-run retention remains fragile",
  "Workforce challenges directly impact service capacity and customer experience",
  "Winning dealerships build systems: comp stability + career ladders + training",
];

export default function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      <div className="brand-green-bar w-full" />

      <div className="absolute top-5 right-6 md:right-10 text-sm text-muted-foreground font-medium">
        werkandme.com
      </div>

      <div className="content-width pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-md bg-primary/15 text-primary mb-6">
            2026 INDUSTRY WHITE PAPER
          </span>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "both" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
            Stabilizing the Dealership Workforce
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
            Turnover, Talent, and the New Operating Model for U.S. Franchised Auto Dealerships
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <ScrollAnimate>
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Key Findings</h3>
            <ul className="space-y-2">
              {keyFindings.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                  <span className="text-primary mt-1.5 text-xs">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimate>

        <p className="text-sm text-brand-caption mb-8">Published by WerkandMe · March 2026</p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            title="PDF coming soon"
            onClick={(e) => { e.preventDefault(); window.print(); }}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-brand-green-hover transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            Download PDF
          </a>
          <a
            href="#section-7"
            className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-200"
          >
            Jump to Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
