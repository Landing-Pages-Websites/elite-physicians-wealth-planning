'use client';

import { useTracking } from '@/hooks/useTracking';
import { SiteHeader } from './site-header';
import { Hero } from './hero';
import { TrustBar } from './trust-bar';
import { CoordinationGap } from './coordination-gap';
import { WealthBlueprint } from './wealth-blueprint';
import { PlanningFocus } from './planning-focus';
import { FiduciaryPlanner } from './fiduciary-planner';
import { Faq } from './faq';
import { FinalCta } from './final-cta';
import { SiteFooter } from './site-footer';
import { StickyCta } from './sticky-cta';

/**
 * Elite Physician Wealth Planning - single-page ads landing page.
 * Section order follows the approved page blueprint; the DOM order of the
 * kebab-case anchors (#hero to #form) is the conversion narrative.
 */
export function LandingPage(): React.ReactElement {
  useTracking();

  return (
    <div className="lp-wrap">
      <SiteHeader />
      <main id="main">
        <Hero />
        <TrustBar />
        <CoordinationGap />
        <WealthBlueprint />
        <PlanningFocus />
        <FiduciaryPlanner />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <div className="lp-page-end" aria-hidden="true" />
      <StickyCta />
    </div>
  );
}
