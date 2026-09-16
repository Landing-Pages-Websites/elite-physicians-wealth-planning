const AUDIENCE = {
  headline:
    "For medical professionals who want a framework, not a product recommendation.",
  body: "Physicians, surgeons, dentists, advanced practice providers, practice owners, and healthcare executives can use the framework for education and discussion.",
} as const;

interface AudienceCrop {
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const MEDIA = "/images/design/physician-tax-retirement-guide/media";

const CROPS: readonly AudienceCrop[] = [
  {
    label: "Physicians & advanced practice providers",
    src: `${MEDIA}/audience-physician.jpg`,
    width: 292,
    height: 235,
    alt: "Physician in a white coat reviewing notes on a tablet",
  },
  {
    label: "Surgeons",
    src: `${MEDIA}/audience-surgeon.jpg`,
    width: 215,
    height: 245,
    alt: "Surgeon in scrubs walking down a hospital corridor",
  },
  {
    label: "Dentists",
    src: `${MEDIA}/audience-dentist.jpg`,
    width: 268,
    height: 220,
    alt: "Gloved hand selecting an instrument from a dental tray",
  },
  {
    label: "Practice owners",
    src: `${MEDIA}/audience-practice-owner.jpg`,
    width: 315,
    height: 189,
    alt: "Practice owner in a white coat writing in an open planning notebook",
  },
  {
    label: "Healthcare executives",
    src: `${MEDIA}/audience-executive.jpg`,
    width: 345,
    height: 181,
    alt: "Healthcare executive carrying a leather portfolio through an office corridor",
  },
] as const;

function AudienceFigure({ crop }: { crop: AudienceCrop }): React.JSX.Element {
  return (
    <figure className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] shadow-[0_18px_40px_-30px_rgba(11,31,58,0.6)]">
        <img
          src={crop.src}
          alt={crop.alt}
          width={crop.width}
          height={crop.height}
          className="ptg-audience-media absolute inset-0 h-full w-full"
        />
      </div>
      <figcaption className="-mt-3 ml-3 inline-block max-w-[calc(100%-1.5rem)] bg-ink px-3 py-1.5 font-body text-[10.5px] font-semibold tracking-[0.14em] text-ivory uppercase">
        {crop.label}
      </figcaption>
    </figure>
  );
}

/**
 * 03-who-it-is-for — audience-fit spread on white: copy holds the left field,
 * five profession-context crops form an offset constellation at right with
 * live navy label tabs. No faces presented as named staff.
 */
export function WhoItIsFor(): React.JSX.Element {
  return (
    <section
      id="who-it-is-for"
      aria-labelledby="who-it-is-for-heading"
      className="ptg-audience relative overflow-hidden"
    >
      <span aria-hidden="true" className="ptg-seam top-0 h-10" />
      <div className="relative z-10 va-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <div>
          <h2
            id="who-it-is-for-heading"
            className="max-w-[22ch] text-display-m font-display leading-[1.14] font-medium tracking-[-0.02em] text-balance text-ink"
          >
            {AUDIENCE.headline}
          </h2>
          <p className="mt-6 max-w-[46ch] font-body text-body-m leading-[1.62] text-charcoal/85 text-pretty">
            {AUDIENCE.body}
          </p>
        </div>

        {/* Offset constellation: three staggered rails, never an equal grid. */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-3">
          <div className="grid content-start gap-6 pt-14">
            <AudienceFigure crop={CROPS[1]} />
            <AudienceFigure crop={CROPS[3]} />
          </div>
          <div className="grid content-start gap-6">
            <AudienceFigure crop={CROPS[0]} />
            <AudienceFigure crop={CROPS[4]} />
          </div>
          <div className="grid content-start gap-6 pt-28">
            <AudienceFigure crop={CROPS[2]} />
          </div>
        </div>

        {/* Mobile rail in source order. */}
        <div className="grid gap-7 sm:hidden">
          {CROPS.map((crop) => (
            <AudienceFigure key={crop.label} crop={crop} />
          ))}
        </div>
      </div>
      <span aria-hidden="true" className="ptg-seam bottom-0 h-10" />
    </section>
  );
}
