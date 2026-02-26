import SectionMarker from "./SectionMarker";

interface PlaceholderSectionProps {
  id: string;
  number: number;
  title: string;
  dark?: boolean;
}

export default function PlaceholderSection({ id, number, title, dark }: PlaceholderSectionProps) {
  return (
    <section id={id} className={`${dark ? "section-dark" : "section-light"} section-padding`}>
      <div className="content-width">
        <SectionMarker number={number} title={title} light={!dark} />
        <p className={`text-sm md:text-base leading-relaxed ${dark ? "text-muted-foreground" : "body-text text-brand-body-light"}`}>
          Content for this section is coming soon. This white paper section will explore detailed findings, data visualizations, and actionable recommendations related to {title.toLowerCase()}.
        </p>
      </div>
    </section>
  );
}
