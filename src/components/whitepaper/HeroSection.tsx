import { useCountUp } from "@/hooks/useCountUp";
import ScrollAnimate from "./ScrollAnimate";
import werkandmeLogo from "@/assets/werkandme-logo.png";

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

export default function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      <div className="brand-green-bar w-full" />

      <div className="absolute top-5 right-6 md:right-10">
        <img src={werkandmeLogo} alt="WerkandMe" className="h-10 md:h-12 opacity-80" />
      </div>

      <div className="content-width pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded-md bg-primary/15 text-primary mb-6">
            2026 INDUSTRY WHITE PAPER
          </span>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "both" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
            The Dealership Workforce Report
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Turnover, Talent, and the New Operating Model for U.S. Franchise Auto Dealerships
          </p>
        </div>

        {/* Thesis one-liner */}
        <div className="animate-fade-in" style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
          <p className="text-xl md:text-2xl font-bold text-primary max-w-[700px] mb-12 leading-snug">
            "Your turnover isn't a people problem — it's a system problem. And 42% of it is preventable."
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Single summary sentence replacing key findings */}
        <ScrollAnimate>
          <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-2xl">
            This report breaks down where turnover concentrates, why satisfaction scores are misleading, and what the top-performing dealerships do differently.
          </p>
        </ScrollAnimate>

        <p className="text-sm text-brand-caption mb-8">Published by WerkandMe · March 2026</p>

        <div className="flex flex-wrap gap-4 hero-cta-buttons">
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
