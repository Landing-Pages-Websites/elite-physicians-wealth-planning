import { ArrowRightIcon } from "@/components/site/icons";

const FEATURED = {
  headline: "Start where the pressure is clearest.",
  body: "Open the page that matches your practice — the featured physicians path is the broadest starting point, and the surgeon and dentist routes go straight to their own pages.",
} as const;

const MAIN_ROUTE = {
  path: "/physicians-specialists",
  aria: "Open the featured path: financial planning for physicians and specialists",
} as const;

const INSET_ROUTES = [
  {
    path: "/financial-planning-for-surgeons",
    aria: "Financial planning for surgeons",
    img: {
      src: "/images/design/who-we-serve/elements/featured-surgeon-photo.jpg",
      alt: "Surgeons in an operating room beneath a surgical light",
      aspect: "aspect-[356/145]",
    },
  },
  {
    path: "/financial-planning-for-dentists",
    aria: "Financial planning for dentists",
    img: {
      src: "/images/design/who-we-serve/elements/featured-dentist-photo.jpg",
      alt: "Dental clinician working in a bright operatory",
      aspect: "aspect-[146/145] lg:aspect-[146/200]",
    },
  },
] as const;

/** A route chip in the frame's path-label language: live text over ivory. */
function RouteChip({ path, aria }: { path: string; aria: string }): React.JSX.Element {
  return (
    <a
      href={path}
      aria-label={aria}
      className="group inline-flex min-h-11 items-center gap-3 rounded-[3px] border border-gold/70 bg-ivory px-4 py-2.5 font-body text-body-s font-medium text-gold-text transition-colors duration-200 hover:border-gold hover:bg-white"
    >
      {path}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

export function FeaturedPath(): React.JSX.Element {
  return (
    <section
      id="featured-path"
      aria-labelledby="wws-featured-heading"
      className="wws-seam-top wws-seam-bottom relative overflow-hidden bg-ivory"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2
              id="wws-featured-heading"
              className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {FEATURED.headline}
            </h2>
            <span aria-hidden="true" className="mt-7 block h-px w-16 bg-gold" />
            <p className="mt-7 max-w-[40ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {FEATURED.body}
            </p>
          </div>

          {/* The collage: main consultation dominant, two route insets right. */}
          <div className="grid gap-6 lg:col-span-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="relative">
              <img
                src="/images/design/who-we-serve/elements/featured-main-photo.jpg"
                alt="Physician writing notes on a clipboard at a clinic desk"
                className="aspect-[4/3] w-full rounded-[3px] object-cover object-right shadow-[0_28px_60px_-30px_rgba(11,31,58,0.5)] lg:h-full lg:min-h-[420px] lg:object-cover"
              />
              <a
                href={MAIN_ROUTE.path}
                aria-label={MAIN_ROUTE.aria}
                className="group absolute top-5 right-5 inline-flex min-h-11 items-center gap-3 rounded-[3px] bg-ink px-4 py-2.5 font-body text-body-s font-medium text-ivory shadow-[0_16px_36px_-16px_rgba(2,10,22,0.8)] transition-colors duration-200 hover:bg-(--color-ink-hover)"
              >
                {MAIN_ROUTE.path}
                <ArrowRightIcon className="h-4 w-4 text-gold transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 lg:content-between">
              {INSET_ROUTES.map((route) => (
                <div key={route.path} className="flex flex-col gap-3">
                  <img
                    src={route.img.src}
                    alt={route.img.alt}
                    className={`${route.img.aspect} w-full rounded-[3px] object-cover`}
                  />
                  <RouteChip path={route.path} aria={route.aria} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
