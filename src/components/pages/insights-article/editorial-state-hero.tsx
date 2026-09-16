import { ArrowRightIcon, FileLockIcon } from "@/components/site/icons";
import { HELD_NOTE, type ArticleHero } from "./content-types";

const BACK_LINK = { label: "All insights", href: "/insights" } as const;

/**
 * 01-editorial-state-hero — image-first article masthead on the navy field.
 * No date, author, or reviewer appears anywhere: the only state line is the
 * shared customer-facing held note. The page-local gold line begins here and
 * exits through the bottom seam into the teaser.
 *
 * hero.image.frameClass is the page's hero modifier (`art-hero--*`): it scopes
 * page-owned veil/floor/crop overrides in that article's content CSS to both
 * the desktop plate and the mobile frame. Empty string = family defaults.
 */
export function EditorialStateHero({ hero }: { hero: ArticleHero }): React.JSX.Element {
  return (
    <section
      id="editorial-state-hero"
      aria-labelledby="article-hero-heading"
      data-dark-band
      className={`art-hero art-seam-bottom relative overflow-hidden text-ivory ${hero.image.frameClass}`.trim()}
    >
      {/* Article-owned photo plate: full-bleed right field on desktop. */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
        <img src={hero.image.src} alt="" className="h-full w-full object-cover object-[100%_0%]" />
        <div className="art-hero-veil absolute inset-0" />
        <div className="art-hero-floor absolute inset-0" />
      </div>

      <div
        className="va-shell relative z-10 flex flex-col pb-16 lg:min-h-[680px] lg:pb-24"
        style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}
      >
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          {hero.eyebrow}
        </p>
        <div className="mt-6 max-w-[36rem] xl:max-w-[40rem]">
          <h1
            id="article-hero-heading"
            className="va-reveal font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-[52ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
            {hero.body}
          </p>
          <p className="mt-9 flex max-w-[52ch] items-start gap-3 rounded-[3px] border border-gold/40 px-4 py-3 font-body text-body-s leading-[1.55] text-mist/85">
            <FileLockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {HELD_NOTE}
          </p>
        </div>

        {/* Mobile keeps the focal desk scene after the copy, veiled into navy. */}
        <div className="relative mt-10 overflow-hidden rounded-[3px] lg:hidden">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="aspect-[3/2] w-full object-cover object-[100%_35%]"
          />
          <div aria-hidden="true" className="art-hero-veil absolute inset-0" />
          <div aria-hidden="true" className="art-hero-floor absolute inset-0" />
        </div>

        <div className="mt-10 lg:mt-auto">
          <a href={BACK_LINK.href} className="va-link text-ivory">
            {BACK_LINK.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
