import { ContactForm } from "@/components/pages/contact/contact-form";
import { BRAND, telHref } from "@/lib/content";

/**
 * 03-contact-form. Mist inquiry dossier: tall desk rail at left, the white
 * form panel carrying the grouped fieldsets at right. The manifest's
 * routing gate resolves here — inquiries submit through the site's
 * configured MEGA lead pipeline — so the live form replaces the held-state
 * preview, with the verified phone/email fallback kept beneath it.
 */
const RAIL = {
  src: "/images/design/contact/media/contact-form-left-desk.jpg",
  alt: "Navy document box, blank kraft paper, and a pen on a wooden desk",
} as const;

function FallbackLine(): React.JSX.Element {
  const link =
    "font-medium text-ink underline underline-offset-4 transition-colors duration-150 hover:text-gold-text";
  return (
    <p className="mt-6 font-body text-body-s leading-[1.6] text-charcoal">
      For immediate contact, call{" "}
      <a href={telHref()} className={link}>
        {BRAND.phone}
      </a>{" "}
      or email{" "}
      <a href={`mailto:${BRAND.email}`} className={link}>
        {BRAND.email}
      </a>
      .
    </p>
  );
}

export function ContactFormSection(): React.JSX.Element {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="cnt-form-band cnt-seam-in cnt-seam-out relative"
    >
      <div className="va-shell grid gap-10 py-20 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14 lg:py-24">
        <div className="order-2 lg:order-1">
          <figure className="cnt-form-rail hidden h-full min-h-[36rem] rounded-sm border border-ink/10 lg:block">
            <img src={RAIL.src} alt={RAIL.alt} width={350} height={864} />
          </figure>
          <figure className="cnt-form-rail h-44 rounded-sm border border-ink/10 lg:hidden">
            <img src={RAIL.src} alt={RAIL.alt} width={350} height={864} />
          </figure>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            id="contact-form-heading"
            className="max-w-[22ch] font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            Start with a confidential inquiry.
          </h2>
          <div className="cnt-form-panel mt-8 rounded-sm p-6 sm:p-9">
            <ContactForm />
          </div>
          <FallbackLine />
        </div>
      </div>
    </section>
  );
}
