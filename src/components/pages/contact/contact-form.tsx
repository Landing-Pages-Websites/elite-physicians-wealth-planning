"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { BRAND, telHref } from "@/lib/content";
import { submitSiteInquiry } from "@/lib/mega-submission";

/**
 * The /contact inquiry form, modeled on the shared strategy-call form:
 * validate-first submit (type="button" → validate → requestSubmit), an
 * off-screen honeypot, aria-invalid/aria-describedby error wiring, and
 * visible sending/sent/failed states. Delivery goes through the same MEGA
 * lead pipeline; the conversion dataLayer event fires inside
 * submitSiteInquiry only on confirmed receipt — never from here.
 */
type Status = "idle" | "invalid" | "sending" | "sent" | "failed";

const INQUIRY_TYPES = [
  "Planning relationship",
  "Guide request",
  "Referral coordination",
  "General question",
] as const;

/** The five approved planning disciplines; nothing invented. */
const PLANNING_CONCERNS = [
  "Tax planning",
  "Wealth management",
  "Retirement planning",
  "Practice planning",
  "Legacy planning",
  "Not sure yet",
] as const;

const PRIVACY_NOTE =
  "Please do not submit sensitive personal, medical, tax, legal, or account information.";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialtyOrganization: string;
  inquiryType: string;
  planningConcern: string;
  message: string;
  consent: boolean;
};

const EMPTY: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialtyOrganization: "",
  inquiryType: "",
  planningConcern: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address looks incomplete.";
  }
  if (!values.inquiryType) errors.inquiryType = "Choose an inquiry type.";
  if (!values.message.trim()) errors.message = "Add a short message.";
  if (!values.consent) errors.consent = "Please acknowledge the disclosures.";
  return errors;
}

const FIELD =
  "w-full rounded-sm border border-ink/20 bg-white px-4 py-3 font-body text-[15px] text-ink placeholder:text-charcoal/50 transition-colors duration-150 hover:border-ink/40 focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold";
const LABEL = "mb-1.5 block font-body text-[13px] font-medium text-charcoal";
const ERROR = "mt-1.5 block font-body text-[12px] text-danger";
const OPTIONAL = <span className="text-charcoal/60"> Optional</span>;

const SELECT_CHEVRON = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%230b1f3a' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
} as const;

function describedBy(error: string | undefined, id: string): string | undefined {
  return error ? `${id}-error` : undefined;
}

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}): React.JSX.Element | null {
  if (!message) return null;
  return (
    <span id={`${id}-error`} className={ERROR}>
      {message}
    </span>
  );
}

function SentNotice(): React.JSX.Element {
  return (
    <div role="status" aria-live="polite" className="rounded-sm border border-gold/50 bg-ivory p-6">
      <p className="font-body text-[15px] leading-relaxed text-ink">
        Message received. {BRAND.name} will reply within one business day,
        usually sooner. If it is urgent, call{" "}
        <a className="underline underline-offset-4" href={telHref()}>
          {BRAND.phone}
        </a>
        .
      </p>
    </div>
  );
}

function FailedNotice(): React.JSX.Element {
  return (
    <p role="alert" aria-live="assertive" className="font-body text-[13px] leading-relaxed text-charcoal">
      The message could not be sent just now. For immediate contact, call{" "}
      <a className="underline underline-offset-4" href={telHref()}>
        {BRAND.phone}
      </a>{" "}
      or email{" "}
      <a className="underline underline-offset-4" href={`mailto:${BRAND.email}`}>
        {BRAND.email}
      </a>
      .
    </p>
  );
}

