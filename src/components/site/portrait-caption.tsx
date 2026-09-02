import { ACCOUNTABLE_PLANNER } from "@/lib/content";

/**
 * The portrait caption, in both the hero and the planner section.
 *
 * Exists because `text-transform: uppercase` on the whole string corrupts the
 * registered designations: "ChFC®" renders as "CHFC®". hard_rules permit
 * Michael A. Epps to be identified with the verified ChFC® and RICP®
 * designations and no others — rendering them in the wrong case misstates the
 * marks, so the name takes the letterspaced caps treatment and the
 * designations keep their registered capitalisation.
 */
export function PortraitCaption({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  const full: string = ACCOUNTABLE_PLANNER.name;
  const commaIndex = full.indexOf(",");
  const name = commaIndex === -1 ? full : full.slice(0, commaIndex);
  const credentials = commaIndex === -1 ? "" : full.slice(commaIndex + 1).trim();

  return (
    <figcaption
      className={`px-2 pt-3 pb-1 text-center font-body font-semibold text-ink ${className}`}
    >
      <span className="tracking-[0.18em] uppercase">{name}</span>
      {credentials ? (
        <>
          <span aria-hidden="true">, </span>
          <span className="tracking-[0.04em]">{credentials}</span>
        </>
      ) : null}
    </figcaption>
  );
}
