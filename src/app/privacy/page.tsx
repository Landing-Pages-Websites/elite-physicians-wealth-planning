import type { Metadata } from "next";
import Link from "next/link";

const BRAND = "Elite Physician Wealth Planning";
const PHONE = "(301) 259-1636";
const PHONE_HREF = "tel:3012591636";
const LP_URL = "https://book.elitephysicianswealthplanning.com/";
const PROD_URL = "https://elitephysicianswealthplanning.com/";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND}`,
  description: `How ${BRAND} collects, uses, and protects information, including optional SMS consent for consultation follow-up.`,
  robots: { index: false, follow: false },
};

/**
 * LP Privacy for book.elitephysicianswealthplanning.com.
 * Production privacy URLs currently unavailable — complete LP page created for 10DLC.
 * SMS / Text Messaging placed immediately before Contact us.
 */

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "Information we collect",
    body: [
      `When you request a complimentary consultation on ${LP_URL}, we collect the details you provide — such as your name, email address, phone number, tax-planning interest, and whether you currently have a written retirement plan — along with whether you opted in to SMS, plus basic technical data your browser sends automatically.`,
      "SMS and text messages are sent only if you check the optional SMS consent checkbox on the form. Providing a phone number or submitting the form without checking that box does not constitute consent to receive text messages.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use your information to respond to your consultation request, schedule your complimentary conversation, and provide coordinated tax and retirement planning services you ask about. We may also use information to operate and improve our websites and measure advertising performance. We do not sell your personal information.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      `We may share information with service providers who help us operate our websites, process leads, host our services, or deliver communications, and only as needed to provide those services. We may also disclose information if required by law or to protect the rights, property, or safety of ${BRAND}, our clients, or others.`,
    ],
  },
  {
    heading: "How we protect it",
    body: [
      "We apply reasonable safeguards to keep your information secure and limit access to team members who need it to serve you. No method of transmission or storage is completely secure.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us to update or delete the information you shared, or opt out of further contact, at any time by calling our team. You may opt out of SMS at any time by replying STOP.",
    ],
  },
  {
    heading: "SMS / Text Messaging",
    body: [
      `If you affirmatively check the optional SMS consent checkbox on ${LP_URL}, ${BRAND} may send you SMS/text messages. These messages may include consultation follow-up, appointment confirmations, reminders, scheduling updates, and service-related communications.`,
      "Providing a phone number or submitting the form without checking the SMS box does not constitute consent to receive text messages. Using this website does not constitute SMS consent. Calling our office is not SMS campaign opt-in.",
      "Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.",
      "All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your personal data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including platform providers, phone companies, and vendors who assist in delivering text messages.",
      "Your phone number is used solely for communicating with you about the inquiry or consultation request you submitted. Opt-in keywords: — (web form checkbox only).",
      "Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.",
      `For SMS help, call ${PHONE}.`,
    ],
  },
];

export default function PrivacyPage(): React.JSX.Element {
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
          Privacy Policy
        </h1>
        <p
          className="lp-muted"
          style={{ marginTop: "1.25rem", fontSize: "1.05rem", lineHeight: 1.65 }}
        >
          {BRAND} respects your privacy. This page explains what we collect when you use{" "}
          {PROD_URL} and {LP_URL}, or request a complimentary consultation, and how we use it.
          Last updated: September 2026.
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
              Questions about this policy? Call {BRAND} at{" "}
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
