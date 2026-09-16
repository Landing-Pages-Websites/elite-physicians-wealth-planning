import Image from "next/image";

const HEADLINE = "What every profile includes before it appears here.";
const STANDARDS = [
  "A complete, confirmed biography",
  "A confirmed place on the current roster",
  "An approved portrait and introduction",
  "Approval for any contact details, roles, or images shown",
] as const;

/**
 * 03-bio-input-gate, rendered as the customer-facing publication standard:
 * a white ledger listing what must be confirmed before any team profile is
 * published — no fake staff copy, no internal production language. The
 * desk photograph rests lower-left as the frame draws it.
 */
export function BioInputGate(): React.JSX.Element {
  return (
    <section
      id="bio-input-gate"
      aria-labelledby="bio-input-gate-heading"
      className="tem-gate relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-24">
        <span aria-hidden="true" className="tem-seam tem-seam-top" />
        <span aria-hidden="true" className="tem-seam tem-seam-bottom" />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:col-start-5">
            <h2
              id="bio-input-gate-heading"
              className="va-reveal max-w-[24ch] font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink"
            >
              {HEADLINE}
            </h2>
            <ul className="tem-gate-list mt-10 max-w-xl">
              {STANDARDS.map((standard) => (
                <li key={standard} className="flex items-start gap-5">
                  <span aria-hidden="true" className="tem-gate-node" />
                  <span className="font-body text-body-m leading-[1.55] text-charcoal">
                    {standard}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="max-w-[440px] lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-auto lg:max-w-none">
            <Image
              src="/images/design/about--team/media/bio-gate-desk.jpg"
              alt=""
              aria-hidden="true"
              width={700}
              height={294}
              className="h-auto w-full shadow-[0_20px_45px_-28px_rgba(11,31,58,0.5)]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
