import { useEffect, useRef, useState } from "react";
import SectionMarker from "./SectionMarker";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { metric: "Job Satisfaction", value: 82, color: "#2E7D32" },
  { metric: "Intent to Stay\n(Near-Term)", value: 71, color: "#43A047" },
  { metric: "Long-Term Retention\nConfidence", value: 48, color: "#F5A623" },
  { metric: "Career Path\nClarity", value: 39, color: "#FF6B35" },
];

const CustomTick = ({ x, y, payload }: any) => {
  const lines = (payload?.value || "").split("\n");
  return (
    <text x={x} y={y + 8} textAnchor="middle" fill="#4A4A5A" fontSize={11}>
      {lines.map((line: string, i: number) => (
        <tspan x={x} dy={i === 0 ? 0 : 14} key={i}>{line}</tspan>
      ))}
    </text>
  );
};

export default function Section5Satisfaction() {
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
    <section id="section-5" className="section-light section-padding">
      <div className="content-width">
        <SectionMarker number={5} title="The Satisfaction Paradox" light />
        <p className="text-brand-body-light text-sm md:text-base leading-relaxed mb-12">
          CDK Global's 2025 Dealership Workplace Study delivered a surprising headline: 82% of dealership employees report job satisfaction, and near-term intent to leave has declined. On the surface, this is encouraging. But beneath the topline satisfaction number lies a structural vulnerability — long-term retention confidence and career path clarity remain significantly lower.
        </p>
      </div>

      <div className="chart-width mb-6" ref={chartRef}>
        <h3 className="text-center text-brand-light-foreground font-semibold text-base md:text-lg mb-8">
          The Satisfaction Paradox: Happy Today, Gone Tomorrow
        </h3>
        <div className="h-[340px] md:h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 30, right: 20, left: 0, bottom: 40 }}
              barCategoryGap="30%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" horizontal vertical={false} />
              <XAxis
                dataKey="metric"
                tick={<CustomTick />}
                axisLine={{ stroke: "#ccc" }}
                tickLine={false}
                interval={0}
                height={60}
              />
              <YAxis
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: "#4A4A5A", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={40}
              />
              <Bar
                dataKey="value"
                radius={[4, 4, 0, 0]}
                isAnimationActive={animate}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={(v: number) => `${v}%`}
                  style={{ fill: "#4A4A5A", fontWeight: 700, fontSize: 14 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Declining trend indicator */}
        <div className="flex justify-center mt-3 mb-3">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border">
            <span className="text-sm font-bold" style={{ color: "#2E7D32" }}>82%</span>
            <div className="flex items-center gap-1">
              <div className="w-16 h-px bg-gradient-to-r from-[#2E7D32] to-[#FF6B35]" />
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M0 0 L12 5 L0 10" fill="#FF6B35" />
              </svg>
            </div>
            <span className="text-sm font-bold" style={{ color: "#FF6B35" }}>39%</span>
            <span className="text-xs text-muted-foreground ml-1">decline</span>
          </div>
        </div>
        <p className="text-center text-brand-caption text-xs mt-1">
          Sources: CDK 2025 Dealership Workplace Study (satisfaction, intent); career path and retention confidence estimates derived from CDK and industry sentiment data.
        </p>
      </div>

      <div className="content-width mt-12">
        <p className="text-brand-body-light text-sm md:text-base leading-relaxed">
          This pattern — high present satisfaction with low future confidence — is a leading indicator of attrition. Employees are not unhappy today; they simply cannot see a future. The implication for dealership leaders is clear: satisfaction surveys alone are insufficient. Retention strategy must address career visibility, skill development, and long-term earnings trajectory.
        </p>
      </div>
    </section>
  );
}
