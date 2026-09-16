import { AUDIENCE_ROUTES } from "./audience-routes";

const RAIL_HEADLINE = "Browse by decision type.";

const EDGE_CROPS = {
  surgeons: {
    src: "/images/design/who-we-serve/elements/taxonomy-surgeons-photo.jpg",
    alt: "Surgeons working under operating-room lights",
  },
  planner: {
    src: "/images/design/who-we-serve/elements/taxonomy-planner-photo.jpg",
    alt: "Hand writing planning notes beside a stethoscope",
  },
  executive: {
    src: "/images/design/who-we-serve/elements/taxonomy-executive-photo.jpg",
    alt: "Executive signing a document at a conference table",
  },
} as const;

export function TaxonomyRail(): React.JSX.Element {
  return (
    <section
      id="taxonomy-rail"
      aria-labelledby="wws-rail-heading"
      className="wws-strip wws-seam-top wws-seam-bottom relative overflow-hidden"
    >
      {/* Three subordinate edge-cropped photographs frame the live taxonomy. */}
      <img
        src={EDGE_CROPS.surgeons.src}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 hidden h-24 w-80 rounded-bl-[6px] object-cover xl:block"
      />
      <img
        src={EDGE_CROPS.planner.src}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden h-40 w-32 rounded-tr-[6px] object-cover xl:block"
      />
      <img
        src={EDGE_CROPS.executive.src}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 hidden h-36 w-28 rounded-tl-[6px] object-cover xl:block"
      />

      <div className="va-shell relative z-10 py-16 lg:py-24">
        <h2
          id="wws-rail-heading"
          className="font-display text-display-m leading-[1.15] font-medium tracking-[-0.01em] text-ink"
        >
          {RAIL_HEADLINE}
        </h2>
        <nav aria-label="Audience decision types" className="mt-9 lg:mt-12">
          {/* Desktop: labels hang from one gold rail; mobile: ruled rows. */}
          <ul className="flex max-w-xl flex-col divide-y divide-ink/10 lg:max-w-none lg:flex-row lg:justify-between lg:gap-8 lg:divide-y-0 lg:border-t lg:border-gold/70 lg:pt-0">
            {AUDIENCE_ROUTES.map((route) => (
              <li key={route.href} className="lg:relative lg:pt-6">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-3 hidden h-4 w-px bg-gold/70 lg:block"
                />
                <a
                  href={route.href}
                  className="flex min-h-11 items-center py-2 font-body text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:text-gold-text lg:px-3"
                >
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
