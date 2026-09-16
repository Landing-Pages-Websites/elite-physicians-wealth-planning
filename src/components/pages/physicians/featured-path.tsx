import {
  ArrowRightIcon,
  CalendarClockIcon,
  ClipboardIcon,
  StethoscopeIcon,
} from "@/components/site/icons";

const FEATURED = {
  headline: "Start where the pressure is clearest.",
  body: "If you are not sure where to begin, open the featured path — or choose the career-stage page beside it that fits where you are today.",
  ctaLabel: "Open featured path",
  ctaHref: "/physicians-specialists",
} as const;

const PHOTO = {
  src: "/images/design/physicians/elements/03-featured-path-photo.jpg",
  alt: "Physician in conversation across a consultation desk",
} as const;

const SIDEBAR_PATHS = [
  {
    label: "Physicians & specialists",
    href: "/physicians-specialists",
    Icon: StethoscopeIcon,
  },
  {
    label: "Retirement planning for physicians",
    href: "/retirement-planning-for-physicians",
    Icon: CalendarClockIcon,
  },
  {
    label: "Practice owner planning",
    href: "/practice-owner-planning",
    Icon: ClipboardIcon,
  },
] as const;

/** The right rail: three route entries, each with its ringed mark. */
function PathSidebar(): React.JSX.Element {
  return (
    <nav aria-label="Related career-stage paths" className="lg:pt-10">
      <ul className="flex flex-col">
        {SIDEBAR_PATHS.map(({ label, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              className="group flex min-h-[4.5rem] items-center gap-4 border-b border-ink/10 py-5 transition-colors duration-200 hover:border-gold/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-gold-text">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[1.25rem] leading-[1.25] font-medium text-ink">
                  {label}
                </span>
                <span className="mt-1 block truncate font-body text-body-s text-gold-text">
                  {href}
                </span>
              </span>
              <ArrowRightIcon className="ml-auto h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function FeaturedPath(): React.JSX.Element {
  return (
    <section
      id="featured-path"
      aria-labelledby="phy-featured-heading"
      className="phy-seam-top phy-seam-bottom relative overflow-hidden bg-ivory"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2
              id="phy-featured-heading"
              className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {FEATURED.headline}
            </h2>
            <span aria-hidden="true" className="mt-7 block h-px w-16 bg-gold" />
            <p className="mt-7 max-w-[38ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
              {FEATURED.body}
            </p>
            <a
              href={FEATURED.ctaHref}
              className="group mt-9 inline-flex min-h-12 flex-col justify-center gap-0.5 rounded-[3px] bg-ink px-6 py-3.5 shadow-[0_16px_36px_-16px_rgba(2,10,22,0.7)] transition-colors duration-200 hover:bg-(--color-ink-hover)"
            >
              <span className="inline-flex items-center gap-3 font-body text-[0.95rem] font-semibold text-ivory">
                {FEATURED.ctaLabel}
                <ArrowRightIcon className="h-4 w-4 text-gold transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span className="font-body text-[12px] text-gold">{FEATURED.ctaHref}</span>
            </a>
          </div>

          {/* Focal consultation photograph — the visual center of gravity. */}
          <div className="lg:col-span-4">
            <img
              src={PHOTO.src}
              alt={PHOTO.alt}
              className="aspect-[4/5] w-full rounded-[3px] object-cover object-[70%_center] shadow-[0_28px_60px_-30px_rgba(11,31,58,0.5)] lg:aspect-[563/700]"
            />
          </div>

          <div className="lg:col-span-4">
            <PathSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
