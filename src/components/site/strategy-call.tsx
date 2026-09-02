import { StrategyCallForm } from "@/components/shared/strategy-call-form";
import { BRAND, NEXT_DECISION } from "@/lib/content";

/**
 * Where the closing fork lands. The two paths above merge on the gold route;
 * this is the step that merge leads to, so it sits on the ledger's deep ground
 * rather than introducing a new surface.
 */
export function StrategyCall(): React.JSX.Element {
  return (
    <section
      id="form"
      aria-labelledby="form-heading"
      className="relative overflow-hidden bg-ink"
    >
      <div className="relative z-10 mx-auto grid max-w-[1100px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16 lg:py-28">
        <div>
          <h2
            id="form-heading"
            className="max-w-md font-display text-[clamp(1.8rem,2.6vw,2.5rem)] leading-[1.15] font-semibold text-ivory"
          >
            Start with a conversation, not a proposal.
          </h2>
          <p className="mt-5 max-w-sm font-body text-[15px] leading-relaxed text-ivory/70">
            {NEXT_DECISION.strategyCall.summary}
          </p>
          <p className="mt-6 font-body text-[13px] leading-relaxed text-gold">
            {NEXT_DECISION.strategyCall.expectation}
          </p>
          <dl className="mt-10 grid gap-4 border-t border-ivory/15 pt-8 font-body text-[13px] text-ivory/70">
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-ivory/45">Call</dt>
              <dd>
                <a
                  className="-my-2 inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-gold focus-visible:text-gold"
                  href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
                >
                  {BRAND.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-ivory/45">Email</dt>
              <dd>
                <a
                  className="-my-2 inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-gold focus-visible:text-gold"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-ivory/45">Hours</dt>
              <dd>{BRAND.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-sm border border-ivory/15 bg-ink/60 p-6 sm:p-8">
          <StrategyCallForm tone="ledger" />
        </div>
      </div>
    </section>
  );
}
