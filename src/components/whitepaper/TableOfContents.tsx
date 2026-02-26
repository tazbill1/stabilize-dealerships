import { useActiveSection } from "@/hooks/useActiveSection";

const sections = [
  { id: "section-1", label: "Executive Summary" },
  { id: "section-2", label: "Why 2026 Is Different" },
  { id: "section-3", label: "Where Turnover Concentrates" },
  { id: "section-4", label: "The Technician Pipeline Crisis" },
  { id: "section-5", label: "The Satisfaction Paradox" },
  { id: "section-6", label: "The Feedback Gap" },
  { id: "section-7", label: "What Actually Works" },
  { id: "section-8", label: "The Customer Experience Connection" },
  { id: "section-9", label: "Methodology & Sources" },
];

export default function TableOfContents() {
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className="hidden lg:block fixed left-0 top-0 h-screen w-60 bg-secondary border-r border-border overflow-y-auto z-40 pt-20 pb-10">
      <div className="px-4 mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Contents</span>
      </div>
      <div className="space-y-0.5">
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`toc-link ${activeId === s.id ? "active" : ""}`}
          >
            <span className="text-primary mr-2 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
