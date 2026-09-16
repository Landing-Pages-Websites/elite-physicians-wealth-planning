import Image from "next/image";

const EYEBROW = "Our Team";
const HEADLINE = "Full team introductions arrive once each biography is confirmed.";
const BODY =
  "Elite Physicians Wealth Planning works as a coordinated team. Complete introductions — roster, biographies, and portraits — are published here only after each one is reviewed and approved.";

/**
 * 01-team-state-hero. The held state as a polished hero, not a fake
 * directory: navy team-room photograph (empty chairs, no faces) as the
 * canvas, live copy on the quiet left side, no CTA — the manifest keeps
 * this section static.
 */
export function TeamStateHero(): React.JSX.Element {
  return (
    <section
      id="team-state-hero"
      aria-labelledby="team-state-hero-heading"
      data-dark-band
      className="tem-hero relative overflow-hidden text-ivory"
    >
      <div className="va-shell relative z-10 pt-[calc(var(--header-h)+4rem)] pb-14 lg:min-h-[620px] lg:pb-24">
        <span aria-hidden="true" className="tem-seam tem-seam-bottom" />
        <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold uppercase">
          {EYEBROW}
        </p>
        <span aria-hidden="true" className="mt-3 block h-px w-14 bg-gold" />
        <h1
          id="team-state-hero-heading"
          className="va-reveal mt-6 max-w-[22ch] font-display text-display-l leading-[1.1] font-medium tracking-[-0.015em] text-balance text-ivory-bright"
        >
          {HEADLINE}
        </h1>
        <p className="mt-7 max-w-[48ch] font-body text-body-m leading-[1.65] text-mist/85 text-pretty">
          {BODY}
        </p>
      </div>
      <div className="tem-hero-media">
        <Image
          src="/images/design/about--team/media/team-hero-office-right.jpg"
          alt=""
          aria-hidden="true"
          width={806}
          height={724}
          priority
        />
      </div>
    </section>
  );
}
