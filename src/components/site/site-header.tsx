import Link from "next/link";
import { BRAND } from "@/lib/content";

/**
 * NEW UNAPPROVED SURFACE. The approved mockup has no navigation — its scroll
 * starts at the hero and ends at the closing section. A multi-page site needs
 * one, so this is derived from the approved design language rather than
 * imported from a generic template.
 *
 * The wordmark here is LIFTED from the hero, not duplicated: one-plan.tsx used
 * to render this exact lockup as its first child, and hoisting it while leaving
 * the original in place would stack two wordmarks. The header is `fixed` rather
 * than `sticky` on purpose — sticky occupies flow and would push the hero down,
 * breaking the composition_map fold requirement that brand, headline, actions,
 * portrait card and proof row stay visible together within 1536x864.
 *
 * Nav targets are on-page anchors because those are the destinations that exist
 * today. They become /our-process, /who-we-serve and /meet-michael-epps — the
 * paths contracted in section_manifest functional_elements — when those pages
 * ship. Never point navigation at a route that 404s.
 */
const NAV = [
  { href: "/consult-ledger#separate-rooms", label: "The coordination gap" },
  { href: "/consult-ledger#blueprint-rounds", label: "The Blueprint" },
  { href: "/consult-ledger#white-coat-paths", label: "Who we serve" },
  { href: "/consult-ledger#accountable-planner", label: "Meet Michael" },
] as const;

function Wordmark(): React.JSX.Element {
  return (
    <Link
      href="/"
      className="flex shrink-0 flex-col gap-0.5 rounded-sm transition-opacity duration-200 hover:opacity-90"
    >
      <span className="font-display text-xl font-medium whitespace-nowrap text-white sm:text-2xl lg:text-[27px]">
        {BRAND.name}
        <span className="align-super text-[0.6em]">™</span>
      </span>
      <span className="hidden font-body text-[10px] font-semibold tracking-[0.26em] whitespace-nowrap text-gold uppercase sm:block">
        {BRAND.poweredBy}
      </span>
    </Link>
  );
}

export function SiteHeader(): React.JSX.Element {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex items-center bg-ink/95 backdrop-blur-sm"
      style={{ minHeight: "var(--header-h)" }}
    >
      <a href="#main" className="skip-link font-body text-sm">
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-6 py-2 sm:px-10 lg:px-14">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[13px] text-mist/80 underline-offset-8 transition-colors duration-200 hover:text-gold hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/consult-ledger#form"
            className="hidden min-h-11 items-center rounded-sm bg-gold px-5 font-body text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-gold/90 sm:inline-flex"
          >
            Schedule a strategy call
          </Link>

          {/* Popover API, not <details>. This header lives in the persistent
              layout, so a <details open> attribute survives same-page hash
              navigation and the panel stays sitting over the destination.
              A popover light-dismisses on outside click and on Escape, and
              closes on navigation — still zero client JS. */}
          <button
            type="button"
            popoverTarget="site-menu"
            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-sm border border-mist/45 px-3 font-body text-[12px] text-mist xl:hidden"
          >
            Menu
          </button>
          {/* `flex` must NOT be unconditional here: display:flex overrides the
              UA rule [popover]:not(:popover-open){display:none}, which left this
              panel permanently open over the page at every viewport. Hidden by
              default; flex only while the popover is genuinely open. */}
          <div
            id="site-menu"
            popover="auto"
            className="hidden w-64 flex-col gap-1 rounded-sm border border-mist/15 bg-ink p-3 text-mist shadow-xl backdrop:bg-ink/40 [inset-block-start:var(--header-h)] [inset-inline-end:1rem] [inset-inline-start:auto] [margin:0] [position:fixed] [&:popover-open]:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-3 font-body text-sm text-mist/85 transition-colors duration-200 hover:bg-white/5 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consult-ledger#form"
              className="mt-1 rounded-sm bg-gold px-3 py-3 text-center font-body text-sm font-semibold text-ink"
            >
              Schedule a strategy call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
