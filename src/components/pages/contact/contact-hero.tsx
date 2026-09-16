import { ArrowRightIcon } from "@/components/site/icons";

/**
 * 01-contact-hero. Navy image-as-canvas: the extracted advisory office owns
 * the right field, copy the quiet left. The ref's soft ivory arc carries
 * the seam into the verified-contact strip.
 */
const HERO = {
  eyebrow: "Contact",
  headline: "Contact Elite Physicians Wealth Planning.",
  body: "Reach out about a planning relationship, a guide request, or referral coordination.",
  cta: "Send a Message",
} as const;

const MEDIA = {
  src: "/images/design/contact/media/contact-hero-office-right.jpg",
  alt: "Lamplit advisory desk with a stethoscope, blank correspondence, and a framed anatomical etching",
} as const;

export function ContactHero(): React.JSX.Element {
  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
      data-dark-band
      className="cnt-hero cnt-seam-out relative overflow-hidden"
    >
      <div className="cnt-hero-media hidden lg:block" aria-hidden="true">
        <img src={MEDIA.src} alt="" width={776} height={780} />
      </div>
      <div className="cnt-hero-veil hidden lg:block" aria-hidden="true" />

      <div className="va-shell relative z-10 pt-[calc(var(--header-h)+4.5rem)] pb-24 lg:pb-32">
        <div className="max-w-[30rem]">
          <p className="font-body text-[12px] font-semibold tracking-[0.28em] text-gold uppercase">
            {HERO.eyebrow}
          </p>
          <h1
            id="contact-hero-heading"
            className="mt-5 font-display text-display-l leading-[1.06] font-medium tracking-[-0.02em] text-balance text-ivory-bright"
          >
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-[42ch] font-body text-body-l leading-[1.65] text-ivory/75">
            {HERO.body}
          </p>
          <a href="#contact-form" className="va-btn va-btn-gold mt-9">
            {HERO.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="cnt-hero-media-mobile lg:hidden">
        <img src={MEDIA.src} alt={MEDIA.alt} width={776} height={780} />
      </div>

      <div className="cnt-hero-curve hidden lg:block" aria-hidden="true" />
    </section>
  );
}
