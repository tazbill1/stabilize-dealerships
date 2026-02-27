import { useEffect, useRef, useState } from "react";
import SectionMarker from "./SectionMarker";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";

const data = [
  { year: "2024", openings: 210, completions: 145, gap: "65K" },
  { year: "2025", openings: 205, completions: 140, gap: "65K" },
  { year: "2026", openings: 200, completions: 138, gap: "62K" },
  { year: "2027", openings: 195, completions: 135, gap: "60K" },
  { year: "2028", openings: 190, completions: 132, gap: "58K" },
];

const GapLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  if (index === undefined) return null;
  const gap = data[index]?.gap;
  if (!gap) return null;
  const isMobile = width < 30;
  const fontSize = isMobile ? 9 : 11;
  const badgeW = isMobile ? 44 : 56;
  const badgeFontSize = isMobile ? 8 : 10;
  return (
    <g>
      <text x={x + width / 2} y={y - 8} textAnchor="middle" fill="#B0B0B0" fontWeight={600} fontSize={fontSize}>
        {value}K
      </text>
      <rect x={x + width / 2 - badgeW / 2} y={y - 36} width={badgeW} height={16} rx={4} fill="#FF6B35" />
      <text x={x + width / 2} y={y - 24} textAnchor="middle" fill="#fff" fontSize={badgeFontSize} fontWeight={600}>
        Gap: {gap}
      </text>
    </g>
  );
};

export default function Section4Pipeline() {
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
    <section id="section-4" className="section-dark section-padding">
      <div className="content-width">
        <SectionMarker number={4} title="The Technician Pipeline Crisis" />
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
          Technician supply constraints are not cyclical — they are structural. The demand for automotive service technicians consistently exceeds the pipeline of qualified graduates from vocational and technical programs. This is compounded by multi-sector competition: automotive dealerships compete for the same talent pool as independent repair shops, fleet operators, heavy equipment companies, and increasingly, EV manufacturers building their own service networks.
        </p>
      </div>

      <div className="chart-width mb-4" ref={chartRef}>
        <h3 className="text-center text-foreground font-semibold text-base md:text-lg mb-6">
          Automotive Technician Pipeline: Persistent Supply Gap
        </h3>
        <div className="h-[350px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 55, right: 10, left: 0, bottom: 5 }}
              barCategoryGap="20%"
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A3A" vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fill: "#B0B0B0", fontSize: 13 }}
                axisLine={{ stroke: "#2A2A3A" }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 250]}
                tickFormatter={(v) => `${v}K`}
                tick={{ fill: "#B0B0B0", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ fontSize: 12, color: "#B0B0B0" }}
              />
              <Bar
                dataKey="openings"
                name="Projected Annual Openings"
                fill="#00838F"
                radius={[4, 4, 0, 0]}
                isAnimationActive={animate}
                animationDuration={1200}
              >
                <LabelList
                  dataKey="openings"
                  position="top"
                  formatter={(v: number) => `${v}K`}
                  style={{ fill: "#B0B0B0", fontWeight: 600, fontSize: 11 }}
                />
              </Bar>
              <Bar
                dataKey="completions"
                name="Estimated Annual Completions"
                fill="#F5A623"
                radius={[4, 4, 0, 0]}
                isAnimationActive={animate}
                animationDuration={1200}
              >
                <LabelList
                  dataKey="completions"
                  position="top"
                  content={<GapLabel />}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-brand-caption text-xs mt-3">
          Sources: BLS Occupational Outlook Handbook (projected openings); TechForce Foundation 2024 Supply &amp; Demand Report. Illustrative projection based on published annual figures.
        </p>
      </div>

      <div className="content-width mt-12">
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
          WrenchWay and ASE's 2025 Voice of the Technician survey provides an important signal on retention: technicians increasingly value pay plan transparency, tool program support, career advancement clarity, and shop culture over raw compensation alone. Dealerships that treat technician retention as a strategic priority — not just an HR task — will hold a durable competitive advantage.
        </p>

        <div className="pull-quote p-6 md:p-8">
          <p className="text-foreground italic text-base md:text-lg leading-relaxed">
            "Technician demand is durable; replacing lost capacity is the hard part. Retention and productivity enablement are now as important as recruiting."
          </p>
        </div>
      </div>
    </section>
  );
}
