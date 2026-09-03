import type { Metadata } from "next";
import Link from "next/link";
import { HERO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Choose a direction",
  description:
    "Both approved homepage directions for Elite Physicians Wealth Planning, built in full: The Consult Ledger and The Decision Atlas.",
  alternates: { canonical: "/" },
};

/**
 * Both directions live at the root so they can be compared side by side.
 *
 * This is a review surface, not a production homepage — when a direction is
 * finally chosen, its page component moves back to this file and this chooser
 * is deleted. Deliberately quiet: it uses the shared scale, shell and button
 * system and adds no new design language of its own, so nothing here competes
 * with the two pages it is presenting.
 */
const DIRECTIONS = [
  {
    href: "/consult-ledger",
    name: "The Consult Ledger",
    note: "Deep navy and warm ivory, Cormorant display, one continuous gold coordination route travelling from the hero to the closing decision.",
    ground: "bg-ink text-ivory",
    rule: "bg-gold",
    meta: "text-mist/70",
  },
  {
    href: "/decision-atlas",
    name: "The Decision Atlas",
    note: "Bright clinical surfaces, Inter-led declarations, navy rails and calibration ticks, topographic islands and small gold decision points.",
    ground: "bg-white text-ink ring-1 ring-ink/10",
    rule: "bg-ink",
    meta: "text-charcoal/70",
  },
] as const;

export default function ChooserPage(): React.JSX.Element {
  return (
    <main id="main" className="bg-ivory">
      <div
        className="va-shell flex min-h-svh flex-col justify-center py-24"
        style={{ paddingTop: "calc(var(--header-h) + 6rem)" }}
      >
        <header className="max-w-[46ch]">
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] text-ink uppercase">
            {HERO.orientation}
          </p>
          <h1 className="mt-5 text-display-l font-display leading-[1.06] font-medium tracking-[-0.02em] text-balance text-ink">
            Two directions, built in full.
          </h1>
          <p className="mt-6 max-w-[56ch] font-body text-body-l leading-[1.6] text-charcoal text-pretty">
            Both share the same approved copy, the same type scale and the same
            palette. What differs is the world each one builds around it.
          </p>
        </header>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {DIRECTIONS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className={`group flex flex-col justify-between rounded-sm p-9 transition-transform duration-200 hover:-translate-y-0.5 lg:p-11 ${d.ground}`}
            >
              <div>
                <h2 className="text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em]">
                  {d.name}
                </h2>
                <span
                  aria-hidden="true"
                  className={`mt-5 block h-px w-12 transition-all duration-200 group-hover:w-20 ${d.rule}`}
                />
                <p className={`mt-6 max-w-[48ch] font-body text-body-m leading-[1.65] ${d.meta}`}>
                  {d.note}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 font-body text-body-m font-semibold">
                Open {d.name}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14 max-w-[70ch] font-body text-body-s leading-[1.6] text-charcoal/70">
          {HERO.identityLine} · {HERO.disclaimer}
        </p>
      </div>
    </main>
  );
}
