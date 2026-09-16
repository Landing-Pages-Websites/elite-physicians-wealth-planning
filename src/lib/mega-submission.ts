import {
  getSessionId,
  getStoredAttribution,
  getVisitorId,
} from "@/hooks/useTracking";

/**
 * Main-site inquiry submission into the existing MEGA lead pipeline — the
 * same collector, customer, and site identity the /landing campaign form
 * already uses, so site inquiries land in the same place. Client-side only.
 */
const CUSTOMER_ID = "2443cdd5-f9c8-44a5-9201-e46bafde1dfe";
const SITE_ID = "fdd3f3ad-c642-450f-abb8-762b18de7cb7";
const SOURCE_PROVIDER = "elite-physician-wealth-planning";
const SUBMIT_ENDPOINT = "https://analytics.gomega.ai/submission/submit";

/** camelCase field names only; never mix casings for the same datum. */
export type InquiryFields = Record<string, string>;

interface InquiryEnvelope {
  customer_id: string;
  site_id: string;
  source_provider: string;
  form_data: InquiryFields & { formName: string };
  url: string;
  referrer_url: string;
  page_path: string;
  page_title: string;
  submitted_at: string;
  session_id: string;
  visitor_id: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
}

function buildEnvelope(formName: string, fields: InquiryFields): InquiryEnvelope {
  const attribution = getStoredAttribution();
  return {
    customer_id: CUSTOMER_ID,
    site_id: SITE_ID,
    source_provider: SOURCE_PROVIDER,
    form_data: { ...fields, formName },
    url: window.location.href,
    referrer_url: attribution.referrer ?? document.referrer ?? "",
    page_path: window.location.pathname,
    page_title: document.title,
    submitted_at: new Date().toISOString(),
    session_id: getSessionId(),
    visitor_id: getVisitorId(),
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_term: attribution.utm_term,
    utm_content: attribution.utm_content,
    gclid: attribution.gclid,
    fbclid: attribution.fbclid,
  };
}

/**
 * Submits an inquiry and fires the conversion dataLayer event ONLY after the
 * collector confirms receipt. Throws with a meaningful error otherwise; the
 * caller owns the visible failure state.
 */
export async function submitSiteInquiry(
  formName: string,
  fields: InquiryFields,
): Promise<void> {
  try {
    const response = await fetch(SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildEnvelope(formName, fields)),
    });
    if (!response.ok) {
      throw new Error(`Inquiry submission failed (${response.status}).`);
    }
  } catch (cause) {
    throw new Error("The inquiry could not be delivered.", { cause });
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "form_submission", form_id: formName });
}
