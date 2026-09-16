import type { ReactNode } from "react";

/**
 * Family-local additions to the site's single lucide-style stroke icon set
 * (same 24px grid, stroke-2, round caps, currentColor, decorative).
 */

type IconProps = {
  className?: string;
};

function IconBase({
  children,
  className,
}: IconProps & { children: ReactNode }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps): React.JSX.Element {
  return (
    <IconBase {...props}>
      <path d="M4 12.5 9.5 18 20 6.5" />
    </IconBase>
  );
}

export function BookIcon(props: IconProps): React.JSX.Element {
  return (
    <IconBase {...props}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </IconBase>
  );
}
