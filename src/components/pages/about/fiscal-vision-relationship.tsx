import Image from "next/image";

const HEADLINE = "Powered by Fiscal Vision Financial.";
const BODY =
  "Elite Physicians Wealth Planning operates as the physician-focused planning relationship of Fiscal Vision Financial — one firm, accountable for how the strategy comes together.";

/** Small section-local line accent beside the heading, as the frame draws it. */
function CornerAccent(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="h-10 w-10 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 44 V16 Q4 4 16 4 H44" />
    </svg>
  );
}

/**
 * 04-fiscal-vision-relationship. A quiet credentialing band on the mist
 * ground the page flow contracts: a white document card carries the
 * relationship statement while the institutional-columns photograph bleeds
 * off the right edge. No interactive element — a statement, not a pitch.
 */
export function FiscalVisionRelationship(): React.JSX.Element {
  return (
    <section
      id="fiscal-vision-relationship"
      aria-labelledby="fiscal-vision-heading"
      className="abt-fv relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-28">
        <span aria-hidden="true" className="abt-seam abt-seam-top" />
        <span aria-hidden="true" className="abt-seam abt-seam-bottom" />
        <div className="abt-fv-media mb-10 lg:mb-0">
          <Image
            src="/images/design/about/elements/fiscal-vision-columns.jpg"
            alt=""
            aria-hidden="true"
            width={506}
            height={760}
          />
        </div>
        <div className="abt-fv-card relative z-10 max-w-2xl p-8 sm:p-12 lg:p-14">
          <CornerAccent />
          <h2
            id="fiscal-vision-heading"
            className="va-reveal mt-6 font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink"
          >
            {HEADLINE}
          </h2>
          <p className="mt-6 max-w-[52ch] font-body text-body-m leading-[1.65] text-charcoal">
            {BODY}
          </p>
        </div>
      </div>
    </section>
  );
}
