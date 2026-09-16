import { Fragment } from "react";

import { ArrowRightIcon } from "@/components/site/icons";

const FEATURED = {
  headline: "Start where the pressure is clearest.",
  body: "A physician with a year-end question may begin with tax strategy; a practice owner may begin with business planning; a physician nearing transition may begin with retirement or legacy coordination.",
  cta: { label: "Open tax planning", href: "/tax-planning-for-physicians" },
} as const;

const ROUTE_STOPS = [
  { label: "Tax Planning", href: "/tax-planning-for-physicians" },
  { label: "Practice Owner Planning", href: "/practice-owner-planning" },
  { label: "Retirement Planning", href: "/retirement-planning-for-physicians" },
] as const;

const PHOTOS = {
  physician: {
    src: "/images/design/services/elements/03-featured-path-physician-planning.jpg",
    alt: "Physician reviewing a planning file at a quiet office desk",
  },
  folder: {
    src: "/images/design/services/elements/03-featured-path-tax-folder-detail.jpg",
    alt: "Close detail of a tax-planning folder with a clip",
  },
} as const;

/**
 * The three planning labels the gold route resolves into, under the spread.
 * Connector segments are flex-basis-0 siblings of the labels, so every
 * segment sets to the same length regardless of label width (ref 03 keeps
 * the route rhythm even).
 */
function RouteStops(): React.JSX.Element {
  return (
    <nav aria-label="Featured planning routes" className="mt-12 lg:mt-14">
      <ul className="flex flex-col gap-5 border-l border-gold/70 pl-6 lg:flex-row lg:items-center lg:gap-5 lg:border-l-0 lg:pl-0">
        {ROUTE_STOPS.map((stop, index) => (
          <Fragment key={stop.href}>
            {index > 0 ? (
              <li
                aria-hidden="true"
                className="hidden h-px min-w-10 flex-1 bg-gold/60 lg:block"
              />
            ) : null}
            <li className="flex items-center">
              <a
                href={stop.href}
                className="group flex min-h-11 items-center gap-3 font-body text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:text-gold-text"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                {stop.label}
                <ArrowRightIcon className="h-4 w-4 text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}

export function FeaturedPath(): React.JSX.Element {
  return (
    <section
      id="featured-path"
      aria-labelledby="services-featured-heading"
      className="svc-seam-top svc-seam-bottom relative overflow-hidden bg-ivory"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2
              id="services-featured-heading"
              className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {FEATURED.headline}
            </h2>
            <p className="mt-6 font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {FEATURED.body}
            </p>
            <img
              src={PHOTOS.folder.src}
              alt={PHOTOS.folder.alt}
              className="mt-9 hidden aspect-[360/192] w-full max-w-sm rounded-[3px] object-cover shadow-[0_20px_44px_-26px_rgba(11,31,58,0.55)] lg:block"
            />
            <div className="mt-9">
              <a href={FEATURED.cta.href} className="va-btn va-btn-navy">
                {FEATURED.cta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* Dominant physician crop; the slot sizes the image, never the
                reverse. object-position trims the source's top matte edge. */}
            <img
              src={PHOTOS.physician.src}
              alt={PHOTOS.physician.alt}
              className="aspect-[3/2] w-full rounded-[3px] object-cover object-[center_58%] shadow-[0_28px_60px_-30px_rgba(11,31,58,0.5)] lg:aspect-[964/520]"
            />
            <RouteStops />
          </div>
        </div>
      </div>
    </section>
  );
}
