import { ArrowRightIcon } from "@/components/site/icons";
import { routeBySlug } from "@/lib/routes";

const LEDGER = {
  headline: "Compare the paths before you choose.",
  body: "Each destination has its own decision context, data needs, boundaries, and related reading.",
  stateNote:
    "Each article below has an overview page open today; the complete piece is published once its manuscript and attribution are approved.",
} as const;

interface LedgerEntry {
  readonly slug: string;
  /** Verified topic category from that article's own section manifest. */
  readonly topic: string;
  /** The manifest marks the first row with its restrained affordance. */
  readonly activeLabel?: string;
}

/** All twelve /insights/* routes, in route-registry order. */
const ENTRIES: readonly LedgerEntry[] = [
  {
    slug: "insights--physician-financial-checkup-seven-areas",
    topic: "Career-Stage Planning",
    activeLabel: "Open first related page",
  },
  { slug: "insights--first-five-years-financial-moves", topic: "Career-Stage Planning" },
  { slug: "insights--w2-1099-practice-income-questions", topic: "Physician Tax Strategy" },
  {
    slug: "insights--cash-balance-defined-benefit-decision-guide",
    topic: "Practice Owner Strategy",
  },
  { slug: "insights--coordinating-cpa-attorney-tpa-advisor", topic: "Career-Stage Planning" },
  { slug: "insights--five-years-from-retirement-checklist", topic: "Retirement & Income" },
  { slug: "insights--disability-insurance-review-overlooked", topic: "Wealth & Risk" },
  { slug: "insights--roth-conversion-timing", topic: "Physician Tax Strategy" },
  { slug: "insights--preparing-for-practice-sale", topic: "Practice Owner Strategy" },
  { slug: "insights--beneficiaries-trusts-ownership-checklist", topic: "Estate & Family" },
  { slug: "insights--charitable-giving-strategies", topic: "Physician Tax Strategy" },
  { slug: "insights--long-term-care-survivor-planning", topic: "Estate & Family" },
] as const;

function LedgerRow({ entry }: { entry: LedgerEntry }): React.JSX.Element {
  const route = routeBySlug(entry.slug);
  return (
    <li className="relative pl-7">
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />
      <a
        href={route.path}
        className="group grid min-h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2.5 border-t border-ink/10 py-3.5 transition-colors duration-200 sm:grid-cols-[minmax(0,1fr)_auto_auto]"
      >
        <span className="min-w-0">
          <span className="block font-display text-[1.3rem] leading-[1.2] font-medium text-ink transition-colors duration-200 group-hover:text-gold-text">
            {route.navLabel}
          </span>
          <span className="mt-0.5 block truncate font-body text-[12px] text-charcoal/70">
            {route.path}
          </span>
        </span>
        <span className="hidden font-body text-[11px] font-semibold tracking-[0.08em] text-gold-text uppercase sm:block">
          {entry.topic}
        </span>
        {entry.activeLabel ? (
          /* The chip drops below the title at mobile widths (col-span-full)
             so the title never sets one word per line beside it. */
          <span className="col-span-full inline-flex items-center gap-2 justify-self-start rounded-[3px] border border-gold px-3 py-1.5 font-body text-[11px] font-semibold tracking-[0.06em] text-gold-text uppercase sm:col-span-1 sm:justify-self-auto">
            {entry.activeLabel}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        ) : (
          <ArrowRightIcon className="h-4 w-4 text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        )}
      </a>
    </li>
  );
}

/**
 * 04-content-state-ledger — the quiet white route ledger: every one of the
 * twelve article destinations as a rule-separated row on one gold spine (no
 * card grid), with the truthful shared publication state stated once.
 */
export function ContentStateLedger(): React.JSX.Element {
  return (
    <section
      id="content-state-ledger"
      aria-labelledby="insights-ledger-heading"
      className="ins-seam-top ins-seam-bottom relative overflow-hidden bg-white"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="insights-ledger-heading"
              className="max-w-[14ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {LEDGER.headline}
            </h2>
            <p className="mt-6 max-w-[38ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {LEDGER.body}
            </p>
            <p className="mt-8 max-w-[40ch] border-l-2 border-gold/70 pl-4 font-body text-body-s leading-[1.6] text-charcoal/80">
              {LEDGER.stateNote}
            </p>
          </div>

          <nav aria-label="Article library" className="lg:col-span-8">
            <ul className="ins-spine flex flex-col">
              {ENTRIES.map((entry) => (
                <LedgerRow key={entry.slug} entry={entry} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
