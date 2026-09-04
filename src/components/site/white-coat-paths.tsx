import Image from "next/image";
import { LINKS, WHITE_COAT_PATHS } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

const PHOTO_DIR = "/images/design/a/06-white-coat-paths";

/**
 * Who we serve, built to the approved frame.
 *
 * The frame is a descending cascade: five skewed photographs stepping down and
 * across the field, each with its audience set in display serif to the right,
 * and one gold route entering top-left, threading every label's node in turn,
 * and leaving bottom-right with an arrow.
 *
 * The build had flattened this into a stepped vertical list with a dot beside
 * each label — the reviewer's note was "need better spacing between elements,
 * some images are cropped weird, some images have weird reflecting around
 * borders." All three came from that flattening.
 *
 * Boxes are measured off public/design/a/refs/06-white-coat-paths.png at its
 * native 1536x864.
 */
type Pathway = {
  src: string;
  alt: string;
  /** Photo box and label origin, percentages of the frame. */
  photo: { left: number; top: number; width: number; height: number };
  label: { left: number; top: number; width: number };
  /** Node where the route meets this label. */
  node: { x: number; y: number };
};

const PATHWAYS: readonly Pathway[] = [
  {
    src: `${PHOTO_DIR}/physicians-specialists-consultation.jpg`,
    alt: "A physician gesturing across a desk during a consultation",
    photo: { left: 37.1, top: 2.1, width: 24.4, height: 24.3 },
    label: { left: 64.3, top: 9.5, width: 17 },
    node: { x: 62.6, y: 11.5 },
  },
  {
    src: `${PHOTO_DIR}/surgeons-operating-room.jpg`,
    alt: "Surgeons working under operating-room lights",
    photo: { left: 56.1, top: 22.9, width: 24.1, height: 21.1 },
    label: { left: 81.9, top: 29.5, width: 16.5 },
    node: { x: 80.7, y: 31.5 },
  },
  {
    src: `${PHOTO_DIR}/dental-office-planning.jpg`,
    alt: "A dental clinician reviewing a panoramic X-ray in an operatory",
    photo: { left: 35.5, top: 45.4, width: 23.4, height: 23.1 },
    label: { left: 63.5, top: 50.5, width: 18 },
    node: { x: 62.2, y: 52.6 },
  },
  {
    src: `${PHOTO_DIR}/practice-owner-meeting.jpg`,
    alt: "A practice owner taking notes at a desk",
    photo: { left: 55.3, top: 63.4, width: 21.5, height: 19 },
    label: { left: 80.1, top: 67.5, width: 17.5 },
    node: { x: 78.6, y: 69.6 },
  },
  {
    src: `${PHOTO_DIR}/healthcare-executive-hallway.jpg`,
    alt: "A clinician walking a bright hospital corridor",
    photo: { left: 32.2, top: 79.6, width: 22.5, height: 20.4 },
    label: { left: 56.5, top: 83.9, width: 17 },
    node: { x: 55.1, y: 86 },
  },
] as const;

/**
 * One gold route: in at the top left, through every node, out bottom right.
 * Drawn on the frame's own grid so it lands on the nodes at any width.
 */
function CascadeRoute(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 1536 864"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full lg:block"
      fill="none"
    >
      <g
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M38 4 V86 Q38 100 52 100 H580" vectorEffect="non-scaling-stroke" />
        {/* Each leg leaves its node, drops BELOW that label's block, then
            travels. Run at node height they struck straight through
            "Physicians & specialists" and "Surgeons". */}
        <path
          d="M962 99 V190 H1440 Q1458 190 1458 208 V224 Q1458 242 1440 242 H1258 Q1240 242 1240 260 V266"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1240 284 V336 Q1240 352 1222 352 H974 Q956 352 956 370 V444"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M956 466 V524 Q956 540 974 540 H1174 Q1192 540 1192 558 V592"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1196 612 V674 Q1196 690 1178 690 H864 Q846 690 846 708 V728"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1206 700 H1498 Q1516 700 1516 718 V806"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M1504 794 L1516 807 L1528 794" vectorEffect="non-scaling-stroke" />
      </g>
      {PATHWAYS.map((pathway) => (
        <circle
          key={pathway.src}
          cx={(pathway.node.x / 100) * 1536}
          cy={(pathway.node.y / 100) * 864}
          r="6"
          fill="var(--color-gold)"
        />
      ))}
    </svg>
  );
}

