import Link from "next/link";
import { NAV_GROUPS, SCHEDULE_CTA } from "@/lib/nav";
import { routeBySlug } from "@/lib/routes";
import { BRAND, HERO, SEPARATE_ROOMS, telHref } from "@/lib/content";

/**
 * Sitewide footer: full route navigation by group, verified contact details,
 * and the per-page compliance lines that must appear on every route. Link
 * columns come from the same registry as the header so the two can never
 * disagree about what exists.
 */
const FOOTER_LINK_CLASS =
  "-my-2 inline-flex min-h-11 items-center py-2 font-body text-[13px] text-charcoal underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline";

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: readonly { path: string; label: string }[];
}): React.JSX.Element {
  return (
    <nav aria-label={label}>
      <h2 className="font-body text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
        {label}
      </h2>
      <ul className="mt-5 flex flex-col gap-2.5">
        {links.map((item) => (
          <li key={item.path}>
            <Link href={item.path} className={FOOTER_LINK_CLASS}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function footerGroups(): readonly { label: string; links: readonly { path: string; label: string }[] }[] {
  const process = routeBySlug("our-process");
  const groups = NAV_GROUPS.filter((group) => group.links.length > 0);
  return groups.map((group) =>
    group.label === "About"
      ? {
          label: "The firm",
          links: [
            ...group.links,
            { path: process.path, label: process.navLabel },
            { path: SCHEDULE_CTA.path, label: routeBySlug("schedule").navLabel },
          ],
        }
      : { label: group.label, links: group.links },
  );
}

export function SiteFooter(): React.JSX.Element {
  const privacy = routeBySlug("privacy-disclosures");
  return (
    <footer className="border-t border-ink/10 bg-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-12 px-6 py-16 sm:grid-cols-2 sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:px-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-medium text-ink">
            {BRAND.name}
            <span className="align-super text-[0.6em]">™</span>
          </p>
          {/* Tracked uppercase at 390 stranded "Financial" on its own line. */}
          <p className="mt-1 font-body text-[10px] font-semibold tracking-[0.28em] text-balance text-ink/70 uppercase">
            {BRAND.poweredBy}
          </p>
          <span aria-hidden="true" className="mt-5 block h-px w-12 bg-gold" />
          <p className="mt-5 max-w-xs font-body text-[13px] leading-relaxed text-charcoal/80">
            {SEPARATE_ROOMS.boundaryNote}
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 font-body text-[13px] text-charcoal">
            <li>
              <a href={`mailto:${BRAND.email}`} className={FOOTER_LINK_CLASS}>
                {BRAND.email}
              </a>
            </li>
            <li>
              <a href={telHref()} className={FOOTER_LINK_CLASS}>
                {BRAND.phone}
              </a>
            </li>
            <li className="text-charcoal/80">{BRAND.hours}</li>
          </ul>
          <Link
            href={SCHEDULE_CTA.path}
            className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-ink px-5 font-body text-[13px] font-semibold text-ivory transition-colors duration-200 hover:bg-ink/90"
          >
            {SCHEDULE_CTA.label}
          </Link>
        </div>

        {footerGroups().map((group) => (
          <FooterColumn key={group.label} label={group.label} links={group.links} />
        ))}
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-6 font-body text-[11px] leading-relaxed text-charcoal/80 sm:px-10 lg:px-14">
          {/* Compliance lines belong on every route, not only the homepage. */}
          <p>{HERO.disclaimer}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>{BRAND.wordmark}</p>
            <Link
              href={privacy.path}
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline sm:min-h-0"
            >
              {privacy.navLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
