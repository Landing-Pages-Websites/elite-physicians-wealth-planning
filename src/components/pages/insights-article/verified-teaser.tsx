import { CheckIcon } from "./icons";
import type { VerifiedTeaser as VerifiedTeaserContent } from "./content-types";

/**
 * 02-verified-teaser — quiet ivory ledger holding only the truthful supplied
 * teaser: what is verified now, as ringed check rows over generous negative
 * space. No fake article paragraphs, ever.
 */
export function VerifiedTeaser({
  teaser,
}: {
  teaser: VerifiedTeaserContent;
}): React.JSX.Element {
  const mediaOrder =
    teaser.mediaSide === "left" ? "lg:order-first" : "lg:order-last";
  return (
    <section
      id="verified-teaser"
      aria-labelledby="article-teaser-heading"
      className="art-seam-top art-seam-bottom relative overflow-hidden bg-ivory"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-4 ${mediaOrder}`}>
            <div
              className={`art-frame mx-auto max-w-sm shadow-[0_24px_50px_-30px_rgba(11,31,58,0.45)] lg:mx-0 ${teaser.image.frameClass}`}
            >
              <img src={teaser.image.src} alt={teaser.image.alt} />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <h2
              id="article-teaser-heading"
              className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {teaser.headline}
            </h2>
            <p className="mt-6 max-w-[52ch] font-body text-body-l leading-[1.62] text-charcoal text-pretty">
              {teaser.body}
            </p>
            <ul className="mt-10 max-w-xl">
              {teaser.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-t border-ink/10 py-5 first:border-t-0"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-body text-body-m leading-[1.6] text-charcoal">
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
