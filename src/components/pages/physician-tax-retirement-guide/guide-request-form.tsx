"use client";

import { useRef, useState } from "react";
import { BRAND, FIVE_DECISIONS, NEXT_DECISION, telHref } from "@/lib/content";
import { submitSiteInquiry } from "@/lib/mega-submission";

type Status = "idle" | "invalid" | "sending" | "sent" | "failed";

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialtyRole: string;
  careerStage: string;
  primaryPlanningConcern: string;
  consent: boolean;
  privacyAcknowledged: boolean;
}

type FieldErrors = Partial<Record<keyof Fields, string>>;

/** The text/select inputs; the two consent flags are handled separately. */
type TextKey = Exclude<keyof Fields, "consent" | "privacyAcknowledged">;

const EMPTY: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialtyRole: "",
  careerStage: "",
  primaryPlanningConcern: "",
  consent: false,
  privacyAcknowledged: false,
};

/** Career stage drives what a first reply is actually about. */
const CAREER_STAGES = [
  "Resident or fellow",
  "Early-career physician",
  "Established physician",
  "Practice owner",
  "Approaching retirement",
] as const;

const CONCERNS = FIVE_DECISIONS.disciplines.map((d) => d.name);

const PRIVACY_COPY =
  "Please do not submit sensitive personal, medical, tax, legal, or account information.";
const CONSENT_COPY =
  "I agree to be contacted by email about this guide request.";

function validate(values: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address looks incomplete.";
  }
  if (!values.specialtyRole.trim()) {
    errors.specialtyRole = "Tell us your specialty or role.";
  }
  if (!values.careerStage) errors.careerStage = "Choose a career stage.";
  if (!values.primaryPlanningConcern) {
    errors.primaryPlanningConcern = "Choose a planning concern.";
  }
  if (!values.consent) errors.consent = "Please agree before requesting.";
  if (!values.privacyAcknowledged) {
    errors.privacyAcknowledged = "Please confirm this note before requesting.";
  }
  return errors;
}

