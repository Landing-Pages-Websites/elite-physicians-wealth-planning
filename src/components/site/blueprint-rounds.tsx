import Image from "next/image";
import { BLUEPRINT, LINKS } from "@/lib/content";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClipboardIcon,
  CompassIcon,
  MagnifierIcon,
  NodesIcon,
  TrendingUpIcon,
} from "./icons";

type StepIcon = (props: { className?: string }) => React.JSX.Element;

const STEP_ICONS: readonly StepIcon[] = [
  CompassIcon,
  MagnifierIcon,
  NodesIcon,
  ClipboardIcon,
  TrendingUpIcon,
  CalendarIcon,
] as const;

/**
 * Desktop x-placement of each step, as a percentage of the .va-shell content
 * box (not the viewport) so 01 starts on the same left edge as the eyebrow and
 * the headline. Every step shares one `top`, so all six medallion centres sit
 * on the single corridor the route draws at y=237 in the 1536x484 viewBox.
 */
/* Even steps. The measured gaps were 238/168/186/174/252px — a 204px mean with
   ±35px scatter, which is exactly the unevenness a designer's eye catches. The
   last group is 14rem wide, so the run stops at 83% to keep it inside the
   shell. */
const STEP_LEFTS = ["0%", "16.6%", "33.2%", "49.8%", "66.4%", "83%"] as const;

/* The route sits at y=237 of the 484-unit viewBox = 48.97% of the field's
   height. Subtracting half a medallion (h-14 = 3.5rem) puts every disc's CENTRE
   on the line rather than near it — and because it is a calc, it holds at every
   viewport width instead of only the one it was eyeballed at. */
const STEP_TOP = "calc(48.97% - 1.75rem)";

/**
 * One continuous route across the lower field (y offset 380 from the NOTES
 * 1536x864 frame): it enters at the left edge near the bottom-left seam from
 * 03, rises into the corridor that threads all six medallions, and exits
 * through the bottom edge at x=1510 (seam to 05). The medallions paint over
 * it, so each navy disc reads as a joint on the line rather than a badge
 * floating beside it.
 */
function ProcessRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 484"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M0 336 H71 Q105 336 105 302 V237 H1476 Q1510 237 1510 271 V472"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M1498 460 L1510 473 L1522 460" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function StepGroup({
  phase,
  Icon,
  compact,
  above,
  isFirst,
}: {
  phase: (typeof BLUEPRINT.phases)[number];
  Icon: StepIcon;
  compact?: boolean;
  above?: boolean;
  isFirst?: boolean;
}): React.JSX.Element {
  return (
    <div
      className={
        compact
          ? "flex items-start gap-4"
          : `flex w-56 gap-3 ${above ? "flex-col-reverse" : "flex-col"}`
      }
    >
      <span
        className={`va-medallion flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${compact ? "mt-1" : ""}`}
        style={isFirst ? { background: "var(--color-gold)" } : undefined}
      >
        <Icon className={`h-5.5 w-5.5 ${isFirst ? "text-ink" : "text-gold"}`} />
      </span>
      <div>
        <p className="font-body text-body-s leading-none font-semibold tracking-[0.16em] text-ink/70">
          {phase.number}
        </p>
        <h3 className="mt-1 font-display text-xl leading-none font-semibold text-ink">
          {phase.name}
        </h3>
        <p className="mt-2 font-body text-body-s leading-[1.55] text-charcoal">
          {phase.summary}
        </p>
      </div>
    </div>
  );
}

function ProcessCta({ className }: { className?: string }): React.JSX.Element {
  return (
    <a
      href={LINKS.processOnsite}
      className={`va-btn va-btn-navy ${className ?? ""}`}
    >
      {BLUEPRINT.cta}
      <ArrowRightIcon className="h-5 w-5 text-gold" />
    </a>
  );
}

