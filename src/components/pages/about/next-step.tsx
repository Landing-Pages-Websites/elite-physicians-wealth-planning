import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";
import { routeBySlug } from "@/lib/routes";

const HEADLINE = "See how the coordination works.";
const PATH_SLUGS = ["our-process", "services", "schedule"] as const;
const PRIMARY_CTA = "Schedule a Strategy Call";
const SECONDARY_CTA = "See the process";

/**
 * 06-next-step. Deep-navy close: white serif headline, a continuous gold
 * route through three circle-arrow nodes labeled with their literal paths,
 * then the strongest CTA on the page beside the secondary process link. The
 * clean half of the closing-office photograph rests on the right edge and
 * the page-local gold line ends inside this section at a dot.
 */
export function NextStep(): React.JSX.Element {
  return (
    <section
      id="next-step"
      aria-labelledby="next-step-heading"
      data-dark-band
      className="abt-next relative overflow-hidden text-ivory"
    >
      <div className="abt-next-media">
        <Image
          src="/images/design/about/elements/next-step-office.jpg"
          alt=""
          aria-hidden="true"
          width={496}
          height={864}
        />
      </div>
      <div className="va-shell relative z-10 py-20 lg:py-28">
        <span aria-hidden="true" className="abt-seam abt-seam-close" />
        <h2
          id="next-step-heading"
          className="va-reveal max-w-[16ch] font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
        >
          {HEADLINE}
        </h2>
        <nav aria-label="Coordination routes" className="mt-14 lg:max-w-3xl">
          <ol className="abt-path">
            {PATH_SLUGS.map((slug) => {
              const route = routeBySlug(slug);
              return (
                <li key={slug}>
                  <a href={route.path} className="abt-node group">
                    <span className="abt-node-ring">
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-display text-lg leading-none font-medium text-ivory group-hover:text-gold-hover">
                        {route.path}
                      </span>
                      <span className="font-body text-body-s text-mist/65">
                        {route.navLabel}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-9">
          <a
            href={LINKS.scheduleOnsite}
            className="va-btn va-btn-gold max-sm:w-full max-sm:justify-center"
          >
            {PRIMARY_CTA}
          </a>
          <a href={LINKS.processOnsite} className="va-link text-mist">
            {SECONDARY_CTA}
            <ArrowRightIcon className="h-3.5 w-3.5 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
