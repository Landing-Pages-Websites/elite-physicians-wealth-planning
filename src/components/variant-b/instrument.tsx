/**
 * The Decision Atlas's instrument furniture.
 *
 * Every approved frame in this direction is drawn as a surveyed page: ruled
 * measure scales down the margins, registration crosses in the field, target
 * rosettes at the corners, elbow brackets, and rules that terminate in a gold
 * node rather than stopping in space. That furniture is most of what makes the
 * frames read as deliberately designed — and it was the first thing I dropped,
 * which is exactly why the build looked like a template of the design instead
 * of the design.
 *
 * These are the shared parts. They are decorative by definition, so every one
 * is aria-hidden and none of them carries content.
 */

/** A ruled measure scale. Long tick every fifth, one gold index mark. */
export function TickRail({
  orientation = "vertical",
  ticks = 26,
  indexAt,
  className = "",
}: {
  orientation?: "vertical" | "horizontal";
  ticks?: number;
  /** Index of the tick that gets the gold node, if any. */
  indexAt?: number;
  className?: string;
}): React.JSX.Element {
  const vertical = orientation === "vertical";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex ${
        vertical ? "flex-col items-start" : "flex-row items-end"
      } justify-between ${className}`}
    >
      {Array.from({ length: ticks }, (_, i) => {
        const major = i % 5 === 0;
        const gold = i === indexAt;
        if (gold) {
          return (
            <span
              key={i}
              className="block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
            />
          );
        }
        return (
          <span
            key={i}
            className={`block shrink-0 bg-ink/45 ${
              vertical
                ? `h-px ${major ? "w-5" : "w-2.5"}`
                : `w-px ${major ? "h-3.5" : "h-2"}`
            }`}
          />
        );
      })}
    </div>
  );
}

/**
 * The horizontal scale bar that closes the lower-left of most frames: a solid
 * navy measured segment, then open divisions, ending on a gold node.
 */
export function ScaleBar({ className = "" }: { className?: string }): React.JSX.Element {
  return (
    <div aria-hidden="true" className={`pointer-events-none flex items-center ${className}`}>
      <span className="h-1.5 w-[18%] shrink-0 bg-ink" />
      <span className="relative h-px flex-1 bg-ink/45">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className="absolute top-1/2 h-2.5 w-px -translate-y-1/2 bg-ink/45"
            style={{ left: `${(i / 6) * 100}%` }}
          />
        ))}
      </span>
      <span className="ml-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
    </div>
  );
}

/** A rule that ends on a gold node — the direction's eyebrow underline. */
export function NodeRule({ className = "" }: { className?: string }): React.JSX.Element {
  return (
    <span aria-hidden="true" className={`flex items-center ${className}`}>
      <span className="h-px flex-1 bg-gold" />
      <span className="ml-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
    </span>
  );
}

/** Navy elbow bracket. `corner` names which corner of its box it hugs. */
export function CornerBracket({
  corner,
  className = "",
}: {
  corner: "tl" | "tr" | "bl" | "br";
  className?: string;
}): React.JSX.Element {
  const sides: Record<typeof corner, string> = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block border-ink/70 ${sides[corner]} ${className}`}
    />
  );
}

/** Small registration cross, scattered across the field in the frames. */
export function RegistrationCross({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
    >
      <path d="M6 0 V12 M0 6 H12" />
    </svg>
  );
}

/** Concentric target rosette with a gold centre — the frames' corner marks. */
export function TargetRosette({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={`pointer-events-none ${className}`}
      fill="none"
    >
      <circle cx="24" cy="24" r="23" stroke="var(--color-ink)" strokeOpacity="0.5" />
      <circle cx="24" cy="24" r="16" stroke="var(--color-ink)" strokeOpacity="0.35" />
      <circle cx="24" cy="24" r="9" stroke="var(--color-gold)" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="4" fill="var(--color-gold)" />
      <path
        d="M24 0 V8 M24 40 V48 M0 24 H8 M40 24 H48"
        stroke="var(--color-ink)"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/**
 * The outcome annotation the frames set beside a primary action — a small navy
 * chip naming what the button does, then a dashed leader to a gold node. It is
 * build documentation in the frame, so it is rendered only where the approved
 * page shows it and never invented for a control that has no stated outcome.
 */
export function OutcomeNote({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}): React.JSX.Element {
  return (
    <p
      className={`flex items-center gap-3 font-body text-[10px] tracking-[0.12em] text-charcoal/80 uppercase ${className}`}
    >
      <span className="shrink-0 bg-ink px-2 py-1 text-[9px] font-bold tracking-[0.18em] text-white">
        Outcome
      </span>
      <span className="normal-case tracking-normal">{label}</span>
      <span aria-hidden="true" className="vb-leader h-px flex-1" />
      <span aria-hidden="true" className="block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
    </p>
  );
}
