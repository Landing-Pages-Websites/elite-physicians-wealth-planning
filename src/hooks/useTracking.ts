'use client';

import { useEffect } from 'react';

/**
 * Attribution + session persistence for the landing page.
 *
 * The MegaTag optimizer owns GTM (GTM-NH764P5L) and the Meta pixel
 * (2343207629431734); this module never re-installs those tags. It only
 * captures first-touch attribution so it survives client navigation and can be
 * attached to the lead submission envelope.
 */

const ATTRIBUTION_KEY = 'epwp_attribution';
const VISITOR_KEY = 'epwp_visitor_id';
const SESSION_KEY = 'epwp_session_id';

const ATTRIBUTION_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'gbraid',
  'wbraid',
] as const;

export interface AttributionData {
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
  referrer?: string;
  landing_page?: string;
}

function readStorage(store: Storage, key: string): string | null {
  try {
    return store.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(store: Storage, key: string, value: string): void {
  try {
    store.setItem(key, value);
  } catch {
    /* storage may be unavailable (private mode); attribution is best-effort. */
  }
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function ensureId(store: Storage, key: string): string {
  const existing = readStorage(store, key);
  if (existing) return existing;
  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `id-${Date.now().toString(36)}-${Math.round(performance.now()).toString(36)}`;
  writeStorage(store, key, id);
  return id;
}

/** Capture first-touch attribution once per session. */
function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  if (readStorage(window.sessionStorage, ATTRIBUTION_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const data: AttributionData = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key);
    if (value) data[key] = value;
  }
  data.referrer = document.referrer || undefined;
  data.landing_page = window.location.href;

  const fbclid = params.get('fbclid');
  let fbc = readCookie('_fbc');
  if (fbclid && !fbc) {
    fbc = `fb.1.${Date.now()}.${fbclid}`;
  }
  if (fbc) data.fbc = fbc;

  const fbp = readCookie('_fbp');
  if (fbp) data.fbp = fbp;

  writeStorage(window.sessionStorage, ATTRIBUTION_KEY, JSON.stringify(data));
}

/** Read persisted attribution for the submission payload. */
export function getStoredAttribution(): AttributionData {
  if (typeof window === 'undefined') return {};
  const raw = readStorage(window.sessionStorage, ATTRIBUTION_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as AttributionData;
  } catch {
    return {};
  }
}

export function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  return ensureId(window.localStorage, VISITOR_KEY);
}

export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  return ensureId(window.sessionStorage, SESSION_KEY);
}

/** Mount-once hook that seeds attribution + identifiers for the session. */
export function useTracking(): void {
  useEffect(() => {
    captureAttribution();
    getVisitorId();
    getSessionId();
  }, []);
}
