import {
  ClipboardIcon,
  FileTextIcon,
  NodesIcon,
} from "@/components/site/icons";
import type { SourceReviewGate } from "./content-types";

const ITEM_ICONS = [FileTextIcon, NodesIcon, ClipboardIcon] as const;

/**
 * 04-source-and-review-gate — the mist strip separating source and review
 * obligations from article copy: three rule-separated live panels with a
 * documentary file crop on the right edge.
 */
export function SourceAndReviewGate({
  gate,
}: {
  gate: SourceReviewGate;
}): React.JSX.Element {
  return (
    <section
      id="source-and-review-gate"
      aria-labelledby="article-review-heading"
      className="art-strip art-seam-top art-seam-bottom relative overflow-hidden"
    >
      <div className="va-shell relative z-10 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={`lg:col-span-9 ${gate.mediaSide === "left" ? "lg:order-2" : ""}`}>
            <h2
              id="article-review-heading"
              className="font-display text-display-m leading-[1.15] font-medium tracking-[-0.01em] text-ink"
            >
              {gate.headline}
            </h2>
            <ul className="mt-9 grid gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink/10">
              {gate.items.map((item, index) => {
                const Icon = ITEM_ICONS[index % ITEM_ICONS.length];
                return (
                  <li key={item} className="flex items-start gap-4 sm:flex-col sm:gap-4 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/70 bg-white text-gold-text">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-body text-body-m leading-[1.6] text-charcoal">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`hidden lg:col-span-3 lg:block ${gate.mediaSide === "left" ? "lg:order-1" : ""}`}
          >
            <div className={`art-frame shadow-[0_20px_44px_-28px_rgba(11,31,58,0.55)] ${gate.image.frameClass}`}>
              <img src={gate.image.src} alt={gate.image.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
