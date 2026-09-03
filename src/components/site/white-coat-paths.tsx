import Image from "next/image";
import { LINKS, WHITE_COAT_PATHS } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

type PathwaySpec = {
  audience: (typeof WHITE_COAT_PATHS.pathways)[number]["audience"];
  decision: (typeof WHITE_COAT_PATHS.pathways)[number]["decision"];
  src: string;
  alt: string;
  clip: string;
  photo: React.CSSProperties;
  label: React.CSSProperties;
  /** Which way the 12px gold tie points at this label's photo. Default: left. */
  tie?: "up";
};

const PHOTO_DIR = "/images/design/a/06-white-coat-paths";

const PATHWAYS: readonly PathwaySpec[] = [
  {
    ...WHITE_COAT_PATHS.pathways[0],
    src: `${PHOTO_DIR}/physicians-specialists-consultation.jpg`,
    alt: "Physicians reviewing a treatment plan together during a consultation",
    clip: "va-clip-consult",
    photo: { left: "36.8%", top: "1.7%", width: "26.7%", aspectRatio: "2" },
    label: { left: "63.1%", top: "9%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[1],
    src: `${PHOTO_DIR}/surgeons-operating-room.jpg`,
    alt: "Surgeons concentrating on a procedure under operating-room lights",
    clip: "va-clip-surgeons",
    photo: { left: "51.5%", top: "26%", width: "26%", aspectRatio: "1.86" },
    label: { left: "78.1%", top: "27.5%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[2],
    src: `${PHOTO_DIR}/dental-office-planning.jpg`,
    alt: "Dental clinician reviewing a panoramic X-ray in a dental operatory",
    clip: "va-clip-dental",
    photo: { left: "36%", top: "47%", width: "25.7%", aspectRatio: "2.13" },
    label: { left: "62.3%", top: "48.5%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[3],
    src: `${PHOTO_DIR}/practice-owner-meeting.jpg`,
    alt: "Practice owner in a white coat taking notes during an office meeting",
    clip: "va-clip-practice",
    photo: { left: "74.2%", top: "66%", width: "25.4%", aspectRatio: "2.4" },
    label: { left: "74.2%", top: "84%" },
    tie: "up",
  },
  {
    ...WHITE_COAT_PATHS.pathways[4],
    src: `${PHOTO_DIR}/healthcare-executive-hallway.jpg`,
    alt: "Clinician in scrubs carrying a tablet along a bright hospital corridor",
    clip: "va-clip-executive",
    photo: { left: "33.8%", top: "68%", width: "21.5%", aspectRatio: "1.09" },
    label: { left: "56%", top: "72%" },
  },
] as const;

/**
 * Page route, not an index. Two runs only: it enters from the 05 seam at the
 * top edge and stops 12px short of photo 1's clipped edge, then leaves from
 * photo 4's clipped bottom-right corner and exits with an arrow at the 07 seam.
 * The five audiences are siblings, so each one carries its own node/tie inside
 * PathwayLabel — nothing threads them in sequence.
 */
function IndexRail(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 1010"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M37 0 V86 Q37 102 53 102 H570 Q586 102 586 118 V148" vectorEffect="non-scaling-stroke" />
        <path d="M1495 829 V984" vectorEffect="non-scaling-stroke" />
        <path d="M1483 972 L1495 984 L1507 972" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function PathwayLabel({
  pathway,
}: {
  pathway: PathwaySpec;
}): React.JSX.Element {
  return (
    <div className="relative max-w-md pl-7 lg:w-[15.75rem]">
      {pathway.tie === "up" ? (
        <span
          aria-hidden="true"
          className="absolute -top-4 left-[14px] hidden h-3 w-px bg-gold lg:block"
        />
      ) : null}
      <h3 className="relative font-display text-display-s leading-[1.15] font-semibold text-ink">
        {pathway.tie === "up" ? null : (
          <span
            aria-hidden="true"
            className="absolute -left-7 top-[0.62em] hidden h-px w-3 bg-gold lg:block"
          />
        )}
        <span
          aria-hidden="true"
          className="absolute -left-12 top-[0.42em] h-2 w-2 rounded-full bg-gold lg:-left-[18px]"
        />
        {pathway.audience}
      </h3>
      <p className="mt-2 font-body text-body-s leading-[1.55] text-charcoal">
        {pathway.decision}
      </p>
    </div>
  );
}

function CopyBlock(): React.JSX.Element {
  return (
    <div className="max-w-md lg:absolute lg:top-[13%] lg:bottom-[9%] lg:left-[max(1.5rem,calc((100vw-var(--page-max))/2+var(--page-pad)))] lg:z-20 lg:flex lg:w-[29%] lg:max-w-none lg:flex-col">
      <p className="font-display text-sm font-medium text-ink italic">
        {WHITE_COAT_PATHS.orientation}
      </p>
      <h2
        id="white-coat-paths-heading"
        className="va-reveal mt-5 text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
      >
        {WHITE_COAT_PATHS.headline}
      </h2>
      <span aria-hidden="true" className="mt-5 block h-[2px] w-20 bg-gold lg:hidden" />
      <p className="mt-5 max-w-[50ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
        {WHITE_COAT_PATHS.body}
      </p>
      <a
        href={LINKS.planningPathOnsite}
        className="va-btn va-btn-navy mt-8 lg:mt-auto"
      >
        {WHITE_COAT_PATHS.cta}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export function WhiteCoatPaths(): React.JSX.Element {
  return (
    <section
      id="white-coat-paths"
      aria-labelledby="white-coat-paths-heading"
      className="va-mist relative overflow-hidden"
    >
      <div className="relative z-10 px-6 pt-14 sm:px-10 lg:p-0">
        <CopyBlock />

        {/* Desktop: cascading diagonal ribbon on the 1536x1010 canvas. */}
        <div className="relative hidden aspect-[1536/1010] w-full lg:block">
          <IndexRail />
          {PATHWAYS.map((pathway) => (
            <figure
              key={pathway.audience}
              className={`absolute overflow-hidden rounded-[10px] ${pathway.clip}`}
              style={pathway.photo}
            >
              <Image
                src={pathway.src}
                alt={pathway.alt}
                fill
                sizes="(min-width: 1024px) 26vw, 100vw"
                className="object-cover"
              />
            </figure>
          ))}
          {PATHWAYS.map((pathway) => (
            <div
              key={pathway.audience}
              className="absolute"
              style={pathway.label}
            >
              <PathwayLabel pathway={pathway} />
            </div>
          ))}
        </div>

        {/* Mobile: one gold spine, five audiences hanging off it. */}
        <ol className="relative mt-12 flex flex-col gap-10 border-l border-gold/60 pb-16 pl-4 lg:hidden">
          {PATHWAYS.map((pathway, index) => (
            <li key={pathway.audience} className="relative">
              <figure
                className={`va-clip-mobile relative w-full overflow-hidden rounded-[10px] ${
                  index === 0 ? "aspect-[4/5]" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={pathway.src}
                  alt={pathway.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </figure>
              <div className="mt-4">
                <PathwayLabel pathway={pathway} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
