import Link from "next/link";
import { DesktopNav } from "@/components/site/desktop-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { SCHEDULE_CTA } from "@/lib/nav";
import { BRAND } from "@/lib/content";

/**
 * Sitewide fixed header. The header is `fixed` rather than `sticky` on
 * purpose — sticky occupies flow and would push the homepage hero down,
 * breaking the composition_map fold requirement that brand, headline, actions,
 * portrait card and proof row stay visible together within 1536x864. Interior
 * pages compensate with `--header-h` top padding on their first section.
 */
function Wordmark(): React.JSX.Element {
  return (
    <Link
      href="/"
      className="flex shrink-0 flex-col gap-0.5 rounded-sm transition-opacity duration-200 hover:opacity-90"
    >
      {/* 22px here pushed the Menu button off the right edge of a 390 viewport:
          the wordmark cannot wrap or shrink, so 17px is the largest size that
          leaves the button its own padding at 390. An explicit vertical-align
          sits the trademark on the cap line rather than floating above it. */}
      <span className="font-display text-[17px] font-medium whitespace-nowrap text-white sm:text-[24px] lg:text-[28px]">
        {BRAND.name}
        <span className="align-[0.42em] text-[0.45em]">™</span>
      </span>
      <span className="hidden font-body text-[10px] font-semibold tracking-[0.24em] whitespace-nowrap text-gold uppercase sm:block">
        {BRAND.poweredBy}
      </span>
    </Link>
  );
}

export function SiteHeader(): React.JSX.Element {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex items-center bg-ink/95 backdrop-blur-sm"
      style={{ minHeight: "var(--header-h)" }}
    >
      <a href="#main" className="skip-link font-body text-sm">
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-6 py-2 sm:gap-6 sm:px-10 lg:px-14">
        <Wordmark />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Link
            href={SCHEDULE_CTA.path}
            className="hidden min-h-11 items-center rounded-sm bg-gold px-5 font-body text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-gold/90 sm:inline-flex"
          >
            {SCHEDULE_CTA.label}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
