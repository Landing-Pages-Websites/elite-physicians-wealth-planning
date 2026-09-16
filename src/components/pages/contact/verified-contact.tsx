import type { ReactNode } from "react";
import {
  CalendarClockIcon,
  InfoIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/site/icons";
import { BRAND, telHref } from "@/lib/content";

/**
 * 02-verified-contact. Ivory strip: three contact nodes on one horizontal
 * gold thread — phone, email, hours — with the address-hold note beneath.
 * Only input-trusted details appear; there is no street address.
 */
/* The manifest's address_note is internal reconciliation language; the
   customer-facing truth is simply that meetings are arranged by appointment
   through these verified channels — no street address is published. */
const ADDRESS_NOTE =
  "Meetings are arranged by appointment through the phone and email above.";

function ContactNode({
  icon,
  value,
  action,
}: {
  icon: ReactNode;
  value: ReactNode;
  action?: { label: string; href: string };
}): React.JSX.Element {
  return (
    <li className="flex items-start gap-4">
      <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/70 bg-white text-ink">
        {icon}
      </span>
      <span className="pt-0.5">
        <span className="block font-body text-body-m font-semibold text-ink">
          {value}
        </span>
        {action ? (
          <a
            href={action.href}
            className="-my-1 inline-flex min-h-9 items-center font-body text-body-s font-medium text-gold-text underline underline-offset-4 transition-colors duration-150 hover:text-ink"
          >
            {action.label}
          </a>
        ) : null}
      </span>
    </li>
  );
}

export function VerifiedContact(): React.JSX.Element {
  return (
    <section
      id="verified-contact"
      aria-labelledby="verified-contact-heading"
      className="cnt-verified cnt-seam-in cnt-seam-out relative"
    >
      <div className="va-shell py-16 lg:py-20">
        <h2
          id="verified-contact-heading"
          className="font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
        >
          Verified public contact.
        </h2>

        <ul className="cnt-node-rail relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          <ContactNode
            icon={<PhoneIcon className="h-4.5 w-4.5" />}
            value={BRAND.phone}
            action={{ label: "Call", href: telHref() }}
          />
          <ContactNode
            icon={<MailIcon className="h-4.5 w-4.5" />}
            value={BRAND.email}
            action={{ label: "Email", href: `mailto:${BRAND.email}` }}
          />
          <ContactNode
            icon={<CalendarClockIcon className="h-4.5 w-4.5" />}
            value={BRAND.hours}
          />
        </ul>

        <p className="mt-10 flex items-start gap-2.5 border-t border-gold/30 pt-5 font-body text-body-s leading-[1.6] text-charcoal/75">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-text" />
          {ADDRESS_NOTE}
        </p>
      </div>
    </section>
  );
}
