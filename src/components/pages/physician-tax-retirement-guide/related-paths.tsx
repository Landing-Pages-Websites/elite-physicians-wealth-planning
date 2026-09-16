import { routeBySlug } from "@/lib/routes";

const PATHS_HEADLINE = "Explore verified planning pages while the guide is completed.";

interface RelatedPath {
  label: string;
  slug: string;
}

/** The manifest's four routes, labelled in its "Explore tax planning" voice. */
const RELATED_PATHS: readonly RelatedPath[] = [
  { label: "Explore tax planning", slug: "tax-planning-for-physicians" },
  { label: "Explore retirement planning", slug: "retirement-planning-for-physicians" },
  { label: "Visit the resource center", slug: "resources" },
  { label: "Schedule a strategy call", slug: "schedule" },
];

function PathLink({
  path,
  align,
}: {
  path: RelatedPath;
  align: "left" | "right";
}): React.JSX.Element {
  const route = routeBySlug(path.slug);
  return (
    <a
      href={route.path}
      className={`group inline-block ${align === "right" ? "text-right" : "text-left"}`}
    >
      <span className="block font-display text-display-s font-medium text-ivory-bright underline-offset-[6px] transition-colors duration-200 group-hover:text-gold group-hover:underline">
        {path.label}
      </span>
      <span className="mt-1 block font-body text-body-s tracking-[0.04em] text-gold/85">
        {route.path}
      </span>
    </a>
  );
}

/**
 * 06-related-paths — the dark close: one vertical gold route with the four
 * verified destinations alternating across it, book-stack photographs held to
 * the section edges, and the page-local line ending at its final node.
 */
export function RelatedPaths(): React.JSX.Element {
  return (
    <section
      id="related-paths"
      aria-labelledby="related-paths-heading"
      className="ptg-paths relative overflow-hidden text-ivory"
    >
      {/* Edge rails: book stacks, cropped clean of any baked labels. */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-[26%] lg:block">
        <img
          src="/images/design/physician-tax-retirement-guide/media/related-paths-left-books.jpg"
          alt=""
          aria-hidden="true"
          width={530}
          height={434}
          className="h-auto w-full"
        />
        <div className="ptg-paths-veil-left absolute inset-0" />
      </div>
      <div className="pointer-events-none absolute top-1/3 right-0 hidden w-[13%] lg:block">
        <img
          src="/images/design/physician-tax-retirement-guide/media/related-paths-right-books.jpg"
          alt=""
          aria-hidden="true"
          width={256}
          height={364}
          className="h-auto w-full"
        />
        <div className="ptg-paths-veil-right absolute inset-0" />
      </div>

      <span aria-hidden="true" className="ptg-seam top-0 h-12" />
      <div className="relative z-10 va-shell py-16 lg:py-24">
        <h2
          id="related-paths-heading"
          className="mx-auto max-w-[26ch] text-center text-display-m font-display leading-[1.14] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
        >
          {PATHS_HEADLINE}
        </h2>

        {/* Desktop: routes alternate across the central gold spine. */}
        <div className="relative mx-auto mt-14 hidden max-w-3xl lg:block">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-gold/70"
          />
          <ul className="relative grid list-none gap-2">
            {RELATED_PATHS.map((path, index) => {
              const onLeft = index % 2 === 0;
              return (
                <li key={path.slug} className="relative grid grid-cols-2 py-4">
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
                  />
                  <div className={`${onLeft ? "pr-12 text-right" : "col-start-2 pl-12"}`}>
                    <PathLink path={path} align={onLeft ? "right" : "left"} />
                  </div>
                </li>
              );
            })}
          </ul>
          {/* The page-local line ends here, inside the section. */}
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold"
          />
        </div>

        {/* Mobile: one left-running route in the same order. */}
        <ul className="relative mx-auto mt-10 grid max-w-sm list-none gap-7 border-l-[1.5px] border-gold/70 pl-6 lg:hidden">
          {RELATED_PATHS.map((path) => (
            <li key={path.slug}>
              <PathLink path={path} align="left" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
