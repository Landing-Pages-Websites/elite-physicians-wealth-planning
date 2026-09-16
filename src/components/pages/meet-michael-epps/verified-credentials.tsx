const EYEBROW = "Verified credentials";
const HEADLINE = "Credentials, in plain language.";
const CREDENTIALS = [
  { label: "ChFC", definition: "Chartered Financial Consultant" },
  { label: "RICP", definition: "Retirement Income Certified Professional" },
] as const;
const NOTE =
  "Michael holds two designations — ChFC® and RICP® — and these are the only credentials you will see alongside his name.";

/**
 * 03-verified-credentials. Pure typographic ledger — no badges, seals, or
 * imagery. Two rows of identical structural weight, an em-dash between the
 * abbreviation and its plain-English definition, the approved boundary note
 * beneath, and a warm full-width band closing the section into the mist seam.
 */
export function VerifiedCredentials(): React.JSX.Element {
  return (
    <section
      id="verified-credentials"
      aria-labelledby="verified-credentials-heading"
      className="mme-credentials relative overflow-hidden"
    >
      <div className="va-shell relative pt-20 pb-16 lg:pt-24 lg:pb-20">
        <span aria-hidden="true" className="mme-seam mme-seam-top" />
        <span aria-hidden="true" className="mme-seam mme-seam-bottom" />
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold-text uppercase">
          {EYEBROW}
        </p>
        <h2
          id="verified-credentials-heading"
          className="va-reveal mt-4 font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-ink"
        >
          {HEADLINE}
        </h2>
        <dl className="mt-10 max-w-3xl border-t border-ink/25">
          {CREDENTIALS.map((credential) => (
            <div
              key={credential.label}
              className="grid grid-cols-[6rem_1fr] items-baseline gap-4 border-b border-ink/25 py-6 sm:grid-cols-[8rem_1fr]"
            >
              <dt className="font-display text-[1.9rem] leading-none font-medium text-ink">
                {credential.label}
              </dt>
              <dd className="font-body text-body-m text-charcoal">
                <span aria-hidden="true">— </span>
                {credential.definition}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-7 max-w-3xl font-body text-body-s leading-[1.5] text-charcoal/80">
          {NOTE}
        </p>
      </div>
      <div aria-hidden="true" className="h-10 w-full border-t border-gold/60 bg-ivory" />
    </section>
  );
}
