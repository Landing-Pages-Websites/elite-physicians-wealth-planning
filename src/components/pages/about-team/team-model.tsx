import Image from "next/image";

const EYEBROW = "Team model";
const HEADLINE = "One point of contact. A coordinated team behind it.";
const BODY =
  "The relationship stays continuous: one point of contact, with coordinated practice depth behind it. Roles and introductions are added here only as each is confirmed.";
const CENTER_LABEL = "One point of contact";

/** Workplace scenes only — never presented as staff, so purely decorative. */
const ORBITS = [
  { src: "team-model-hallway", size: "8.5rem", left: "13%", top: "20%" },
  { src: "team-model-conference", size: "9.5rem", left: "63%", top: "13%" },
  { src: "team-model-files", size: "8rem", left: "89%", top: "44%" },
  { src: "team-model-tablet", size: "8rem", left: "72%", top: "80%" },
  { src: "team-model-notebook", size: "8.5rem", left: "27%", top: "83%" },
] as const;

function OrbitLines(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 100 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="1"
      opacity="0.7"
    >
      {[
        "M41 39.6 L13 18",
        "M41 39.6 L63 11.7",
        "M41 39.6 L89 39.6",
        "M41 39.6 L72 72",
        "M41 39.6 L27 74.7",
      ].map((d) => (
        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

function CenterNode(): React.JSX.Element {
  return (
    <p className="tem-diagram-center">
      <span className="px-5 font-body text-body-s font-semibold tracking-[0.14em] text-ivory uppercase">
        {CENTER_LABEL}
      </span>
    </p>
  );
}

/**
 * 04-team-model. The coordination model at a non-biographical level: a
 * central live-text node ringed in gold, five workplace scenes — never
 * named staff — orbiting it on a dotted mist field. On mobile the diagram
 * converts to a single vertical rail in source order.
 */
export function TeamModel(): React.JSX.Element {
  return (
    <section
      id="team-model"
      aria-labelledby="team-model-heading"
      className="tem-model relative overflow-hidden"
    >
      <div className="va-shell relative z-10 py-20 lg:py-24">
        <span aria-hidden="true" className="tem-seam tem-seam-top" />
        <span aria-hidden="true" className="tem-seam tem-seam-bottom" />
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold-text uppercase">
              {EYEBROW}
            </p>
            <h2
              id="team-model-heading"
              className="va-reveal mt-5 max-w-[16ch] font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink"
            >
              {HEADLINE}
            </h2>
            <p className="mt-6 max-w-[42ch] font-body text-body-m leading-[1.65] text-charcoal">
              {BODY}
            </p>
          </div>
          <div className="tem-diagram hidden lg:col-span-7 lg:col-start-6 lg:block">
            <OrbitLines />
            <CenterNode />
            {ORBITS.map((orbit) => (
              <figure
                key={orbit.src}
                className="tem-orbit"
                style={{ left: orbit.left, top: orbit.top, width: orbit.size, height: orbit.size }}
              >
                <Image
                  src={`/images/design/about--team/media/${orbit.src}.png`}
                  alt=""
                  aria-hidden="true"
                  width={156}
                  height={156}
                />
              </figure>
            ))}
          </div>
          <div className="tem-model-rail lg:hidden">
            <CenterNode />
            {ORBITS.map((orbit) => (
              <figure key={orbit.src} className="tem-orbit h-28 w-28">
                <Image
                  src={`/images/design/about--team/media/${orbit.src}.png`}
                  alt=""
                  aria-hidden="true"
                  width={156}
                  height={156}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
