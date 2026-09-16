import Image from 'next/image';
import { CtaGroup } from './cta-group';
import { LayersIcon } from './icons';

const PROFESSIONALS = [
  'CPA / tax preparer',
  'Third-party administrator (TPA)',
  'Estate-planning attorney',
  'Insurance professional',
  'Retirement-plan advisor',
] as const;

/** FeaturesAlternating + a convergence diagram: many advisors, one plan. */
export function CoordinationGap(): React.ReactElement {
  return (
    <section id="coordination-gap" className="lp-section lp-surface-ivory lp-grain">
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-section-head lp-reveal">
          <span className="lp-eyebrow">The coordination gap</span>
          <h2>Six professionals. One financial life.</h2>
          <p className="lp-lede">
            Physicians may make tax, retirement, insurance, and estate decisions in separate
            conversations with separate professionals. The coordinating role helps those
            conversations stay connected around one set of priorities.
          </p>
        </div>

        <div className="lp-split" style={{ marginTop: '3rem' }}>
          <div className="lp-reveal">
            <div className="lp-converge" role="group" aria-label="Outside professionals coordinated into one plan">
              <ul className="lp-converge-list">
                {PROFESSIONALS.map((name) => (
                  <li key={name} className="lp-converge-chip">
                    {name}
                  </li>
                ))}
              </ul>
              <div className="lp-converge-tail" aria-hidden="true" />
              <div className="lp-converge-hub">
                <LayersIcon style={{ fontSize: '1.5rem', color: 'var(--lp-gold)' }} />
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>
                    The Elite Physician Wealth Blueprint
                  </strong>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(246,242,232,0.82)', marginTop: '0.2rem' }}>
                    One coordinated strategy that works with your team.
                  </p>
                </div>
              </div>
            </div>

            <p className="lp-muted" style={{ marginTop: '1.75rem', maxWidth: '52ch' }}>
              Elite Physician Wealth Planning fills the coordinating role. We bring your tax and
              retirement strategy into one plan and work with your existing professionals - without
              replacing them or claiming to perform their services.
            </p>

            <div style={{ marginTop: '1.75rem' }}>
              <CtaGroup primaryLabel="Talk to an advisor" />
            </div>
          </div>

          <figure className="lp-split-media lp-media lp-media--tall lp-reveal" style={{ margin: 0 }}>
            <Image
              src="/images/design/a/04-blueprint-rounds/desk-still-life.jpg"
              alt="Stethoscope and planning materials on a consultation desk"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