export function BlueprintRounds(): React.JSX.Element {
  return (
    <section
      id="blueprint-rounds"
      aria-labelledby="blueprint-rounds-heading"
      className="va-blueprint relative overflow-hidden"
    >
      <div className="relative z-10 va-shell pt-14 pb-14 lg:pb-6">
        {/* Same removal as separate-rooms: the approved frame sets the internal
            codename "The Consult Ledger" here as a logo lockup over an invented
            "PHYSICIAN WEALTH ADVISORY" tagline. Both are build artifacts and
            neither is client brand copy, so the lockup goes and the section's
            own orientation line opens it. The gold rule is kept as the opener. */}
        <p className="inline-flex flex-col gap-2.5 font-display text-display-s font-medium tracking-[0.01em] text-ink">
          {BLUEPRINT.orientation}
          <span aria-hidden="true" className="h-px w-full bg-gold" />
        </p>
        {/* The still-life used to be a full-bleed wash behind this whole band at
            `auto 150%` — a 480px crop blown up past 1400px, which rendered as an
            unreadable beige smear and forced a heavy scrim over everything to
            keep the process rail legible. It is a photograph now, at its own
            scale, in its own frame, with the headline and lede stacked beside it
            instead of stranded in opposite corners of an empty row. */}
        <div className="mt-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,40%)] lg:items-center lg:gap-x-16">
          <div>
            <h2
              id="blueprint-rounds-heading"
              className="va-reveal max-w-[18ch] text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
            >
              {BLUEPRINT.headline}
            </h2>
            <p className="mt-6 max-w-[46ch] font-body text-body-l leading-[1.6] text-charcoal text-pretty">
              {BLUEPRINT.body}
            </p>
            {/* The CTA used to float at 59.5% of the rail band, landing under
                step 04 with nothing to anchor it — it read as a stray element
                dropped into the diagram. It belongs at the end of the intro,
                where the reader has just been told what the process is. */}
            <div className="mt-9 hidden lg:block">
              <ProcessCta />
            </div>
          </div>
          <Image
            src="/images/design/a/04-blueprint-rounds/desk-still-life.jpg"
            alt=""
            width={1400}
            height={1050}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mt-8 aspect-4/3 w-full rounded-sm object-cover lg:mt-0"
          />
        </div>

        {/* Mobile: vertical connected path, 01 through 06. */}
        <ol className="mt-10 flex flex-col lg:hidden">
          {BLUEPRINT.phases.map((phase, index) => (
            <li key={phase.number} className="relative pb-8 pl-0 last:pb-0">
              {index < BLUEPRINT.phases.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-16 bottom-0 left-7 w-[2px] bg-gold/70"
                />
              )}
              <StepGroup
                phase={phase}
                Icon={STEP_ICONS[index]}
                compact
                isFirst={index === 0}
              />
            </li>
          ))}
        </ol>
        <div className="mt-10 lg:hidden">
          <ProcessCta />
        </div>
      </div>

      {/* Desktop: six medallions threaded on one continuous route. The SVG stays
          full-bleed so the route can reach both section seams; the step groups
          are held inside the shell so 01 hangs off the page's one left edge. */}
      <div className="relative z-10 hidden aspect-[1536/484] w-full lg:block">
        <ProcessRoute />
        <div className="va-shell absolute inset-0">
          <div className="relative h-full">
            {BLUEPRINT.phases.map((phase, index) => (
              <div
                key={phase.number}
                className="absolute"
                style={{
                  left: STEP_LEFTS[index],
                  top: STEP_TOP,
                  // 01/03/05 sit above the corridor, 02/04/06 below it, so the
                  // route runs through a clear 56px channel the whole way.
                  transform:
                    index % 2 === 0 ? "translateY(calc(3.5rem - 100%))" : undefined,
                }}
              >
                <StepGroup
                  phase={phase}
                  Icon={STEP_ICONS[index]}
                  above={index % 2 === 0}
                  isFirst={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
