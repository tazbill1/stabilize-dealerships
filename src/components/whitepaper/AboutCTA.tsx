import ScrollAnimate from "./ScrollAnimate";
import werkandmeLogo from "@/assets/werkandme-logo.png";

const featureCards = [
  { icon: "🏆", title: "Challenge", desc: "Performance-driven competitions that boost results" },
  { icon: "👏", title: "Recognize", desc: "Peer-to-peer and leadership acknowledgment" },
  { icon: "📈", title: "Train", desc: "Structured onboarding and career development" },
  { icon: "🎁", title: "Reward", desc: "Points and incentives employees actually value" },
  { icon: "🎙️", title: "Listen", desc: "Structured feedback loops that drive retention" },
];

export default function AboutCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: "hsl(240 33% 14%)" }}>
      <div className="content-width relative">
        <div className="absolute top-0 right-0">
          <img src={werkandmeLogo} alt="WerkandMe" className="h-6 md:h-7 opacity-70" />
        </div>
        <ScrollAnimate>
          <p className="italic text-brand-caption text-sm mb-4">
            This report was published by WerkandMe — an employee engagement platform built by dealership people, for dealership people.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About WerkandMe</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
            The research in this paper isn't theoretical to us. We built WerkandMe because we saw firsthand what turnover does to a dealership — the lost knowledge, the broken customer relationships, the constant cycle of hiring and restarting. We knew the industry needed more than another HR tool. It needed a system designed specifically for how dealerships actually operate.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
            {featureCards.map((card) => (
              <div key={card.title} className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h4 className="text-primary font-bold text-sm mb-1">{card.title}</h4>
                <p className="text-muted-foreground text-xs leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-10" style={{ borderLeft: "4px solid hsl(76 90% 47%)" }}>
            <div className="text-primary text-3xl md:text-4xl font-bold mb-2">67% → 21%</div>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              In pilot dealerships, WerkandMe helped reduce annualized turnover — not by outspending the competition on wages, but by building the systems that make people want to stay.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <p className="italic text-muted-foreground text-sm mb-14">
            If anything in this report resonated with the challenges you're facing in your stores, we'd welcome the conversation.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="callout-green p-8 md:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Learn more and benchmark your dealership workforce</h3>
            <p className="text-sm md:text-base mb-8 opacity-80">
              <a href="https://www.werkandme.com" target="_blank" rel="noopener noreferrer" className="underline">werkandme.com</a> · <a href="mailto:tom@werkandme.com" className="underline">tom@werkandme.com</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://zbooking.us/1e8n6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#0D0D0D", color: "#fff" }}
              >
                Schedule a Demo
              </a>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-lg font-semibold text-sm border-2 transition-all duration-200 hover:shadow-lg"
                style={{ borderColor: "#0D0D0D", color: "#0D0D0D" }}
              >
                Download PDF
              </button>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
