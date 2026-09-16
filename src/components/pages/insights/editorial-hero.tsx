import { CalendarIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";
import { routeBySlug } from "@/lib/routes";

const HERO = {
  eyebrow: "Insights",
  headline:
    "Scan the article library by planning topic while clearly separating ready pages from held manuscripts.",
  body: "Use the index to choose a more specific planning page or resource before requesting a strategy call.",
  primaryCta: "Schedule a Strategy Call",
} as const;

/** The ref's right-edge stack: three dark held-article cards. */
const STACK_SLUGS = [
  "insights--roth-conversion-timing",
  "insights--five-years-from-retirement-checklist",
  "insights--disability-insurance-review-overlooked",
] as const;

const STACK_STATE = "Overview open · full article held";

/**
 * The ref frame's ready-vs-held device: a stack of dark manuscript cards at
 * the hero's right edge, each a live link to a real article route with its
 * shared publication state marked — the same state the ledger attests.
 */
function HeldArticleStack(): React.JSX.Element {
  return (
    <nav
      aria-label="From the article library"
      className="absolute top-[7.5rem] right-0 bottom-24 hidden w-60 lg:block"
    >
      <ul className="flex h-full flex-col gap-5">
        {STACK_SLUGS.map((slug) => {
          const route = routeBySlug(slug);
          return (
            <li key={slug} className="min-h-0 flex-1">
              <a
                href={route.path}
                className="group flex h-full flex-col justify-between rounded-[3px] border border-gold/50 bg-ink-deep/55 p-5 backdrop-blur-[2px] transition-colors duration-200 hover:border-gold hover:bg-ink-deep/75"
              >
                <span className="font-display text-[1.05rem] leading-[1.3] font-medium text-ivory transition-colors duration-200 group-hover:text-gold">
                  {route.navLabel}
                </span>
                <span className="mt-4">
                  <span aria-hidden="true" className="block h-px w-8 bg-gold/80" />
                  <span className="mt-2 block font-body text-[10px] font-semibold tracking-[0.14em] text-mist/75 uppercase">
                    {STACK_STATE}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * 01-editorial-hero — the index task, not a company pitch: dark editorial
 * panel left, lamplit study canvas right. The page-local gold line starts
 * here and exits through the bottom seam into the taxonomy rail.
 */
export function EditorialHero(): React.JSX.Element {
  return (
    <section
      id="editorial-hero"
      aria-labelledby="insights-hero-heading"
      data-dark-band
      className="ins-hero ins-seam-bottom relative overflow-hidden text-ivory"
    >
      <div
        className="va-shell relative z-10 flex flex-col pb-20 lg:min-h-[680px] lg:pb-24"
        style={{ paddingTop: "calc(var(--header-h) + 4.5rem)" }}
      >
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          {HERO.eyebrow}
        </p>
        <div className="mt-6 max-w-[33rem] xl:max-w-[37rem]">
          <h1
            id="insights-hero-heading"
            className="va-reveal font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-7 max-w-[46ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
            {HERO.body}
          </p>
          <div className="mt-10">
            <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
              <CalendarIcon className="h-4 w-4" />
              {HERO.primaryCta}
            </a>
          </div>
        </div>
        <HeldArticleStack />
      </div>
    </section>
  );
}
