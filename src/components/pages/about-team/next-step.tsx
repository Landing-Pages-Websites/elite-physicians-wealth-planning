import Image from "next/image";
import { routeBySlug } from "@/lib/routes";

const HEADLINE = "Use verified routes while bios are completed.";
const BODY =
  "While introductions are being completed, these pages carry the verified detail: the founder's profile, the planning process, and a direct line to the firm.";
const ROUTE_STOPS = [
  { slug: "meet-michael-epps", label: "Meet Michael" },
  { slug: "our-process", label: "Our Process" },
  { slug: "contact", label: "Contact the firm" },
] as const;

/** Check mark matching the site's stroke icon family. */
function CheckIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

/**
 * 05-next-step. Navy route close: one continuous gold line through three
 * check-nodes — Meet Michael, Our Process, Contact the firm — each a real
 * link with its literal path beneath. Shelf and desk photography holds the
 * edges on desktop; the page-local gold line ends here at a dot.
 */
export function TeamNextStep(): React.JSX.Element {
  return (
    <section
      id="next-step"
      aria-labelledby="team-next-step-heading"
      data-dark-band
      className="tem-next relative overflow-hidden text-ivory"
    >
      <div className="tem-next-shelf" aria-hidden="true">
        <Image src="/images/design/about--team/media/next-step-shelf-upper.jpg" alt="" width={212} height={170} />
        <Image src="/images/design/about--team/media/next-step-books.jpg" alt="" width={198} height={158} />
        <Image src="/images/design/about--team/media/next-step-shelf-lower.jpg" alt="" width={205} height={136} />
      </div>
      <div className="tem-next-media">
        <Image
          src="/images/design/about--team/media/next-step-office-right.jpg"
          alt=""
          aria-hidden="true"
          width={376}
          height={690}
        />
      </div>
      <div className="va-shell relative z-10 py-20 lg:py-28 xl:pl-[16%]">
        <span aria-hidden="true" className="tem-seam tem-seam-close xl:left-[16.5%]" />
        <h2
          id="team-next-step-heading"
          className="va-reveal max-w-[20ch] font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
        >
          {HEADLINE}
        </h2>
        <p className="mt-6 max-w-[46ch] font-body text-body-m leading-[1.6] text-mist/75">
          {BODY}
        </p>
        <nav aria-label="Verified routes" className="mt-14 lg:max-w-3xl">
          <ol className="tem-path">
            {ROUTE_STOPS.map(({ slug, label }) => {
              const route = routeBySlug(slug);
              return (
                <li key={slug}>
                  <a href={route.path} className="tem-node group">
                    <span className="tem-node-ring">
                      <CheckIcon />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-display text-lg leading-none font-medium text-ivory group-hover:text-gold-hover">
                        {label}
                      </span>
                      <span className="font-body text-body-s text-mist/65">
                        {route.path}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
