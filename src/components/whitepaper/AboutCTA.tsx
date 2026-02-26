import ScrollAnimate from "./ScrollAnimate";

export default function AboutCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: "hsl(240 33% 14%)" }}>
      <div className="content-width">
        <ScrollAnimate>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About WerkandMe</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-14 max-w-2xl">
            WerkandMe is an employee engagement platform purpose-built for automotive dealerships. We help dealer groups reduce turnover, improve onboarding, and build the systems that drive lasting workforce stability. Our approach combines industry-specific benchmarking, structured engagement programs, and real-time analytics to give dealership leaders the visibility and tools they need to build high-performing teams.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="callout-green p-8 md:p-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Learn more and benchmark your dealership workforce</h3>
            <p className="text-sm md:text-base mb-8 opacity-80">werkandme.com · tom@werkandme.com</p>
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
              <button className="px-6 py-3 rounded-lg font-semibold text-sm border-2 transition-all duration-200 hover:shadow-lg" style={{ borderColor: "#0D0D0D", color: "#0D0D0D" }}>
                Download PDF
              </button>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
