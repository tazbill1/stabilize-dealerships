import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import werkandmeIcon from "@/assets/werkandme-icon.png";

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

function TOCLinks({ activeId, onClickLink }: { activeId: string; onClickLink?: () => void }) {
  return (
    <div className="space-y-0.5">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={onClickLink}
          className={`toc-link ${activeId === s.id ? "active" : ""}`}
        >
          <span className="text-primary mr-2 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
          {s.label}
        </a>
      ))}
    </div>
  );
}

export default function TableOfContents() {
  const activeId = useActiveSection(sections.map((s) => s.id));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="toc-sidebar hidden lg:block fixed left-0 top-0 h-screen w-60 bg-secondary border-r border-border overflow-y-auto z-40 pt-12 pb-10">
        <div className="px-4 mb-6">
          <img src={werkandmeIcon} alt="WerkandMe" className="h-8 mb-4" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contents</span>
        </div>
        <TOCLinks activeId={activeId} />
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-secondary border border-border rounded-lg p-2 shadow-lg"
        aria-label="Open navigation"
      >
        <Menu size={20} className="text-primary" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <nav className="relative w-72 max-w-[80vw] bg-secondary h-full overflow-y-auto pt-12 pb-10 shadow-2xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
            <div className="px-4 mb-6">
              <img src={werkandmeIcon} alt="WerkandMe" className="h-8 mb-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contents</span>
            </div>
            <TOCLinks activeId={activeId} onClickLink={() => setMobileOpen(false)} />
          </nav>
        </div>
      )}
    </>
  );
}
