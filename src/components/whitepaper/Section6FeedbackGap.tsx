import SectionMarker from "./SectionMarker";

const tableData = [
  { metric: "Engagement when heard", finding: "96% of employees report being more engaged when they feel heard", source: "Hive Research" },
  { metric: "Empowerment effect", finding: "Employees who feel heard are 4.6x more likely to feel empowered to do their best work", source: "Salesforce Research" },
  { metric: "Retention impact", finding: "Employees who feel heard are 31% less likely to leave their roles", source: "Gallup" },
  { metric: "Recognition + retention", finding: "Employees receiving meaningful recognition were 45% less likely to leave (2-year study)", source: "Gallup / Workhuman" },
  { metric: "Feedback action gap", finding: "35% of employees say their organization doesn't act on feedback effectively", source: "Quantum Workplace" },
  { metric: "Action = engagement", finding: "Employees who see action on feedback are 12x more likely to be engaged", source: "Quantum Workplace" },
  { metric: "Preventable turnover", finding: "42% of all employee turnover is preventable — management could have intervened", source: "Gallup" },
];

const frameworkCards = [
  {
    number: 1,
    title: "Regular Pulse Checks",
    what: "Short, frequent surveys (monthly or quarterly) by department and role — not just annual reviews",
    why: "Catches issues before they become resignations",
  },
  {
    number: 2,
    title: "Anonymity + Safety",
    what: "Employees can share concerns without fear of retaliation; feedback is aggregated, not attributed",
    why: "Unlocks honest input from front-line staff",
  },
  {
    number: 3,
    title: "Visible Action",
    what: "Leadership communicates what was heard and what changed as a result — even when the answer is 'not yet'",
    why: "Builds trust that voice leads to impact",
  },
  {
    number: 4,
    title: "Manager Coaching",
    what: "Managers receive training on how to have structured conversations, not just performance reviews",
    why: "70% of engagement variance traces to the manager (Gallup)",
  },
];

