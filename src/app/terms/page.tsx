import type { Metadata } from "next";
import Link from "next/link";

const BRAND = "Elite Physician Wealth Planning";
const PHONE = "(301) 259-1636";
const PHONE_HREF = "tel:3012591636";
const LP_URL = "https://book.elitephysicianswealthplanning.com/";
const PROD_URL = "https://elitephysicianswealthplanning.com/";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BRAND}`,
  description: `Terms for using ${BRAND} websites and requesting a complimentary consultation, including SMS messaging terms.`,
  robots: { index: false, follow: false },
};

/**
 * LP Terms for book.elitephysicianswealthplanning.com.
 * Production terms URLs currently unavailable — complete LP page created for 10DLC.
 * SMS / Text Messaging placed immediately before Contact us.
 */

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "Agreement",
    body: [
      `By using ${PROD_URL} or ${LP_URL}, or by submitting a complimentary consultation request, you agree to these Terms & Conditions. If you do not agree, please do not use these websites or submit the form.`,
    ],
  },
  {
    heading: "Services",
    body: [
      `${BRAND} provides educational information and complimentary consultations about coordinated tax and retirement planning for physicians. Information on these websites is educational only and is not individualized investment, tax, or legal advice. We coordinate alongside your CPA, TPA, attorney, and insurance professionals and do not replace those professionals or claim to perform their licensed services.`,
    ],
  },
  {
    heading: "Consultation requests",
    body: [
      "Submitting the form requests a complimentary introductory conversation. It does not create an advisory relationship, guarantee availability, or obligate you to engage our services. You agree to provide accurate contact information so we can respond to your request.",
    ],
  },
  {
    heading: "Privacy",
    body: [
      `Our Privacy Policy at https://book.elitephysicianswealthplanning.com/privacy explains how we collect and use personal information, including optional SMS consent.`,
    ],
  },
  {
    heading: "SMS / Text Messaging",
    body: [
      `If you check the optional SMS consent checkbox on ${LP_URL}, you agree that ${BRAND} may send customer-care text messages about consultation follow-up, appointment confirmations, reminders, scheduling updates, and service-related communications.`,
      `Providing a phone number is not SMS consent. Visiting the website is not SMS consent. Calling ${PHONE} is not campaign keyword opt-in. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.`,
      "Your mobile information will not be sold or shared with third parties for promotional or marketing purposes. Opt-in keywords: — (web form checkbox only).",
      `For SMS help, call ${PHONE}.`,
    ],
  },
];

export default function TermsPage(): React.JSX.Element {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-ivory, #f6f2e8)" }}>
      <header
        style={{
          background: "var(--color-ink, #0b1f3a)",
          padding: "1.25rem 0",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: 880,
            padding: "0 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            className="lp-display"
            style={{
              color: "var(--color-ivory, #f6f2e8)",
              fontSize: "1.15rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            {BRAND}
          </Link>
          <Link
            href="/"
            style={{
              color: "rgba(246,242,232,0.85)",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
        </div>
      </header>

      <article style={{ margin: "0 auto", maxWidth: 880, padding: "3.5rem 1.25rem" }}>
        <p
          style={{
            color: "var(--color-gold-text, #7e642a)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {BRAND}
        </p>
        <h1
          className="lp-display"
          style={{
            marginTop: "0.75rem",
            color: "var(--color-ink, #0b1f3a)",
            fontSize: "clamp(1.85rem, 4vw, 2.5rem)",
            lineHeight: 1.15,
          }}
        >
          Terms &amp; Conditions
        </h1>
        <p
          className="lp-muted"
          style={{ marginTop: "1.25rem", fontSize: "1.05rem", lineHeight: 1.65 }}
        >
          These terms govern use of {PROD_URL} and {LP_URL}, including complimentary consultation
          requests. Last updated: September 2026.
        </p>

        <div style={{ marginTop: "2.5rem", display: "grid", gap: "2rem" }}>
          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2
                style={{
                  color: "var(--color-ink, #0b1f3a)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                {section.heading}
              </h2>
              {section.body.map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="lp-muted"
                  style={{ marginTop: "0.65rem", fontSize: "0.95rem", lineHeight: 1.65 }}
                >
                  {para}
                </p>
              ))}
            </section>
          ))}

          <section>
            <h2
              style={{
                color: "var(--color-ink, #0b1f3a)",
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              Contact us
            </h2>
            <p className="lp-muted" style={{ marginTop: "0.65rem", fontSize: "0.95rem", lineHeight: 1.65 }}>
              Questions about these terms? Call {BRAND} at{" "}
              <a href={PHONE_HREF} style={{ fontWeight: 600, color: "var(--color-ink, #0b1f3a)" }}>
                {PHONE}
              </a>
              .
            </p>
          </section>
        </div>

        <p className="lp-hint" style={{ marginTop: "3rem" }}>
          © {new Date().getFullYear()} {BRAND}. Educational information only; not investment, tax,
          or legal advice.
        </p>
      </article>
    </main>
  );
}
