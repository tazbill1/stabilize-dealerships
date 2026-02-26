import SectionMarker from "./SectionMarker";
import ScrollAnimate from "./ScrollAnimate";

const definitions = [
  { term: "Franchised dealership", def: "A new-car dealership operating under a franchise agreement with one or more OEMs. Does not include independent used-car dealers or aftermarket service-only facilities." },
  { term: "Annualized turnover", def: "Separations during the period divided by average headcount, annualized. Consistent with NADA Dealership Workforce Study methodology." },
  { term: "Occupation proxies", def: "Where dealership-specific demographic data is unavailable, BLS Current Population Survey occupation categories are used as proxies. These are clearly labeled in all charts." },
];

const sources = [
  { name: "NADA Data Mid-Year 2025", desc: "Industry scale, workforce composition, operating benchmarks" },
  { name: "NADA Dealership Workforce Study (2024 data)", desc: "Role-level turnover, retention, tenure, compensation" },
  { name: "BLS Occupational Outlook Handbook", desc: "Projected openings for automotive service technicians (2024–2034)" },
  { name: "BLS Occupational Employment and Wage Statistics (May 2024)", desc: "Wage benchmarks by occupation" },
  { name: "BLS Current Population Survey Tables 11 & 11b (2025)", desc: "Demographic proxies by occupation" },
  { name: "CDK Global 2025 Dealership Workplace Study", desc: "Employee satisfaction, intent-to-leave, workplace stressors" },
  { name: "J.D. Power 2024 U.S. Customer Service Index Study", desc: "Service satisfaction, appointment wait time drivers" },
  { name: "Cox Automotive 2025 Service Industry Study", desc: "Dealership service visit trends, competitive landscape" },
  { name: "TechForce Foundation 2024 Technician Supply & Demand Report", desc: "Pipeline gap analysis" },
  { name: "WrenchWay + ASE 2025 Voice of the Technician Survey", desc: "Technician preferences and retention drivers" },
  { name: "Gallup State of the Global Workplace 2025", desc: "U.S. engagement trends, cost of disengagement, employee voice" },
  { name: "Gallup / Workhuman Recognition Report (2024)", desc: "Recognition-retention link, 2-year longitudinal study" },
  { name: "Deloitte + Automotive News 2025 Employee Engagement Study", desc: "Industry culture, belonging, career intent" },
  { name: "Quantum Workplace 2025 Trends Report", desc: "Feedback action gap, manager accountability for retention" },
  { name: "Hive Employee Engagement Research", desc: "Engagement impact of feeling heard" },
  { name: "Salesforce Research", desc: "Employee empowerment and voice" },
];

export default function Section9Methodology() {
  return (
    <section id="section-9" className="section-light section-padding">
      <div className="content-width">
        <SectionMarker number={9} title="Methodology, Sources & Definitions" light />

        <ScrollAnimate>
          <p className="text-brand-body-light text-sm md:text-base leading-relaxed mb-12">
            This report synthesizes publicly available data from established industry sources. No primary research was conducted; all figures are attributed to their original sources. Where estimates are directional or illustrative (marked as such in chart captions), this reflects the limitations of publicly available data and should not be cited as precise forecasts.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <h3 className="text-lg font-bold text-brand-light-foreground mb-6">Key Definitions</h3>
          <div className="space-y-4 mb-14">
            {definitions.map((d) => (
              <div key={d.term} className="finding-card finding-border-green p-5">
                <h4 className="font-semibold text-brand-light-foreground text-sm mb-1">{d.term}</h4>
                <p className="text-brand-body-light text-sm leading-relaxed">{d.def}</p>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <h3 className="text-lg font-bold text-brand-light-foreground mb-6">Primary Sources</h3>
          <ol className="space-y-3 mb-4">
            {sources.map((s, i) => (
              <li key={i} className="flex items-baseline gap-3 text-sm">
                <span className="text-brand-caption font-mono text-xs shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <div>
                  <span className="font-semibold text-brand-light-foreground">{s.name}</span>
                  <span className="text-brand-body-light"> — {s.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </ScrollAnimate>
      </div>
    </section>
  );
}