/** Falls back to the practice's inbox so a request is never silently lost. */
function mailtoHandoff(values: Fields): string {
  const body = [
    `Name: ${values.firstName} ${values.lastName}`,
    `Email: ${values.email}`,
    values.phone.trim() ? `Phone: ${values.phone}` : "",
    `Specialty or role: ${values.specialtyRole}`,
    `Career stage: ${values.careerStage}`,
    `Primary planning concern: ${values.primaryPlanningConcern}`,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(
    "Guide request",
  )}&body=${encodeURIComponent(body)}`;
}

const LABEL = "mb-1.5 block font-body text-[13px] font-medium text-charcoal";
const ERROR = "mt-1.5 block font-body text-[12px] font-medium text-danger";
const SELECT_CHEVRON = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%230B1F3A' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
} as const;

interface InputRowProps {
  id: TextKey;
  label: string;
  values: Fields;
  errors: FieldErrors;
  onChange: (key: TextKey, value: string) => void;
  type?: string;
  autoComplete?: string;
}

function TextField({
  id,
  label,
  values,
  errors,
  onChange,
  type = "text",
  autoComplete,
}: InputRowProps): React.JSX.Element {
  const error = errors[id];
  return (
    <div>
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        className="ptg-field"
        value={values[id]}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
      />
      {error ? (
        <span id={`${id}-error`} className={ERROR}>
          {error}
        </span>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  placeholder,
  values,
  errors,
  onChange,
}: InputRowProps & {
  options: readonly string[];
  placeholder: string;
}): React.JSX.Element {
  const error = errors[id];
  return (
    <div>
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        style={SELECT_CHEVRON}
        className="ptg-field appearance-none pr-11"
        value={values[id]}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <span id={`${id}-error`} className={ERROR}>
          {error}
        </span>
      ) : null}
    </div>
  );
}

function ConsentBox({
  id,
  copy,
  checked,
  error,
  onChange,
}: {
  id: string;
  copy: string;
  checked: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}): React.JSX.Element {
  return (
    <label className="flex cursor-pointer items-start gap-3 font-body text-body-s leading-[1.55] text-charcoal">
      <input
        type="checkbox"
        name={id}
        checked={checked}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.checked)}
        className="ptg-box mt-0.5"
      />
      <span>
        {copy}
        {error ? (
          <span id={`${id}-error`} className={ERROR}>
            {error}
          </span>
        ) : null}
      </span>
    </label>
  );
}

/**
 * 04-lead-capture-form's request form. Submits to the site's lead pipeline;
 * the reply is personal and the guide is delivered by email once the final
 * version is available — the success state never claims an instant download.
 */
export function GuideRequestForm(): React.JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(key: TextKey, value: string): void {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function updateFlag(key: "consent" | "privacyAcknowledged", checked: boolean): void {
    setValues((prev) => ({ ...prev, [key]: checked }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  /** Validate first, then hand the browser a real submit event. */
  function handleRequest(): void {
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("invalid");
      const firstKey = Object.keys(found)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstKey}"]`)
        ?.focus();
      return;
    }
    formRef.current?.requestSubmit();
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const honeypot = new FormData(event.currentTarget).get("companyWebsite");
    if (typeof honeypot === "string" && honeypot.trim()) return;
    setStatus("sending");
    try {
      await submitSiteInquiry("guide-request", {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        specialtyRole: values.specialtyRole.trim(),
        careerStage: values.careerStage,
        primaryPlanningConcern: values.primaryPlanningConcern,
      });
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="font-body text-[15px] leading-relaxed text-ink"
      >
        Request received. {NEXT_DECISION.guide.requestNote} If anything is
        urgent in the meantime, call{" "}
        <a className="underline underline-offset-4" href={telHref()}>
          {BRAND.phone}
        </a>
        .
      </p>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
      {/* Spam trap. Off-screen rather than display:none so bots fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="ptg-company-website">Company website</label>
        <input
          id="ptg-company-website"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="firstName" label="First name" autoComplete="given-name" values={values} errors={errors} onChange={update} />
        <TextField id="lastName" label="Last name" autoComplete="family-name" values={values} errors={errors} onChange={update} />
        <TextField id="email" label="Email" type="email" autoComplete="email" values={values} errors={errors} onChange={update} />
        <TextField id="phone" label="Phone (optional)" type="tel" autoComplete="tel" values={values} errors={errors} onChange={update} />
        <TextField id="specialtyRole" label="Specialty or role" values={values} errors={errors} onChange={update} />
        <SelectField
          id="careerStage"
          label="Career stage"
          placeholder="Select a career stage"
          options={CAREER_STAGES}
          values={values}
          errors={errors}
          onChange={update}
        />
      </div>

      <SelectField
        id="primaryPlanningConcern"
        label="Primary planning concern"
        placeholder="Select the concern to start with"
        options={CONCERNS}
        values={values}
        errors={errors}
        onChange={update}
      />

      <fieldset className="grid gap-3 border-t border-ink/10 pt-5">
        <legend className="mb-3 font-body text-[13px] font-semibold text-ink">
          Consent and disclosure acknowledgments
        </legend>
        <ConsentBox
          id="consent"
          copy={CONSENT_COPY}
          checked={values.consent}
          error={errors.consent}
          onChange={(checked) => updateFlag("consent", checked)}
        />
        <ConsentBox
          id="privacyAcknowledged"
          copy={PRIVACY_COPY}
          checked={values.privacyAcknowledged}
          error={errors.privacyAcknowledged}
          onChange={(checked) => updateFlag("privacyAcknowledged", checked)}
        />
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={handleRequest}
          disabled={status === "sending"}
          className="va-btn va-btn-navy justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request the Guide"}
        </button>
        <p className="font-body text-[12px] leading-relaxed text-charcoal/70">
          No obligation. {BRAND.hours}.
        </p>
      </div>

      {status === "invalid" ? (
        <p role="alert" aria-live="assertive" className={ERROR}>
          Check the highlighted fields and request again.
        </p>
      ) : null}

      {status === "failed" ? (
        <p
          role="alert"
          aria-live="assertive"
          className="font-body text-[13px] leading-relaxed text-charcoal"
        >
          The request could not be sent just now. You can{" "}
          <a className="underline underline-offset-4" href={mailtoHandoff(values)}>
            email it instead
          </a>{" "}
          or call{" "}
          <a className="underline underline-offset-4" href={telHref()}>
            {BRAND.phone}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
