import type { ManuscriptGate as ManuscriptGateContent } from "./content-types";

/**
 * 03-manuscript-gate — the loud white spread that states, in the manifests'
 * own customer-facing terms, what must exist before the article can go live.
 * The sealed-document photograph carries the state; the requirement rail is
 * fully live text on a gold spine.
 */
export function ManuscriptGate({
  gate,
}: {
  gate: ManuscriptGateContent;
}): React.JSX.Element {
  const mediaOrder = gate.mediaSide === "left" ? "lg:order-first" : "lg:order-last";
  return (
    <section
      id="manuscript-gate"
      aria-labelledby="article-gate-heading"
      className="art-seam-top art-seam-bottom relative overflow-hidden bg-white"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-5 ${mediaOrder}`}>
            <div
              className={`art-frame mx-auto max-w-md shadow-[0_28px_60px_-32px_rgba(11,31,58,0.5)] lg:mx-0 ${gate.image.frameClass}`}
            >
              <img src={gate.image.src} alt={gate.image.alt} />
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2
              id="article-gate-heading"
              className="max-w-[16ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {gate.headline}
            </h2>
            <ul className="relative mt-10 max-w-xl border-l border-gold/70 pl-7">
              {gate.items.map((item) => (
                <li key={item} className="relative border-t border-ink/10 py-5 first:border-t-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -left-7 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
                  />
                  <span className="font-body text-body-l leading-[1.55] text-charcoal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
