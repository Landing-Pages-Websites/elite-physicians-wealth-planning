/**
 * 04-referral-context. White ledger band: the blank referral notepad at
 * left with live role tabs stepped down its edge (the extraction plan keeps
 * tab labels as code), copy and the no-implication boundary at right.
 */
const COPY = {
  headline: "Referral partners.",
  body: "CPAs, attorneys, TPAs, practice consultants, and medical associations may use the contact form for coordination inquiries.",
  boundary: "No partnership, endorsement, or referral result is implied.",
} as const;

/** Role tabs mirror the roles named in the body copy — nothing invented. */
const ROLE_TABS = [
  "CPAs",
  "Attorneys",
  "TPAs",
  "Practice consultants",
  "Medical associations",
] as const;

const PHOTO = {
  src: "/images/design/contact/media/referral-notepad.jpg",
  alt: "Blank ruled notepad with a navy pen resting across it",
} as const;

function ReferralStack(): React.JSX.Element {
  return (
    <div className="relative w-full max-w-[19rem]">
      <figure className="cnt-referral-photo rounded-sm">
        <img src={PHOTO.src} alt={PHOTO.alt} width={317} height={560} />
      </figure>
      <ul className="absolute top-8 right-0 grid translate-x-1/4 gap-2.5 sm:translate-x-1/2">
        {ROLE_TABS.map((role, index) => (
          <li
            key={role}
            className="cnt-referral-tab rounded-sm px-3.5 py-1.5 font-body text-[12px] font-medium text-ink"
            style={{ marginLeft: `${index * 6}px` }}
          >
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReferralContext(): React.JSX.Element {
  return (
    <section
      id="referral-context"
      aria-labelledby="referral-context-heading"
      className="cnt-seam-in cnt-seam-out relative overflow-hidden bg-white"
    >
      <div className="va-shell grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-24 lg:py-24">
        <ReferralStack />
        <div>
          <h2
            id="referral-context-heading"
            className="font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            {COPY.headline}
          </h2>
          <p className="mt-5 max-w-[52ch] font-body text-body-l leading-[1.65] text-charcoal">
            {COPY.body}
          </p>
          <p className="mt-8 max-w-[52ch] border border-gold/40 bg-ivory/70 px-5 py-4 font-body text-body-s leading-[1.6] text-charcoal">
            {COPY.boundary}
          </p>
        </div>
      </div>
    </section>
  );
}
