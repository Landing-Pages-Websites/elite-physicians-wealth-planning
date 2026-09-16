import Image from "next/image";

const HEADLINE = "A shared strategy across your professional team.";
const BODY =
  "Medical professionals should not have to manage complex financial decisions in fragments. The advisor, CPA, attorney, TPA, insurance professional, and other specialists should be working from a shared strategy.";

/**
 * 02-planning-philosophy. Ivory essay: display heading upper-left with a
 * section-local gold corner arc echoing the frame, body copy beneath, and
 * the clean band of the strategy-desk photograph running full width along
 * the section's foot.
 */
export function PlanningPhilosophy(): React.JSX.Element {
  return (
    <section
      id="planning-philosophy"
      aria-labelledby="planning-philosophy-heading"
      className="mme-philosophy relative overflow-hidden"
    >
      <div className="va-shell relative pt-20 pb-14 lg:pt-28 lg:pb-16">
        <span aria-hidden="true" className="mme-seam mme-seam-top" />
        <svg
          viewBox="0 0 220 90"
          aria-hidden="true"
          className="absolute top-16 right-6 hidden h-[90px] w-[220px] text-gold lg:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M0 6 H190 Q214 6 214 30 V90" />
        </svg>
        <h2
          id="planning-philosophy-heading"
          className="va-reveal max-w-[22ch] font-display text-display-l leading-[1.12] font-medium tracking-[-0.01em] text-balance text-ink"
        >
          {HEADLINE}
        </h2>
        <p className="mt-7 max-w-[50ch] font-body text-body-m leading-[1.65] text-charcoal">
          {BODY}
        </p>
      </div>
      <div className="mme-strategy-strip">
        <Image
          src="/images/design/meet-michael-epps/elements/shared-strategy-desk.jpg"
          alt=""
          aria-hidden="true"
          width={1536}
          height={364}
        />
      </div>
    </section>
  );
}
