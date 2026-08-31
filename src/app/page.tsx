import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homepage Direction Review — Elite Physicians Wealth Planning",
  description:
    "Review chooser for the two approved homepage directions: Direction A, The Consult Ledger, and Direction B, The Decision Atlas.",
};

const DIRECTIONS = [
  {
    href: "/variant-a",
    kicker: "Direction A",
    name: "The Consult Ledger",
    summary:
      "A consultation-led editorial world: deep navy and warm ivory, Cormorant Garamond display, and one continuous thin gold coordination route that travels from the hero to the closing decision.",
    className:
      "bg-ink text-ivory hover:border-gold focus-visible:border-gold border-white/15",
    kickerClass: "text-gold",
    nameClass: "font-display font-semibold",
    ruleClass: "bg-gold",
  },
  {
    href: "/variant-b",
    kicker: "Direction B",
    name: "The Decision Atlas",
    summary:
      "A bright clinical atlas: white and mist surfaces, Inter-led declarations, navy rails and calibration ticks, topographic islands, a radial Blueprint instrument, and small gold decision points.",
    className:
      "bg-white text-ink hover:border-gold focus-visible:border-gold border-ink/15",
    kickerClass: "text-ink/60",
    nameClass: "font-body font-bold tracking-tight",
    ruleClass: "bg-ink",
  },
] as const;

export default function ReviewChooserPage(): React.JSX.Element {
  return (
    <main
      id="chooser"
      className="min-h-svh bg-ink flex flex-col justify-center px-6 py-16 sm:px-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-12 max-w-2xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Homepage A/B review
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Elite Physicians Wealth Planning
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-mist/80">
            Two approved homepage directions, built independently from their
            design references. Choose a direction to review it in full.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {DIRECTIONS.map((direction) => (
            <Link
              key={direction.href}
              href={direction.href}
              className={`group block border p-8 transition-colors duration-200 sm:p-10 ${direction.className}`}
            >
              <p
                className={`font-body text-xs font-semibold uppercase tracking-[0.22em] ${direction.kickerClass}`}
              >
                {direction.kicker}
              </p>
              <h2 className={`mt-3 text-3xl sm:text-4xl ${direction.nameClass}`}>
                {direction.name}
              </h2>
              <span
                aria-hidden="true"
                className={`mt-4 block h-px w-12 transition-all duration-200 group-hover:w-20 ${direction.ruleClass}`}
              />
              <p className="mt-5 font-body text-sm leading-relaxed opacity-80">
                {direction.summary}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-body text-sm font-bold">
                Review {direction.kicker}
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

        <p className="mt-12 font-body text-xs leading-relaxed text-mist/50">
          Both directions share the same approved manifest copy, verified
          credentials, and disclosures. Interior pages are out of scope for
          this stage.
        </p>
      </div>
    </main>
  );
}
