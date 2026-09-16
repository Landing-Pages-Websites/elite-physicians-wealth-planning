import { CalendarIcon, InfoIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/content";

const HERO = {
  eyebrow: "Services for Physicians",
  headline:
    "Choose the planning discipline that matches the decision in front of you.",
  body: "Elite Physicians Wealth Planning organizes tax strategy, wealth management, retirement strategy, practice and business planning, and legacy planning into one coordinated service map.",
  primaryCta: "Schedule a Strategy Call",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

const WORKTABLE = {
  src: "/images/design/services/elements/01-index-hero-consultation-worktable.jpg",
  alt: "Consultation worktable with a brass task lamp and leather chair in a private advisory office",
} as const;

/** The section-local gold gesture: out of the eyebrow, over to the plate. */
function HeroLine(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 720"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[6] hidden h-full w-full lg:block"
      fill="none"
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75">
        <path d="M184 96 H420" vectorEffect="non-scaling-stroke" />
        <path
          d="M420 96 Q460 96 460 136 V520 Q460 560 500 560 H760"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <circle cx="766" cy="560" r="5" fill="var(--color-gold)" />
    </svg>
  );
}

export function IndexHero(): React.JSX.Element {
  return (
    <section
      id="index-hero"
      aria-labelledby="services-hero-heading"
      data-dark-band
      className="svc-hero svc-seam-bottom relative overflow-hidden text-ivory"
    >
      {/* Owner-specific worktable plate: full-bleed right field on desktop. */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <img
          src={WORKTABLE.src}
          alt=""
          className="h-full w-full object-cover object-[70%_45%]"
        />
        <div className="svc-hero-veil absolute inset-0" />
      </div>
      <HeroLine />

      <div
        className="va-shell relative z-10 flex flex-col pb-24 lg:min-h-[760px] lg:pb-32"
        style={{ paddingTop: "calc(var(--header-h) + 4.5rem)" }}
      >
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          {HERO.eyebrow}
        </p>
        <div className="mt-6 max-w-[34rem] xl:max-w-[38rem]">
          <h1
            id="services-hero-heading"
            className="va-reveal font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-7 max-w-[50ch] font-body text-body-l leading-[1.62] text-mist/85 text-pretty">
            {HERO.body}
          </p>
          <div className="mt-10">
            <a href={LINKS.scheduleOnsite} className="va-btn va-btn-gold">
              <CalendarIcon className="h-4 w-4" />
              {HERO.primaryCta}
            </a>
          </div>
        </div>

        {/* Mobile keeps the focal worktable after the copy, as a 3:2 crop. */}
        <div className="mt-12 overflow-hidden rounded-[3px] lg:hidden">
          <img
            src={WORKTABLE.src}
            alt={WORKTABLE.alt}
            className="aspect-[3/2] w-full object-cover object-[72%_45%]"
          />
        </div>

        <p className="mt-12 flex max-w-[52ch] items-center gap-3 font-body text-body-s leading-[1.5] text-mist/75 lg:mt-auto">
          <InfoIcon className="h-4 w-4 shrink-0 text-gold" />
          {HERO.boundary}
        </p>
      </div>

      <div aria-hidden="true" className="svc-hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-20 lg:h-28" />
    </section>
  );
}
