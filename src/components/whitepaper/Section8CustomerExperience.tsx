import SectionMarker from "./SectionMarker";
import ScrollAnimate from "./ScrollAnimate";

const actionsTable = [
  { priority: "1. Diagnose", action: "Map turnover, tenure, and earnings variance by role for every store. Identify your highest-cost churn points.", timeline: "Weeks 1–2" },
  { priority: "2. Stabilize", action: "Adjust pay plans to reduce earnings volatility in sales and advisory roles. Set transparent earnings expectations during hiring.", timeline: "Weeks 2–4" },
  { priority: "3. Onboard", action: "Launch structured 30-60-90 day onboarding for all new hires. Assign mentors. Define clear milestones.", timeline: "Weeks 3–6" },
  { priority: "4. Retain Techs", action: "Audit technician pay structures, tool programs, and career ladders. Formalize school partnerships and paid internships.", timeline: "Weeks 4–8" },
  { priority: "5. Measure", action: "Track service appointment lead time as a workforce health proxy. Monitor retention by role monthly, not annually.", timeline: "Ongoing" },
];

export default function Section8CustomerExperience() {
  return (
    <section id="section-8" className="section-dark section-padding">
      <div className="content-width">
        <SectionMarker number={8} title="The Customer Experience Connection" />

        <ScrollAnimate>
          <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
            <p>
              Workforce instability does not stay inside the four walls of a dealership. It shows up in the customer experience — and ultimately in the financial performance of the business. The connection is most direct in fixed operations, where technician vacancies reduce bay throughput, service advisor turnover erodes customer relationships, and capacity constraints push appointment lead times beyond what customers will tolerate.
            </p>
            <p>
              J.D. Power's 2024 U.S. Customer Service Index study found that labor and parts shortages are a key driver of longer appointment wait times — the single largest friction point in the service experience. Cox Automotive's research reinforces the competitive consequence: dealerships that cannot offer timely, high-quality service lose customers to independent shops and chains that can. Over time, this compounds: lost service visits mean lost customer retention, reduced fixed ops absorption, and weaker whole-dealership profitability.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="py-12 md:py-16 text-center mb-14">
            <p className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-3xl mx-auto">
              "Service capacity is strategy — because it governs customer retention. Every unfilled technician bay is revenue the dealership will never recover."
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <h3 className="text-xl font-bold text-primary mb-6">Recommended Actions for Dealership Leaders</h3>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-semibold">Priority</th>
                  <th className="text-left px-4 py-3 font-semibold">Action</th>
                  <th className="text-left px-4 py-3 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {actionsTable.map((row, i) => (
                  <tr key={i} className="bg-card border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{row.priority}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.action}</td>
                    <td className="px-4 py-3 text-brand-caption whitespace-nowrap">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
