'use client';

import { useCallback, useState } from 'react';
import {
  createSubmissionIdentity,
  getStoredAttribution,
} from '@/hooks/useTracking';

/* ------------------------------------------------------------------ *
 * MEGA lead pipeline — canonical envelope + fail-closed submission.
 * ------------------------------------------------------------------ */

const CUSTOMER_ID = '2443cdd5-f9c8-44a5-9201-e46bafde1dfe';
/** Flow B placeholder — replace after `mega site-tracking enable` returns it. */
const SITE_ID = 'fdd3f3ad-c642-450f-abb8-762b18de7cb7';
const SOURCE_PROVIDER = 'elite-physician-wealth-planning';
const SUBMIT_ENDPOINT = 'https://analytics.gomega.ai/submission/submit';
const DISQUALIFY_REASON = 'Tax planning interest: No';

/** Strict email: local + labelled domain with a real TLD, no stray dots. */
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Canonical RFC-5322-lite pattern for the native HTML5 `pattern` attribute
 * (un-anchored — the browser applies its own ^…$). This only ADDS a native
 * gate to the live form; the stricter JS `EMAIL_RE` above still owns validation.
 */
export const EMAIL_PATTERN = "[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}";

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  taxPlanningInterest: 'Yes' | 'No';
  writtenRetirementPlan: 'Yes' | 'No';
}

interface FormDataPayload extends LeadFormData {
  isQualified: boolean;
  disqualificationReason: string;
}

interface SubmissionEnvelope {
  customer_id: string;
  site_id: string;
  source_provider: string;
  form_data: FormDataPayload;
  url: string;
  referrer_url: string;
  page_path?: string;
  page_title?: string;
  submitted_at?: string;
  session_id: string;
  visitor_id: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbp?: string;
  fbc?: string;
}

export type SubmitResult = { ok: true } | { ok: false; error: string };

interface UseLeadFormReturn {
  submit: (data: LeadFormData) => Promise<SubmitResult>;
  isSubmitting: boolean;
  error: string | null;
  setError: (message: string | null) => void;
}

declare global {
  interface Window {
    MegaTag?: { trackEvent: (event: string, data?: Record<string, unknown>) => void };
    dataLayer?: Record<string, unknown>[];
    MEGA_TAG_CONFIG?: Record<string, unknown>;
  }
}

export function normalizePhoneDigits(value: string): string {
  const digits = value.replace(/\D/g, '');
  // Strip a leading NANP country code so +1 5555550100 → 5555550100 (ten
  // national digits) instead of truncating to a wrong 1-prefixed value.
  const national = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  return national.slice(0, 10);
}

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  return trimmed.length <= 254 && EMAIL_RE.test(trimmed);
}

/** Exactly ten NANP digits; area + exchange codes start 2-9. */
export function isValidPhone(phone: string): boolean {
  const digits = normalizePhoneDigits(phone);
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(digits);
}

/** Qualification depends ONLY on tax-planning interest. */
export function qualify(taxPlanningInterest: 'Yes' | 'No'): {
  isQualified: boolean;
  disqualificationReason?: string;
} {
  if (taxPlanningInterest === 'No') {
    return { isQualified: false, disqualificationReason: DISQUALIFY_REASON };
  }
  return { isQualified: true };
}

function buildEnvelope(data: LeadFormData): SubmissionEnvelope {
  const attribution = getStoredAttribution();
  const identity = createSubmissionIdentity();
  const { isQualified, disqualificationReason } = qualify(data.taxPlanningInterest);
  const formData: FormDataPayload = {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim(),
    phone: normalizePhoneDigits(data.phone),
    taxPlanningInterest: data.taxPlanningInterest,
    writtenRetirementPlan: data.writtenRetirementPlan,
    isQualified,
    disqualificationReason: disqualificationReason ?? '',
  };

  return {
    customer_id: CUSTOMER_ID,
    site_id: SITE_ID,
    source_provider: SOURCE_PROVIDER,
    form_data: formData,
    url: window.location.href,
    referrer_url: attribution.referrer ?? document.referrer ?? '',
    page_path: window.location.pathname,
    page_title: document.title,
    submitted_at: new Date().toISOString(),
    session_id: identity.session_id,
    visitor_id: identity.visitor_id,
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_term: attribution.utm_term,
    utm_content: attribution.utm_content,
    gclid: attribution.gclid,
    fbclid: attribution.fbclid,
    gbraid: attribution.gbraid,
    wbraid: attribution.wbraid,
    fbp: attribution.fbp,
    fbc: attribution.fbc,
  };
}

/** The collector confirms receipt with an authoritative submission id. */
interface SubmissionResponse {
  ok?: unknown;
  id?: unknown;
  lead_id?: unknown;
  event_id?: unknown;
}

/** Prefer the documented `id`, then any lead/event id the collector returns. */
function extractResultId(body: SubmissionResponse): string | undefined {
  const candidate = body.id ?? body.lead_id ?? body.event_id;
  if (typeof candidate === 'string' && candidate) return candidate;
  // Some collectors return a numeric primary key; keep it rather than drop it.
  if (typeof candidate === 'number' && Number.isFinite(candidate)) return String(candidate);
  return undefined;
}

function fireConversionEvents(formData: FormDataPayload, resultId?: string): void {
  window.MegaTag?.trackEvent('form_submit', {
    element: 'form-physician-lead',
    lead_id: resultId,
    ...formData,
  });
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: 'form_submission',
    form_id: 'form-physician-lead',
    form_provider: 'elite-physician-wealth-planning',
    isQualified: formData.isQualified,
    lead_id: resultId,
  });
}

export function useMegaLeadForm(): UseLeadFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(async (data: LeadFormData): Promise<SubmitResult> => {
    // Hook-level defense — never trust the caller's validation alone.
    if (!data.firstName.trim() || !data.lastName.trim()) {
      const message = 'Please enter your first and last name.';
      setError(message);
      return { ok: false, error: message };
    }
    if (!isValidEmail(data.email) || !isValidPhone(data.phone)) {
      const message = 'Please enter a valid email and 10-digit phone number.';
      setError(message);
      return { ok: false, error: message };
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const envelope = buildEnvelope(data);
      const response = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(envelope),
      });
      if (!response.ok) throw new Error(`Request failed (${response.status}).`);

      // Fail closed: require an explicit ok === true from the pipeline.
      const body = (await response.json()) as SubmissionResponse | null;
      if (!body || body.ok !== true) {
        throw new Error('The service did not confirm your submission.');
      }

      fireConversionEvents(envelope.form_data, extractResultId(body));
      return { ok: true };
    } catch {
      // Fail closed: no success state, no conversion events.
      const message = 'We could not submit your request. Please try again or call us.';
      setError(message);
      return { ok: false, error: message };
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { submit, isSubmitting, error, setError };
}
