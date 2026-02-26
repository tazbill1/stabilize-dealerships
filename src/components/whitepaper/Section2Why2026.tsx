import SectionMarker from "./SectionMarker";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Service & Parts", value: 54, color: "#00838F" },
  { name: "Sales", value: 26, color: "#FF6B35" },
  { name: "Admin & Management", value: 14, color: "#F5A623" },
  { name: "Other", value: 6, color: "#666666" },
];

export default function Section2Why2026() {
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
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md" style={{ height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(240 15% 15%)",
                    border: "1px solid hsl(240 18% 19%)",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                />
                <text x="50%" y="48%" textAnchor="middle" fill="#B0B0B0" fontSize="12">
                  Average
                </text>
                <text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
                  Dealership
                </text>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {data.map((d) => (
              <div key={d.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                {d.name} ({d.value}%)
              </div>
            ))}
          </div>

          <p className="text-brand-caption text-xs mt-4">Source: NADA Data Mid-Year 2025</p>
        </div>
      </div>

      <div className="content-width">
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          This distribution means that workforce strategy in a dealership is, first and foremost, a fixed operations strategy. Recruiting, retaining, and developing service technicians, service advisors, and parts professionals is not a supporting function — it is the business.
        </p>
      </div>
    </section>
  );
}
