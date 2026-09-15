import { CtaGroup } from './cta-group';

const STEPS = [
  {
    title: 'Discover',
    body: 'We start with a complimentary consultation to understand your practice, your goals, and the professionals already on your team.',
  },
  {
    title: 'Assess',
    body: 'We look at how your tax picture and retirement plan fit together today - and where coordination is missing.',
  },
  {
    title: 'Strategize',
    body: 'We outline a tax-first strategy and align your retirement planning with it.',
  },
  {
    title: 'Implement',
    body: 'We put the plan into motion with clear next steps, in step with your CPA, attorney, and other advisors.',
  },
  {
    title: 'Optimize',
    body: 'We adjust as tax law, your practice, and your priorities change over time.',
  },
  {
    title: 'Review',
    body: 'We revisit the plan on a regular cadence so it stays coordinated as your career evolves.',
  },
] as const;

/** The Elite Physician Wealth Blueprint - a six-step continuous gold route. */
export function WealthBlueprint(): React.ReactElement {
  return (
    <section id="wealth-blueprint" className="lp-section lp-surface-navy lp-grain">
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-section-head lp-reveal">
          <span className="lp-eyebrow">The Elite Physician Wealth Blueprint</span>
          <h2>One process, followed end to end.</h2>
          <p className="lp-lede" style={{ color: 'rgba(246,242,232,0.86)' }}>
            The Blueprint is how coordination actually happens - a connected sequence that carries
            your strategy from the first conversation through ongoing review.
          </p>
        </div>

        <ol className="lp-route lp-blueprint-route" style={{ marginTop: '3.25rem' }}>
          {STEPS.map((step, index) => (
            <li key={step.title} className="lp-route-step lp-reveal">
              <span className="lp-route-node" aria-hidden="true">
                {index + 1}
              </span>
              <h3 style={{ fontSize: '1.5rem' }}>{step.title}</h3>
              <p className="lp-muted-light" style={{ marginTop: '0.4rem', maxWidth: '52ch' }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: '2.5rem' }}>
          <CtaGroup primaryLabel="Book a consultation" onDark />
        </div>
      </div>
    </section>
  );
}
