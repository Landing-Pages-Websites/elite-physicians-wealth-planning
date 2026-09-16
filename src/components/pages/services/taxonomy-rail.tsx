const RAIL_HEADLINE = "Browse by planning discipline.";

const DISCIPLINES = [
  { label: "Tax Strategy", href: "/tax-planning-for-physicians" },
  { label: "Wealth Management", href: "/wealth-management-for-physicians" },
  { label: "Retirement Strategy", href: "/retirement-planning-for-physicians" },
  { label: "Practice & Business Planning", href: "/practice-owner-planning" },
  { label: "Legacy Planning", href: "/legacy-estate-planning" },
] as const;

const EDGE_CROPS = {
  coat: {
    src: "/images/design/services/elements/02-taxonomy-rail-physician-coat.jpg",
    alt: "Folded physician coat resting on a desk edge",
  },
  corridor: {
    src: "/images/design/services/elements/02-taxonomy-rail-clinic-corridor.jpg",
    alt: "Soft-focus clinic corridor",
  },
} as const;

export function TaxonomyRail(): React.JSX.Element {
  return (
    <section
      id="taxonomy-rail"
      aria-labelledby="services-rail-heading"
      className="svc-rail svc-seam-top svc-seam-bottom relative overflow-hidden"
    >
      {/* Subordinate photographic edge cues; the live taxonomy owns the center. */}
      <img
        src={EDGE_CROPS.coat.src}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden h-36 w-72 rounded-tr-[3px] object-cover object-top shadow-[0_18px_40px_-24px_rgba(11,31,58,0.5)] xl:block"
      />
      <img
        src={EDGE_CROPS.corridor.src}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 hidden h-32 w-56 rounded-bl-[3px] object-cover xl:block"
      />

      <div className="va-shell relative z-10 py-16 lg:py-24">
        <h2
          id="services-rail-heading"
          className="text-center font-display text-display-m leading-[1.15] font-medium tracking-[-0.01em] text-ink"
        >
          {RAIL_HEADLINE}
        </h2>
        <nav aria-label="Planning disciplines" className="mt-10 lg:mt-12">
          <ul className="mx-auto flex max-w-xl flex-col divide-y divide-ink/10 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-7 lg:divide-y-0">
            {DISCIPLINES.map((d, index) => (
              <li key={d.href} className="flex items-center lg:gap-7">
                <a
                  href={d.href}
                  className="group flex min-h-11 w-full items-center justify-between gap-4 py-2 font-body text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:text-gold-text lg:w-auto lg:justify-start"
                >
                  {d.label}
                  <span
                    aria-hidden="true"
                    className="block h-px w-5 bg-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:hidden"
                  />
                </a>
                {index < DISCIPLINES.length - 1 ? (
                  <span aria-hidden="true" className="hidden h-px w-8 bg-gold/70 lg:block" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
