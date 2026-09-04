import Image from "next/image";
import { LINKS, WHITE_COAT_PATHS } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

type PathwaySpec = {
  audience: (typeof WHITE_COAT_PATHS.pathways)[number]["audience"];
  decision: (typeof WHITE_COAT_PATHS.pathways)[number]["decision"];
  src: string;
  alt: string;
};

const PHOTO_DIR = "/images/design/a/06-white-coat-paths";

const PATHWAYS: readonly PathwaySpec[] = [
  {
    ...WHITE_COAT_PATHS.pathways[0],
    src: `${PHOTO_DIR}/physicians-specialists-consultation.jpg`,
    alt: "Physicians reviewing a treatment plan together during a consultation",
  },
  {
    ...WHITE_COAT_PATHS.pathways[1],
    src: `${PHOTO_DIR}/surgeons-operating-room.jpg`,
    alt: "Surgeons concentrating on a procedure under operating-room lights",
  },
  {
    ...WHITE_COAT_PATHS.pathways[2],
    src: `${PHOTO_DIR}/dental-office-planning.jpg`,
    alt: "Dental clinician reviewing a panoramic X-ray in a dental operatory",
  },
  {
    ...WHITE_COAT_PATHS.pathways[3],
    src: `${PHOTO_DIR}/practice-owner-meeting.jpg`,
    alt: "Practice owner in a white coat taking notes during an office meeting",
  },
  {
    ...WHITE_COAT_PATHS.pathways[4],
    src: `${PHOTO_DIR}/healthcare-executive-hallway.jpg`,
    alt: "Clinician in scrubs carrying a tablet along a bright hospital corridor",
  },
] as const;

/**
 * Each row steps this much further right than the one above it. The cascade is
 * the approved direction's idea and it is worth keeping; what it cannot be is
 * five hand-placed rectangles. Every row is now the same width and the same
 * shape, and only the offset changes — so the diagonal is a rule the layout
 * follows rather than five positions somebody nudged until they looked close.
 */
const STEP_PERCENT = 4;
const ROW_WIDTH = `${100 - STEP_PERCENT * (PATHWAYS.length - 1)}%`;

function CopyBlock(): React.JSX.Element {
  return (
    <div className="lg:sticky lg:top-[calc(var(--header-h)+4rem)] lg:self-start">
      {/* Was set in italic display at 14px while every other section opens on a
          letterspaced uppercase body eyebrow — one section using a different
          orientation style is the kind of thing that reads as "assembled" even
          when nobody can name it. */}
      <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
        {WHITE_COAT_PATHS.orientation}
      </p>
      <h2
        id="white-coat-paths-heading"
        className="va-reveal mt-5 text-display-m font-display leading-[1.08] font-medium tracking-[-0.02em] text-balance text-ink"
      >
        {WHITE_COAT_PATHS.headline}
      </h2>
      <span aria-hidden="true" className="mt-6 block h-px w-14 bg-gold" />
      <p className="mt-6 max-w-[42ch] font-body text-body-m leading-[1.65] text-charcoal text-pretty">
        {WHITE_COAT_PATHS.body}
      </p>
      {/* `mt-auto` used to push this to the foot of a 1,010px canvas, leaving
          about 300px of empty field between the lede and the button. */}
      <a href={LINKS.planningPathOnsite} className="va-btn va-btn-navy mt-9">
        {WHITE_COAT_PATHS.cta}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

function Pathway({
  pathway,
  index,
}: {
  pathway: PathwaySpec;
  index: number;
}): React.JSX.Element {
  return (
    <li
      className="grid gap-x-8 gap-y-4 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:items-center lg:w-(--row-width) lg:ms-(--row-offset)"
      style={
        {
          "--row-width": ROW_WIDTH,
          "--row-offset": `${index * STEP_PERCENT}%`,
        } as React.CSSProperties
      }
    >
      <figure className="va-clip-pathway relative aspect-video w-full overflow-hidden rounded-[10px]">
        <Image
          src={pathway.src}
          alt={pathway.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </figure>
      <div className="relative pl-6">
        <span
          aria-hidden="true"
          className="absolute top-[0.5em] left-0 h-1.5 w-1.5 rounded-full bg-gold"
        />
        <h3 className="font-display text-display-s leading-[1.15] font-semibold text-ink">
          {pathway.audience}
        </h3>
        <p className="mt-2.5 max-w-[34ch] font-body text-body-s leading-[1.6] text-charcoal text-pretty">
          {pathway.decision}
        </p>
      </div>
    </li>
  );
}

export function WhiteCoatPaths(): React.JSX.Element {
  return (
    <section
      id="white-coat-paths"
      aria-labelledby="white-coat-paths-heading"
      className="va-mist relative overflow-hidden"
    >
      {/* One list at every width. The cascade used to be an absolutely
          positioned canvas gated at `xl`, with a separate stacked list gated at
          `lg:hidden` — so between 1024px and 1279px the section rendered its
          headline and nothing else: no photographs, no audiences, no
          descriptions. Measured at 1100px and 1240px: five images, zero
          visible. */}
      <div className="va-shell relative z-10 py-14 lg:grid lg:grid-cols-[minmax(0,29%)_minmax(0,1fr)] lg:gap-x-16 lg:py-20">
        <CopyBlock />
        <ol className="mt-12 grid gap-9 lg:mt-0">
          {PATHWAYS.map((pathway, index) => (
            <Pathway key={pathway.audience} pathway={pathway} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
