interface SectionMarkerProps {
  number: number;
  title: string;
  light?: boolean;
}

export default function SectionMarker({ number, title, light }: SectionMarkerProps) {
  return (
    <div className="section-marker">
      <div className="section-number">{number}</div>
      <h2 className={`text-2xl md:text-3xl font-bold ${light ? "text-brand-light-foreground" : "text-foreground"}`}>
        {title}
      </h2>
    </div>
  );
}
