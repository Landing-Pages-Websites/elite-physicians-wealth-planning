import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const HEADLINE = "What your first conversation looks like.";
const BODY =
  "The first conversation is not a product pitch. It is a strategy conversation designed to understand your goals, current planning concerns, and whether the Blueprint process is appropriate.";
const CTA = "Schedule a Strategy Call";

/**
 * 05-first-conversation. Warm ivory band: the consultation-table photograph
 * fills the left column without a card frame — the image IS the concept —
 * while the right column sets expectations and carries the page's primary
 * conversion action.
 */
export function FirstConversation(): React.JSX.Element {
  return (
    <section
      id="first-conversation"
      aria-labelledby="first-conversation-heading"
      className="mme-conversation relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-24">
        <span aria-hidden="true" className="mme-seam mme-seam-top" />
        <span aria-hidden="true" className="mme-seam mme-seam-bottom" />
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="mme-table lg:col-span-5">
            <Image
              src="/images/design/meet-michael-epps/elements/first-conversation-table.jpg"
              alt=""
              aria-hidden="true"
              width={640}
              height={864}
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2
              id="first-conversation-heading"
              className="va-reveal max-w-[18ch] font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink"
            >
              {HEADLINE}
            </h2>
            <span aria-hidden="true" className="mt-7 block h-px w-20 bg-gold" />
            <p className="mt-6 max-w-[46ch] font-body text-body-m leading-[1.65] text-charcoal">
              {BODY}
            </p>
            <a
              href={LINKS.scheduleOnsite}
              className="va-btn va-btn-gold mt-9 max-sm:w-full max-sm:justify-center"
            >
              {CTA}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
