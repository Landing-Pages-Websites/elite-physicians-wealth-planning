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
};

const PHOTO_DIR = "/images/design/a/06-white-coat-paths";

const PATHWAYS: readonly PathwaySpec[] = [
  {
    ...WHITE_COAT_PATHS.pathways[0],
    src: `${PHOTO_DIR}/physicians-specialists-consultation.jpg`,
    alt: "Physicians reviewing a treatment plan together during a consultation",
    clip: "va-clip-consult",
    photo: { left: "36.8%", top: "1.7%", width: "26.7%", aspectRatio: "2" },
    label: { left: "64.5%", top: "9.5%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[1],
    src: `${PHOTO_DIR}/surgeons-operating-room.jpg`,
    alt: "Surgeons concentrating on a procedure under operating-room lights",
    clip: "va-clip-surgeons",
    photo: { left: "54.7%", top: "28.4%", width: "26%", aspectRatio: "1.86" },
    label: { left: "82%", top: "30%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[2],
    src: `${PHOTO_DIR}/dental-office-planning.jpg`,
    alt: "Dental clinician reviewing a panoramic X-ray in a dental operatory",
    clip: "va-clip-dental",
    photo: { left: "36%", top: "50.3%", width: "25.7%", aspectRatio: "2.13" },
    label: { left: "62.5%", top: "55%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[3],
    src: `${PHOTO_DIR}/practice-owner-meeting.jpg`,
    alt: "Practice owner in a white coat taking notes during an office meeting",
    clip: "va-clip-practice",
    photo: { left: "74.2%", top: "69.4%", width: "25.4%", aspectRatio: "2.4" },
    label: { left: "78.5%", top: "57%" },
  },
  {
    ...WHITE_COAT_PATHS.pathways[4],
    src: `${PHOTO_DIR}/healthcare-executive-hallway.jpg`,
    alt: "Clinician in scrubs carrying a tablet along a bright hospital corridor",
    clip: "va-clip-executive",
    photo: { left: "32.6%", top: "64.8%", width: "21.5%", aspectRatio: "1.09" },
    label: { left: "55.7%", top: "81%" },
  },
] as const;

/**
 * Indexing rail: enters at the top edge (x=37, from the 05 exit), turns
 * into the photo cascade, steps through the audience leaders, and exits
 * through the bottom edge at x=1516 with an arrow (seam to 07).
 */
function IndexRail(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
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
        <path d="M37 0 V86 Q37 102 53 102 H570 Q586 102 586 118 V210" vectorEffect="non-scaling-stroke" />
        <path d="M974 100 H1180" vectorEffect="non-scaling-stroke" />
        <path d="M1239 271 V454 Q1239 470 1223 470 H1180" vectorEffect="non-scaling-stroke" />
        <path d="M957 453 H920" vectorEffect="non-scaling-stroke" />
        <path
          d="M1212 597 H1101 Q1085 597 1085 613 V801 Q1085 817 1101 817 H1484 Q1516 817 1516 833 V860"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M1504 848 L1516 861 L1528 848" vectorEffect="non-scaling-stroke" />
        <path d="M845 734 H826" vectorEffect="non-scaling-stroke" />
        {/* Sits in the gutter LEFT of the copy block. At its previous
            y=421/x=58-135 it ran straight through the word "ownership" in the
            lead paragraph and rendered as a strikethrough on compliance copy. */}
        <path d="M32 470 H72" vectorEffect="non-scaling-stroke" strokeWidth="2" />
      </g>
      {[
        [974, 100],
        [1239, 271],
        [957, 453],
        [1212, 597],
        [845, 734],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="var(--color-gold)" />
      ))}
    </svg>
  );
}

function PathwayLabel({
  pathway,
}: {
  pathway: PathwaySpec;
}): React.JSX.Element {
  return (
    <div className="max-w-md lg:w-[14rem]">
      <h3 className="flex items-start gap-2 font-display text-[clamp(1.15rem,1.5vw,1.45rem)] leading-none font-semibold text-ink">
        <span
          aria-hidden="true"
          className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold lg:hidden"
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
    <div className="max-w-md lg:absolute lg:top-[13%] lg:left-[max(1.5rem,calc((100vw-var(--page-max))/2+var(--page-pad)))] lg:z-20 lg:w-[29%] lg:max-w-none">
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
        className="va-btn va-btn-navy mt-8"
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

        {/* Desktop: cascading diagonal ribbon on the 1536x864 canvas. */}
        <div className="relative hidden aspect-[1536/864] w-full lg:block">
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

        {/* Mobile: alternating photo + label vertical sequence. */}
        <ol className="mt-12 flex flex-col gap-10 pb-16 lg:hidden">
          {PATHWAYS.map((pathway) => (
            <li key={pathway.audience} className="relative border-l border-gold/60 pl-4">
              <figure className="va-clip-mobile relative aspect-[3/2] w-full overflow-hidden rounded-[10px]">
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
