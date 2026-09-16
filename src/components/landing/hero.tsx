import Image from 'next/image';
import { LeadForm } from './lead-form';
import { CompassIcon, PhoneIcon, ScaleIcon, ShieldIcon } from './icons';

const TRUST_SIGNALS = [
  { icon: ScaleIcon, label: 'Physician-focused' },
  { icon: CompassIcon, label: 'Coordinated strategy' },
  { icon: ShieldIcon, label: 'Fiduciary duty' },
] as const;

/**
 * HeroWithForm - tax-first physician positioning, complimentary consultation
 * offer, a real photo of a physician in a planning setting, and the complete
 * lead form above the fold.
 */
export function Hero(): React.ReactElement {
  return (
    <section id="hero" className="lp-section lp-surface-navy lp-hero lp-grain">
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-hero-head lp-reveal">
          <span className="lp-eyebrow">Physician Tax &amp; Retirement Planning</span>
          <h1>Tax planning built for physicians, coordinated from the start.</h1>
          <p className="lp-lede">
            Start with a complimentary consultation. Explore a tax-first planning process that
            considers retirement planning alongside the CPAs, attorneys, and advisors already
            involved. Elite Physician Wealth Planning operates under a fiduciary duty.
          </p>

          <div className="lp-trust-row">
            {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
              <span key={label} className="lp-trust-item">
                <Icon />
                {label}
              </span>
            ))}
          </div>

          <div
            className="lp-hero-actions"
            style={{ marginTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}
          >
            <span className="lp-muted-light">Prefer to talk now?</span>
            <a
              href="tel:3012591636"
              className="btn btn-secondary btn-secondary--dark"
              aria-label="Call Elite Physician Wealth Planning at (301) 259-1636"
            >
              <PhoneIcon />
              Call (301) 259-1636
            </a>
          </div>
        </div>

        <div className="lp-hero-grid">
          <figure className="lp-hero-figure lp-reveal" style={{ margin: 0 }}>
            <Image
              src="/images/landing/black-physician-planning.png"
              alt="A physician reviewing a financial plan with an advisor across a desk"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              priority
            />
          </figure>

          <div className="lp-reveal">
            <LeadForm variant="glass" />
          </div>
        </div>
      </div>
    </section>
  );
}
