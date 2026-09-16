import { ArrowRightIcon } from "@/components/site/icons";
import { routeBySlug } from "@/lib/routes";

const LEDGER = {
  headline: "Compare the paths before you choose.",
  body: "Each destination has its own decision context, data needs, boundaries, and related reading.",
  bottomCta: "Open first related page",
  bottomHref: "/physicians-specialists",
} as const;

const LEDGER_SLUGS = [
  "physicians-specialists",
  "retirement-planning-for-physicians",
  "practice-owner-planning",
  "tax-planning-for-physicians",
  "checkup",
] as const;

const STILL_LIFE = {
  src: "/images/design/physicians/elements/04-topic-ledger-photo.jpg",
  alt: "Notebook, brass pen, and a glass of water on a marble desk",
} as const;

function LedgerRows(): React.JSX.Element {
  return (
    <nav aria-label="Career-stage planning pages">
      <ul className="flex flex-col">
        {LEDGER_SLUGS.map((slug) => {
          const route = routeBySlug(slug);
          return (
            <li key={slug}>
              <a
                href={route.path}
                aria-label={route.navLabel}
                className="group flex min-h-16 items-center gap-4 border-b border-ink/10 py-4 transition-all duration-200 hover:translate-x-1"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="flex min-w-0 flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-[1.35rem] leading-[1.2] font-medium text-ink">
                    {route.path}
                  </span>
                  <span className="font-body text-body-s text-charcoal/80">
                    {route.navLabel}
                  </span>
                </span>
                <ArrowRightIcon className="ml-auto h-4 w-4 shrink-0 text-gold-text opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function TopicLedger(): React.JSX.Element {
  return (
    <section
      id="topic-ledger"
      aria-labelledby="phy-ledger-heading"
      className="phy-seam-top relative overflow-hidden bg-white"
    >
      <div className="va-shell py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2
            id="phy-ledger-heading"
            className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
          >
            {LEDGER.headline}
          </h2>
          <p className="mt-5 font-body text-body-m leading-[1.65] text-charcoal text-pretty">
            {LEDGER.body}
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <LedgerRows />
          {/* Still-life counterweight at the ledger's right edge. */}
          <img
            src={STILL_LIFE.src}
            alt={STILL_LIFE.alt}
            className="hidden w-64 rounded-[3px] object-cover shadow-[0_24px_50px_-28px_rgba(11,31,58,0.5)] lg:block"
          />
        </div>
      </div>
      {/* Navy exit band carries the live first-related-page action. */}
      <div className="phy-seam-bottom relative bg-ink">
        <div className="va-shell">
          <a
            href={LEDGER.bottomHref}
            className="group flex min-h-16 flex-wrap items-center gap-x-4 gap-y-1 py-4 font-body text-body-s font-medium text-ivory transition-colors duration-200 hover:text-gold"
          >
            {LEDGER.bottomCta}
            <ArrowRightIcon className="h-4 w-4 text-gold transition-transform duration-200 group-hover:translate-x-0.5" />
            <span className="text-gold">{LEDGER.bottomHref}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
