import type { ReactNode } from "react";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "@/components/site/icons";
import { BRAND, telHref } from "@/lib/content";

/**
 * 04-fallback-contact. White decision field: heading and the two verified
 * routes at left, the extracted ledger still life as a framed plate at
 * right. Route rows follow the ref's icon → value → label reading line.
 */
/* The manifest body for this frame is production guidance ("…instead of fake
   calendar slots"), not visitor copy; the truth contract renders its
   customer-facing equivalent without inventing any new claim. */
const COPY = {
  headline: "If the calendar cannot load.",
  body: "Call or email the office directly to arrange a time.",
} as const;

const PLATE = {
  src: "/images/design/schedule/media/schedule-fallback-ledger.jpg",
  alt: "Dark consult ledger and fountain pen on a bright desk beneath a framed etching",
} as const;

function ContactRoute({
  href,
  icon,
  value,
  label,
}: {
  href: string;
  icon: ReactNode;
  value: string;
  label: string;
}): React.JSX.Element {
  return (
    <li className="border-b border-ink/10 py-5 first:border-t last:border-b-0 sm:last:border-b">
      <a
        href={href}
        className="group flex min-h-11 flex-wrap items-center gap-x-4 gap-y-1"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/70 text-gold-text transition-colors duration-150 group-hover:bg-gold group-hover:text-ink">
          {icon}
        </span>
        <span className="font-body text-body-l font-semibold text-ink underline decoration-gold/60 underline-offset-4 transition-colors duration-150 group-hover:decoration-gold">
          {value}
        </span>
        <span className="flex items-center gap-2 font-body text-body-s text-charcoal/80">
          <ArrowRightIcon className="h-3.5 w-3.5 text-gold-text" />
          {label}
        </span>
      </a>
    </li>
  );
}

export function FallbackContact(): React.JSX.Element {
  return (
    <section
      id="fallback-contact"
      aria-labelledby="fallback-contact-heading"
      className="sch-seam-in sch-seam-out relative bg-white"
    >
      <div className="va-shell grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-20 lg:py-24">
        <div>
          <h2
            id="fallback-contact-heading"
            className="font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            {COPY.headline}
          </h2>
          <p className="mt-5 max-w-[48ch] font-body text-body-m leading-[1.65] text-charcoal">
            {COPY.body}
          </p>
          <ul className="mt-9 max-w-[30rem]">
            <ContactRoute
              href={telHref()}
              icon={<PhoneIcon className="h-4.5 w-4.5" />}
              value={BRAND.phone}
              label="Call the office"
            />
            <ContactRoute
              href={`mailto:${BRAND.email}`}
              icon={<MailIcon className="h-4.5 w-4.5" />}
              value={BRAND.email}
              label="Email the firm"
            />
          </ul>
        </div>

        <figure className="sch-fallback-plate rounded-sm">
          <img src={PLATE.src} alt={PLATE.alt} width={736} height={600} />
        </figure>
      </div>
    </section>
  );
}
