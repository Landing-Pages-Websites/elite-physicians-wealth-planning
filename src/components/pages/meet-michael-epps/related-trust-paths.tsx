import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { routeBySlug } from "@/lib/routes";

const HEADLINE = "See the process behind the introduction.";
const BODY =
  "An introduction is only a starting point. The detail lives in the process, the firm, and a direct conversation.";
const TRUST_PATHS = [
  { slug: "our-process", label: "See the process" },
  { slug: "about", label: "About the firm" },
  { slug: "contact", label: "Contact the firm" },
] as const;

/**
 * 06-related-trust-paths. Deep-navy close: heading and short framing line
 * over a vertical gold rail of three dot nodes — path string plus link
 * label per row — with the clean half of the study photograph as the
 * low-contrast right environment. The page-local line ends here at a dot.
 */
export function RelatedTrustPaths(): React.JSX.Element {
  return (
    <section
      id="related-trust-paths"
      aria-labelledby="related-trust-paths-heading"
      data-dark-band
      className="mme-paths relative overflow-hidden text-ivory"
    >
      <div className="mme-paths-media">
        <Image
          src="/images/design/meet-michael-epps/elements/related-paths-office.jpg"
          alt=""
          aria-hidden="true"
          width={636}
          height={864}
        />
      </div>
      <div className="va-shell relative z-10 py-20 lg:py-28">
        <span aria-hidden="true" className="mme-seam mme-seam-close" />
        <h2
          id="related-trust-paths-heading"
          className="va-reveal max-w-[18ch] font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
        >
          {HEADLINE}
        </h2>
        <p className="mt-6 max-w-[42ch] font-body text-body-m leading-[1.6] text-mist/75">
          {BODY}
        </p>
        <nav aria-label="Related routes" className="mt-14 max-w-xl">
          <ol className="mme-rail">
            {TRUST_PATHS.map(({ slug, label }) => {
              const route = routeBySlug(slug);
              return (
                <li key={slug} className="flex items-start gap-5 pl-0">
                  <span aria-hidden="true" className="mme-rail-dot" />
                  <span className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="font-body text-body-s tracking-[0.04em] text-mist/60">
                      {route.path}
                    </span>
                    <a href={route.path} className="va-link text-ivory">
                      {label}
                      <ArrowRightIcon className="h-3.5 w-3.5 text-gold" />
                    </a>
                  </span>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
