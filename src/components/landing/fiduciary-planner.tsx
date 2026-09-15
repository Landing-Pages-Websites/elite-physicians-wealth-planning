import Image from 'next/image';
import { CtaGroup } from './cta-group';
import { ShieldIcon } from './icons';

const CREDENTIALS = ['ChFC®', 'RICP®'] as const;

/** An accountable, named planner with verified credentials behind the process. */
export function FiduciaryPlanner(): React.ReactElement {
  return (
    <section id="fiduciary-planner" className="lp-section lp-surface-navy lp-grain">
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-split lp-split--reverse">
          <div className="lp-reveal">
            <span className="lp-eyebrow">Your fiduciary planner</span>
            <h2 style={{ marginTop: '0.9rem' }}>A named advisor, accountable to you.</h2>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span className="lp-display" style={{ fontSize: '1.75rem', color: 'var(--lp-white)' }}>
                Michael A. Epps
              </span>
              <span style={{ display: 'inline-flex', gap: '0.4rem' }}>
                {CREDENTIALS.map((credential) => (
                  <span key={credential} className="lp-credential">
                    {credential}
                  </span>
                ))}
              </span>
            </div>

            <p className="lp-muted-light" style={{ marginTop: '1.25rem', maxWidth: '54ch' }}>
              Michael operates under a fiduciary duty, putting client interests before the firm&apos;s.
              He coordinates with the appropriate outside professionals, including CPAs, third-party
              administrators, estate-planning attorneys, and insurance professionals, without
              claiming to perform each of those services himself.
            </p>

            <p className="lp-trust-item" style={{ marginTop: '1.25rem' }}>
              <ShieldIcon style={{ fontSize: '1.2rem' }} />
              Held to a fiduciary standard of care
            </p>

            <div style={{ marginTop: '1.75rem' }}>
              <CtaGroup primaryLabel="Book a consultation" onDark />
            </div>
          </div>

          <figure className="lp-split-media lp-media lp-media--tall lp-reveal" style={{ margin: 0, maxWidth: '440px' }}>
            <Image
              src="/images/design/shared/hero-founder.png"
              alt="Michael A. Epps, fiduciary financial planner, in his office"
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
