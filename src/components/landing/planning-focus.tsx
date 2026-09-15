import Image from 'next/image';
import { CtaGroup } from './cta-group';

const FOCUS_ROWS = [
  {
    index: '01',
    label: 'Tax planning',
    tag: 'Primary focus',
    body: 'Forward-looking tax planning coordinated with the appropriate tax professional.',
  },
  {
    index: '02',
    label: 'Retirement planning',
    tag: 'Aligned with the tax plan',
    body: 'Retirement planning considered alongside tax planning within one connected strategy.',
  },
] as const;

/** Two campaign services as uneven ledger rows beside a clinical image mosaic. */
export function PlanningFocus(): React.ReactElement {
  return (
    <section id="planning-focus" className="lp-section lp-surface-white">
      <div className="lp-container">
        <div className="lp-section-head lp-reveal">
          <span className="lp-eyebrow">What we focus on</span>
          <h2>Tax planning first. Retirement planning, aligned.</h2>
          <p className="lp-lede">
            Tax planning is the primary focus of our work with physicians. Retirement planning
            is considered alongside it in the Elite Physician Wealth Blueprint.
          </p>
        </div>

        <div className="lp-split" style={{ marginTop: '3rem' }}>
          <div className="lp-reveal">
            <div className="lp-ledger">
              {FOCUS_ROWS.map((row) => (
                <div key={row.label} className="lp-ledger-row">
                  <span className="lp-ledger-index">{row.index}</span>
                  <div>
                    <div className="lp-ledger-head">
                      <h3 style={{ fontSize: '1.6rem' }}>{row.label}</h3>
                      <span className="lp-tag">{row.tag}</span>
                    </div>
                    <p className="lp-muted" style={{ marginTop: '0.5rem' }}>
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <CtaGroup primaryLabel="Get started" />
            </div>
          </div>

          <div className="lp-split-media lp-mosaic lp-reveal">
            <figure className="lp-media lp-media--tall" style={{ margin: 0 }}>
              <Image
                src="/images/design/a/04-blueprint-rounds/desk-stethoscope-crop.jpg"
                alt="Stethoscope and planning materials"
                fill
                sizes="(max-width: 1023px) 50vw, 25vw"
              />
            </figure>
            <figure className="lp-media" style={{ margin: 0 }}>
              <Image
                src="/images/design/a/01-one-plan/hero-consultation-office.jpg"
                alt="Quiet consultation office"
                fill
                sizes="(max-width: 1023px) 50vw, 25vw"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
