import Image from "next/image";

const HEADLINE = "A physician's financial life should work as one coordinated system.";
const BODY =
  "Planning should connect tax strategy, wealth management, retirement, practice decisions, and legacy planning rather than leaving the physician to reconcile separate conversations.";

/**
 * 02-coordination-philosophy. Typography-first ivory essay: the display
 * heading carries the frame, a thin rule separates it from the body, and the
 * ledger-detail photograph anchors the lower right as a quiet companion. The
 * upper-right stays deliberately empty, as drawn.
 */
export function CoordinationPhilosophy(): React.JSX.Element {
  return (
    <section
      id="coordination-philosophy"
      aria-labelledby="coordination-philosophy-heading"
      className="abt-philosophy relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-28">
        <span aria-hidden="true" className="abt-seam abt-seam-top" />
        <span aria-hidden="true" className="abt-seam abt-seam-bottom" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2
              id="coordination-philosophy-heading"
              className="va-reveal max-w-[24ch] font-display text-display-l leading-[1.12] font-medium tracking-[-0.01em] text-balance text-ink"
            >
              {HEADLINE}
            </h2>
            <span aria-hidden="true" className="mt-9 block h-px w-24 bg-gold" />
            <p className="mt-7 max-w-[46ch] font-body text-body-m leading-[1.65] text-charcoal">
              {BODY}
            </p>
          </div>
          <figure className="mt-12 max-w-[420px] lg:col-span-4 lg:col-start-9 lg:mt-32 lg:max-w-none">
            <Image
              src="/images/design/about/elements/coordination-ledger-detail.jpg"
              alt=""
              aria-hidden="true"
              width={420}
              height={390}
              className="h-auto w-full shadow-[0_20px_45px_-28px_rgba(11,31,58,0.5)]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
