/**
 * Mobile floating CTA. Form-only, per spec - a single anchor to #form. Hidden
 * on large screens where the fixed header CTA is always visible.
 */
export function StickyCta(): React.ReactElement {
  return (
    <div className="lp-sticky lp-sticky--mobile">
      <a href="#form" className="btn btn-primary" style={{ width: '100%' }}>
        Book my complimentary consultation
      </a>
    </div>
  );
}
