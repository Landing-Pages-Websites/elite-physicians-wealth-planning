import { ArrowRightIcon } from "@/components/site/icons";

const LEDGER = {
  headline: "Each service connects to the others.",
  body: "These services are connected planning decisions, not isolated products — start with the one closest to your current question.",
} as const;

const THUMB_DIR = "/images/design/services/elements";

interface LedgerRow {
  readonly label: string;
  readonly href: string;
  readonly thumb: string;
  readonly thumbAlt: string;
  /** The frame marks one row with its restrained active-state affordance. */
  readonly activeLabel?: string;
}

const ROWS: readonly LedgerRow[] = [
  {
    label: "Tax Planning",
    href: "/tax-planning-for-physicians",
    thumb: `${THUMB_DIR}/04-topic-ledger-tax-thumbnail.jpg`,
    thumbAlt: "Stethoscope resting beside stacked documents",
  },
  {
    label: "Wealth Management",
    href: "/wealth-management-for-physicians",
    thumb: `${THUMB_DIR}/04-topic-ledger-wealth-thumbnail.jpg`,
    thumbAlt: "Pen resting on a dark portfolio folder",
    activeLabel: "Open wealth management",
  },
  {
    label: "Retirement Planning",
    href: "/retirement-planning-for-physicians",
    thumb: `${THUMB_DIR}/04-topic-ledger-retirement-thumbnail.jpg`,
    thumbAlt: "Quiet consultation chair beside an office desk",
  },
  {
    label: "Practice Owner Planning",
    href: "/practice-owner-planning",
    thumb: `${THUMB_DIR}/04-topic-ledger-practice-thumbnail.jpg`,
    thumbAlt: "Clinical desktop with a stethoscope and folders",
  },
  {
    label: "Legacy & Estate Planning",
    href: "/legacy-estate-planning",
    thumb: `${THUMB_DIR}/04-topic-ledger-legacy-thumbnail.jpg`,
    thumbAlt: "Estate-document folder with a fountain pen",
  },
] as const;

function LedgerRowLink({ row, index }: { row: LedgerRow; index: number }): React.JSX.Element {
  const plate = index % 2 === 0 ? "bg-(--color-ledger-warm)" : "bg-(--color-ledger-cool)";
  return (
    <li className="relative pl-7 lg:pl-10">
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />
      <a
        href={row.href}
        className={`group grid min-h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[3px] border border-ink/8 px-5 py-3.5 transition-all duration-200 hover:translate-x-1 hover:border-gold/60 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:px-6 ${plate}`}
      >
        <span className="font-display text-[1.4rem] leading-[1.2] font-medium text-ink">
          {row.label}
        </span>
        {row.activeLabel ? (
          <span className="hidden items-center gap-2 rounded-[3px] border border-gold px-3.5 py-1.5 font-body text-[12px] font-semibold tracking-[0.06em] text-gold-text uppercase sm:inline-flex">
            {row.activeLabel}
          </span>
        ) : (
          <ArrowRightIcon className="hidden h-4 w-4 text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block" />
        )}
        <img
          src={row.thumb}
          alt={row.thumbAlt}
          className="hidden h-14 w-28 rounded-[2px] object-cover sm:block"
        />
      </a>
    </li>
  );
}

export function TopicLedger(): React.JSX.Element {
  return (
    <section
      id="topic-ledger"
      aria-labelledby="services-ledger-heading"
      className="svc-seam-top relative overflow-hidden bg-white"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Conspicuous quiet left field, as the frame keeps it. */}
          <div className="lg:col-span-4">
            <h2
              id="services-ledger-heading"
              className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {LEDGER.headline}
            </h2>
            <p className="mt-6 max-w-[38ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {LEDGER.body}
            </p>
          </div>
          <nav aria-label="Service pages" className="lg:col-span-8">
            <ul className="svc-spine flex flex-col gap-4">
              {ROWS.map((row, index) => (
                <LedgerRowLink key={row.href} row={row} index={index} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* Navy exit band: the ledger resolves toward the closing field. */}
      <div aria-hidden="true" className="svc-seam-bottom relative h-16 bg-ink" />
    </section>
  );
}
