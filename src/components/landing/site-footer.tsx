const YEAR = 2025;

/**
 * Legal-only footer. No outbound site navigation; legal links open in a new tab
 * if/when the policy pages exist. Includes the educational-information notice.
 */
export function SiteFooter(): React.ReactElement {
  return (
    <footer className="lp-surface-navy" style={{ paddingBlock: '3.5rem' }}>
      <div className="lp-container">
        <div className="lp-wordmark">
          <span className="lp-wordmark-mark" aria-hidden="true">
            E
          </span>
          <span className="lp-wordmark-text">
            Elite Physician
            <br />
            Wealth Planning
          </span>
        </div>

        <div className="lp-rule" style={{ margin: '2rem 0 1.5rem' }} />

        <p className="lp-muted-light" style={{ fontSize: '0.8125rem', maxWidth: '70ch' }}>
          This landing page is provided for educational and informational purposes only and is not
          investment, tax, or legal advice. Elite Physician Wealth Planning coordinates strategy
          alongside your own CPA, third-party administrator, estate-planning attorney, and insurance
          professionals and does not itself provide those services.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1.5rem', alignItems: 'center' }}>
          <span className="lp-muted-light" style={{ fontSize: '0.8125rem' }}>
            © {YEAR} Elite Physician Wealth Planning. All rights reserved.
          </span>
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-muted-light"
            style={{ fontSize: '0.8125rem' }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-muted-light"
            style={{ fontSize: '0.8125rem' }}
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
