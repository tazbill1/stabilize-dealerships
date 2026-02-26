import SectionMarker from "./SectionMarker";

const findings = [
  { border: "finding-border-green", text: "Overall dealership turnover remains elevated at 42% across all positions (2024), well above most retail benchmarks." },
  { border: "finding-border-orange", text: "Sales consultant turnover leads at 66%, driven by earnings volatility, unclear career paths, and high early-tenure attrition." },
  { border: "finding-border-teal", text: "Technician supply is structurally constrained: the BLS projects approximately 70,000 annual openings for automotive service technicians through 2034, while completions continue to lag." },
  { border: "finding-border-gold", text: "Employee satisfaction is paradoxically high (82% per CDK 2025) even as long-term retention confidence and career path clarity remain weak — a fragile equilibrium." },
  { border: "finding-border-orange", text: "Workforce gaps show up as customer experience constraints: J.D. Power's 2024 CSI study links labor and parts shortages to longer service appointment wait times." },
  { border: "finding-border-green", text: "Fixed operations (service + parts) represents 54% of the average dealership headcount and governs service capacity, customer retention, and a growing share of gross profit." },
];

export default function Section1Executive() {
  return (
    <section id="section-1" className="section-light section-padding">
      <div className="content-width">
        <SectionMarker number={1} title="Executive Summary" light />

        <div className="space-y-4 mb-12">
          {findings.map((f, i) => (
            <div key={i} className={`finding-card ${f.border} p-5 md:p-6`}>
              <div className="flex items-start gap-3">
                <span className="font-bold text-lg text-brand-light-foreground shrink-0">{i + 1}.</span>
                <p className="text-brand-body-light text-sm md:text-base leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pull-quote p-6 md:p-8 mb-8">
          <p className="text-foreground italic text-base md:text-lg leading-relaxed">
            "High churn is not a people problem — it is a system design problem. Dealerships that build structured compensation, career pathways, and onboarding systems consistently outperform on retention."
          </p>
        </div>

        <div className="callout-green p-6 md:p-8">
          <h4 className="font-bold text-lg mb-3">What to do in the next 90 days:</h4>
          <p className="text-sm md:text-base leading-relaxed">
            Run a churn diagnostic by role. Stabilize earnings in your highest-turnover departments. Launch a structured 30-60-90 day onboarding program for new hires. Track service appointment lead time as a workforce health indicator.
          </p>
        </div>
      </div>
    </section>
  );
}
