import { MailIcon, MessageIcon, PhoneIcon } from "@/components/site/icons";

/**
 * 04-communications-privacy. Ivory band: the disclosure in a white panel
 * (with the not-secure phrase carrying the ref's gold emphasis), then the
 * live navy channel bar over the communications still-life band. The bar
 * is HTML — the baked copy in the source's top sliver is cropped by CSS.
 */
const LEAD = "If you provide contact information, Fiscal Vision Financial may contact you about your inquiry. ";
const EMPHASIS = "Email is not a secure channel";
const TAIL =
  "; please do not send sensitive personal, medical, tax, legal, or account information by email or through website forms.";

const CHANNELS = [
  { label: "email", icon: MailIcon },
  { label: "text", icon: MessageIcon },
  { label: "phone", icon: PhoneIcon },
] as const;

const BAND = {
  src: "/images/design/privacy-disclosures/media/privacy-communications-still-life.jpg",
  alt: "Desk telephone, blank envelope, navy notebook, and stethoscope arranged on a dark desk",
} as const;

function ChannelBar(): React.JSX.Element {
  return (
    <ul className="grid grid-cols-3 bg-ink">
      {CHANNELS.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="flex items-center justify-center gap-2.5 border-l border-ivory/15 py-3.5 first:border-l-0"
        >
          <Icon className="h-4 w-4 text-gold" />
          <span className="font-body text-body-s font-medium text-ivory">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CommunicationsPrivacy(): React.JSX.Element {
  return (
    <section
      id="communications-privacy"
      aria-labelledby="communications-privacy-heading"
      className="pvd-seam-in pvd-seam-out relative bg-ivory"
    >
      <div className="va-shell py-20 lg:py-24">
        <h2
          id="communications-privacy-heading"
          className="max-w-[22ch] font-display text-display-m leading-[1.1] font-medium tracking-[-0.02em] text-ink"
        >
          Email, text, and phone communications.
        </h2>

        <div className="mt-8 max-w-[46rem] rounded-sm border border-ink/12 bg-white px-6 py-6 sm:px-8">
          <p className="font-body text-body-m leading-[1.7] text-charcoal">
            {LEAD}
            <strong className="font-semibold text-gold-text underline decoration-gold underline-offset-4">
              {EMPHASIS}
            </strong>
            {TAIL}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-ink/10">
          <ChannelBar />
          <div className="pvd-comm-band">
            <img src={BAND.src} alt={BAND.alt} width={1536} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