function PathwayLabel({ pathway, index }: { pathway: Pathway; index: number }): React.JSX.Element {
  const audience = WHITE_COAT_PATHS.pathways[index];
  return (
    <div
      className="absolute z-10"
      style={{
        left: `${pathway.label.left}%`,
        top: `${pathway.label.top}%`,
        width: `${pathway.label.width}%`,
      }}
    >
      <h3 className="font-display text-[1.55cqw] leading-[1.15] font-medium text-ink">
        {audience.audience}
      </h3>
      <p className="mt-[0.7cqw] font-body text-[0.88cqw] leading-[1.5] text-charcoal">
        {audience.decision}
      </p>
    </div>
  );
}

function PlanningPathCta({ compact }: { compact?: true }): React.JSX.Element {
  return (
    <a
      href={LINKS.planningPathOnsite}
      className={`group inline-flex items-center gap-3 bg-ink font-semibold text-gold transition-colors duration-200 hover:bg-ink-hover ${
        compact ? "min-h-12 px-6 text-sm" : "px-[2.2cqw] py-[1.2cqw] text-[1.05cqw]"
      }`}
    >
      {WHITE_COAT_PATHS.cta}
      <ArrowRightIcon
        className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
          compact ? "h-4 w-4" : "h-[1.05cqw] w-[1.05cqw]"
        }`}
      />
    </a>
  );
}

export function WhiteCoatPaths(): React.JSX.Element {
  return (
    <section
      id="white-coat-paths"
      aria-labelledby="white-coat-paths-heading"
      className="va-mist relative overflow-hidden"
    >
      {/* Desktop: the frame's own canvas. */}
      <div className="@container relative hidden aspect-1536/864 w-full lg:block">
        <CascadeRoute />

        {PATHWAYS.map((pathway) => (
          <figure
            key={pathway.src}
            className="va-clip-cascade absolute overflow-hidden"
            style={{
              left: `${pathway.photo.left}%`,
              top: `${pathway.photo.top}%`,
              width: `${pathway.photo.width}%`,
              height: `${pathway.photo.height}%`,
            }}
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

        {PATHWAYS.map((pathway, index) => (
          <PathwayLabel key={pathway.src} pathway={pathway} index={index} />
        ))}

        <div className="absolute top-[15.5%] left-[3.7%] z-10 w-[32%]">
          <p className="font-body text-[0.78cqw] font-semibold tracking-[0.2em] text-gold-text uppercase">
            Orientation:{" "}
            <span className="font-display text-[1.05cqw] tracking-normal italic normal-case">
              {WHITE_COAT_PATHS.orientation}
            </span>
          </p>
          <h2
            id="white-coat-paths-heading"
            className="va-reveal mt-[1.2cqw] font-display text-[3.05cqw] leading-[1.14] font-medium tracking-[-0.01em] text-ink"
          >
            {WHITE_COAT_PATHS.headline}
          </h2>
          <span aria-hidden="true" className="mt-[1.8cqw] block h-px w-[5.5cqw] bg-gold" />
          <p className="mt-[1.8cqw] font-body text-[1.02cqw] leading-[1.55] text-charcoal">
            {WHITE_COAT_PATHS.body}
          </p>
          <div className="mt-[2.2cqw]">
            <PlanningPathCta />
          </div>
        </div>
      </div>

      {/* Below the canvas the cascade cannot hold, so the five stack. */}
      <div className="va-shell py-14 lg:hidden">
        <p className="font-body text-[11px] font-semibold tracking-[0.2em] text-gold-text uppercase">
          Orientation:{" "}
          <span className="font-display text-base tracking-normal italic normal-case">
            {WHITE_COAT_PATHS.orientation}
          </span>
        </p>
        <h2 className="mt-4 text-display-m font-display leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink">
          {WHITE_COAT_PATHS.headline}
        </h2>
        <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gold" />
        <p className="mt-6 max-w-[46ch] font-body text-body-m leading-[1.55] text-charcoal">
          {WHITE_COAT_PATHS.body}
        </p>
        <ol className="mt-9 grid gap-8">
          {PATHWAYS.map((pathway, index) => (
            <li key={pathway.src}>
              <figure className="va-clip-cascade relative aspect-video w-full overflow-hidden">
                <Image src={pathway.src} alt={pathway.alt} fill sizes="100vw" className="object-cover" />
              </figure>
              <div className="relative mt-4 pl-5">
                <span aria-hidden="true" className="absolute top-[0.5em] left-0 h-2 w-2 rounded-full bg-gold" />
                <h3 className="font-display text-display-s leading-[1.15] font-medium text-ink">
                  {WHITE_COAT_PATHS.pathways[index].audience}
                </h3>
                <p className="mt-2 font-body text-body-s leading-[1.55] text-charcoal">
                  {WHITE_COAT_PATHS.pathways[index].decision}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <PlanningPathCta compact />
        </div>
      </div>
    </section>
  );
}
