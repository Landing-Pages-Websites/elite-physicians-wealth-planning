import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

/**
 * Chrome for the production site only. /variant-b is deliberately OUTSIDE this
 * group: it is Direction B, kept for comparison until Direction A ships, and
 * giving it Direction A's navy header would cover its own wordmark bar and
 * misrepresent the board being compared.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: ReactNode }>): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
