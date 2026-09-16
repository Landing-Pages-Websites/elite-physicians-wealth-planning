import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS, PORTRAIT } from "@/lib/content";

const HEADLINE = "Verified leadership anchor.";
const BODY =
  "Michael A. Epps, ChFC, RICP is the verified planner profile published today.";
const CTA = "Read Michael's full bio";

/**
 * 02-verified-leadership. Michael is the only named person on this page,
 * shown via the approved supplied portrait in a gold-edged plate. The copy
 * names him with the verified designations only and routes to the full
 * profile, path string beneath the link as the frame draws it.
 */
export function VerifiedLeadership(): React.JSX.Element {
  return (
    <section
      id="verified-leadership"
      aria-labelledby="verified-leadership-heading"
      className="tem-leadership relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-28">
        <span aria-hidden="true" className="tem-seam tem-seam-top" />
        <span aria-hidden="true" className="tem-seam tem-seam-bottom" />
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="tem-leadership-plate mx-auto w-full max-w-[19rem] p-3 lg:col-span-4 lg:mx-0 lg:max-w-[22rem]">
            <div className="relative aspect-[485/640] overflow-hidden">
              <Image
                src={PORTRAIT.src}
                alt={PORTRAIT.alt}
                fill
                sizes="(min-width: 1024px) 352px, 304px"
                className="object-cover"
              />
            </div>
          </figure>
          <div className="lg:col-span-6 lg:col-start-6">
            <h2
              id="verified-leadership-heading"
              className="va-reveal font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-ink"
            >
              {HEADLINE}
            </h2>
            <span aria-hidden="true" className="mt-7 block h-px w-20 bg-gold" />
            <p className="mt-6 max-w-[46ch] font-body text-body-m leading-[1.65] text-charcoal">
              {BODY}
            </p>
            <a href={LINKS.meetMichaelOnsite} className="va-link mt-8 text-ink">
              {CTA}
              <ArrowRightIcon className="h-3.5 w-3.5 text-gold-text" />
            </a>
            <p className="mt-3 font-body text-body-s tracking-[0.04em] text-charcoal/60">
              {LINKS.meetMichaelOnsite}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
