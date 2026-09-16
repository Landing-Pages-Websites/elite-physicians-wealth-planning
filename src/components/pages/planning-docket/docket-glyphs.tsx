import type { ReactNode } from "react";
import { CalculatorIcon, ClipboardIcon, ScalesIcon } from "@/components/site/icons";
import type { BoundaryGlyph, DemandGlyph } from "./content-types";

/**
 * Family-local stroke glyphs for the docket variants that draw iconography
 * the shared site set does not carry (legacy "mirror" trigger ledger and the
 * retirement "plan" boundary cards). Same lucide-style conventions as
 * src/components/site/icons.tsx: 24 viewBox, 2px stroke, round caps,
 * currentColor, decorative (aria-hidden).
 */

type GlyphProps = {
  className?: string;
};

function GlyphBase({
  children,
  className,
}: GlyphProps & { children: ReactNode }): React.JSX.Element {
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

function BeneficiaryGlyph(props: GlyphProps): React.JSX.Element {
  return (
    <GlyphBase {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16.5 5.2a3.5 3.5 0 0 1 0 5.6M18 14.6a5.5 5.5 0 0 1 2.5 5.4" />
    </GlyphBase>
  );
}

function TrustGlyph(props: GlyphProps): React.JSX.Element {
  return (
    <GlyphBase {...props}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3 20.5h18" />
    </GlyphBase>
  );
}

function GivingGlyph(props: GlyphProps): React.JSX.Element {
  return (
    <GlyphBase {...props}>
      <path d="M12 19.5s-6.5-3.8-6.5-8.3a3.4 3.4 0 0 1 6.5-1.4 3.4 3.4 0 0 1 6.5 1.4c0 4.5-6.5 8.3-6.5 8.3z" />
    </GlyphBase>
  );
}

function PropertyGlyph(props: GlyphProps): React.JSX.Element {
  return (
    <GlyphBase {...props}>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a2 2 0 0 1 2 2v10M2 21h20" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </GlyphBase>
  );
}

function FamilyGlyph(props: GlyphProps): React.JSX.Element {
  return (
    <GlyphBase {...props}>
      <path d="M14 9a5 5 0 1 0-9.4 2.4L3.5 15l3.6-1.1A5 5 0 0 0 14 9z" />
      <path d="M15.8 12.6a5 5 0 1 1 4.6 7.5L16.8 21l.9-3.2" />
    </GlyphBase>
  );
}

const DEMAND_GLYPHS: Record<DemandGlyph, (props: GlyphProps) => React.JSX.Element> = {
  beneficiary: BeneficiaryGlyph,
  trust: TrustGlyph,
  giving: GivingGlyph,
  property: PropertyGlyph,
  family: FamilyGlyph,
};

export function DemandGlyphIcon({
  glyph,
  className,
}: GlyphProps & { glyph: DemandGlyph }): React.JSX.Element {
  const Glyph = DEMAND_GLYPHS[glyph];
  return <Glyph className={className} />;
}

const BOUNDARY_GLYPHS: Record<
  BoundaryGlyph,
  (props: GlyphProps) => React.JSX.Element
> = {
  cpa: CalculatorIcon,
  attorney: ScalesIcon,
  tpa: ClipboardIcon,
};

export function BoundaryGlyphIcon({
  glyph,
  className,
}: GlyphProps & { glyph: BoundaryGlyph }): React.JSX.Element {
  const Glyph = BOUNDARY_GLYPHS[glyph];
  return <Glyph className={className} />;
}

/** Door glyph for the plan layout's boundary-map annotation card. */
export function DoorGlyph(props: GlyphProps): React.JSX.Element {
  return (
    <GlyphBase {...props}>
      <path d="M13 4h3a2 2 0 0 1 2 2v14" />
      <path d="M2 20h20" />
      <path d="M13 20V4L6 6v14" />
      <path d="M10.5 12h.01" />
    </GlyphBase>
  );
}
