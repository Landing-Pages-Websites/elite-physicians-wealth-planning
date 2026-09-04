import Image from "next/image";
import { SEPARATE_ROOMS } from "@/lib/content";
import SectionEyebrow from "./section-eyebrow";
import { NodeRule, ScaleBar, TargetRosette } from "./instrument";

/**
 * The coordination gap, drawn as a survey chart.
 *
 * The approved frame is a cartographic field: contour islands with nested
 * rings and cast shadows, dashed survey routes with gold nodes where they
 * cross, water along two edges, registration crosses scattered through it. The
 * build had five plain shapes and dotted lines, which is a diagram of the same
 * idea rather than the same drawing.
 *
 * The field is a generated plate carrying no lettering at all; every label is
 * live text positioned over its island. Island centres were read off a
 * percentage grid laid over the plate, so they are measurements, not guesses.
 */
type Island = {
  role: (typeof SEPARATE_ROOMS.roles)[number] | "priorities";
  label: string;
  /** Centre of the island, as a percentage of the 16:9 field. */
  x: number;
  y: number;
  /** Priorities sits on the one filled island and is set larger. */
  hub?: true;
};

const ISLANDS: readonly Island[] = [
  { role: "CPA", label: "CPA", x: 49, y: 21 },
  { role: "Attorney", label: "Attorney", x: 79, y: 21 },
  { role: "priorities", label: SEPARATE_ROOMS.centerLabel, x: 67, y: 44, hub: true },
  { role: "TPA", label: "TPA", x: 90, y: 47 },
  { role: "Insurance professional", label: "Insurance\nprofessional", x: 49.5, y: 68 },
  { role: "Financial advisor", label: "Financial\nadvisor", x: 71, y: 79 },
] as const;

/** The small crosshair the frame sets above each island's name. */
function IslandMark(): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mx-auto mb-2 h-5 w-5 text-ink/55"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 0.5 V6 M12 18 V23.5 M0.5 12 H6 M18 12 H23.5" />
    </svg>
  );
}

function IslandLabel({ island }: { island: Island }): React.JSX.Element {
  return (
    <p
      className="absolute -translate-x-1/2 -translate-y-1/2 text-center leading-[1.15] font-bold text-ink"
      style={{
        left: `${island.x}%`,
        top: `${island.y}%`,
        fontSize: island.hub ? "clamp(1.15rem,2.5vw,2.3rem)" : "clamp(0.95rem,1.85vw,1.75rem)",
      }}
    >
      {!island.hub && <IslandMark />}
      {island.label.split("\n").map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

function BoundaryNote({ className = "" }: { className?: string }): React.JSX.Element {
  return (
    <aside className={`flex items-start gap-3 border border-ink/45 bg-white/85 px-4 py-3 ${className}`}>
      <span aria-hidden="true" className="mt-0.5 h-6 w-px shrink-0 bg-gold" />
      <p className="font-display text-[13px] leading-[1.45] text-charcoal">
        {SEPARATE_ROOMS.boundaryNote}
      </p>
    </aside>
  );
}

function CopyBlock(): React.JSX.Element {
  return (
    <>
      <SectionEyebrow mark="rosette">{SEPARATE_ROOMS.orientation}</SectionEyebrow>
      <NodeRule className="mt-3 w-[88%] max-w-[22rem]" />
      <h2
        id="separate-rooms-heading"
        className="mt-6 max-w-[14ch] text-[clamp(2rem,3.05vw,3rem)] leading-[1.1] font-bold tracking-[-0.02em] text-ink"
      >
        {SEPARATE_ROOMS.headline}
      </h2>
      <p className="mt-6 max-w-[34ch] font-body text-[0.9375rem] leading-[1.65] text-charcoal">
        {SEPARATE_ROOMS.body}
      </p>
    </>
  );
}

export default function SeparateRooms(): React.JSX.Element {
  return (
    <section
      id="separate-rooms"
      aria-labelledby="separate-rooms-heading"
      className="relative overflow-hidden bg-atlas-paper"
    >
      {/* Desktop: the frame's own canvas. */}
      {/* `@container` + cqw: the canvas keeps the frame's 1536x864 ratio at
          every width, so its type has to scale with it. Fixed rem sizes held
          their pixel size while the box shrank — at 1024 the plates grew past
          their slots and overlapped each other and the CTA. 1cqw = 15.36px of
          the frame, so every size below is the frame's own measurement. */}
      <div className="@container relative hidden aspect-1536/864 w-full lg:block">
        <Image
          src="/images/design/b/03-separate-rooms/contour-field.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />

        {ISLANDS.map((island) => (
          <IslandLabel key={island.role} island={island} />
        ))}

        <div className="absolute top-[13%] left-[3.5%] w-[27%]">
          <CopyBlock />
        </div>

        <TargetRosette className="absolute bottom-[9%] left-[2.4%] h-9 w-9" />
        <ScaleBar className="absolute bottom-[11.4%] left-[7.4%] w-[19%]" />
        <BoundaryNote className="absolute right-[1.5%] bottom-[4%] w-[21%]" />
      </div>

      {/* Below the canvas the field cannot carry labels, so the same six
          become a plain list under a cropped strip of the chart. */}
      <div className="lg:hidden">
        <div className="relative aspect-3/2 w-full">
          <Image
            src="/images/design/b/03-separate-rooms/contour-field.jpg"
            alt="A survey chart showing five separate advisor islands around a central one"
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>
        <div className="vb-shell py-14">
          <CopyBlock />
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
            {ISLANDS.filter((island) => !island.hub).map((island) => (
              <li key={island.role} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="font-body text-body-s font-semibold text-ink">
                  {island.label.replace("\n", " ")}
                </span>
              </li>
            ))}
          </ul>
          <BoundaryNote className="mt-8" />
        </div>
      </div>
    </section>
  );
}
