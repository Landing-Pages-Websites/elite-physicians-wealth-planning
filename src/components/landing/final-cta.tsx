import { LeadForm } from './lead-form';
import { CompassIcon, PhoneIcon, ScaleIcon, ShieldIcon } from './icons';

const REASSURANCE = [
  { icon: ScaleIcon, label: 'A calm, one-to-one conversation' },
  { icon: CompassIcon, label: 'Works with your existing advisors' },
  { icon: ShieldIcon, label: 'Held to a fiduciary standard of care' },
] as const;

/** Final conversion section - the complete lead form and the phone route. */
export function FinalCta(): React.ReactElement {
  return (
    <section id="form" className="lp-section lp-surface-navy lp-grain">
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-split">
          <div className="lp-reveal">
            <span className="lp-eyebrow">Book your consultation</span>
            <h2 style={{ marginTop: '0.9rem' }}>Ready when you are.</h2>
            <p className="lp-lede" style={{ marginTop: '1rem', color: 'rgba(246,242,232,0.86)', maxWidth: '46ch' }}>
              Share your contact details and we will reach out to arrange a complimentary
              consultation about the planning process.
            </p>

            <ul className="lp-reassure">
              {REASSURANCE.map(({ icon: Icon, label }) => (
                <li key={label} className="lp-trust-item">
                  <Icon style={{ fontSize: '1.2rem' }} />
                  {label}
                </li>
              ))}
            </ul>

            <a
              href="tel:3012591636"
              className="btn btn-secondary btn-secondary--dark"
              style={{ marginTop: '1.75rem' }}
            >
              <PhoneIcon />
              Call (301) 259-1636
            </a>

            <p className="lp-muted-light" style={{ marginTop: '2rem', fontSize: '0.8125rem', maxWidth: '52ch' }}>
              Educational information only, not individualized investment, tax, or legal advice. Elite Physician
              Wealth Planning coordinates alongside your own CPA, TPA, attorney, and insurance
              professionals and does not itself provide those services.
            </p>
          </div>

          <div className="lp-reveal">
            <LeadForm
              variant="plain"
              title="Book your complimentary consultation"
              subtitle="Physician tax and retirement planning, coordinated under a fiduciary duty."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
