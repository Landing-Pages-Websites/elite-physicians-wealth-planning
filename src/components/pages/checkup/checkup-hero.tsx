import { CalendarIcon } from "@/components/site/icons";

const HERO = {
  eyebrow: "Physician Financial Checkup",
  headline: "Find where your financial plan may be disconnected.",
  body: "A structured checkup can help a medical professional identify which planning areas deserve a deeper conversation.",
  primaryCta: "Start the Checkup",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

/**
 * 01-checkup-hero — left copy over the quiet navy field, the seven-note desk
 * still life across the right, boundary line under the CTA, and the page-local
 * gold route beginning at the bottom seam into 02.
 */
export function CheckupHero(): React.JSX.Element {
  return (
    <section
      id="checkup-hero"
      aria-labelledby="checkup-hero-heading"
      className="chk-hero relative overflow-hidden text-ivory"
    >
      <div
        className="relative z-10 va-shell grid items-center gap-10 pb-16 lg:grid-cols-[minmax(0,42%)_minmax(0,1fr)] lg:gap-14 lg:pb-20"
        style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}
      >
        <div className="max-w-xl">
          <p className="font-body text-body-s font-medium tracking-[0.16em] text-gold uppercase">
            {HERO.eyebrow}
          </p>
          <h1
            id="checkup-hero-heading"
            className="va-reveal mt-5 text-display-l font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-[46ch] font-body text-body-l leading-[1.62] text-mist/80 text-pretty">
            {HERO.body}
          </p>
          <div className="mt-9">
            <a href="#interactive-review" className="va-btn va-btn-gold">
              <CalendarIcon className="h-4 w-4" />
              {HERO.primaryCta}
            </a>
          </div>
          <p className="mt-9 max-w-[46ch] border-t border-white/10 pt-5 font-body text-body-s leading-[1.5] text-mist/65">
            {HERO.boundary}
          </p>
        </div>

        {/* The desk still life: stethoscope, folio, pen, and the seven blank
            notes the checkup names — the crop contract's focal group. */}
        <div className="relative aspect-[846/610] w-full overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_70px_-40px_rgba(2,10,22,0.9)]">
          <img
            src="/images/design/checkup/media/checkup-hero-desk-right.jpg"
            alt="Consultation desk with a stethoscope, leather folio, pen, and seven blank note cards laid out for review"
            width={846}
            height={746}
            className="chk-hero-media absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      {/* Gold route: begins quietly here and exits into the seven-area map. */}
      <span aria-hidden="true" className="chk-seam bottom-0 h-14" />
    </section>
  );
}
