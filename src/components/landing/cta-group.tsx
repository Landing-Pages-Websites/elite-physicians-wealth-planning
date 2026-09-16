import { PhoneIcon } from './icons';

interface CtaGroupProps {
  primaryLabel: string;
  /** Rendered on a dark navy surface - restyle the secondary button. */
  onDark?: boolean;
  align?: 'start' | 'center';
}

/**
 * The dual-CTA used at the end of every content section. Both are real anchors:
 * the primary scrolls to the lead form, the secondary dials the tracked number.
 */
export function CtaGroup({
  primaryLabel,
  onDark = false,
  align = 'start',
}: CtaGroupProps): React.ReactElement {
  return (
    <div
      className="lp-cta-row"
      style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
    >
      <a href="#form" className="btn btn-primary">
        {primaryLabel}
      </a>
      <a
        href="tel:3012591636"
        className={`btn btn-secondary${onDark ? ' btn-secondary--dark' : ''}`}
        aria-label="Call Elite Physician Wealth Planning at (301) 259-1636"
      >
        <PhoneIcon />
        Call (301) 259-1636
      </a>
    </div>
  );
}
