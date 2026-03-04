import SectionMarker from "./SectionMarker";
import ScrollAnimate from "./ScrollAnimate";
import werkandmeLogo from "@/assets/werkandme-logo.png";

const pillars = [
  { icon: "🏆", title: "Challenge", desc: "Performance-driven competitions that boost results" },
  { icon: "👏", title: "Recognize", desc: "Peer-to-peer and leadership acknowledgment" },
  { icon: "📈", title: "Train", desc: "Structured onboarding and career development" },
  { icon: "🎁", title: "Reward", desc: "Points and incentives employees actually value" },
  { icon: "🎙️", title: "Listen", desc: "Structured feedback loops that drive retention" },
];

export default function Section10About() {
  return (
    <section id="section-10" className="section-dark section-padding">
      <div className="content-width relative">
        <div className="absolute top-0 right-0">
          <img src={werkandmeLogo} alt="WerkandMe" className="h-10 md:h-12 opacity-70" />
        </div>

        <SectionMarker number={10} title="About WerkandMe" />

        {/* Origin story */}
        <ScrollAnimate>
          <p className="italic text-muted-foreground text-sm mb-3">
            Built by dealership people, for dealership people.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
            The research in this paper isn't theoretical to us. We built WerkandMe because we saw firsthand what turnover does to a dealership — the lost knowledge, the broken customer relationships, the constant cycle of hiring and restarting. We knew the industry needed more than another HR tool. It needed a system designed specifically for how dealerships actually operate.
          </p>
        </ScrollAnimate>

        {/* Core philosophy */}
        <ScrollAnimate>
          <div className="pull-quote p-6 md:p-8 mb-12">
            <p className="text-foreground italic text-base md:text-lg leading-relaxed">
              "High churn is not a people problem — it is a system design problem. WerkandMe is the system that fixes it."
            </p>
          </div>
        </ScrollAnimate>

        {/* Five pillars */}
        <ScrollAnimate>
          <h3 className="text-lg font-bold text-foreground mb-6">The Five Pillars of Engagement</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{pillar.icon}</div>
                <h4 className="text-primary font-bold text-sm mb-1">{pillar.title}</h4>
                <p className="text-muted-foreground text-xs leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        {/* Proof point */}
        <ScrollAnimate>
          <div className="proof-point-card rounded-lg p-6 md:p-8 mb-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <div className="text-3xl md:text-4xl font-extrabold text-primary leading-none">
                67% → 21%
              </div>
            </div>
            <div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                In pilot dealerships, WerkandMe helped reduce annualized turnover — not by outspending the competition on wages, but by building the systems that make people want to stay.
              </p>
            </div>
          </div>
        </ScrollAnimate>

        {/* Invitation */}
        <ScrollAnimate>
          <p className="italic text-muted-foreground text-sm mb-14">
            If anything in this report resonated with the challenges you're facing in your stores, we'd welcome the conversation.
          </p>
        </ScrollAnimate>

        {/* CTA block */}
        <ScrollAnimate>
          <div className="callout-green p-8 md:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Learn more and benchmark your dealership workforce</h3>
            <p className="text-sm md:text-base mb-8 opacity-80">
              <a href="https://www.werkandme.com" target="_blank" rel="noopener noreferrer" className="underline">werkandme.com</a>{" · "}
              <a href="mailto:tom@werkandme.com" className="underline">tom@werkandme.com</a>
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
