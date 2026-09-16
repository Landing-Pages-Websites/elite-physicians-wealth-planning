"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_GROUPS, type NavGroup } from "@/lib/nav";

const TRIGGER_CLASS =
  "flex min-h-11 cursor-pointer items-center gap-1.5 rounded-sm px-1 font-body text-[13px] text-mist/80 underline-offset-8 transition-colors duration-200 hover:text-gold";

function Chevron({ open }: { open: boolean }): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 6"
      className={`h-1.5 w-2.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GroupPanel({
  group,
  isCurrent,
  onNavigate,
}: {
  group: NavGroup;
  isCurrent: (path: string) => boolean;
  onNavigate: () => void;
}): React.JSX.Element {
  return (
    <div className="absolute top-full left-1/2 z-50 w-72 -translate-x-1/2 pt-3">
      <div className="flex flex-col gap-0.5 rounded-sm border border-mist/15 bg-ink p-2 shadow-xl">
        {group.links.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={onNavigate}
            aria-current={isCurrent(item.path) ? "page" : undefined}
            className={`rounded-sm px-3 py-2.5 font-body text-[13px] transition-colors duration-200 hover:bg-white/5 hover:text-gold ${
              isCurrent(item.path) ? "text-gold" : "text-mist/85"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Desktop primary navigation: disclosure dropdowns per route group. Closes on
 * Escape, outside interaction, and navigation; no focus trap — tabbing simply
 * moves on and the panel dismisses with the group losing pointer focus.
 */
export function DesktopNav(): React.JSX.Element {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => setOpenGroup(null), [pathname]);

  useEffect(() => {
    if (!openGroup) return;
    function onPointerDown(event: PointerEvent): void {
      if (!navRef.current?.contains(event.target as Node)) setOpenGroup(null);
    }
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") setOpenGroup(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openGroup]);

  const isCurrent = (path: string): boolean => pathname === path;
  const groupIsCurrent = (group: NavGroup): boolean =>
    group.path === pathname || group.links.some((item) => isCurrent(item.path));

  return (
    <nav ref={navRef} aria-label="Primary" className="hidden items-center gap-6 xl:flex">
      {NAV_GROUPS.map((group) =>
        group.path ? (
          <Link
            key={group.label}
            href={group.path}
            aria-current={isCurrent(group.path) ? "page" : undefined}
            className={`${TRIGGER_CLASS} ${groupIsCurrent(group) ? "text-gold" : ""}`}
          >
            {group.label}
          </Link>
        ) : (
          <div key={group.label} className="relative">
            <button
              type="button"
              aria-expanded={openGroup === group.label}
              onClick={() =>
                setOpenGroup((current) => (current === group.label ? null : group.label))
              }
              className={`${TRIGGER_CLASS} ${groupIsCurrent(group) ? "text-gold" : ""}`}
            >
              {group.label}
              <Chevron open={openGroup === group.label} />
            </button>
            {openGroup === group.label && (
              <GroupPanel
                group={group}
                isCurrent={isCurrent}
                onNavigate={() => setOpenGroup(null)}
              />
            )}
          </div>
        ),
      )}
    </nav>
  );
}
