import { ArrowRightIcon, InfoIcon } from "@/components/site/icons";
import {
  ARTICLE_BOUNDARY,
  HELD_NOTE,
  type RelatedReading as RelatedReadingContent,
} from "./content-types";

const RETURN_LINK = { label: "Return to insights", href: "/insights" } as const;

/**
 * 05-related-reading — the quiet ivory close: a small ledger of real routes
 * that already carry verified planning context, the shared held note, and the
 * editorial boundary. The page-local gold line ends here on a node.
 */
export function RelatedReading({
  related,
}: {
  related: RelatedReadingContent;
}): React.JSX.Element {
  return (
    <section
      id="related-reading"
      aria-labelledby="article-related-heading"
      className="art-seam-top relative overflow-hidden bg-ivory"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            className={
              related.mediaSide === "left"
                ? "lg:order-2 lg:col-span-6 lg:col-start-7"
                : "lg:col-span-6"
            }
          >
            <h2
              id="article-related-heading"
              className="max-w-[16ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {related.headline}
            </h2>
            <p className="mt-6 max-w-[48ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {related.body}
            </p>

            <nav aria-label="Related planning paths" className="mt-10">
              <ul className="max-w-lg border-l border-gold/70">
                {related.links.map((link) => (
                  <li key={link.href} className="relative border-t border-ink/10 first:border-t-0">
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
                    />
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className="group flex min-h-14 items-center justify-between gap-6 pr-2 pl-7 transition-colors duration-200 hover:text-gold-text"
                    >
                      <span className="font-display text-[1.35rem] leading-[1.2] font-medium text-ink transition-colors duration-200 group-hover:text-gold-text">
                        {link.href}
                      </span>
                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="mt-10 flex max-w-[52ch] items-start gap-3 rounded-[3px] border border-gold/50 bg-white/60 px-4 py-3 font-body text-body-s leading-[1.55] text-charcoal">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-text" />
              {HELD_NOTE}
            </p>

            <div className="mt-10">
              <a href={RETURN_LINK.href} className="va-link text-ink">
                {RETURN_LINK.label}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className={
              related.mediaSide === "left"
                ? "lg:order-1 lg:col-span-5 lg:col-start-1"
                : "lg:col-span-5 lg:col-start-8"
            }
          >
            <div
              className={`art-frame mx-auto max-w-md shadow-[0_28px_60px_-32px_rgba(11,31,58,0.45)] lg:mx-0 ${related.image.frameClass}`}
            >
              <img src={related.image.src} alt={related.image.alt} />
            </div>
          </div>
        </div>

        <p className="mt-16 border-t border-ink/10 pt-6 text-center font-body text-body-s text-charcoal/75">
          {ARTICLE_BOUNDARY}
        </p>
        {/* The page-local coordination line ends here, on a closing node. */}
        <span aria-hidden="true" className="mx-auto mt-6 block h-2 w-2 rounded-full bg-gold" />
      </div>
    </section>
  );
}