export default function Section6FeedbackGap() {
  return (
    <section id="section-6" className="section-dark section-padding">
      <div className="content-width">
        <SectionMarker number={6} title="The Feedback Gap" />
        <p className="italic text-muted-foreground text-base mb-10">
          Why Satisfaction Without Voice Is a Retention Illusion
        </p>

        <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
          <p>
            The satisfaction paradox raises an urgent question: if 82% of dealership employees report being satisfied, why does turnover remain stubbornly high? The answer lies in a distinction that most dealership operators overlook — the difference between satisfaction and <em>feeling heard</em>.
          </p>
          <p>
            Satisfaction measures how an employee feels right now. Voice measures whether they believe their input matters, whether leadership is listening, and whether speaking up leads to visible change. When these two diverge — when people are content enough to stay today but do not feel heard — retention becomes fragile. One bad month, one better offer, one leadership misstep, and the satisfied employee becomes the departed employee.
          </p>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">The Data on Being Heard</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
          The evidence connecting employee voice to retention is among the most robust in organizational research. Gallup's midyear 2025 data shows U.S. employee engagement stagnating at approximately 32%, with the cost of disengagement estimated at $2 trillion annually in lost productivity. Critically, Gallup found that employees want leaders who show up, explain the "why," and invite input — and that without space for employee voice, trust breaks down and becomes even harder to rebuild.
        </p>

        {/* Data table */}
        <div className="mb-14 overflow-x-auto">
          <h4 className="text-foreground font-semibold text-base mb-4">Being Heard by the Numbers</h4>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Metric</th>
                <th className="text-left px-4 py-3 font-semibold">Finding</th>
                <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Source</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="border-b border-border bg-card">
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{row.metric}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.finding}</td>
                  <td className="px-4 py-3 text-brand-caption whitespace-nowrap">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prominent pull quote */}
        <div className="py-12 md:py-16 text-center mb-14">
          <p className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-3xl mx-auto">
            "42% of employee turnover is preventable. Nearly half of the people who quit said management could have done something to keep them. The question is whether anyone asked."
          </p>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">What This Means Inside a Dealership</h3>
        <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
          <p>
            The macro research translates directly to the dealership floor. CDK's 2025 Dealership Workplace Study found that leadership responsiveness and team dynamics are now just as critical as pay in determining whether employees stay. The study explicitly recommended that stressors like pay structure "could be handled by evaluating your current policies and engaging feedback from your team" — an acknowledgment that the act of asking is itself an intervention.
          </p>
          <p>
            Deloitte's inaugural 2025 automotive employee engagement study, fielded in partnership with Automotive News with over 300 industry respondents, surfaced a striking finding: only half of automotive employees said they would choose to stay in the industry if starting their career today, down from 65% in 2020. The top reasons cited for leaving were not compensation — they were poor industry perception, lack of work-life balance, and organizational culture. Deloitte found that 75% of employees prefer to stay with their current company, but many do not feel the culture supports their growth or belonging.
          </p>
          <p>
            Industry research specific to dealerships reinforces the pattern: dealerships with structured employee engagement programs have been shown to reduce turnover by up to 40%. Yet the vast majority of dealerships have no systematic mechanism for gathering, analyzing, and acting on employee feedback. Exit interviews — the most common "listening" tool — are, by definition, too late. They capture why someone left, not what would have made them stay.
          </p>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">From the Great Resignation to the Great Detachment</h3>
        <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
          <p>
            The broader workforce narrative has shifted. The mass-quit era of 2021–2022 has given way to what researchers now call "The Great Detachment" — a state where employees are no longer leaving in waves but are instead disengaging in place. Gallup reports that over half of U.S. employees are actively watching for or seeking new opportunities, the highest self-reported turnover risk since 2015.
          </p>
          <p>
            For dealerships, this dynamic is especially dangerous. A disengaged service advisor still shows up but stops building relationships with customers. A detached technician still completes repair orders but stops mentoring apprentices or suggesting process improvements. A sales consultant who has mentally checked out still sits at a desk but converts fewer leads and erodes the customer experience. The cost of detachment is invisible until it becomes the cost of departure — and by then, the damage to customer relationships, team morale, and institutional knowledge is already done.
          </p>
          <p>
            The research points to a clear conclusion: engagement and culture issues — not compensation alone — account for the majority of preventable turnover. Gallup's global retention data found that factors related to engagement, culture, and well-being account for roughly 69% of the reasons employees leave, far outweighing pay and benefits as standalone drivers. Dealerships that invest only in compensation adjustments while ignoring the feedback loop are addressing less than a third of the problem.
          </p>
        </div>

        <div className="pull-quote p-6 md:p-8 mb-14">
          <p className="text-foreground italic text-base md:text-lg leading-relaxed">
            "Asking employees what is wrong is itself a retention intervention. The act of listening — when followed by visible action — signals that people matter more than headcount."
          </p>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">The Employee Voice Diagnostic: A Framework for Dealerships</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
          Dealerships that want to move from reactive retention (exit interviews, counter-offers) to proactive engagement need a structured feedback loop. The most effective systems share four characteristics:
        </p>

        <div className="space-y-4 mb-14">
          {frameworkCards.map((card) => (
            <div
              key={card.number}
              className="bg-card border border-border rounded-lg p-6 md:p-8"
              style={{ borderLeft: "4px solid hsl(76 90% 47%)" }}
            >
              <div className="flex items-start gap-4">
                <div className="section-number shrink-0 text-sm">{card.number}</div>
                <div className="flex-1">
                  <h4 className="text-foreground font-bold text-base mb-2">{card.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                    <span className="text-foreground font-medium">What it looks like: </span>
                    {card.what}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="text-foreground font-medium">Why it matters: </span>
                    {card.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          The implication is clear: dealerships do not need to solve every compensation, scheduling, or workload problem before they can improve retention. They need to start by listening — systematically, frequently, and with a commitment to visible follow-through. The data shows that creating a structured feedback channel changes the retention equation, because it signals to employees that they are not interchangeable parts in a machine. They are people whose experience matters to the business.
        </p>
      </div>
    </section>
  );
}
