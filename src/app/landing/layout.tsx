import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './landing.css';

/* Flow B placeholders — replace after `mega site-tracking enable` returns them. */
const SITE_ID = 'fdd3f3ad-c642-450f-abb8-762b18de7cb7';
const SITE_KEY = 'yvwp8rijauytz92g';

/**
 * MegaTag optimizer config. The optimizer owns GTM (GTM-NH764P5L) and the Meta
 * pixel (2343207629431734), so those tags are NOT installed as standalone
 * snippets here — they are handed to the optimizer, which loads them.
 */
const MEGA_TAG_CONFIG_SCRIPT = [
  `window.MEGA_TAG_CONFIG={`,
  `siteId:"${SITE_ID}",siteKey:"${SITE_KEY}",`,
  `customerId:"2443cdd5-f9c8-44a5-9201-e46bafde1dfe",`,
  `gtmId:"GTM-NH764P5L",pixelId:"2343207629431734",`,
  `endpoints:{optimizer:"https://optimizer.gomega.ai",events:"https://events-api.gomega.ai"}};`,
  `window.API_ENDPOINT="https://optimizer.gomega.ai";`,
  `window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
  `window.dataLayer=window.dataLayer||[];`,
].join('');

const TITLE = 'Physician Tax & Retirement Planning | Elite Physician Wealth Planning';
const DESCRIPTION =
  'A complimentary consultation on coordinated, tax-first planning for physicians, aligned with your CPA, attorney, and advisors under a fiduciary duty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/landing' },
  icons: {
    icon: [{ url: '/landing-icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/landing-apple-icon.png', sizes: '512x512' }],
  },
  other: { 'mega-site-id': SITE_ID },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function LandingLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      {/* Static MegaTag config — injected into <head> and run before the optimizer. */}
      <Script
        id="mega-tag-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: MEGA_TAG_CONFIG_SCRIPT }}
      />
      {/* MegaTag optimizer — owns GTM + Meta Pixel; no duplicate standalone tags.
          beforeInteractive so Next hoists it into <head>, after the config above. */}
      <Script
        id="mega-optimizer"
        strategy="beforeInteractive"
        src="https://cdn.gomega.ai/scripts/optimizer.min.js"
        data-site-id={SITE_ID}
        data-site-key={SITE_KEY}
      />
      {/* Universal CallTrackingMetrics loader. */}
      <Script id="ctm-tracking" strategy="afterInteractive" src="https://572388.tctm.co/t.js" />
      {children}
    </>
  );
}
