import { PhoneIcon } from './icons';

/**
 * Fixed minimal masthead - gold monogram + wordmark on the left, phone and a
 * form CTA on the right. No menu links, per the single-page LP spec.
 */
export function SiteHeader(): React.ReactElement {
  return (
    <header className="lp-header">
      <div className="lp-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '68px' }}>
        <a href="#hero" className="lp-wordmark" aria-label="Elite Physician Wealth Planning home">
          <span className="lp-wordmark-mark" aria-hidden="true">
            E
          </span>
          <span className="lp-wordmark-text">
            Elite Physician
            <br />
            Wealth Planning
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="tel:3012591636"
            className="btn btn-secondary btn-secondary--dark"
            aria-label="Call (301) 259-1636"
            style={{ minHeight: '44px', padding: '0 1.15rem', fontSize: '0.95rem' }}
          >
            <PhoneIcon aria-hidden="true" />
            <span className="lp-header-phone">(301) 259-1636</span>
          </a>
          <a href="#form" className="btn btn-primary" style={{ minHeight: '44px', padding: '0 1.15rem' }}>
            Book a consultation
          </a>
        </div>
      </div>
    </header>
  );
}
