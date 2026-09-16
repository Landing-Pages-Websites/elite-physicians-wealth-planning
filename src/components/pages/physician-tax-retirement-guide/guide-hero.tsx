import { FileTextIcon } from "@/components/site/icons";

const HERO = {
  eyebrow: "Educational Guide",
  headline: "Physician Tax & Retirement Planning Guide.",
  body: "A structured framework for physicians who want to understand how tax, retirement, investment, practice, and legacy decisions connect before a deadline forces the issue.",
} as const;

const PRIMARY_CTA = "Request the Guide";

/**
 * The premium cover is CODE per the extraction plan — an ivory plate with an
 * inset double rule and live type on the navy study field. No readable fake
 * pages, no raster cover.
 */
function GuideCover(): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="ptg-cover relative w-full max-w-[19rem] rounded-[4px] p-3 sm:max-w-[21rem]"
    >
      <div className="ptg-cover-rule flex aspect-[3/4] flex-col items-center justify-center rounded-[2px] px-8 text-center">
        <span
          aria-hidden="true"
          className="mb-6 block h-px w-14 bg-gold"
        />
        <p className="font-display text-[1.65rem] leading-[1.25] font-medium tracking-[-0.01em] text-ink">
          Physician Tax &amp; Retirement Planning Guide.
        </p>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-14 bg-gold"
        />
      </div>
    </div>
  );
}

/**
 * 01-guide-hero — left copy on the navy field, the code-built cover plate in
 * the lamp pool at right, one gold route exiting into the outcomes ledger.
 * The CTA routes to the request form; nothing implies an instant download.
 */
export function GuideHero(): React.JSX.Element {
  return (
    <section
      id="guide-hero"
      aria-labelledby="guide-hero-heading"
      className="ptg-hero relative overflow-hidden text-ivory"
    >
      <div
        className="relative z-10 va-shell grid items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20 lg:pb-20"
        style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}
      >
        <div className="max-w-2xl">
          <p className="font-body text-body-s font-medium tracking-[0.16em] text-gold uppercase">
            {HERO.eyebrow}
          </p>
          <h1
            id="guide-hero-heading"
            className="va-reveal mt-5 text-display-l font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-[52ch] font-body text-body-l leading-[1.62] text-mist/80 text-pretty">
            {HERO.body}
          </p>
          <div className="mt-10">
            <a href="#lead-capture-form" className="va-btn va-btn-gold">
              <FileTextIcon className="h-4 w-4" />
              {PRIMARY_CTA}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <GuideCover />
        </div>
      </div>
      <span aria-hidden="true" className="ptg-seam bottom-0 h-14" />
    </section>
  );
}
