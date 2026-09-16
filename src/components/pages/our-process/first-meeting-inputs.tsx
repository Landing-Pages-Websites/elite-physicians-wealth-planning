import { FileTextIcon } from "@/components/site/icons";
import { BriefcaseIcon, UsersIcon } from "./process-icons";

/** Manifest copy for 03-first-meeting-inputs — content contract, do not edit. */
const INPUTS = {
  headline: "What the process needs from you.",
  body: "Keep the first exchange high-level and do not submit sensitive records through a web form.",
  cardLabel: "Input checklist",
  items: [
    "Goals and family priorities",
    "Income structure and benefits",
    "Tax, retirement, investment, insurance, estate, debt, and practice details when applicable",
  ],
} as const;

type IconComponent = (props: { className?: string }) => React.JSX.Element;

const ITEM_ICONS: readonly IconComponent[] = [
  UsersIcon,
  BriefcaseIcon,
  FileTextIcon,
] as const;

/** The gold arc the frame draws in the lower-left quiet zone. */
function ArcAccent(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 320 120"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 hidden h-24 w-72 lg:block"
      fill="none"
    >
      <path
        d="M0 24 H150 Q210 24 240 66 T320 120"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ChecklistCard(): React.JSX.Element {
  return (
    <div className="prc-inputs-card prc-reveal w-full max-w-xl rounded-[6px]">
      <p className="border-b border-charcoal/10 px-6 py-4 font-body text-[12px] font-semibold tracking-[0.22em] text-gold-text uppercase">
        {INPUTS.cardLabel}
      </p>
      <ul>
        {INPUTS.items.map((item, index) => {
          const Icon = ITEM_ICONS[index] ?? FileTextIcon;
          return (
            <li
              key={item}
              className="flex items-start gap-4 border-b border-charcoal/10 px-6 py-5 last:border-b-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-gold/50 bg-ivory text-gold-text">
                <Icon className="h-5 w-5" />
              </span>
              <span className="pt-2 font-body text-body-m leading-[1.55] text-ink">
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * 03-first-meeting-inputs. Quiet white ledger: heading left, elevated input
 * checklist card centre, document photograph bleeding off the right edge,
 * gold arc exiting the lower-left into the coordination map.
 */
export function FirstMeetingInputs(): React.JSX.Element {
  return (
    <section
      id="first-meeting-inputs"
      aria-labelledby="first-meeting-inputs-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Entry of the gold line from the route's bottom-right exit. */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-[8%] hidden h-12 w-px bg-gold/70 lg:block"
      />
      <img
        src="/images/design/our-process/elements/03-first-meeting-inputs-photo.jpg"
        alt=""
        aria-hidden="true"
        width={364}
        height={348}
        className="prc-inputs-photo hidden h-auto lg:block"
      />
      <ArcAccent />
      <div className="va-shell relative grid gap-12 py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16 lg:py-24 lg:pr-40">
        <div>
          <h2
            id="first-meeting-inputs-heading"
            className="prc-reveal max-w-[14ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            {INPUTS.headline}
          </h2>
          <p className="mt-6 max-w-[38ch] font-body text-body-m leading-[1.62] text-charcoal">
            {INPUTS.body}
          </p>
        </div>
        <div className="flex lg:justify-center">
          <ChecklistCard />
        </div>
      </div>
    </section>
  );
}
