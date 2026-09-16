"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_GROUPS, SCHEDULE_CTA } from "@/lib/nav";

/**
 * Mobile navigation: a button-opened panel listing every route group. Closes
 * on Escape, backdrop press, and navigation. Scroll is locked while open so
 * the page cannot shift beneath the panel; no focus trap is installed.
 */
export function MobileNav(): React.JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-sm border border-mist/45 px-3 font-body text-[12px] text-mist transition-colors duration-200 hover:border-gold hover:text-gold"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-50">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-ink/40"
          />
          <div
            id="mobile-menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-mist/15 bg-ink px-6 pt-6 pb-10 shadow-xl"
          >
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="border-b border-mist/10 py-4">
                {group.path ? (
                  <Link
                    href={group.path}
                    aria-current={pathname === group.path ? "page" : undefined}
                    className="font-body text-[13px] font-semibold tracking-[0.14em] text-mist uppercase transition-colors hover:text-gold"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <>
                    <p className="font-body text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                      {group.label}
                    </p>
                    <ul className="mt-2 flex flex-col">
                      {group.links.map((item) => (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            aria-current={pathname === item.path ? "page" : undefined}
                            className={`-mx-2 flex min-h-11 items-center rounded-sm px-2 font-body text-[14px] transition-colors duration-200 hover:bg-white/5 hover:text-gold ${
                              pathname === item.path ? "text-gold" : "text-mist/85"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
            <Link
              href={SCHEDULE_CTA.path}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-5 font-body text-[14px] font-semibold text-ink transition-colors duration-200 hover:bg-gold/90"
            >
              {SCHEDULE_CTA.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
