import { MailIcon, PhoneIcon } from "@/components/site/icons";
import { BRAND, telHref } from "@/lib/content";

/**
 * 05-contact-for-questions. Navy utility strip closing the page with the
 * verified routes only: heading left, phone and email right, the legal-desk
 * texture as a veiled bottom band. The page's minimal gold marks end here.
 */
const TEXTURE = {
  src: "/images/design/privacy-disclosures/media/privacy-contact-legal-desk.jpg",
} as const;

const LINK =
  "-my-1 inline-flex min-h-11 items-center gap-3 font-body text-body-m font-medium text-ivory underline underline-offset-4 transition-colors duration-150 hover:text-gold";

export function ContactForQuestions(): React.JSX.Element {
  return (
    <section
      id="contact-for-questions"
      aria-labelledby="contact-for-questions-heading"
      data-dark-band
      className="pvd-contact pvd-seam-in relative overflow-hidden"
    >
      <div className="pvd-contact-texture" aria-hidden="true">
        <img src={TEXTURE.src} alt="" width={1536} height={197} />
      </div>

      <div className="va-shell relative z-10 grid items-center gap-10 py-16 pb-36 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:py-20 lg:pb-40">
        <div>
          <h2
            id="contact-for-questions-heading"
            className="max-w-[20ch] font-display text-display-m leading-[1.1] font-medium tracking-[-0.02em] text-ivory-bright"
          >
            Questions about privacy or disclosures.
          </h2>
          <div aria-hidden="true" className="mt-7 h-px w-40 bg-ivory/30" />
        </div>

        <ul className="grid gap-4">
          <li>
            <a href={telHref()} className={LINK}>
              <PhoneIcon className="h-4.5 w-4.5 text-gold" />
              {BRAND.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${BRAND.email}`} className={LINK}>
              <MailIcon className="h-4.5 w-4.5 text-gold" />
              {BRAND.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
