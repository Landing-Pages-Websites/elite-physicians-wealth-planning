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
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[1],
    src: `${IMAGE_ROOT}/surgeons.jpg`,
    alt: "Surgeon tying a surgical cap in an operating room",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[2],
    src: `${IMAGE_ROOT}/dentists-dental-specialists.jpg`,
    alt: "Dental treatment chair and overhead equipment in a modern dental operatory",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[3],
    src: `${IMAGE_ROOT}/practice-owners-partners.jpg`,
    alt: "Hands reviewing financial planning paperwork spread across a meeting table",
  },
  {
    pathway: WHITE_COAT_PATHS.pathways[4],
    src: `${IMAGE_ROOT}/healthcare-executives.jpg`,
    alt: "White-coated healthcare professional walking down a clinical office corridor, seen from behind",
  },
] as const;

function AudienceCard({ card }: { card: (typeof CARDS)[number] }): React.JSX.Element {
  return (
    <figure className="flex h-full flex-col border border-white/90 bg-white shadow-[0_14px_36px_rgba(11,31,58,0.08)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-mist">
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
      <div className="relative mx-auto max-w-[92rem] px-6 py-16 lg:py-20">
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          <div className="lg:pb-8 lg:pr-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
              {WHITE_COAT_PATHS.orientation}
            </p>
            <h2
              id="white-coat-paths-heading"
              className="mt-4 text-display-m font-bold leading-[1.12] tracking-[-0.02em] text-balance text-ink"
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
        <div className="mt-10">
          <a
            href={LINKS.planningPath}
            className="group va-btn va-btn-navy whitespace-nowrap"
          >
            {WHITE_COAT_PATHS.cta}
            <GoldArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
