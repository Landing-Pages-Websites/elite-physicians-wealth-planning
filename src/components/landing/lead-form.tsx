'use client';

import { useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  EMAIL_PATTERN,
  isValidEmail,
  isValidPhone,
  normalizePhoneDigits,
  useMegaLeadForm,
  type LeadFormData,
} from '@/hooks/useMegaLeadForm';
import { SegmentedField } from './segmented-field';

interface LeadFormProps {
  /** Glass card sits on the navy hero; plain card on light surfaces. */
  variant?: 'glass' | 'plain';
  title?: string;
  subtitle?: string;
}

const INITIAL: LeadFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  taxPlanningInterest: 'Yes',
  writtenRetirementPlan: 'Yes',
};

function formatPhone(value: string): string {
  const digits = normalizePhoneDigits(value);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function LeadForm({
  variant = 'glass',
  title = 'Book your complimentary consultation',
  subtitle = 'A calm, no-pressure conversation about coordinated tax and retirement planning.',
}: LeadFormProps): React.ReactElement {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const inFlightRef = useRef(false);
  const [data, setData] = useState<LeadFormData>(INITIAL);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const { submit, isSubmitting, error, setError } = useMegaLeadForm();

  const fieldId = (name: keyof LeadFormData): string => `${uid}-${name}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;
    const key = name as keyof LeadFormData;
    const nextValue = key === 'phone' ? formatPhone(value) : value;
    setData((prev) => ({ ...prev, [key]: nextValue }));
    if (fieldErrors[key]) setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
    if (error) setError(null);
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof LeadFormData, string>> = {};
    if (!data.firstName.trim()) errors.firstName = 'Enter your first name.';
    if (!data.lastName.trim()) errors.lastName = 'Enter your last name.';
    if (!isValidEmail(data.email)) errors.email = 'Enter a valid email address.';
    if (!isValidPhone(data.phone)) errors.phone = 'Enter a valid 10-digit phone number.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (inFlightRef.current) return; // synchronous guard: at most one request
    if (!validate()) return;
    inFlightRef.current = true;

    const result = await submit(data);
    if (result.ok) {
      setSubmitted(true); // leave the guard set - never resubmit a success
      return;
    }
    inFlightRef.current = false; // allow retry after a failed attempt
  };

  const handleClick = (): void => {
    if (inFlightRef.current) return;
    if (validate()) formRef.current?.requestSubmit();
  };

  const cardClass = variant === 'glass' ? 'lp-form-card' : 'lp-form-card lp-form-card--plain';

  if (submitted) {
    return (
      <div className={cardClass}>
        <div className="lp-success" role="status" aria-live="polite">
          <span className="lp-success-mark" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="lp-display" style={{ fontSize: '1.5rem' }}>
            Thank you - your request is in.
          </h3>
          <p className="lp-muted" style={{ marginTop: '0.5rem' }}>
            A member of the Elite Physician Wealth Planning team will reach out to schedule your
            complimentary consultation. Prefer to talk now? Call{' '}
            <a href="tel:3012591636" style={{ fontWeight: 600 }}>
              (301) 259-1636
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={cardClass} noValidate>
      <div style={{ marginBottom: '1.25rem' }}>
        <h3 className="lp-display" style={{ fontSize: '1.625rem', lineHeight: 1.15 }}>
          {title}
        </h3>
        <p className="lp-muted" style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>
          {subtitle}
        </p>
      </div>

      <div className="lp-field-grid">
        <div>
          <label htmlFor={fieldId('firstName')} className="lp-label">
            First name
          </label>
          <input
            id={fieldId('firstName')}
            name="firstName"
            type="text"
            autoComplete="given-name"
            className="input-field"
            value={data.firstName}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.firstName)}
            aria-describedby={fieldErrors.firstName ? `${fieldId('firstName')}-error` : undefined}
            required
          />
          {fieldErrors.firstName ? (
            <p id={`${fieldId('firstName')}-error`} className="lp-field-error">
              {fieldErrors.firstName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fieldId('lastName')} className="lp-label">
            Last name
          </label>
          <input
            id={fieldId('lastName')}
            name="lastName"
            type="text"
            autoComplete="family-name"
            className="input-field"
            value={data.lastName}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.lastName)}
            aria-describedby={fieldErrors.lastName ? `${fieldId('lastName')}-error` : undefined}
            required
          />
          {fieldErrors.lastName ? (
            <p id={`${fieldId('lastName')}-error`} className="lp-field-error">
              {fieldErrors.lastName}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('email')} className="lp-label">
          Email
        </label>
        <input
          id={fieldId('email')}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          className="input-field"
          placeholder="you@practice.com"
          pattern={EMAIL_PATTERN}
          title="Enter a valid email address, e.g. you@practice.com"
          value={data.email}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? `${fieldId('email')}-error` : undefined}
          required
        />
        {fieldErrors.email ? (
          <p id={`${fieldId('email')}-error`} className="lp-field-error">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={fieldId('phone')} className="lp-label">
          Phone
        </label>
        <input
          id={fieldId('phone')}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          className="input-field"
          placeholder="(555) 123-4567"
          maxLength={14}
          pattern="\(\d{3}\) \d{3}-\d{4}"
          title="Enter a 10-digit US phone number, e.g. (301) 259-1636"
          value={data.phone}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? `${fieldId('phone')}-error` : undefined}
          required
        />
        {fieldErrors.phone ? (
          <p id={`${fieldId('phone')}-error`} className="lp-field-error">
            {fieldErrors.phone}
          </p>
        ) : null}
      </div>

      <SegmentedField
        legend="Are you looking for help with tax planning or reducing your tax burden?"
        name="taxPlanningInterest"
        value={data.taxPlanningInterest}
        options={['Yes', 'No']}
        idPrefix={uid}
        disabled={isSubmitting}
        onChange={handleChange}
      />

      <SegmentedField
        legend="Do you currently have a written retirement plan?"
        name="writtenRetirementPlan"
        value={data.writtenRetirementPlan}
        options={['Yes', 'No']}
        idPrefix={uid}
        hint="Context only. This answer does not affect qualification."
        disabled={isSubmitting}
        onChange={handleChange}
      />

      {error ? (
        <div className="lp-alert lp-alert-error" role="alert">
          {error}
        </div>
      ) : null}

      <button
        type="button"
        onClick={handleClick}
        disabled={isSubmitting}
        className="btn btn-primary"
        style={{ width: '100%' }}
      >
        {isSubmitting ? 'Sending…' : 'Book a consultation'}
      </button>

      <p className="lp-hint" style={{ textAlign: 'center' }}>
        We respect your privacy. Your details are used only to arrange your consultation and are
        never sold.
      </p>
    </form>
  );
}
