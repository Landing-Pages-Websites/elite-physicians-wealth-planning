import type { Metadata } from "next";
import { BookingAlternative } from "@/components/pages/contact/booking-alternative";
import { ContactFormSection } from "@/components/pages/contact/contact-form-section";
import { ContactHero } from "@/components/pages/contact/contact-hero";
import { DisclosureBoundary } from "@/components/pages/contact/disclosure-boundary";
import { ReferralContext } from "@/components/pages/contact/referral-context";
import { VerifiedContact } from "@/components/pages/contact/verified-contact";
import { routeMetadata } from "@/lib/routes";
import "./contact.css";

export const metadata: Metadata = routeMetadata(
  "contact",
  "Contact Elite Physicians Wealth Planning about a planning relationship, a guide request, or referral coordination. Call 301-242-3929 or email the firm.",
);

/**
 * /contact — section order, seams and background progression follow the
 * approved page_flow: navy hero → ivory contact strip → mist form → white
 * referral ledger → ivory booking panel → navy disclosure strip.
 */
export default function ContactPage(): React.JSX.Element {
  return (
    <main id="main">
      <ContactHero />
      <VerifiedContact />
      <ContactFormSection />
      <ReferralContext />
      <BookingAlternative />
      <DisclosureBoundary />
    </main>
  );
}
