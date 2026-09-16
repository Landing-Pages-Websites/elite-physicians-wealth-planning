import { ArrowRightIcon } from "@/components/site/icons";

const FEATURED = {
  headline: "Start where the pressure is clearest.",
  body: "Begin with the article closest to your current question — each one stands on its own, so there is no required reading order.",
} as const;

interface FeaturedRoute {
  readonly href: string;
  readonly label: string;
  /** The manifest marks the first path with its restrained affordance. */
  readonly activeLabel?: string;
}

const FEATURED_ROUTES: readonly FeaturedRoute[] = [
  {
    href: "/insights/physician-financial-checkup-seven-areas",
    label: "The physician financial checkup",
    activeLabel: "Open featured path",
  },
  {
    href: "/insights/first-five-years-financial-moves",
    label: "First five years of practice",
  },
  {
    href: "/insights/w2-1099-practice-income-questions",
    label: "W-2, 1099 & practice income",
  },
] as const;

const SPREAD_PHOTO = {
  src: "/images/design/insights/elements/03-featured-index-photo.jpg",
  alt: "Physician in a white coat annotating a navy financial-plan folio beside a stethoscope",
} as const;

function FeaturedRouteLink({ route }: { route: FeaturedRoute }): React.JSX.Element {
  return (
    <li className="relative pl-7">
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />
      <a
        href={route.href}
        aria-label={route.label}
        className="group flex min-h-14 flex-wrap items-center gap-x-5 gap-y-1 rounded-[3px] border border-ink/10 bg-ink px-5 py-3 shadow-[0_16px_36px_-22px_rgba(11,31,58,0.65)] transition-all duration-200 hover:translate-x-1 hover:border-gold/70"
      >
        {/* Mobile shows the article title; the route path needs sm+ width to
            set without breaking mid-token. */}
        <span className="min-w-0 font-body text-[0.9rem] font-medium tracking-[0.01em] text-ivory">
          <span className="sm:hidden">{route.label}</span>
          <span className="hidden sm:inline">{route.href}</span>
        </span>
        {route.activeLabel ? (
          <span className="inline-flex items-center gap-2 rounded-[3px] border border-gold px-3 py-1 font-body text-[11px] font-semibold tracking-[0.08em] text-gold uppercase">
            {route.activeLabel}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        ) : (
          <ArrowRightIcon className="h-4 w-4 text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        )}
      </a>
    </li>
  );
}

/**
 * 03-featured-index — the asymmetric editorial spread: index copy and the
 * three featured article routes on the left, the advisory photograph as a
 * tall framed canvas on the right, with the route ledger overlapping its
 * edge at desktop widths, as the frame draws it.
 */
export function FeaturedIndex(): React.JSX.Element {
  return (
    <section
      id="featured-index"
      aria-labelledby="insights-featured-heading"
      className="ins-seam-top ins-seam-bottom relative overflow-hidden bg-ivory"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
          <div className="relative z-10 lg:col-span-6">
            <h2
              id="insights-featured-heading"
              className="max-w-[14ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {FEATURED.headline}
            </h2>
            <p className="mt-6 max-w-[40ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {FEATURED.body}
            </p>
            <nav aria-label="Featured article paths" className="mt-10 lg:mr-[-14%]">
              <ul className="ins-spine flex max-w-xl flex-col gap-4">
                {FEATURED_ROUTES.map((route) => (
                  <FeaturedRouteLink key={route.href} route={route} />
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-6 lg:pl-16">
            <div className="ins-frame ins-frame--featured mx-auto max-w-md shadow-[0_28px_60px_-30px_rgba(11,31,58,0.5)] lg:mx-0 lg:max-w-none">
              <img src={SPREAD_PHOTO.src} alt={SPREAD_PHOTO.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
