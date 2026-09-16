import { ArrowRightIcon } from "@/components/site/icons";

/** Manifest copy for 04-content-state-ledger — content contract, do not edit. */
const LEDGER = {
  headline: "Compare the paths before you choose.",
  body: "Each destination has its own decision context, data needs, boundaries, and related reading.",
  firstAction: "Open first related page",
} as const;

interface LedgerRow {
  readonly href: string;
  /** res-tab slice class for this row's editorial tab. */
  readonly tab: string;
}

/** Manifest link order is the contract. */
const ROWS: readonly LedgerRow[] = [
  { href: "/physician-tax-retirement-guide", tab: "res-tab-1" },
  { href: "/insights", tab: "res-tab-2" },
  { href: "/checkup", tab: "res-tab-3" },
  { href: "/services", tab: "res-tab-4" },
  { href: "/schedule", tab: "res-tab-5" },
] as const;

const TAB_RAIL_SRC =
  "/images/design/resources/elements/04-content-state-ledger-photo.jpg";

function Row({ row, first }: { row: LedgerRow; first: boolean }): React.JSX.Element {
  return (
    <li className="border-b border-charcoal/15">
      <a
        href={row.href}
        className="res-ledger-row flex min-h-16 items-center gap-4 px-2 py-3 sm:gap-6 sm:px-4"
      >
        <span className={`res-tab hidden w-24 shrink-0 sm:block ${row.tab}`}>
          <img src={TAB_RAIL_SRC} alt="" aria-hidden="true" width={218} height={520} />
        </span>
        <span className="font-body text-body-m font-semibold tracking-[0.01em] text-ink">
          {row.href}
        </span>
        <span aria-hidden="true" className="res-leader h-px min-w-6 flex-1" />
        {first ? (
          <span className="hidden items-center gap-2 font-body text-body-s font-medium text-gold-text sm:flex">
            {LEDGER.firstAction}
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        ) : (
          <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold-text" />
        )}
        {first ? (
          <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold-text sm:hidden" />
        ) : null}
      </a>
    </li>
  );
}

/** The navy base band: the gold line resolves into the final choice field. */
function CloseSeam(): React.JSX.Element {
  return (
    <div className="relative mt-16 h-20 overflow-hidden bg-ink">
      <svg
        viewBox="0 0 1536 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M0 78 H640 Q704 78 736 40 T832 2 H1536"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          opacity="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/**
 * 04-content-state-ledger. Quiet white route ledger — no card grid: five
 * rule-separated rows, each a live link to its real destination, with a
 * sliced editorial tab, dot leader and gold action; the first row carries the
 * labelled "open" action from the manifest.
 */
export function ContentStateLedger(): React.JSX.Element {
  return (
    <section
      id="content-state-ledger"
      aria-labelledby="content-state-ledger-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="va-shell pt-16 lg:pt-24">
        <div className="lg:pl-28">
          <h2
            id="content-state-ledger-heading"
            className="res-reveal max-w-[22ch] font-display text-display-m leading-[1.1] font-medium tracking-[-0.01em] text-ink"
          >
            {LEDGER.headline}
          </h2>
          <p className="mt-4 max-w-[56ch] font-body text-body-m leading-[1.62] text-charcoal">
            {LEDGER.body}
          </p>
        </div>
        <ul className="mt-10 border-t border-charcoal/15">
          {ROWS.map((row, index) => (
            <Row key={row.href} row={row} first={index === 0} />
          ))}
        </ul>
      </div>
      <CloseSeam />
    </section>
  );
}
