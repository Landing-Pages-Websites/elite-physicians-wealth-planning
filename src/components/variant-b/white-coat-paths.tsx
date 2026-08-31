import Image from "next/image";
import { LINKS, WHITE_COAT_PATHS } from "@/lib/content";
import GoldArrow from "./gold-arrow";

const IMAGE_ROOT = "/images/design/b/06-white-coat-paths";

/** Mosaic cards in DOM order: grid auto-placement puts the dental card under the intro. */
const CARDS = [
  {
    pathway: WHITE_COAT_PATHS.pathways[0],
    src: `${IMAGE_ROOT}/physicians-specialists.jpg`,
    alt: "Physician in a white coat reviewing paperwork with a patient during a consultation",
    aspect: "aspect-[478/272]",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[1],
    src: `${IMAGE_ROOT}/surgeons.jpg`,
    alt: "Surgeon tying a surgical cap in an operating room",
    aspect: "aspect-[445/272]",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[2],
    src: `${IMAGE_ROOT}/dentists-dental-specialists.jpg`,
    alt: "Dental treatment chair and overhead equipment in a modern dental operatory",
    aspect: "aspect-[448/149] max-lg:aspect-[448/200]",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[3],
    src: `${IMAGE_ROOT}/practice-owners-partners.jpg`,
    alt: "Hands reviewing financial planning paperwork spread across a meeting table",
    aspect: "aspect-[545/213]",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[4],
    src: `${IMAGE_ROOT}/healthcare-executives.jpg`,
    alt: "White-coated healthcare professional walking down a clinical office corridor, seen from behind",
    aspect: "aspect-[445/213]",
  },
] as const;

function DiagonalRail({ className, flip }: { className: string; flip?: boolean }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 320 160"
      aria-hidden="true"
      fill="none"
      className={`pointer-events-none absolute text-ink/40 ${className} ${flip ? "rotate-180" : ""}`}
    >
      <line x1="0" y1="10" x2="320" y2="150" stroke="currentColor" strokeWidth="1.5" />
      {[0.2, 0.45, 0.7].map((t) => (
        <line
          key={t}
          x1={320 * t - 4}
          y1={10 + 140 * t + 6}
          x2={320 * t + 4}
          y2={10 + 140 * t - 6}
          stroke="currentColor"
        />
      ))}
      <circle cx={320 * 0.32} cy={10 + 140 * 0.32} r="4" className="fill-gold stroke-white" />
      <circle cx={320 * 0.85} cy={10 + 140 * 0.85} r="4" className="fill-gold stroke-white" />
    </svg>
  );
}

function AudienceCard({ card }: { card: (typeof CARDS)[number] }): React.JSX.Element {
  return (
    <figure className="self-start border border-white/90 bg-white shadow-[0_14px_36px_rgba(11,31,58,0.08)]">
      <div className={`relative overflow-hidden bg-mist ${card.aspect}`}>
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="scale-[1.12] object-cover"
        />
      </div>
      <figcaption className="relative py-4 pl-8 pr-5">
        <span aria-hidden="true" className="absolute bottom-4 left-4 top-4 w-px bg-gold" />
        <span aria-hidden="true" className="absolute left-[11.5px] top-5 h-[9px] w-[9px] rounded-full bg-gold" />
        <h3 className="text-base font-bold leading-snug text-ink">{card.pathway.audience}</h3>
        <p className="mt-1 text-sm leading-relaxed text-charcoal">{card.pathway.decision}</p>
      </figcaption>
    </figure>
  );
}

export default function WhiteCoatPaths(): React.JSX.Element {
  return (
    <section
      id="white-coat-paths"
      aria-labelledby="white-coat-paths-heading"
      className="relative overflow-hidden bg-mist"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/40"
      />
      <DiagonalRail className="-left-10 -top-6 h-40 w-80" />
      <DiagonalRail className="-bottom-6 -right-10 h-40 w-80" flip />
      <div className="relative mx-auto max-w-[92rem] px-6 py-16 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:pr-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
              {WHITE_COAT_PATHS.orientation}
            </p>
            <h2
              id="white-coat-paths-heading"
              className="mt-4 max-w-[18ch] text-[clamp(1.9rem,3vw,2.7rem)] font-bold leading-[1.12] tracking-tight text-ink"
            >
              {WHITE_COAT_PATHS.headline}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal">
              {WHITE_COAT_PATHS.body}
            </p>
          </div>
          <AudienceCard card={CARDS[0]} />
          <AudienceCard card={CARDS[1]} />
          <AudienceCard card={CARDS[2]} />
          <AudienceCard card={CARDS[3]} />
          <AudienceCard card={CARDS[4]} />
        </div>
        <div className="mt-12">
          <a
            href={LINKS.planningPath}
            className="group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-ink/85 active:bg-ink"
          >
            {WHITE_COAT_PATHS.cta}
            <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-2 text-[10px] font-semibold text-charcoal/70">
            Navigate to the current planning overview
          </p>
        </div>
      </div>
    </section>
  );
}
