import { ArrowRightIcon } from "@/components/site/icons";
import { AUDIENCE_ROUTES } from "./audience-routes";

const LEDGER = {
  headline: "Compare the paths before you choose.",
  body: "Each destination has its own decision context, data needs, boundaries, and related reading.",
} as const;

const SWATCHES = {
  src: "/images/design/who-we-serve/elements/topic-ledger-material-swatches.jpg",
  alt: "Five tactile material swatches: leather, linen, paper, cloth, and a bound notebook",
} as const;

export function TopicLedger(): React.JSX.Element {
  return (
    <section
      id="topic-ledger"
      aria-labelledby="wws-ledger-heading"
      className="wws-seam-top relative overflow-hidden bg-white"
    >
      <div className="va-shell py-20 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="wws-ledger-heading"
            className="font-display text-display-l leading-[1.1] font-medium tracking-[-0.02em] text-balance text-ink"
          >
            {LEDGER.headline}
          </h2>
          <p className="mt-5 font-body text-body-m leading-[1.65] text-charcoal text-pretty">
            {LEDGER.body}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
          {/* Tactile route-material rail — the frame's left counterweight. */}
          <img
            src={SWATCHES.src}
            alt={SWATCHES.alt}
            className="hidden w-44 rounded-[3px] object-cover shadow-[0_24px_50px_-28px_rgba(11,31,58,0.5)] lg:block"
          />
          <nav aria-label="Audience pages">
            <ul className="flex flex-col">
              {AUDIENCE_ROUTES.map((route, index) => (
                <li key={route.href}>
                  <a
                    href={route.href}
                    aria-label={route.label}
                    className={`group flex min-h-[4rem] items-center justify-between gap-6 border-b border-ink/10 px-5 py-4 transition-all duration-200 hover:translate-x-1 sm:px-7 ${
                      index % 2 === 1 ? "bg-mist/50" : "bg-white"
                    }`}
                  >
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-[1.35rem] leading-[1.2] font-medium text-ink">
                        {route.href}
                      </span>
                      <span className="font-body text-body-s text-charcoal/80">
                        {route.label}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold-text opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* Navy exit band: the ledger resolves into the final choice field. */}
      <div aria-hidden="true" className="wws-seam-bottom relative h-16 bg-ink" />
    </section>
  );
}
