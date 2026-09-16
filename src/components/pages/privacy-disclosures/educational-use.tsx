/**
 * 02-educational-use. Ivory band: the display heading and two-column
 * disclosure copy at left, the faded consultation plate at right. Every
 * sentence is live, selectable text.
 */
const BODY =
  "Website content is provided for educational and informational purposes only. It is general in nature, may not reflect current tax law or market conditions, and should not be treated as individualized tax, legal, investment, insurance, or financial advice.";

const PLATE = {
  src: "/images/design/privacy-disclosures/media/disclosure-education-consultation.jpg",
  alt: "Softly faded scene of two people reviewing a blank document across a consultation desk",
} as const;

export function EducationalUse(): React.JSX.Element {
  return (
    <section
      id="educational-use"
      aria-labelledby="educational-use-heading"
      className="pvd-seam-in pvd-seam-out relative bg-ivory"
    >
      <div className="va-shell grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,26rem)] lg:gap-20 lg:py-24">
        <div>
          <h2
            id="educational-use-heading"
            className="font-display text-display-l leading-[1.06] font-medium tracking-[-0.02em] text-ink"
          >
            Educational use.
          </h2>
          <p className="mt-8 max-w-[64ch] font-body text-body-m leading-[1.7] text-charcoal sm:columns-2 sm:gap-10">
            {BODY}
          </p>
        </div>
        <figure className="pvd-edu-plate rounded-sm">
          <img src={PLATE.src} alt={PLATE.alt} width={636} height={600} />
        </figure>
      </div>
    </section>
  );
}
