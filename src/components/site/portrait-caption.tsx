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
/** The single split of "Michael A. Epps, ChFC®, RICP®" used site-wide. */
export function splitNameCredentials(): {
  name: string;
  credentials: string;
} {
  const full: string = ACCOUNTABLE_PLANNER.name;
  const commaIndex = full.indexOf(",");
  if (commaIndex === -1) {
    return { name: full, credentials: "" };
  }
  return {
    name: full.slice(0, commaIndex),
    credentials: full.slice(commaIndex + 1).trim(),
  };
}

export function PortraitCaption({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  const { name, credentials } = splitNameCredentials();

  return (
    <figcaption
      className={`px-2 pt-3 pb-1 text-center font-body font-semibold text-ink ${className}`}
    >
      <span className="tracking-[0.18em] uppercase">{name}</span>
      {credentials ? (
        <>
          <span>, </span>
          <span className="tracking-[0.04em]">{credentials}</span>
        </>
      ) : null}
    </figcaption>
  );
}