export function ContactForm(): React.JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof Fields>(key: K, value: Fields[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  /** Validate first, then hand the browser a real submit event. */
  function handleRequest(): void {
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("invalid");
      const firstKey = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }
    formRef.current?.requestSubmit();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const honeypot = new FormData(event.currentTarget).get("companyWebsite");
    if (typeof honeypot === "string" && honeypot.trim()) return;
    setStatus("sending");
    try {
      await submitSiteInquiry("contact-inquiry", {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        specialtyOrganization: values.specialtyOrganization.trim(),
        inquiryType: values.inquiryType,
        planningConcern: values.planningConcern,
        message: values.message.trim(),
        consent: values.consent ? "yes" : "no",
      });
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") return <SentNotice />;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-6">
      {/* Spam trap: off-screen rather than display:none so bots fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <ContactFieldset values={values} errors={errors} update={update} />
      <ContextFieldset values={values} errors={errors} update={update} />
      <MessageFieldset values={values} errors={errors} update={update} />
      <ConsentFieldset values={values} errors={errors} update={update} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={handleRequest}
          disabled={status === "sending"}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm bg-ink px-7 py-3 font-body text-[15px] font-semibold whitespace-nowrap text-ivory transition-colors duration-150 hover:bg-ink-hover focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send a confidential inquiry"}
        </button>
        <p className="font-body text-[12px] leading-relaxed text-charcoal/70">
          {PRIVACY_NOTE}
        </p>
      </div>

      {status === "invalid" ? (
        <p role="alert" aria-live="assertive" className={ERROR}>
          Check the highlighted fields and send again.
        </p>
      ) : null}
      {status === "failed" ? <FailedNotice /> : null}
    </form>
  );
}

type FieldsetProps = {
  values: Fields;
  errors: Errors;
  update: <K extends keyof Fields>(key: K, value: Fields[K]) => void;
};

function GroupLabel({ children }: { children: string }): React.JSX.Element {
  return (
    <legend className="mb-4 block font-body text-[11px] font-semibold tracking-[0.22em] text-gold-text uppercase">
      {children}
    </legend>
  );
}

function ContactFieldset({ values, errors, update }: FieldsetProps): React.JSX.Element {
  return (
    <fieldset className="border-t border-ink/10 pt-5">
      <GroupLabel>Your contact</GroupLabel>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            className={FIELD}
            value={values.firstName}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={describedBy(errors.firstName, "firstName")}
            onChange={(event) => update("firstName", event.target.value)}
          />
          <FieldError id="firstName" message={errors.firstName} />
        </div>
        <div>
          <label className={LABEL} htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            className={FIELD}
            value={values.lastName}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={describedBy(errors.lastName, "lastName")}
            onChange={(event) => update("lastName", event.target.value)}
          />
          <FieldError id="lastName" message={errors.lastName} />
        </div>
        <div>
          <label className={LABEL} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            className={FIELD}
            value={values.email}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy(errors.email, "email")}
            onChange={(event) => update("email", event.target.value)}
          />
          <FieldError id="email" message={errors.email} />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone{OPTIONAL}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            className={FIELD}
            value={values.phone}
            autoComplete="tel"
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>
      </div>
    </fieldset>
  );
}

function ContextFieldset({ values, errors, update }: FieldsetProps): React.JSX.Element {
  return (
    <fieldset className="border-t border-ink/10 pt-5">
      <GroupLabel>Professional context</GroupLabel>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="specialtyOrganization">
            Specialty or organization{OPTIONAL}
          </label>
          <input
            id="specialtyOrganization"
            name="specialtyOrganization"
            className={FIELD}
            value={values.specialtyOrganization}
            autoComplete="organization"
            onChange={(event) => update("specialtyOrganization", event.target.value)}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="inquiryType">
            Inquiry type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            style={SELECT_CHEVRON}
            className={`${FIELD} appearance-none pr-11`}
            value={values.inquiryType}
            aria-invalid={Boolean(errors.inquiryType)}
            aria-describedby={describedBy(errors.inquiryType, "inquiryType")}
            onChange={(event) => update("inquiryType", event.target.value)}
          >
            <option value="">Select an inquiry type</option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="inquiryType" message={errors.inquiryType} />
        </div>
      </div>
    </fieldset>
  );
}

function MessageFieldset({ values, errors, update }: FieldsetProps): React.JSX.Element {
  return (
    <fieldset className="border-t border-ink/10 pt-5">
      <GroupLabel>Planning focus</GroupLabel>
      <div className="grid gap-5">
        <div>
          <label className={LABEL} htmlFor="planningConcern">
            Primary planning concern{OPTIONAL}
          </label>
          <select
            id="planningConcern"
            name="planningConcern"
            style={SELECT_CHEVRON}
            className={`${FIELD} appearance-none pr-11`}
            value={values.planningConcern}
            onChange={(event) => update("planningConcern", event.target.value)}
          >
            <option value="">Select a planning area</option>
            {PLANNING_CONCERNS.map((concern) => (
              <option key={concern} value={concern}>
                {concern}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${FIELD} resize-y`}
            value={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy(errors.message, "message")}
            onChange={(event) => update("message", event.target.value)}
          />
          <FieldError id="message" message={errors.message} />
        </div>
      </div>
    </fieldset>
  );
}

function ConsentFieldset({ values, errors, update }: FieldsetProps): React.JSX.Element {
  return (
    <fieldset className="border-t border-ink/10 pt-5">
      <GroupLabel>Consent and disclosure acknowledgments</GroupLabel>
      <label className="flex cursor-pointer items-start gap-3" htmlFor="consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={values.consent}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={describedBy(errors.consent, "consent")}
          onChange={(event) => update("consent", event.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-sm border border-ink/30 accent-[#0b1f3a] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        />
        <span className="font-body text-[13px] leading-[1.6] text-charcoal">
          I understand that submitting this form does not create an advisory
          relationship, and I have read the{" "}
          <Link
            href="/privacy-disclosures"
            className="underline underline-offset-4 transition-colors duration-150 hover:text-ink"
          >
            privacy and website disclosures
          </Link>
          .
        </span>
      </label>
      <FieldError id="consent" message={errors.consent} />
    </fieldset>
  );
}
