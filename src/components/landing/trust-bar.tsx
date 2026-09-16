import { CtaGroup } from './cta-group';
import { CompassIcon, ScaleIcon, ShieldIcon } from './icons';

const SIGNALS = [
  {
    icon: ScaleIcon,
    title: 'Physician-focused',
    body: 'Planning shaped around medical careers, practice ownership, and changing career stages.',
  },
  {
    icon: CompassIcon,
    title: 'Coordinated strategy',
    body: 'One plan that works with your CPA, TPA, attorney, and insurance professionals instead of around them.',
  },
  {
    icon: ShieldIcon,
    title: 'Fiduciary duty',
    body: 'A standard of care that puts your interests first at every step of the relationship.',
  },
] as const;

/** StatsBar - three identity signals, not numbers. A gold rule ties them. */
export function TrustBar(): React.ReactElement {
  return (
    <section id="trust-bar" className="lp-section lp-section--tight lp-surface-white">
      <div className="lp-container">
        <div className="lp-rule" style={{ marginBottom: '2.5rem' }} />
        <div className="lp-trust-grid">
          {SIGNALS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="lp-signal lp-reveal">
              <span className="lp-signal-icon" aria-hidden="true">
                <Icon style={{ fontSize: '1.4rem' }} />
              </span>
              <div>
                <h3 style={{ fontSize: '1.35rem' }}>{title}</h3>
                <p className="lp-muted" style={{ marginTop: '0.35rem', fontSize: '0.95rem' }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lp-reveal" style={{ marginTop: '2.75rem' }}>
          <CtaGroup primaryLabel="Book a consultation" align="center" />
        </div>
      </div>
    </section>
  );
}
