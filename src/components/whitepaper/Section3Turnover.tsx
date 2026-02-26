import { useEffect, useRef, useState } from "react";
import SectionMarker from "./SectionMarker";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  ReferenceLine,
  LabelList,
} from "recharts";

const data = [
  { role: "Sales Consultants", value: 66, color: "#FF6B35" },
  { role: "Service Advisors", value: 46, color: "#F5A623" },
  { role: "All Positions", value: 42, color: "#00838F" },
  { role: "Service Technicians", value: 33, color: "#00ACC1" },
  { role: "Parts Department", value: 28, color: "#1A1A2E" },
  { role: "Office & Admin", value: 25, color: "#666666" },
];

const roleDiveCards = [
  {
    borderColor: "#FF6B35",
    title: "Sales Consultants — 66% Turnover",
    body: "Sales remains the most volatile role in the dealership. The dominant driver is earnings instability — commission-heavy pay plans create wide variance between top and bottom performers, and new hires frequently exit within the first 90 days before reaching productivity. Secondary drivers include limited perceived career pathways and management quality variance across stores. The fix is not higher base pay alone; it is structured onboarding that shortens time-to-first-deal, transparent earnings expectations set during hiring, and a visible path from sales consultant to finance, management, or specialized roles.",
  },
  {
    borderColor: "#F5A623",
    title: "Service Advisors — 46% Turnover",
    body: "Advisors sit at the intersection of customer expectations, technician capacity, and parts availability — a high-stress, high-accountability role. Turnover here is driven by workload intensity, variable compensation structures, and the emotional labor of managing customer dissatisfaction when service capacity is constrained. Retention levers include workload balancing, clearer performance metrics, and training that builds confidence in both technical communication and conflict resolution.",
  },
  {
    borderColor: "#00838F",
    title: "Service Technicians — 33% Turnover",
    body: "While technician turnover appears more moderate than sales, the impact per departure is disproportionately large. Replacing a skilled technician takes months and carries direct revenue consequences — every unfilled bay is lost capacity. The BLS projects roughly 70,000 annual openings for automotive service technicians and mechanics through 2034, driven overwhelmingly by replacement needs rather than growth. TechForce Foundation's 2024 report reinforces the structural gap: approximately one million transportation technician jobs will need to be filled over the next five years.",
  },
];

export default function Section3Turnover() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-3" className="section-light section-padding">
      <div className="content-width">
        <SectionMarker number={3} title="Where Turnover Concentrates" light />
        <p className="text-brand-body-light text-sm md:text-base leading-relaxed mb-12">
          Aggregate turnover numbers, while useful for headlines, obscure the real story. Turnover in a dealership is not evenly distributed. It concentrates sharply in specific roles, driven by distinct root causes that require distinct interventions.
        </p>
      </div>

      <div className="chart-width mb-4" ref={chartRef}>
        <h3 className="text-center text-brand-light-foreground font-semibold text-base md:text-lg mb-6">
          Annual Turnover Rate by Dealership Role (2024)
        </h3>
        <div style={{ height: 360 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 80]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: "#4A4A5A", fontSize: 12 }}
                axisLine={{ stroke: "#ccc" }}
              />
              <YAxis
                type="category"
                dataKey="role"
                width={130}
                tick={{ fill: "#4A4A5A", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <ReferenceLine
                x={42}
                stroke="#00838F"
                strokeDasharray="6 4"
                strokeWidth={2}
                label={{
                  value: "Industry Avg.",
                  position: "top",
                  fill: "#00838F",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              />
              <Bar
                dataKey="value"
                radius={[0, 4, 4, 0]}
                isAnimationActive={animate}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => `${v}%`}
                  style={{ fill: "#4A4A5A", fontWeight: 600, fontSize: 13 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-brand-caption text-xs mt-3">
          Source: NADA Dealership Workforce Study (2024 data)
        </p>
      </div>

      <div className="content-width mt-14">
        <div className="space-y-6">
          {roleDiveCards.map((card) => (
            <div
              key={card.title}
              className="finding-card p-6 md:p-8"
              style={{ borderTop: `3px solid ${card.borderColor}` }}
            >
              <h4 className="font-bold text-brand-light-foreground text-lg mb-3">{card.title}</h4>
              <p className="text-brand-body-light text-sm md:text-base leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
