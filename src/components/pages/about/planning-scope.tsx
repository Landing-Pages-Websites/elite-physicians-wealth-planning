import Image from "next/image";
import { ArrowRightIcon } from "@/components/site/icons";

const HEADLINE = "Five disciplines, one planning relationship.";
const DISCIPLINES = [
  "Tax strategy coordination",
  "Wealth management",
  "Retirement strategy",
  "Practice and business planning",
  "Legacy planning coordination",
] as const;
const BOUNDARY =
  "Educational information only. Not individualized tax, legal, or investment advice.";
const CTA = "Explore services";

/**
 * 03-planning-scope. White typographic ledger: the tall still-life bleeds
 * flush to the left, top, and bottom edges (declared edge-touching media);
 * the right column lists the five disciplines in fixed order behind gold
 * arrow marks, then the educational boundary and the services link.
 */
export function PlanningScope(): React.JSX.Element {
  return (
    <section
      id="planning-scope"
      aria-labelledby="planning-scope-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="va-shell relative py-20 lg:py-24">
        <span aria-hidden="true" className="abt-seam abt-seam-top" />
        <span aria-hidden="true" className="abt-seam abt-seam-bottom" />
        {/* va-shell's unlayered padding-inline outranks Tailwind's pl-*
            utilities, so the image clearance is a margin on this inner
            wrapper, not padding on the shell. */}
        <div className="relative z-10 lg:ml-[calc(27%+2.5rem)]">
        <h2
          id="planning-scope-heading"
          className="va-reveal font-display text-display-m leading-[1.15] font-medium tracking-[-0.01em] text-ink"
        >
          {HEADLINE}
        </h2>
        <div className="abt-scope-media mt-10 lg:hidden">
          <Image
            src="/images/design/about/elements/planning-scope-books.jpg"
            alt=""
            aria-hidden="true"
            width={430}
            height={760}
          />
        </div>
        <ul className="mt-10 max-w-2xl">
          {DISCIPLINES.map((discipline) => (
            <li
              key={discipline}
              className="flex items-center gap-4 border-b border-ink/10 py-5 first:border-t"
            >
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold" />
              <span className="font-display text-[1.35rem] leading-snug font-medium text-ink">
                {discipline}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl font-body text-body-s leading-[1.5] text-charcoal/80">
          {BOUNDARY}
        </p>
        <a href="/services" className="va-link mt-7 text-gold-text">
          {CTA}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </a>
        </div>
      </div>
      <div className="abt-scope-media max-lg:hidden">
        <Image
          src="/images/design/about/elements/planning-scope-books.jpg"
          alt=""
          aria-hidden="true"
          width={430}
          height={760}
        />
      </div>
    </section>
  );
}
